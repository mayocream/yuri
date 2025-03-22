import { getPopularTvShows } from '@/lib/tmdb'
import { useEffect } from 'react'
import { View, Text } from 'tamagui'

export default function Index() {
  useEffect(() => {
    const load = async () => {
      const animes = await getPopularTvShows()
      console.log(animes)
    }
    load()
  }, [])

  return (
    <View>
      <Text>アニメ</Text>
    </View>
  )
}
