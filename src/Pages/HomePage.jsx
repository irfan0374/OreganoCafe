import React from 'react'
import Navbar from '../Components/Navbar'
import starter from '/starter.jpg'
import comboBan from '/comboBan.jpg'
import oreganoSpecial from '/oreganoSpecial.png'
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <>
            <Navbar />
            {/* carousal start */}
            <div className="h-svh w-full relative overflow-hidden">
                <div className="carousel carousel-horizontal w-full h-full flex">
                    <div className="carousel-item relative h-full w-96">
                        <div className="absolute inset-0 bg-black opacity-50"></div>
                        <h1 className="absolute top-64 left-4 transform -translate-y-1/2 text-white text-4xl font-sans z-10">
                            Discover <span className='font-bold text-green'>Cafe Oregano</span>: Where Flavor Comes First !
                        </h1>
                        <img className="object-cover h-full w-full" src={"https://res.cloudinary.com/dlcnf8yfh/image/upload/v1719152374/pexels-ron-lach-8879358_axjcby.jpg"} alt="Carousel 2" />
                    </div>

                    <div className="carousel-item relative h-full w-96">
                        <div className="absolute inset-0 bg-black opacity-50"></div>
                        <h1 className="absolute top-96 left-8 transform -translate-y-1/2 text-white text-4xl">
                            Where Every Bite Tells a Story :)
                        </h1>
                        <img className="object-cover h-full w-full" src={"https://res.cloudinary.com/dlcnf8yfh/image/upload/v1719152374/pexels-andreevaleksandar-20854971_l8iqsl.jpg"} alt="Carousel 1" />

                    </div>
                    <div className="carousel-item relative h-full w-96">
                        <div className='absolute inset-0 bg-black opacity-50'></div>
                        <h1 className="absolute top-64 left-4 transform -translate-y-1/2 text-white text-4xl">
                            Discover Delights: Cafe Oregano Edition
                        </h1>
                        <img className="object-cover h-full w-full" src={"https://res.cloudinary.com/dlcnf8yfh/image/upload/v1719155876/Production_photo_for_meat_restaurant_surlcf.jpg"} alt="Carousel 3" />
                    </div>
                </div>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    <div className="w-2 h-2 rounded-full bg-gray-200"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-200"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-200"></div>
                </div>
            </div>

            {/* carousal end */}

            {/* most popular start  */}
            <div >
                <h1 className='font-sans font-extrabold px-3 py-2'>
                    Most popular
                </h1>
                <div className='px-2'>

                    <div className="w-full relative">
                        <Link to="/listPage/combo">
                            <figure className="relative">
                                <img className="rounded-t-xl" src={comboBan} alt="shakes" />
                                <div className="absolute inset-0 rounded-t-xl flex items-center justify-center">
                                    <h1 className="text-white p-2 text-3xl font-extrabold font-sans">Combo</h1>
                                </div>
                                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-gray-900 to-transparent"></div>
                            </figure>
                        </Link>
                    </div>


                    <div className='flex '>
                        <div className="mt-1  w-full relative ">
                            <Link to={"/listPage"}>
                                <figure className='relative '> <img className=' h-48 w-full' src={oreganoSpecial} alt="shakes" />
                                    <div className='absolute inset-0 rounded-md flex items-center justify-center'>
                                        <h1 className='text-white font-bold p-2 text-xl font-sans'>oregano Special</h1>
                                    </div>
                                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-gray-900 to-transparent"></div>
                                </figure>
                            </Link>
                        </div>

                        <div className="mt-1 ml-1 w-full  relative ">
                            <Link to={'/listPage/starter'}>
                                <figure className='relative'>
                                    <img className='rounded-b-xl h-48  w-full' src={starter} alt="shakes" />
                                    <div className='absolute inset-0  flex items-center justify-center '>
                                        <h1 className='text-white font-bold p-2 text-xl font-sans'>Starter</h1>
                                    </div>
                                    <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-gray-800 to-transparent"></div>
                                </figure>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* mostpopular end */}

            {/* Selection */}

            <div className=' justify-center space-x-3'>
                <h1 className='text-black font-sans font-extrabold py-3 px-3 '>What's on your mind?</h1>
                <div className='grid grid-cols-3 gap-4 py-6 '>
                    <Link to={"/juice"}>
                        <div>
                            <img src={"https://res.cloudinary.com/dlcnf8yfh/image/upload/v1719148511/shakes_mayaxw.png"} alt="" className="w-24 h-20 tansform hover:scale-110 duration-200 " />
                            <h2 className="text-balance font-serif">Shakes</h2>
                        </div>
                    </Link>
                    <Link to={'/listPage/burger'}>
                        <div className=''>
                            <img  src={"https://res.cloudinary.com/dlcnf8yfh/image/upload/v1719148511/burger_f9ivvj.png"} alt="" className="w-20 h-20 transform hover:scale-110 duration-200 " />
                            <h2 className=" text-balance font-serif">Burger</h2>
                        </div>
                    </Link>
                    <Link to={'/listPage/pizza'}>
                        <div><img src={"https://res.cloudinary.com/dlcnf8yfh/image/upload/v1719148508/pizza_ljitle.png"} alt="" className="w-20 h-20 transform hover:scale-110 duration-200" />
                            <h2 className=" text-balance font-serif">Pizza</h2>
                        </div>
                    </Link>
                    <Link to={'/listPage/pasta'}>
                        <div><img src={"https://res.cloudinary.com/dlcnf8yfh/image/upload/v1719133977/Firefly_20240623143328-removebg-preview_it3ria.png"} alt="" className="w-20 h-20 transform hover:scale-110 duration-200" />
                            <h2 className=" text-balance font-serif">Pasta</h2>
                        </div>
                    </Link>
                    <Link to={'/listPage/sandwich'}>
                        <div><img src={"https://res.cloudinary.com/dlcnf8yfh/image/upload/v1719148508/sandwitch_pvu1oe.png"} alt="" className="w-20 h-20 transform hover:scale-110 duration-200" />
                            <h2 className=" text-balance font-serif">Sandwitch</h2>
                        </div>
                    </Link>
                    <Link to={'/listPage/wrap'}>
                        <div><img src={"https://res.cloudinary.com/dlcnf8yfh/image/upload/v1719148510/wrap_hdlsut.png"} alt="" className="w-20 h-20 transform hover:scale-110 duration-200" />
                            <h2 className=" text-balance font-serif">Wrap</h2>
                        </div>
                    </Link>
                </div>

            </div>

            {/* selection end */}


            {/* footer */}

            <Footer />

            {/* footer section end */}
        </>
    )
}

export default HomePage
