import { useState } from 'react'
import { PaginationState } from '@tanstack/react-table'

export function useTablePagination() {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  })

  return {
    pagination,
    setPagination,
  }
}
