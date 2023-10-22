import axios from '../Utils/axios';
import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom'

function SingleOrder() {
    const { id } = useParams();
    const [data,setdate] =useState ({})
    console.log(id);
    useEffect(()=>{
      axios.get(`/order_id/${id}`).then((response) =>{
        console.log(response);
setdate(response.data.response.data)
      })
    },[])
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
            Viewed {data.viewed}          </span>
        </div>
        <div className="">
        
          <span className="ml-2 mr-3 rounded-full bg-blue-100 px-2 py-0.5 text-blue-900">
          
          </span>
        </div>
      </div>
    </div>
  </div>
  <div className="max-w-screen-md mx-auto">
  <div className="rounded-lg border border-gray-300 bg-white py-2 px-3">
    <nav className="flex flex-wrap gap-4">
      <a
        href="#"
        className="whitespace-nowrap inline-flex rounded-lg py-2 px-3 text-sm font-medium text-gray-600 transition-all duration-200 ease-in-out hover:bg-gray-200 hover:text-gray-900"
      >
        {" "}
        Account{" "}
      </a>
      <a
        href="#"
        className="whitespace-nowrap inline-flex rounded-lg py-2 px-3 text-sm font-medium text-gray-600 transition-all duration-200 ease-in-out hover:bg-gray-200 hover:text-gray-900"
      >
        {" "}
        Settings{" "}
      </a>
      <a
        href="#"
        className="whitespace-nowrap inline-flex rounded-lg bg-gray-200 py-2 px-3 text-sm font-medium text-gray-900 transition-all duration-200 ease-in-out"
      >
        {" "}
        Customs{" "}
      </a>
      <a
        href="#"
        className="whitespace-nowrap inline-flex rounded-lg py-2 px-3 text-sm font-medium text-gray-600 transition-all duration-200 ease-in-out hover:bg-gray-200 hover:text-gray-900"
      >
        {" "}
        Sales{" "}
      </a>
      <a
        href="#"
        className="whitespace-nowrap inline-flex rounded-lg py-2 px-3 text-sm font-medium text-gray-600 transition-all duration-200 ease-in-out hover:bg-gray-200 hover:text-gray-900"
      >
        {" "}
        Suppliers{" "}
      </a>
    </nav>
  </div>
</div>

</div>

    </div>
    </div>
  </>
  )
}

export default SingleOrder