import { ReactNode } from 'react'
import { Wrapper } from './style'

interface DefautLayoutProps {
  children: ReactNode
}

const DefaultLayout = ( { children }: DefautLayoutProps ) => {
  return (
    <Wrapper>
      { children }
    </Wrapper>
  )
}

export default DefaultLayout