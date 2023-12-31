import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState,useEffect } from "react";
import axios from "../Utils/axios";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

function Home() {

  const [productName, setproductName] = useState("");
  const [quantity, setquantity] = useState("");
  const [date, setdate] = useState(null);
  const [file,setfile ] = useState(null) 
  const [venders,setVenders] = useState([])
  const [vender,setVender] = useState("")
  console.log(venders);
  const navigate = useNavigate()


  useEffect(() => {
    getVenders();
  }, []);
  
  const getVenders = () => {
    axios.get("/getVenders")
      .then((response) => {
        console.log(response);
        setVenders(response.data.response.venderes);
      })
      .catch((error) => {
        console.error("Error fetching venders:", error);
        // Handle the error appropriately, e.g., show an error message.
      });
  };
  
  const handleSubmit = async (e) =>{
    e.preventDefault()
    console.log(file,date,quantity,productName);
    const formData = new FormData();

    formData.append("productName", productName);
    formData.append("quantity", quantity);
    formData.append("date", date.toISOString()); // Convert date to string
    formData.append("file", file);
    formData.append("vender",vender );

    // Now you can send formData to your server or perform other actions.
    console.log(formData);

    await  axios.post('/addOrder',formData, { headers: {'Content-Type': 'multipart/form-data'}}).then((response)=>{
      console.log(response);
      if (response.data.response.status === true) {

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

          navigate("/user/home/orders")
      }
    })
  }

  const handleDateChange = (date) => {
    console.log(date);
    setdate(date)
   
  }

  const minSelectableDate = new Date();
  return (
    <>
   
   
    <div className="p-4 sm:ml-64">
      <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
        

<div   className="block content-center max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
>
<form  onSubmit={handleSubmit} className="w-full max-w-lg">
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor="grid-first-name"
      >
        Product Name
      </label>
      <input
        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
        id="grid-first-name"
        type="text"
        placeholder="Product name"
        name="productName"
        onChange={(e) => setproductName(e.target.value)}
        required

      />
      <p className="text-red-500 text-xs italic">Please fill out this field.</p>
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor="grid-last-name"
      >
        Quantity
      </label>
      <input
        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        id="grid-last-name"
        type="text"
        placeholder="quantity"
        name="quantity"
        onChange={(e) => setquantity(e.target.value)}
      />
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor="grid-password"
      >
        Date Of Shippining
      </label>
     <DatePicker
       
        onChange={ handleDateChange}
        dateFormat="MM/dd/yyyy"
        minDate={minSelectableDate} 
         selected={date}// Set the minimum selectable date
         name="date"
      />
      {date && (
        <p className='font-semibold	'>You selected: {date.toDateString()}</p>
      )}
  
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
  
  <label
    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    htmlFor="file_input"
  >
    Upload file
  </label>
  <input
    className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
    aria-describedby="file_input_help"
    id="file_input"
    type="file"
    name="file"
    onChange={(e) => setfile(e.target.files[0])}
  />
  <p
    className="mt-1 text-sm text-gray-500 dark:text-gray-300"
    id="file_input_help"
  >
    SVG, PNG, JPG or GIF (MAX. 800x400px).
  </p>


  </div>
  

  <div className="flex flex-wrap -mx-3 mb-6">
  
 
  {/* Dropdown menu */}
  

  <div className="flex -mx-3">
                  <div className="w-full px-3 mb-5">
                    <label htmlFor="" className="text-xs font-semibold px-1">
                      Venders
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-email-outline text-gray-400 text-lg" />
                      </div>
                   
                     <select className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                     onChange={(e) => setVender(e.target.value)}
                     value={vender}
>
{ venders?.map((obj,index)=>
              <option key={index}>{obj.email}</option>

             
              )}
            </select> 
        
                    </div>
                  </div>
                </div>




  </div>

 
  <button type="submit">Submit</button>
</form>
</div>



        
        
       
      </div>
    </div>
  </>
  )
}

export default Home