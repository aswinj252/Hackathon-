import { Link } from "react-router-dom"

function Sidebar() {
  return (
    <aside
    id="logo-sidebar"
    className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
    aria-label="Sidebar"
  >
    <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
      <ul className="space-y-2 font-medium">
        <li>
          <Link to={"/vender/home"}  className="ml-3 flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group" >Dashboard</Link>
         
        </li>
        <li>
        <Link to={"/vender/home/orders"}  className="ml-3 flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group" >Orders</Link>

      
        </li>
        <li>
        <Link to={"/vender/home/addVenders"}  className="ml-3 flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group" >Add Venders</Link>

        </li>
        <li>
        <Link to={"/vender/home/addVenders"}  className="ml-3 flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group" >Log Out</Link>

        </li>
       
      </ul>
    </div>
  </aside>
  )
}

export default Sidebar