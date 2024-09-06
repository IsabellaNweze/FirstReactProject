import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEllipsisV, faCircle } from '@fortawesome/free-solid-svg-icons';



const MiniCard = ({ miniHeader, miniSubtitle, miniText }) => (
    <div className="bg-white p-4 mb-2 rounded-md shadow-sm">
      
      <div className="flex justify-between items-center mb-2">
      <span className="flex items-center space-x-2">
    <FontAwesomeIcon icon={faCircle} className="text-green-500 cursor-pointer sm"  />
    <h6 className="font-small text-sm text-gray-400">{miniHeader}</h6>
  </span>
  <FontAwesomeIcon icon={faEllipsisV} className="text-gray-500 cursor-pointer" />
      </div>
  
      {/* Subtitle */}
      <div>
      <h3 className="text-md font-bold mb-1">{miniSubtitle}</h3>
      <p className="text-gray-600">{miniText}</p>
      </div>
  
  
      {/* Icons Below Text */}
      <div className="flex justify-between items-center mt-3">
       <div >
        {/* overlapping icons */}
       </div>
      </div>
    </div>
  );
  
  

const Card = ({ headerText, sections }) => {
  return (
    <div className="bg-gray-100 shadow-md rounded-md p-4 mb-4 w-80">
      {/* Card Header */}
      <div className="flex justify-between items-center mb-4">
        <h5 className="font-bold text-sm">{headerText}</h5>
        <div className="flex items-center space-x-2">
          <FontAwesomeIcon icon={faPlus} className="text-gray-500 cursor-pointer" />
          <FontAwesomeIcon icon={faEllipsisV} className="text-gray-500 cursor-pointer" />
        </div>
      </div>

      <div className="space-y-4">
        {sections.map((section, index) => (
          <MiniCard 
            key={index} 
            miniHeader={section.header} 
            miniSubtitle={section.subtitle}
            miniText={section.text} 
          />
        ))}
      </div>
    </div>
  );
};

export default Card;
