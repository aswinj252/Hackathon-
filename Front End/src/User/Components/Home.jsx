import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
function Home() {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    console.log(date);
    setSelectedDate(date)
   
  }

  const minSelectableDate = new Date();
  return (
    <>
   
   
    <div className="p-4 sm:ml-64">
      <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
        

<div   className="block content-center max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
>
<form className="w-full max-w-lg">
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
        placeholder="Jane"
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
        placeholder="Doe"
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
         selected={selectedDate}// Set the minimum selectable date
      />
      {selectedDate && (
        <p className='font-semibold	'>You selected: {selectedDate.toDateString()}</p>
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
  />
  <p
    className="mt-1 text-sm text-gray-500 dark:text-gray-300"
    id="file_input_help"
  >
    SVG, PNG, JPG or GIF (MAX. 800x400px).
  </p>


  </div>
  

  <div className="flex flex-wrap -mx-3 mb-6">
  
  <>
  <button
    id="dropdownHoverButton"
    data-dropdown-toggle="dropdownHover"
    data-dropdown-trigger="hover"
    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    type="button"
  >
    Dropdown hover{" "}
    <svg
      className="w-2.5 h-2.5 ml-2.5"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 10 6"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m1 1 4 4 4-4"
      />
    </svg>
  </button>
  {/* Dropdown menu */}
  <div
    id="dropdownHover"
    className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
  >
    <ul
      className="py-2 text-sm text-gray-700 dark:text-gray-200"
      aria-labelledby="dropdownHoverButton"
    >
      <li>
        <a
          href="#"
          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          Dashboard
        </a>
      </li>
      <li>
        <a
          href="#"
          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          Settings
        </a>
      </li>
      <li>
        <a
          href="#"
          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          Earnings
        </a>
      </li>
      <li>
        <a
          href="#"
          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          Sign out
        </a>
      </li>
    </ul>
  </div>
</>



  </div>

  
  <div className="flex flex-wrap -mx-3 mb-2">
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor="grid-city"
      >
        City
      </label>
      <input
        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        id="grid-city"
        type="text"
        placeholder="Albuquerque"
      />
    </div>
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor="grid-state"
      >
        State
      </label>
      <div className="relative">
        <select
          className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-state"
        >
          <option>New Mexico</option>
          <option>Missouri</option>
          <option>Texas</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
    </div>
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor="grid-zip"
      >
        Zip
      </label>
      <input
        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        id="grid-zip"
        type="text"
        placeholder={90210}
      />
    </div>
  </div>
</form>
</div>



        
        
       
      </div>
    </div>
  </>
  )
}

export default Home