import React, { useMemo, useState } from 'react';
import Footer from '../Components/Footer';
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { useLocation } from 'react-router-dom';
import Navbar2 from '../Components/Navbar2';
import Addon from '../Components/Addon';

const DetailPage = () => {
  const location = useLocation();

  const memoObj = useMemo(() => {
    const { item } = location.state || {};
    return item;
  }, [location.state]);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [openBottom, setOpenBottom] = useState(false);

  const openDrawerBottom = () => setOpenBottom(true);
  const closeDrawerBottom = () => setOpenBottom(false);

  return (
    <>
      <Navbar2 />
      <div className=' mx-auto p-4'>
        {/* Carousel */}
        <div className='border border-gray-600 p-2 rounded-lg '>

        <div className="carousel w-full h-80 rounded-lg overflow-hidden  shadow-lg  ">
          {memoObj?.image.map((imgSrc, index) => (
            <div key={index} className={`carousel-item w-full ${index === currentImageIndex ? 'block' : 'hidden'}`}>
              <img src={imgSrc} className="w-full h-full object-cover shadow " alt={`Carousel ${index}`} />
            </div>
          ))}
        </div>
          </div>
        <div className='flex gap-2 justify-center py-2'>
          {memoObj?.image.map((imgSrc, index) => (
            <img
              key={index}
              className={`w-20 h-20 object-cover rounded-md cursor-pointer shadow-md ${index === currentImageIndex ? 'border-2 border-blue-500' : ''}`}
              src={imgSrc}
              alt={`Thumbnail ${index}`}
              onClick={() => {
               
                setCurrentImageIndex(index);
              }}
            />
          ))}
        </div>
        {/* Item Details */}
        <div className='text-center'>
          <h1 className='text-gray-600 text-2xl font-bold py-2'>
            {memoObj?.name}
          </h1>
          <h2 className='text-gray-600 text-xl font-semibold'>
            ₹{memoObj?.price}
          </h2>
          <h1 className='text-black text-lg  py-2'>
            {memoObj?.description}
          </h1>
        </div>
       
        {/* Ingredients Button */}
      <Addon/>
      </div>
      <Footer />
    </>
  );
};

export default DetailPage;
