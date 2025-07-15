import { MainWrapper, TopContentWrapper } from './styled'
import Footer from '../Footer'
import Navbar from '../Navbar'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <MainWrapper>
      <TopContentWrapper>
        <Navbar />
        <Outlet />
      </TopContentWrapper>
    </MainWrapper>
  )
}

export default MainLayout;