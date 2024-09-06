// Navbar.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBell, faCircleQuestion, faUser } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <div className="flex items-center p-4 bg-white-400 text-black">
      <span className="mr-4">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </span>

      <span className="flex-grow text-center"> {/* Center content */}
        <span></span>
      </span>

      <div className="flex space-x-4">
        <span>
          <FontAwesomeIcon icon={faBell} />
        </span>
        <span>
          <FontAwesomeIcon icon={faCircleQuestion} />
        </span>
        <span>
          <FontAwesomeIcon icon={faUser} />
        </span>
      </div>
    </div>
  );
}

export default Navbar;
