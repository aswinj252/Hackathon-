
import { useFormik } from "formik"
import { loginSchema } from "../Schemas/index,";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import axios from "../Utils/axios";
function Login() {
const navigate = useNavigate()

  const initialValues ={
    email:"",
    password:""
  }
  const {values,errors,handleBlur,handleChange,handleSubmit,touched} = 
useFormik({
  initialValues:initialValues,
  validationSchema:loginSchema,
  onSubmit:(values) =>{
    console.log(values,"values");
    axios.post('/login',values,{ headers: { "Content-Type": "application/json" },withCredentials: true }).then((response) =>{
      console.log(response);
      if(response.data.response.Login &&response.data.response.status  === true)
      {
        console.log("Login success");

        toast.success(response.data.response.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
        
          navigate("/vender/home")
      }
      else if( response.data.response.Login === false && response.data.response.status ===true)
{
  console.log("incorrect password");
  toast.warn(response.data.response.message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    })
}
else{
  console.log("email not registeres");
  toast.error(response.data.response.message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });
}

    })

  }
})
  return (
<>
<div className="flex h-screen w-full items-center justify-center bg-gray-100">
  <div className="w-full max-w-3xl overflow-hidden rounded-lg bg-white shadow-lg sm:flex">
    <div
      className="m-2 w-full rounded-2xl bg-gray-400 bg-cover bg-center text-white sm:w-2/5"
      style={{ backgroundImage: "url(https://old.geodis.com/sites/default/files/2023-07/PHOTO%20-%20Geodis%20named%20vendor%20of%20the%20year%20Mitsubishi%20Logisnext%20America%20%281%29.jpg)" }}
    />
    <div className="w-full sm:w-3/5">
      <div className="p-8">
        <h1 className="text-3xl font-black text-slate-700">Login</h1>
        <p className="mt-2 mb-5 text-base leading-tight text-gray-600">
          Create an account to get access to 1000+ Freebies
        </p>
        <form className="mt-8" onSubmit={handleSubmit}>
          <div className="relative mt-2 w-full">
            <input
              type="Email"
              id="email"
              defaultValue="email@gmail.com"
              className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
              placeholder=" Enter Your  Email "
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              name="email"
            />
            <label
              htmlFor="email"
              className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"
            >
              {" "}
              {" "}

              { errors.email && touched.email?  <p className="form-errors text-red-800 font-bold	 "> {errors.email}</p> :null}
            </label>
          </div>
          <div className="relative mt-2 w-full">
            <input
              type=""
              id="password"
              className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
              placeholder="Enter Your Password "
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              name="password"
            />
            <label
              htmlFor="password"
              className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"
            >
              {" "}
              
            </label>
            { errors.password && touched.password?  <p className="form-errors text-red-800 font-bold	 "> {errors.password}</p> :null}
          </div>
          <input
            className="mt-4 w-full cursor-pointer rounded-lg bg-blue-600 pt-3 pb-3 text-white shadow-lg hover:bg-blue-400"
            type="submit"
            defaultValue="Create account"
          />
        </form>
       
      </div>
    </div>
  </div>
</div>


</>



  
  
  
  )
}

export default Login