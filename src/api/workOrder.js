import request from '@/utils/request'

export function getWorkOrderSearch() {
  return request({
    url: '/api/task-service/task/search',
  })
}
