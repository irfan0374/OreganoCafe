import React, { useContext, useMemo, useState } from 'react'
import shakes from '/shake.jpg'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Link, useParams } from 'react-router-dom'
import { MenuContext } from '../MenuContext'



const juiceShakeList = () => {
  const [type,setType]=useState("")
  const { category } = useParams()
  const { menu } = useContext(MenuContext)

  const filterMenu=useMemo(()=>{
    const filterobj = menu.filter(item =>{
      if(type){
       return  item.category===type
      }
     return item.category===category
    })
    return filterobj
  },[category,type])

  return (
    <>
      <Navbar />
      <div className='container p-2 font-bold'>
      <h2 className="text-lg font-semibold mb-2">Pick Your Favorite Beverage:</h2>
        {/* category option */}
        <div
          className="overflow-x-auto whitespace-nowrap my-3"
          style={{
          msOverflowStyle: 'none',
          scrollbarWidth: 'none',
          WebkitOverflowScrolling: 'touch',
          }}
        
        >
          <ul className="flex flex-row text-sm w-full gap-3">
            <li className="border border-black rounded-2xl p-3 px-4 text-md font-thin" onClick={()=>setType("shake")}>shake</li>
            <li className="border border-black rounded-2xl p-3 px-4 text-md font-thin" onClick={()=>setType("smoothi")}>smoothi</li>
            <li className="border border-black rounded-2xl p-3 px-4 text-md font-thin" onClick={()=>setType("icecreamShake")}>icecream shake</li>
            <li className="border border-black rounded-2xl p-3 px-4 text-md font-thin" onClick={()=>setType("freaky")}>freaky</li>
            <li className="border border-black rounded-2xl p-3 px-4 text-md font-thin" onClick={()=>setType("seasonalfresh")}>seasonal fresh</li>
            <li className="border border-black rounded-2xl p-3 px-4 text-md font-thin" onClick={()=>setType("juice")}>fruity</li>
            <li className="border border-black rounded-2xl p-3 px-4 text-md font-thin" onClick={()=>setType("refreshing")}>dry fruit</li>
            <li className="border border-black rounded-2xl p-3 px-4 text-md font-thin" onClick={()=>setType("mojito")}>mojito</li>
            <li className="border border-black rounded-2xl p-3 px-4 text-md font-thin" onClick={()=>setType("cold")}>cold</li>
          </ul>
        </div>
        {/* category option end*/}
        <h1 className='my-3'>{category.charAt(0).toUpperCase() + category.slice(1)} Menu</h1>

        <div className='grid grid-cols-2 gap-3 '>
          {filterMenu.length > 0 ? (
            filterMenu.map(item => (
              <div className=' h-60  '>
                <img className="w-full h-40 object-cover rounded-md" src={item.image[0]} alt="" />
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
                  <Link to={`/detailPage`} state={{ item }} className='border border-current px-3 py-2 my-2 rounded-md text-sm ml-2'>View</Link>
                </div>
              </div>
            ))

          ) : (<p>no item found for this category</p>)}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default juiceShakeList
