
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";
import UserRoutes from "./Routes/UserRoutes";
import VenderRoute from "./Routes/VenderRoute";



function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/*" element={<LandingPage/>}/>
      <Route path = "/user/*" element = {<UserRoutes/>}/>
      <Route path = "/vender/*" element = {<VenderRoute/>}/>

      
      </Routes>
      </BrowserRouter>
</>

  )
}

export default App
