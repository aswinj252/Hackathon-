import {Routes,Route} from "react-router-dom"
import Login from "../Vender/Components/Login"
import Sighup from "../Vender/Components/Signup"
import Home from "../Vender/Components/Home"
import HomePage from "../Vender/Pages/HomePage"
import View from "../Vender/Components/View"

function VenderRoute() {
  return (
  <>
  <Routes>
  <Route path="login" element={<Login/>}/>
  <Route path="signup/:id" element={<Sighup/>}/>
  <Route path="home" element ={<HomePage/>}>

    <Route index element ={<Home/>}/>
    <Route path="view" element ={<View/>} />
      </Route>
 
  </Routes>
  </>
  )
}

export default VenderRoute