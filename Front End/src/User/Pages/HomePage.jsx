import { Outlet } from "react-router-dom"
import Navbar from "../Components/Navbar"
import Sidebar from "../Components/Sidebar"


function HomePage() {
  return (
<>

 <Navbar/>
  <Sidebar/>
  <Outlet/>
  
  </> 
  )
}

export default HomePage