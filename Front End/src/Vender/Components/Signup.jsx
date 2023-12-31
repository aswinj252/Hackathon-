

import { useFormik } from "formik"
import { signupSchema } from "../Schemas/index,";
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../Utils/axios";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";


function Signup() {
  const navigate = useNavigate()
  const [email ,setEmail] = useState("")

const {id} = useParams()
  useEffect(() =>{
axios.get(`/getData/${id}`).then((response) =>{
  
  setEmail(response.data.response)

})
  },[])


  const initialValues ={
    password:""
  }

  const {values,errors,handleBlur,handleChange,handleSubmit,touched} = 
useFormik({
  initialValues:initialValues,
  validationSchema:signupSchema,
  onSubmit:(values) =>{
    values.email = email
    console.log(values,"values");
    axios.post("/add_password",values,{ headers: { "Content-Type": "application/json" }}).then((response)=>{
      console.log(response);
      if (response.data.response.Added) {

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

            navigate("/vender/login")
      }
    })

  }
})

  return (
<div className="flex min-h-screen w-screen w-full items-center justify-center text-gray-600 bg-gray-50">
  <div className="relative">
    <div className="hidden sm:block h-56 w-56 text-indigo-300 absolute a-z-10 -left-20 -top-20">
      <svg
        id="patternId"
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="a"
            patternUnits="userSpaceOnUse"
            width={40}
            height={40}
            patternTransform="scale(0.6) rotate(0)"
          >
            <rect x={0} y={0} width="100%" height="100%" fill="none" />
            <path
              d="M11 6a5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5 5 5 0 015 5"
              strokeWidth={1}
              stroke="none"
              fill="currentColor"
            />
          </pattern>
        </defs>
        <rect
          width="800%"
          height="800%"
          transform="translate(0,0)"
          fill="url(#a)"
        />
      </svg>
    </div>
    <div className="hidden sm:block h-28 w-28 text-indigo-300 absolute a-z-10 -right-20 -bottom-20">
      <svg
        id="patternId"
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="b"
            patternUnits="userSpaceOnUse"
            width={40}
            height={40}
            patternTransform="scale(0.5) rotate(0)"
          >
            <rect x={0} y={0} width="100%" height="100%" fill="none" />
            <path
              d="M11 6a5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5 5 5 0 015 5"
              strokeWidth={1}
              stroke="none"
              fill="currentColor"
            />
          </pattern>
        </defs>
        <rect
          width="800%"
          height="800%"
          transform="translate(0,0)"
          fill="url(#b)"
        />
      </svg>
    </div>
    {/* Register */}
    <div className="relative flex flex-col sm:w-[30rem] rounded-lg border-gray-400 bg-white shadow-lg px-4">
      <div className="flex-auto p-6">
        {/* Logo */}
        <div className="mb-10 flex flex-shrink-0 flex-grow-0 items-center justify-center overflow-hidden">
          <a
            href="#"
            className="flex cursor-pointer items-center gap-2 text-indigo-500 no-underline hover:text-indigo-500"
          >
            <span className="flex-shrink-0 text-3xl font-black lowercase tracking-tight opacity-100">
             Signup
            </span>
          </a>
        </div>
        {/* /Logo */}
        <h4 className="mb-2 font-medium text-gray-700 xl:text-xl">
          Welcome {email}
        </h4>
        <p className="mb-6 text-gray-500">
          Please Enter your password
        </p>
        <form className="mb-4" onSubmit={handleSubmit}>
          
          <div className="mb-4">
            <div className="flex justify-between">
              <label
                className="mb-2 inline-block text-xs font-medium uppercase text-gray-700"
                htmlFor="password"
              >
                Password
              </label>
              <a
                href="auth-forgot-password-basic.html"
                className="cursor-pointer text-indigo-500 no-underline hover:text-indigo-500"
              >
                {/* <small className=" ">Forgot Password?</small> */}
              </a>
            </div>
            <div className="relative flex w-full flex-wrap items-stretch">
              <input
                type="password"
                id="password"
                className="relative block flex-auto cursor-text appearance-none rounded-md border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-indigo-500 focus:bg-white focus:text-gray-600 focus:shadow"
                name="password"
                placeholder="············"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            { errors.password && touched.password?  <p className="form-errors text-red-800 font-bold	 "> {errors.password}</p> :null}
          </div>
          <div className="mb-4">
            <div className="block">
              {/* <input
                className="mt-1 mr-2 h-5 w-5 appearance-none rounded border border-gray-300 bg-contain bg-no-repeat align-top text-black shadow checked:bg-indigo-500 focus:border-indigo-500 focus:shadow"
                type="checkbox"
                id="remember-me"
                style={{
                  backgroundImage:
                    'url("data:image/svg+xml,%3csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"%3e%3cpath fill="none" stroke="%23fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 10l3 3l6-6"/%3e%3c/svg%3e")'
                }}
                defaultChecked=""
              /> */}
              <label className="inline-block" htmlFor="remember-me">
                {" "}
                {/* Remember Me{" "} */}
              </label>
            </div>
          </div>
          <div className="mb-4">
            <button
              className="grid w-full cursor-pointer select-none rounded-md border border-indigo-500 bg-indigo-500 py-2 px-5 text-center align-middle text-sm text-white shadow hover:border-indigo-600 hover:bg-indigo-600 hover:text-white focus:border-indigo-600 focus:bg-indigo-600 focus:text-white focus:shadow-none"
              type="submit"
            >
              Sign in
            </button>
          </div>
        </form>
        <p className="mb-4 text-center">
          {/* New on futurism? */}
          <a
            href="#"
            className="cursor-pointer text-indigo-500 no-underline hover:text-indigo-500"
          >
            {" "}
            {/* Create an account{" "} */}
          </a>
        </p>
      </div>
    </div>
    {/* /Register */}
  </div>
</div>






  )
}

export default Signup