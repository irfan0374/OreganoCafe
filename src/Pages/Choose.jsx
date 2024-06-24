import React, { useEffect } from 'react'
import shakes from '/shake.jpg'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'
import Navbar2 from '../Components/Navbar2'

const Choose = () => {

    return (
        <>
        <Navbar2/>
            <div className='container p-2 font-bold'>
                <h1 className='text-black py-4'>
                   category name
                </h1>
                <div className='grid grid-cols-3 gap-3'>
                    <div className=' h-60'>
                        <img className="w-full h-40 object-cover rounded-b-md" src={shakes} alt="" />
                        <div className=' py-2 text-gray-600 text-xs font-thin font-serif '>
                            NUTELLA SHAKE
                        </div>
                        <div className="text-black text-end text-sm">
                            ₹200</div>
                        <Link to={'/detailPage'} className='border border-current px-3 py-1 rounded-sm text-sm ml-2'>View</Link>

                    </div>
                    <div className=' h-60'>
                        <img className="w-full h-40 object-cover rounded-b-md" src={shakes} alt="" />
                        <div className=' py-2 text-gray-600 text-xs font-thin font-serif '>
                            NUTELLA SHAKE
                        </div>
                        <div className="text-black text-end text-sm">
                            ₹200</div>
                            <Link className='border border-current px-3 py-1 rounded-sm text-sm ml-2'>View</Link>

                    </div>
                    <div className=' h-60'>
                        <img className="w-full h-40 object-cover rounded-b-md" src={shakes} alt="" />
                        <div className=' py-2 text-gray-600 text-xs font-thin font-serif '>
                            NUTELLA SHAKE
                        </div>
                        <div className="text-black text-end text-sm">
                            ₹200</div>
                            <Link className='border border-current px-3 py-1 rounded-sm text-sm ml-2'>View</Link>
                    </div>
                    <div className=' h-60'>
                        <img className="w-full h-40 object-cover rounded-b-md" src={shakes} alt="" />
                        <div className=' py-2 text-gray-600 text-xs font-thin font-serif '>
                            NUTELLA SHAKE
                        </div>
                        <div className="text-black text-end text-sm">
                            ₹200</div>
                            <Link className='border border-current px-3 py-1 rounded-sm text-sm ml-2'>View</Link>

                    </div>
                    <div className=' h-60'>
                        <img className="w-full h-40 object-cover rounded-b-md" src={shakes} alt="" />
                        <div className=' py-2 text-gray-600 text-xs font-thin font-serif '>
                            NUTELLA SHAKE
                        </div>
                        <div className="text-black text-end text-sm">
                            ₹200</div>
                            <Link className='border border-current px-3 py-1 rounded-sm text-sm ml-2'>View</Link>

                    </div>
                </div>
            </div>
          <Footer/>
        </>
    )
}

export default Choose
