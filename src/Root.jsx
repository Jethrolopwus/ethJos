import { Outlet } from "react-router-dom"
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar"



const Root = () => {
  return (
    <div className='w-full  min-h-screen overflow-hidden bg-white bg-cover bg-center'>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Root