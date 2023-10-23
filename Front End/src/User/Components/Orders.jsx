
 import { useEffect } from "react"
 import axios from "../Utils/axios"
import { useState } from "react"
import { Link } from 'react-router-dom';
function Orders() {


  const [orders,setOrders] = useState([])
useEffect(()=>{
  GetOrders()
},[])

const GetOrders = () =>{
  axios.get("/orders").then((response) =>{
    console.log(response);
    setOrders(response.data.response.Orders)
  
  })
}





  return (
    <>
   
   
    <div className="p-4 sm:ml-64">
      <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
        

      <div className="mx-auto max-w-screen-lg px-4 py-8 sm:px-8">
  <div className="flex items-center justify-between pb-6">
    <div>
      <h2 className="font-semibold text-gray-700">Orders</h2>
      <span className="text-xs text-gray-500">
        View accounts of registered users
      </span>
    </div>
  
  </div>
  <div className="overflow-y-hidden rounded-lg border">
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="bg-blue-600 text-left text-xs font-semibold uppercase tracking-widest text-white">
            <th className="px-5 py-3">ID</th>
            <th className="px-5 py-3">Product Name</th>
            <th className="px-5 py-3">Date</th>
            <th className="px-5 py-3">Vender</th>
            <th className="px-5 py-3">Status</th>
            <th className="px-5 py-3">Details</th>
            <th className="px-5 py-3">Scheduled</th>
          </tr>
        </thead>

        {
          orders.map((obj,index)=>
        <tbody key={index} className="text-gray-500">
          <tr>
            <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
              <p className="whitespace-no-wrap">{index+1}</p>
            </td>
            <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
              <div className="flex items-center">
               
                <div className="ml-3">
                  <p className="whitespace-no-wrap">{obj.product_name}</p>
                </div>
              </div>
            </td>
            <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
              <p className="whitespace-no-wrap">{obj.date_of_shipping.toString()}</p>
            </td>
            <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
              <p className="whitespace-no-wrap">{obj.vender}</p>
            </td>
            <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
              <span className="rounded-full bg-green-200 px-3 py-1 text-xs font-semibold text-green-900">
              {obj.viewed}
              </span>
            </td>
            <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
            <Link to={`/user/home/details/${obj._id}`}>  View
          </Link>
            </td>
            <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
            <span className="rounded-full bg-green-200 px-3 py-1 text-xs font-semibold text-green-900">
              {obj.scheduled}
              </span>
            </td>
          </tr>
          
          
          
          
        </tbody>
       ) }
      </table>
    </div>
    <div className="flex flex-col items-center border-t bg-white px-5 py-5 sm:flex-row sm:justify-between">
      <span className="text-xs text-gray-600 sm:text-sm">
        {" "}
        Showing 1 to 5 of 12 Entries{" "}
      </span>
      <div className="mt-2 inline-flex sm:mt-0">
        <button className="mr-2 h-12 w-12 rounded-full border text-sm font-semibold text-gray-600 transition duration-150 hover:bg-gray-100">
          Prev
        </button>
        <button className="h-12 w-12 rounded-full border text-sm font-semibold text-gray-600 transition duration-150 hover:bg-gray-100">
          Next
        </button>
      </div>
    </div>
  </div>
</div>



        
        
       
      </div>
    </div>
  </>
  )
}

export default Orders