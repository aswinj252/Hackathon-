import axios from '../Utils/axios';
import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from 'react-router-dom';
import { Document, Page } from 'react-pdf';


function SingleOrder() {
    
  const naviagte = useNavigate()
   
    const { id } = useParams();
    const [data,setdate] =useState ({})
   const [date, setdatee] = useState(null);
   const [date1, setdatee1] = useState(null);
   const [date2, setdatee2] = useState(null);
   const [shipping,setShipping] = useState([])
   const [numPages, setNumPages] = useState(null);
   const [pageNumber, setPageNumber] = useState(1);
   const url = data.url

   function onDocumentLoadSuccess({ numPages }) {
     setNumPages(numPages);
   }

    console.log(data,"gsss");

    const minSelectableDate = new Date();

    const handleDateChange = (date) => {
      console.log(date);
      setdatee(date)
     
    }
const docs = [
        { uri: data.url }, // Remote file
       
      ];
    const handleDateChange1 = (date) => {
      console.log(date);
      setdatee1(date)
     
    }
    const handleDateChange2 = (date) => {
      console.log(date);
      setdatee2(date)
     
    }

    useEffect(() =>{
        axios.get(`/dates/${id}`) .then((response) =>{
            console.log(response,"dates");
            setShipping(response.data.response.dates)
        })
    },[])

    useEffect(()=>{
      axios.get(`/order_id/${id}`).then((response) =>{
        console.log(response);
setdate(response.data.response.data)
      })
    },[])

    const handleSubmit =() =>{

  const body = JSON.stringify({date,date1,date2,id})
  console.log(body);
    console.log(body,body);
        axios.post('/schedule',body, { headers: { "Content-Type": "application/json" }}).then((response)=>{
        console.log(response,"res");
        console.log("hai");
        naviagte(`/vender/home/order_id/${id}`)
      
      })
  

   
      // console.log(date,date1,date2,id,"details");


    }
   return (
    <>
   
   
    <div className="p-4 sm:ml-64">
      <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
        


      <div className="m-5">
  <div className="group mx-2 mt-10 grid max-w-screen-md grid-cols-12 space-x-8 overflow-hidden rounded-lg border py-8 text-gray-700 shadow transition hover:shadow-lg sm:mx-auto">
    <a
      href="#"
      className="order-2 col-span-1 mt-4 -ml-14 text-left text-gray-600 hover:text-gray-700 sm:-order-1 sm:ml-4"
    >
      <div className="group relative h-16 w-16 overflow-hidden rounded-lg">
       
      </div>
    </a>
    <div className="col-span-11 flex flex-col pr-8 text-left sm:pl-4">
      <h3 className="text-sm text-gray-600"></h3>
      <a
        href="#"
        className="mb-3 overflow-hidden pr-7 text-lg font-semibold sm:text-xl"
      >
        {" "}
       name:{data.product_name}{" "}
      </a>
      <p className="overflow-hidden pr-7 text-sm">
     Vender: {data.vender}.
      </p>
      <div className="mt-5 flex flex-col space-y-3 text-sm font-medium text-gray-500 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-2">
        <div className="">
       Quantity {data.quantity}
          <span className="ml-2 mr-3 rounded-full bg-green-100 px-2 py-0.5 text-green-900">
            {" "}
            Viewed {data.viewed}         </span>
        </div>
        <div className="">
        
        <div>
      <button onClick={() => window.open(url, '_blank')}>View Pdf </button>
      <div>
        <Document file={url} onLoadSuccess={onDocumentLoadSuccess}>
         
        </Document>
      </div>
    </div>


          
     
        
        </div>
      </div>
    </div>
  </div>
  <div className="max-w-screen-md mx-auto">
  <div className="rounded-lg border border-gray-300 bg-white py-2 px-3">

  { data.scheduled === "false"  ?
       <nav className="flex flex-wrap gap-4">


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
    <div className="w-full px-3">
      <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor="grid-password"
      >
        Date Of Shippining
      </label>
     <DatePicker
       
        onChange={ handleDateChange1}
        dateFormat="MM/dd/yyyy"
        minDate={minSelectableDate} 
         selected={date1}// Set the minimum selectable date
         name="date"
      />
      {date1 && (
        <p className='font-semibold	'>You selected: {date1.toDateString()}</p>
      )}
  
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
       
        onChange={ handleDateChange2}
        dateFormat="MM/dd/yyyy"
        minDate={minSelectableDate} 
         selected={date2}// Set the minimum selectable date
         name="date"
      />
      {date2 && (
        <p className='font-semibold	'>You selected: {date2.toDateString()}</p>
      )}
  
    </div>
  </div>
{data.scheduled === "false"  ? <button onClick={handleSubmit}>submit</button> :null}
     
    
    </nav> : 


    <div className="max-w-screen-md mx-auto">
    <div className="rounded-lg border border-gray-300 bg-white py-2 px-3">

      
    {shipping.map((obj, index) => (
  <nav key={index} className="flex flex-wrap gap-4">
    <button
      className={`whitespace-nowrap inline-flex rounded-lg py-2 px-3 text-sm font-medium transition-all duration-200 ease-in-out hover:bg-gray-200 hover:text-gray-900 ${
        obj.clicked === "true" ? 'bg-yellow-400 text-white' : 'bg-gray-200 text-gray-600'
      }`}
    >
      {obj.date}
    </button>
  </nav>
))}

    </div>
  </div>
  
     }

   
  </div>
</div>

</div>

    </div>
    </div>
  </>
  )
}

export default SingleOrder