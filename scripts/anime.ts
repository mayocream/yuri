import 'dotenv/config'
import { BGM_ACCESS_TOKEN, BGM_API_URL, USER_AGENT } from '@/lib/bangumi'
import fs from 'node:fs/promises'
import puppeteer from 'puppeteer'

const getBangumiSubject = async (id: string) => {
  return fetch(`${BGM_API_URL}/v0/subjects/${id}`, {
    headers: {
      Authorization: `Bearer ${BGM_ACCESS_TOKEN}`,
      accept: 'application/json',
      userAgent: USER_AGENT,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      fs.writeFile(`data/bangumi/${id}.json`, JSON.stringify(data, null, 2))
    })
}

const getBangumiAnimeList = async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  const items = []
  const fetchPage = async (number: number) => {
    console.log(`Fetching page ${number}`)
    await page.goto(
      `https://bangumi.tv/anime/tag/%E7%99%BE%E5%90%88?sort=collects&page=${number}`,
      {
        waitUntil: 'domcontentloaded',
      }
    )
    const subjectIds = await page.evaluate(() => {
      const links = Array.from(document.querySelectorAll('[id^=item_] a'))
      return links.map((link) =>
        link.getAttribute('href')?.replace('/subject/', '')
      )
    })

    return subjectIds
  }

  for (let i = 1; i <= 100; i++) {
    const subjectIds = await fetchPage(i)
    items.push(...subjectIds)
  }

  await browser.close()
  await fs.writeFile('anime-list.json', JSON.stringify(items, null, 2))
}

// getBangumiAnimeList()

fs.readFile('anime-list.json', 'utf-8').then(async (data) => {
  const items = JSON.parse(data)
  const filteredItems: any[] = [...new Set(items)]

  const existingItems = await fs.readdir('data/bangumi')
  const existingIds = existingItems.map((item) => item.replace('.json', ''))
  const newItems = filteredItems.filter((item) => !existingIds.includes(item))

  for (const item of newItems) {
    console.log(`Fetching ${item}`)
    getBangumiSubject(item)
  }
})
