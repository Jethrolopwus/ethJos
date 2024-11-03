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
    <div className="flex justify-center mt-10  items-center ">
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