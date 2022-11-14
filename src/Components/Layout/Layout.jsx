import { Outlet } from 'react-router-dom'
import { Footer } from './Footer/Footer'
import { Header } from './Header/Header'
import { MainContainer } from './MainContainer/MainContainer'
import { Navbar } from './Navbar/Navbar'
import {DarkmodeWrapper} from "./DarkModeWrapper/DarkModeWrapper";

export const Layout = () => (
  <DarkmodeWrapper>
    <Navbar />
    <MainContainer>
      <Header />
      <Outlet />
    </MainContainer>
    <Footer />
  </DarkmodeWrapper>
)
