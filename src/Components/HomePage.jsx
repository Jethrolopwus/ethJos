import hero from "../assets/hero.png"
import CallActions from "./CallActions"
import MyCarousel from "./Carousel"
import Connect from "./Connect"
import Connections from "./Connections"
import Contact from "./Contact"
import Ethjos from "./Ethjos"
const HomePage = () => {
  return (
    <>
    <div className="relative flex justify-center mt-10 items-center">
  
  <div className="absolute left-0 w-40 h-full bg-[#8282FF] opacity-30 blur-2xl"></div>
  
  
  <div className="absolute right-0 w-40 h-full bg-[#8282FF] opacity-30 blur-2xl"></div>

 
  <div>
    <img src={hero} alt="Hero Image" />
  </div>
</div>
    <CallActions/>
    <Ethjos/>
    <Connections/>
    <Contact/>
    <MyCarousel/>
    <Connect/>
    </>
  )
}

export default HomePage