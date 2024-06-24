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
        <li className='text-base-200 text-lg font-mono'><a>About us</a></li>
      </ul>
    </div>
  </div>
  
  )
}

export default Navbar2

