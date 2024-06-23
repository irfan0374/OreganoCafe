import React, { useContext, useMemo } from 'react'
import shakes from '/shake.jpg'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Link, useParams } from 'react-router-dom'
import { MenuContext } from '../MenuContext'




const ListPage = () => {
  const {category}=useParams()
  const {menu}=useContext(MenuContext)
   // Debugging logs to check values
   console.log("Category:", category);
   console.log("Menu:", menu);
  
  
  const filterMenu = useMemo(() => { 

    return menu.filter(item => {
      if (category) {
        return item?.category === category;
      }
      return item?.oreganoSp == "yes";
    });
  }, [category, menu]); 

  const title=category? `${category.charAt(0).toUpperCase() + category.slice(1)} Menu` :"Oregano Special";

    return (
        <>
        <Navbar/>
            <div className='container p-2 font-bold'>
             
                <h1 className='my-2 font-serif text-xl' >{title}</h1>
      
                <div className='grid grid-cols-2 gap-3 '>
                    {filterMenu.length>0?(
                        filterMenu.map(item=>(
                          <div className=' h-60  '>
                          <img className="w-full h-40 object-cover rounded-b-md" src={item.image[0]?item.image[0]:"https://res.cloudinary.com/dlcnf8yfh/image/upload/v1719145461/Oops_sjrnl5.png"} alt="" />
                          <div className='flex-none '>

                          <div className='text-gray-800 text-sm  font-serif '>
                             {item.name}
                          </div>
                          <div className="   text-black text-end text-sm">
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
          <Footer/>
        </>
    )
}

export default ListPage
