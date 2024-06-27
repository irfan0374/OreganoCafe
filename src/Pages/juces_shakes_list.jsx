import React, { useContext, useEffect, useMemo, useState } from 'react'
import shakes from '/shake.jpg'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Link, useParams } from 'react-router-dom'
import { MenuContext } from '../MenuContext'
import Navbar2 from '../Components/Navbar2'



const juiceShakeList = () => {
  const [type,setType]=useState("")
  const { category } = useParams()
  const { menu, favorites, addToFavorites, removeFromFavorites } = useContext(MenuContext);
  const [localFavorites, setLocalFavorites] = useState([]);

  // Update localFavorites when favorites change
  useEffect(() => {
    setLocalFavorites(favorites);
  }, [favorites]);

  const handleFavorites = (item) => {
    if (isFavorite(item)) {
      removeFromFavorites(item);
    } else {
      addToFavorites(item);
    }
  };

  const isFavorite = (item) => {
    return localFavorites.some((fav) => fav.id === item.id);
  };

  const filterMenu=useMemo(()=>{
    const filterobj = menu.filter(item =>{
      if(type){
       return  item.category===type
      }
     return item.category===category
    })
    return filterobj
  },[category,type])

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [category]);

  return (
    <>
      <Navbar2 />
      <div className=' p-2 font-bold'>
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
        <h1 className='my-3'>{type.charAt(0).toUpperCase() + type.slice(1)} Menu</h1>

        <div className='grid grid-cols-2 gap-3 '>
          {filterMenu.length > 0 ? (
            filterMenu.map(item => (
              <div className=' h-full  '>
                <img className="w-full h-40 object-cover rounded-md" src={item.image[0]} alt="" />
                <div className='flex justify-between'>

                  <div className=' py-1 text-gray-800 text-sm font-bold font-serif '>
                    {item.name}
                  </div>
                 
                  <div className=" py-1 text-black text-end text-sm">
                    ₹{item.price}</div>
                </div>
                <div>
                      <label className="ui-bookmark">
                      <input
                          type="checkbox"
                          checked={isFavorite(item)}
                          onChange={() => handleFavorites(item)}
                        />
                        <div className="bookmark">
                          <svg
                            viewBox="0 0 16 16"
                            style={{ marginTop: '4px', display: isFavorite(item) ? 'block' : 'none' }}
                            className="bi bi-heart-fill"
                            height="25"
                            width="25"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
                              fillRule="evenodd"
                            ></path>
                          </svg>
                          <svg
                            viewBox="0 0 16 16"
                            style={{ marginTop: '4px', display: isFavorite(item) ? 'none' : 'block' }}
                            className="bi bi-heart"
                            height="25"
                            width="25"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314Z"
                            ></path>
                          </svg>
                        </div>
                      </label>
                    </div>
              
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
