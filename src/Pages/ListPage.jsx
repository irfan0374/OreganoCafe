import React, { useContext, useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { MenuContext } from '../MenuContext';
import Navbar2 from '../Components/Navbar2';
import Addon from '../Components/Addon';
import Footer from '../Components/Footer';

const ListPage = () => {
  const { category } = useParams();
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

  const filterMenu = useMemo(() => {
    return menu.filter(item => {
      if (category) {
        return item?.category === category;
      }
      return item?.oreganoSp === "yes";
    });
  }, [category, menu]);

  const title = category ? `${category.charAt(0).toUpperCase() + category.slice(1)} Menu` : "Oregano Special";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [category]);

  return (
    <>
      <Navbar2 />
      <div className='p-2 font-bold'>
        <h1 className='my-2 font-serif text-xl'>{title}</h1>
        <div className='grid grid-cols-2 gap-3'>
          {filterMenu.length > 0 ? (
            filterMenu.map((item, index) => (
      

              <div className='h-full rounded-lg shadow-md p-4' key={index}>
                <img className="w-full h-40 object-cover rounded-md " src={item.image[0] ? item.image[0] : "https://res.cloudinary.com/dlcnf8yfh/image/upload/v1719145461/Oops_sjrnl5.png"} alt="" />
                <div className='flex-none'>
             
                  <div className='flex justify-between text-gray-800 text-sm font-serif'>
                    {item.name}
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
                  </div>
                  <div className="text-black text-end text-sm">
                    ₹{item.price}
                  </div>
                </div>
                <p className='text-sm truncate font-thin'>
                  {item.description}
                </p>
                <div className='my-2'>
                  <Link to={`/detailPage`} state={{ item }} className='border border-current px-3 py-2 my-2 rounded-md text-sm ml-2'>View</Link>
                </div>
              </div>
              
            ))
          ) : (
            <p>no item found for this category</p>
          )}
        </div>
      </div>
      <Addon />
      <Footer />
    </>
  );
};

export default ListPage;
