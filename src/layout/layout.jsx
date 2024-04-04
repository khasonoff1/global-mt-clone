import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Menu from "../components/Heder"
import Footer from "../components/Footer"

const layout = () => {
  return (
    <>
            <Menu/>
            <Navbar/>
            <Outlet/>
            <Footer />
            

    </>
  )
}

export default layout