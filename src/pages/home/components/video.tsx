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

  return (
    <Wrapper>
      <StyledVideo
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