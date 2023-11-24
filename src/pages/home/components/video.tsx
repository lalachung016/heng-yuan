import { useEffect, useRef } from 'react'
import ReactPlayer from 'react-player'
import styled from 'styled-components'

type VideoProps = Common.Video & {
  isActive: boolean
}


const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  scroll-snap-align: start;
`

const StyledVideo = styled(ReactPlayer)`
  & video {
    object-fit: cover;
  }
`

// TODO: 嘗試利用透明度變化做出 cover
// const Cover = styled.div<{ isActive: boolean }>`
//   width: 100vw;
//   height: 100vh;
//   opacity: ${ props => props.isActive ? 1 : 0 };

//   & img {
//     height: 100%;
//     width: 100;
//   }
// `

const Video = ({ play_url, isActive }: VideoProps) => {

  // TODO: 嘗試做影片失焦重置，isActive邏輯待修正
  const videoRef = useRef() as any
  useEffect(() => {
    if(!isActive && videoRef) videoRef.current?.seekTo(0)
  }, [isActive, videoRef])

  return (
    <Wrapper>
      <StyledVideo
        ref={videoRef}
        controls={true}
        playing={isActive}
        width="100vw"
        height="100vh"
        url={play_url}
        loop={true}
        muted={true}
      />
    </Wrapper>
  )
}

export default Video