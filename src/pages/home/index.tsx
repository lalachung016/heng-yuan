import DefaultLayout from '@/layouts/default'
import { GetFollowingListService } from '@/network/api'
import { useEffect } from 'react'

const Home = () => {


  const UpdateFollowingList = async () => {
    const result = await GetFollowingListService()
    if(!result.isError) console.log(result.value.items)
  }

  useEffect(() => {
    UpdateFollowingList()
  }, [])

  return (
    <DefaultLayout>
      home
    </DefaultLayout>
  )
}

export default Home