import axios from "../Utils/axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function SingleOrder() {
  const { id } = useParams();
  const [data, setdate] = useState({});
  const [dates, setDates] = useState([]);
  const [buttonColors, setButtonColors] = useState({});
  const [updateKey, setUpdateKey] = useState(0);
  const navigate = useNavigate()

  console.log(id);
  useEffect(() => {
    axios.get(`/order_id/${id}`).then((response) => {
      console.log("regreshed");
      setdate(response.data.response.data);
    });
  }, []);

  // useEffect(() => {
  //   navigate(`/user/home/details/${id}`)
  // }, [updateKey]);
  
  useEffect(() => {
    axios.get(`/scheduled_date/${id}`).then((response) => {
      // console.log(response);
      if (response.data.response.dates.length === 0) {
        toast.warn("dates not Scheduled,please wait ", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        setDates(response.data.response.dates);
      }
    });
  }, []);

  const handleButtonClick = (index,selectedid) => {
    setButtonColors((prevColors) => ({
      ...prevColors,
      [index]: 'green',
    }));
    const body = JSON.stringify({ selectedid, id });

    axios
      .patch("/clicked", body, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.data.response.clicked) {
          window.location.reload();
        }
       
      });
  };

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
                <div className="group relative h-16 w-16 overflow-hidden rounded-lg"></div>
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
                      Viewed {data.viewed}{" "}
                    </span>
                  </div>
                  <div className="">
                    <button>View Pdf</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="max-w-screen-md mx-auto">
              <div className="rounded-lg border border-gray-300 bg-white py-2 px-3">
                {data.scheduled === "true" ? (
                  <nav className="flex flex-wrap gap-4">
                    <label
                      htmlFor="countries"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Select an option
                    </label>

                    {/*  
  <select 
   id="countries"
   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
   onChange={handleChange}
   value={selectedOption.id}
  > */}
  
  {dates.map((obj, index) => (
        <button
          key={index}
          onClick={() => {
            handleButtonClick(index,obj._id);
          }}
          style={{ backgroundColor: obj.clicked === "true" ? 'green' : null }}
        >
          {obj.date}
        </button>
      ))}


                    {/* </select>  */}
                  </nav>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleOrder;
