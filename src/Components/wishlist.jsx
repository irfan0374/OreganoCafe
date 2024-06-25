import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar2 from './Navbar2';
import { MenuContext } from '../MenuContext';

const Wishlist = () => {
    const { favorites, removeFromFavorites } = useContext(MenuContext);
    const [favorite, setFavorites] = useState([]);

    useEffect(() => {
        setFavorites(favorites);
    }, [favorite]);


    const clearAllFavorites = () => {
        setFavorites([]);
        localStorage.removeItem('favorite');
    };

    return (
        <>
            <Navbar2 />
            <div className="mx-auto p-4">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-2xl font-bold"> Wishlist</h1>
                    {favorites.length > 0 && (
                        <button
                            className="border border-black text-black px-4 py-2 rounded-full"
                            onClick={clearAllFavorites}
                        >
                            Clear All
                        </button>
                    )}
                </div>
                {favorites.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {favorites.map((item, index) => (
                            <div key={index} className="border pl-16 p-2 rounded-lg shadow-lg relative">
                                <img
                                    className="w-52 h-52 object-cover rounded-md mb-4"
                                    src={item.image[0] ? item.image[0] : "https://res.cloudinary.com/dlcnf8yfh/image/upload/v1719145461/Oops_sjrnl5.png"}
                                    alt={item.name}
                                />
                                <h2 className="text-lg font-semibold ">{item.name}</h2>
                                <p className="text-md text-gray-700 mb-2 ">{item?.description}</p>
                                <p className="text-lg font-bold text-gray-900 mb-4">₹{item.price}</p>
                                <button
                                    className="absolute top-2 right-2 bg-gray-400 text-white p-1 rounded-full"
                                    onClick={() => removeFromFavorites(item)}
                                    title="Remove from Wishlist"
                                >
                                    <svg
                                        className="w-5 h-5"
                                        fill="none"
                                        stroke="white"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        ></path>
                                    </svg>

                                </button>
                                <div className='my-2'>
                                    <Link to={`/detailPage`} state={{ item }} className='border border-current px-3 py-2 my-2 rounded-md text-sm ml-2'>View</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <>
                        <p className="text-center text-gray-700 font-bold">Your wishlist is empty.</p>
                        <div>
                            <img className='animate-pulse' src={"https://res.cloudinary.com/dlcnf8yfh/image/upload/v1719287495/Firefly_acartoon_charectors_pick_burger_and_juice_to_trolly_87268-removebg-preview_eaapj8.png"} alt="" />
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

export default Wishlist;
