import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../NavBar/NavBar';
import Footer from './Footer/Footer';

const MainLayouts = () => {
  return (
    <div>
      <NavBar/>
     <div className='bg-gray-200'> <Outlet /> </div>
      <Footer/>
      
    </div>
  );
};

export default MainLayouts;