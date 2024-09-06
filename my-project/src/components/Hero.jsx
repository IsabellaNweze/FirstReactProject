import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
  return (
    <div className="flex items-center justify-between p-4">
      {/* "Board" heading */}
      <h1 className="font-bold text-xl">Board</h1>

      {/* "This week" with dropdown */}
      <div className="flex items-center">
        <span>This week</span>
        <FontAwesomeIcon icon={faCaretDown} className="ml-2" />
      </div>
    </div>
  );
};

export default Hero;
