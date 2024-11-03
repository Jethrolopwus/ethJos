
import './App.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomePage from './Components/HomePage';
import  Root  from "./Root"
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import CallActions from './Components/CallActions';



function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root/>} >
        <Route  index element={<HomePage/>}/>
        <Route path='/callactions'  element={<CallActions/>}/>

        <Route path='/navbar'  element={<Navbar/>}/>
        <Route path='/footer'  element={<Footer/>}/>



    
    
    
      </Route>
    )
    );

  return (
    <>
   <RouterProvider router={router}/>
      
    </>
  )
}

export default App
