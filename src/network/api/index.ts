import { request } from '@/network/service'

export const GetFollowingListService = (): Common.ApiService<Api.FollowingList.Response> => {
  return request
    .get('/following_list')
    .then((res) => ({ isError: false, value: res.data }))
    .catch((err) => {
      console.log('GetFollowingListService', err.response?.data?.error)
      return { isError: true, value: err.response?.data?.error }
    })
}

export const GetForYouListService = (): Common.ApiService<Api.ForYouList.Response> => {
  return request
    .get('/for_you_list')
    .then((res) => ({ isError: false, value: res.data }))
    .catch((err) => {
      console.log('GetFollowingListService', err.response?.data?.error)
      return { isError: true, value: err.response?.data?.error }
    })
}