import { fetcherAction } from '@/lib/fetcherAction'
import { APIQueryParams } from '@/types'
import { jikanUrl } from '@/lib/constants'

interface GetAnimeResponse {
  page: number
  per_page: number
  page_count: number
  total_count: number
  data: any[]
}

export const getAnime = async ({
  page = 1,
  limit = 10,
  search = ''
}: APIQueryParams): Promise<GetAnimeResponse> => {
  if (search) search = `q=${search}`
  
  const queryParams = new URLSearchParams({
    page: page.toString(),
    limit: limit.toString(),
    ...(search && { search })
  })

  const data = await fetcherAction({
    url: `${jikanUrl}?${queryParams.toString()}`
  })

  return data
}
