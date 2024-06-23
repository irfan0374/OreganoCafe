import React, { useContext,useEffect, useMemo, useState } from 'react'
import { motion } from "framer-motion"

import shakes from '/shake.jpg'
import juice from '/juice.jpg'
import { Button } from '@material-tailwind/react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'
import { MenuContext } from '../MenuContext'



const Juices_shakes = () => {
  const {menu}=useContext(MenuContext)
  
  const memoObj=useMemo(()=>{
    const filterMenu=menu.filter(item=>item?.oreganoSp==="yes"&& item?.type=="drink")
    return filterMenu

  },[])
  const [juiceData, Setjuices] = useState([])
  const [Loading, setLoading] = useState(false)

  return (
    <>
      <Navbar />
      {/* types card start */}
      {Loading ? (
        <p>loading</p>
      ) : (
        <div>
          <h1 className='text-black text-xl my-3 font-serif pl-2 font-bold'>
            Choose juice or shakes
          </h1>
        </div>
      )}
      <div className='flex container p-1 space-x-1 '>
        <Link to={'/juiceShakeList/shake'}>
          <div className='h-50 w-39 relative'>
            <img className="rounded-xl" src={shakes} alt="" />
            <div className="absolute inset-0 rounded-xl flex items-center justify-center bg-black bg-opacity-40">
              <h1 className="text-gray-300 font-bold p-2 text-xl font-sans ">shakes</h1>
            </div>
          </div>
        </Link>
        <Link to={'/juiceShakeList/juice'}>
        <div className=' h-50 w-39 relative'>
          <img className="rounded-xl" src={juice} alt="" />
          <div className='absolute inset-0 rounded-xl bg-black bg-opacity-40 flex items-center justify-center'>
            <h1 className='text-gray-300 font-bold p-2 text-xl font-sans '>Juices</h1>
          </div>
        </div>
        </Link>
      </div>
      {/* types card end */}

      {/* oregano special start */}
      <div className='container p-2 font-bold'>
        <h1 className='text-black text-xl my-3 font-serif'>
          Oregano Special
        </h1>
        <div className='grid grid-cols-2 gap-3 '>
                    {memoObj.length>0?(
                        memoObj.map(item=>(
                          <div>
                          <img className="w-full h-48 object-cover  rounded-b-md" src={item.image[0]} alt="" />
                          <div className='flex justify-between'>

                          <div className=' py-1 text-gray-800 text-sm font-bold font-serif '>
                             {item.name}
                          </div>
                          <div className=" py-1 text-black text-end text-sm">
                              ₹{item.price}</div>
                          </div>
                          <p className='text-sm truncate font-thin'>
                            {item.description}
                          </p>
                          <div className='my-2'>
                          <Link to={`/detailPage`} state={{item}} className='border border-current px-3 py-2 my-2 rounded-md text-sm ml-2'>View</Link>
                            </div>
                      </div>
                        ))

                    ):(<p>no item found for this category</p>)}
                </div>
      </div>
      {/* oregano special end */}
      <Footer />
    </>
  )
}

export default Juices_shakes
