import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCog,faChartPie,faTableColumns,faBorderAll,faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

 const Sidebar = ({ isOpen, toggleSidebar }) => {

  return (
    <>
 
 <div className={`bg-purple-800 text-white p-4 fixed h-full transition-all duration-300 ${isOpen ? 'w-64' : 'w-20'}`}>
  <ul className ='p-4'>
          <li className={`mb-4 cursor-pointer flex items-center ${isOpen ? 'p-2' : 'p-2 justify-center'} rounded-md ${isOpen ? 'hover:bg-purple-700' : 'hover:bg-purple-700 hover:w-12'}`}
          onClick={toggleSidebar}>
            <FontAwesomeIcon icon={faTableColumns} className={`mr-2 ${isOpen ? 'text-xl' : 'text-lg'}`}  />
            {isOpen && <span>Dashboard</span>}
          </li>

          <li className={`mb-4 cursor-pointer flex items-center ${isOpen ? 'p-2' : 'p-2 justify-center'} rounded-md ${isOpen ? 'hover:bg-purple-700' : 'hover:bg-purple-700 hover:w-12'}`}
          onClick={toggleSidebar}>
          <FontAwesomeIcon icon={faBorderAll} className={`mr-2 ${isOpen ? 'text-xl' : 'text-lg'}`} />
          {isOpen && <span>Board</span>}
          </li>

          <li className={`mb-4 cursor-pointer flex items-center ${isOpen ? 'p-2' : 'p-2 justify-center'} rounded-md ${isOpen ? 'hover:bg-purple-700' : 'hover:bg-purple-700 hover:w-12'}`}
          onClick={toggleSidebar}>
          <FontAwesomeIcon icon={faChartPie} className={`mr-2 ${isOpen ? 'text-xl' : 'text-lg'}`} />
          {isOpen && <span>Analytics</span>}
          </li>

          <li className={`mb-4 cursor-pointer flex items-center ${isOpen ? 'p-2' : 'p-2 justify-center'} rounded-md ${isOpen ? 'hover:bg-purple-700' : 'hover:bg-purple-700 hover:w-12'}`}
          onClick={toggleSidebar}>
          <FontAwesomeIcon icon={faCog} className={`mr-2 ${isOpen ? 'text-xl' : 'text-lg'}`} />
          {isOpen && <span>Settings</span>} 
          </li>

          <li className="my-80"> </li>

          <li className={`mb-4 cursor-pointer flex items-center ${isOpen ? 'p-2' : 'p-2 justify-center'} rounded-md ${isOpen ? 'hover:bg-purple-700' : 'hover:bg-purple-700 hover:w-12'}`}
          onClick={toggleSidebar}>
          <FontAwesomeIcon icon={faArrowRightFromBracket} className={`mr-2 ${isOpen ? 'text-xl' : 'text-lg'}`} />
          {isOpen && <span>Logout</span>} 
          </li>


        </ul>
  </div>
  


    </>
  )
}

export default Sidebar