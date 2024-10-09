export interface BaseQueryParams {
  page: number
  limit: number
  sortOrder?: 'asc' | 'desc'
}

export interface APIQueryParams extends BaseQueryParams {
  search: string
}