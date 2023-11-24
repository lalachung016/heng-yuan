import { GetFollowingListService } from '@/network/api'
import { useEffect, useRef, useState } from 'react'
import Video from './components/video'
import { Container, VideosContainer } from './style'

const Home = () => {
  const [followList, setFollowList] = useState<Common.Video[]>([])

  const [currentIndex, setCurrentIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleScroll = () => {
    const container = containerRef.current
    if (container) {
      const scrollTop = container.scrollTop
      const videoHeight = container.clientHeight

      // 計算目前應該顯示的影片索引
      const newIndex = Math.floor(scrollTop / videoHeight)
      setCurrentIndex(newIndex)
    }
  }

  useEffect(() => {
    const container = containerRef.current
    if (container) {
      container.scrollTo({ top: currentIndex * container.clientHeight, behavior: 'smooth' })
    }
  }, [currentIndex])


  const UpdateFollowingList = async () => {
    const result = await GetFollowingListService()
    if(!result.isError) setFollowList(result.value.items)
  }

  useEffect(() => {
    UpdateFollowingList()
  }, [])

  return (
    <Container ref={containerRef}>
      <VideosContainer onScroll={handleScroll}>
        {
          followList.map((item, index) => <Video key={index} {...item} />)
        }
      </VideosContainer>
    </Container>
  )
}

export default Home