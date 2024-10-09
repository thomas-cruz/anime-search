import axiosClient from '@/services/axios'

type FetcherAction = {
  url: string
  all?: boolean
  search?: string
  page?: number
  limit?: number
  sortBy?: string
  sortOrder?: 'asc' | 'desc'
}

export const fetcherAction = async ({
  url,
  all,
  search,
  page,
  limit,
  sortBy,
  sortOrder,
}: FetcherAction) => {
  try {
    const response = await axiosClient.get(url, {
      params: {
        all,
        search,
        page,
        limit,
        sortBy,
        sortOrder,
      }
    })
    return response.data
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}
