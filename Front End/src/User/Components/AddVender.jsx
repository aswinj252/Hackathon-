import { useFormik } from "formik";
import { addVenderSchema } from "../Schemas/Index";
import axios from "../Utils/axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddVender() {
  const initialValues = {
    email: "",
  };
  const { values, errors, handleBlur, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: addVenderSchema,
      onSubmit: (values) => {
        console.log(values, "values");
        axios
          .post("/add_vender", values, {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          })
          .then((response) => {
            console.log(response);
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
          });
      },
    });

  return (
    <>
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <div className="block content-center max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <form onSubmit={handleSubmit} className="w-full max-w-lg">
              <div className="flex flex-wrap -mx-3 mb-6"></div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Email
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-password"
                    type="email"
                    placeholder="Email*"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <p className="text-gray-600 text-xs italic">
                    {errors.email && touched.email ? (
                      <p className="form-errors text-red-800 font-bold	 ">
                        {" "}
                        {errors.email}
                      </p>
                    ) : null}
                  </p>
                </div>
              </div>

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddVender;
