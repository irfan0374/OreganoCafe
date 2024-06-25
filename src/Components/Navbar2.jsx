import React from 'react'
import { Link } from 'react-router-dom';

const Navbar2 = () => {

  return  (
    <div className="p-0 navbar bg-green sticky top-0 z-50">
    <div className="flex-1">
      <Link to={'/'}>
        <img className='w-12 h-12 ml-12' src={"https://res.cloudinary.com/dlcnf8yfh/image/upload/v1719189950/organo_logo_opli1d.png"} alt="Cafe Oregano Logo" />
      </Link>
    </div>
    <div className="flex-none">
      <ul className="menu menu-horizontal px-1">
        <li>
          <details>
            <summary className='text-base-200 text-lg font-mono'>
              Menu
            </summary>
            <ul className="p-2 bg-base-100 rounded-t-none z-10">
              <li><Link to={'/juice'}>Drink</Link></li>
              <li><Link to={'/listPage/burger'}>Burger</Link></li>
              <li><Link to={'/listPage/pizza'}>Pizza</Link></li>
              <li><Link to={'/listPage/pasta'}>Pasta </Link></li>
              <li><Link to={'/listPage/starter'}>Starter</Link></li>
            </ul>
          </details>
        </li>
        <li className='text-base-200 text-lg font-mono'> <Link to={'/wishlist'}>
        <label className="container h-18 w-8">
      <input type="checkbox"  checked />
      <svg
        id="Layer_1"
        version="1.0"
        viewBox="0 0 24 24"
        xmlSpace="preserve"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="30" // Adjust the width as desired
        height="30" // Adjust the height as desired
      >
        <path d="M16.4,4C14.6,4,13,4.9,12,6.3C11,4.9,9.4,4,7.6,4C4.5,4,2,6.5,2,9.6C2,14,12,22,12,22s10-8,10-12.4C22,6.5,19.5,4,16.4,4z"></path>
      </svg>
    </label>
        </Link></li>
      </ul>
    </div>
  </div>
  
  )
}

export default Navbar2

