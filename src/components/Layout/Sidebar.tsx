import  { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {  FaUsers, FaLock, FaShieldAlt } from 'react-icons/fa'; // Importing icons
import { TbLogout } from "react-icons/tb";
import { MdDashboardCustomize } from "react-icons/md";
import { toast } from 'react-toastify';
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.clear();
    toast.success("Logout successfully")
    window.location.reload();
  };

  const getRole = localStorage.getItem("role")

  return (
    <aside
      className={`transition-all duration-300 ease-in-out ${
        isOpen ? 'w-64' : 'w-20'
      } bg-gradient-to-br from-blue-500 to-purple-600 text-white h-full p-4`}
    >
      <div className="flex justify-between items-center">
        <div className={`text-2xl font-bold ${isOpen ? 'block' : 'hidden'}`}>
        {getRole==="Admin" ? "Admin Panel" : "User Panel"}
        </div>
        <button
          onClick={toggleSidebar}
          className="text-white text-2xl focus:outline-none"
        >
          {isOpen ? '←' : '→'}
        </button>
      </div>

      <nav className="mt-8">
        <ul className="space-y-6">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center space-x-3 text-lg ${isActive ? 'text-yellow-300' : 'text-white'} hover:text-yellow-300`
              }
            >
              <MdDashboardCustomize size={20}/>
              <span className={`${isOpen ? 'block' : 'hidden'}`}>Dashboard</span>
            </NavLink>
          </li>
        {getRole ==="Admin" &&  <li>
            <NavLink
              to="/users"
              className={({ isActive }) =>
                `flex items-center space-x-3 text-lg ${isActive ? 'text-yellow-300' : 'text-white'} hover:text-yellow-300`
              }
            >
              <FaUsers size={20} />
              <span className={`${isOpen ? 'block' : 'hidden'}`}>Users</span>
            </NavLink>
          </li>}
        {getRole ==="Admin" &&  <li>
            <NavLink
              to="/roles"
              className={({ isActive }) =>
                `flex items-center space-x-3 text-lg ${isActive ? 'text-yellow-300' : 'text-white'} hover:text-yellow-300`
              }
            >
              <FaLock size={20} />
              <span className={`${isOpen ? 'block' : 'hidden'}`}>Roles</span>
            </NavLink>
          </li>}
          <li>
            <NavLink
              to="/permissions"
              className={({ isActive }) =>
                `flex items-center space-x-3 text-lg ${isActive ? 'text-yellow-300' : 'text-white'} hover:text-yellow-300`
              }
            >
              <FaShieldAlt size={20} />
              <span className={`${isOpen ? 'block' : 'hidden'}`}>Permissions</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/logout"
              className={({ isActive }) =>
                `flex items-center space-x-3 text-lg ${isActive ? 'text-yellow-300' : 'text-white'} hover:text-yellow-300`
              }
              onClick={handleLogout} 
            >
              <TbLogout 
              size={20} />
              <span className={`${isOpen ? 'block' : 'hidden'}`}>Logout</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
