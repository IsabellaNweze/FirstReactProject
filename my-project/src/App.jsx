// App.js
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Mainbar from './components/Mainbar';


const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className={`flex-grow transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-16'}`}>
      <Mainbar isSidebarOpen={isSidebarOpen} />
      </div>
    </div>
  );
};

export default App;
