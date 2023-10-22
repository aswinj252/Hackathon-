import {Routes,Route} from "react-router-dom"
import Login from "../User/Components/Login"
import Signup from "../User/Components/Signup"
import Home from "../User/Components/Home"
import HomePage from "../User/Pages/HomePage"
import Orders from "../User/Components/Orders"
import AddVender from "../User/Components/AddVender"
import SingleOrder from "../User/Components/SingleOrder"

function UserRoutes() {
  return (
    <>
    <Routes>
        <Route path="login" element={<Login/>}/>
        <Route path="signup" element={<Signup/>}/>
        <Route path="home" element={<HomePage/>}>
          <Route index element={<Home/>}/>
          <Route path="/home/orders"  element={<Orders/>} />
          <Route path = "/home/addVenders" element={<AddVender/>}/>
          <Route path = "details/:id" element={<SingleOrder/>}/>

        </Route>
       

    </Routes>
    </>

  )
}

export default UserRoutes