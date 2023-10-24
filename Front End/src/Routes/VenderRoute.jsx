import {Routes,Route} from "react-router-dom"
import Login from "../Vender/Components/Login"
import Sighup from "../Vender/Components/Signup"
import Home from "../Vender/Components/Home"
import HomePage from "../Vender/Pages/HomePage"

import SingleOrder from "../Vender/Components/SingleOrder"

function VenderRoute() {
  return (
  <>
  <Routes>
  <Route path="login" element={<Login/>}/>
  <Route path="signup/:id" element={<Sighup/>}/>
  <Route path="home" element ={<HomePage/>}>

    <Route index element ={<Home/>}/>
    <Route path="order_id/:id" element ={<SingleOrder/>} />
   
      </Route>
 
  </Routes>
  </>
  )
}

export default VenderRoute