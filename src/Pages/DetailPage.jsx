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
      <div className='container mx-auto p-4 '>
        {/* Carousel */}
        <div className="carousel w-full h-80 rounded-md overflow-hidden">
          {memoObj?.image.map((imgSrc, index) => (
            <div key={index} className={`carousel-item w-full ${index === currentImageIndex ? 'block' : 'hidden'}`}>
              <img src={imgSrc} className="w-full h-full object-cover" alt={`Carousel ${index}`} />
            </div>
          ))}
        </div>
        <div className='flex gap-2 justify-center py-2'>
          {memoObj?.image.map((imgSrc, index) => (
            <img
              key={index}
              className={`w-20 h-20 object-cover rounded-md cursor-pointer ${index === currentImageIndex ? 'border-2 border-blue-500' : ''}`}
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
        <React.Fragment>
          <div className="flex justify-center">
            <button className='border px-24 border-black py-3' onClick={openDrawerBottom}>Ingredients</button>
          </div>
          <Drawer
            placement="bottom"
            open={openBottom}
            onClose={closeDrawerBottom}
            className="p-4"
          >
            <div className="mb flex items-center justify-between">
              <Typography variant="h5" color="blue-gray">
                Ingredients
              </Typography>
              <IconButton
                variant="text"
                color="blue-gray"
                onClick={closeDrawerBottom}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </IconButton>
            </div>
            <div className="flex flex-col p-8 bg-white rounded-2xl">
              <Typography className="text-lg font-bold mb-4">Ingredients:</Typography>
              <ul className="list-disc pl-5">
                {memoObj?.ingredients?.map((ingredient, index) => (
                  <li key={index} className="mb-2">{ingredient}</li>
                ))}
              </ul>
            </div>
          </Drawer>
        </React.Fragment>
      </div>
      <Footer />
    </>
  );
};

export default DetailPage;
