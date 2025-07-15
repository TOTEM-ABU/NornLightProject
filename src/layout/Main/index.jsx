import { MainWrapper, TopContentWrapper } from './Main.styles'
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
      <Footer />
    </MainWrapper>
  )
}

export default MainLayout;