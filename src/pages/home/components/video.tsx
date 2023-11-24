import ReactPlayer from 'react-player'
import styled from 'styled-components'

type VideoProps = Common.Video


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

const Video = ({ play_url }: VideoProps) => {

  return (
    <Wrapper>
      <StyledVideo
        controls={true}
        playing={true}
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