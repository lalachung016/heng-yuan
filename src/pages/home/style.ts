import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  touch-action: pan-y;
  position: relative;
`

export const VideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  position: absolute;
  z-index: 1;
`

export const Mode = styled.div<{isactive: 0 | 1}>`
  color: ${ props => props.isactive ? 'white' : '#a3aca2' };
  font-weight: 600;
`

export const ModeGroup = styled.div`
  position: fixed;
  top: 48px;
  width: 100vw;
  display: flex;
  justify-content: center;
  gap: 24px;
  z-index: 2;
`