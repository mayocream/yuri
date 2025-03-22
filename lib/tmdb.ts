const ACCESS_TOKEN = process.env.EXPO_PUBLIC_TMDB_API_KEY!
const BASE_URL = 'https://api.themoviedb.org/3'

export const getPopularTvShows = async () => {
  const response = await fetch(`${BASE_URL}/search/tv?query=lesbian&include_adult=true&language=ja`, {
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`
    },
  })

  return response.json()
}
