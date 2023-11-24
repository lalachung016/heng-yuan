import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  touch-action: pan-y;
`

export const VideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
`