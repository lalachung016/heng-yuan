import { GetFollowingListService, GetForYouListService } from '@/network/api'
import { useEffect, useMemo, useRef, useState } from 'react'
import Video from './components/video'
import { Container, Mode, ModeGroup, VideosContainer } from './style'

const Home = () => {
  const [mode, setMode] = useState<'FOLLOWING' | 'FORYOU'>('FOLLOWING')

  const [followList, setFollowList] = useState<Common.Video[]>([])
  const [forYouList, setForYouList] = useState<Common.Video[]>([])

  const activeList = useMemo(() =>
    mode === 'FOLLOWING' ? followList : forYouList, [mode, followList, forYouList])

  const [currentIndex, setCurrentIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const [prevScrollTop, setPrevScrollTop] = useState(0)

  const handleScroll = () => {
    const container = containerRef.current
    if (container) {
      const scrollTop = container.scrollTop
      const videoHeight = container.clientHeight

      // 判斷滾動方向
      const isScrollingUp = scrollTop < prevScrollTop

      // 計算目前應該顯示的影片索引
      // TODO: 只判斷當下滾動方向不太準確，滑到一半往回滑的時候會有bug
      const newIndex = isScrollingUp ? Math.ceil(scrollTop / videoHeight) : Math.floor(scrollTop / videoHeight)  
      setCurrentIndex(newIndex)

      // 更新前一個滾動位置
      setPrevScrollTop(scrollTop)
    }
  }


  const updateForYouList = async () => {
    const result = await GetForYouListService()
    if(!result.isError) setForYouList(result.value.items)
  }


  const updateFollowingList = async () => {
    const result = await GetFollowingListService()
    if(!result.isError) setFollowList(result.value.items)
  }

  useEffect(() => {
    updateFollowingList()
    updateForYouList()
  }, [])

  return (
    <Container>
      <ModeGroup>
        <Mode
          isactive={mode === 'FOLLOWING' ? 1 : 0}
          onClick={() => setMode('FOLLOWING')}
        >FOLLOWING</Mode>
        <Mode isactive={mode === 'FORYOU'? 1 : 0} onClick={() => setMode('FORYOU')}>FOR YOU</Mode>
      </ModeGroup>

      <VideosContainer onScroll={handleScroll} ref={containerRef}>
        {
          activeList.map((item, index) =>
            <Video
              key={index}
              {...item}
              isActive={currentIndex === index}
            />)
        }
      </VideosContainer>
    </Container>
  )
}

export default Home