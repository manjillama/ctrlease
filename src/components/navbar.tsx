import React from 'react';
import Logo from '../images/logo.svg';
import { Link } from 'gatsby';

const Navbar = () => (
  <nav className=" bg-white border-slate-200 border-b ">
    <div className="px-4 py-2.5 flex justify-between items-center max-w-[1280px] mx-auto">
      <ul className="flex items-center space-x-8">
        <li className="inline-block">
          <Link to="/">
            <img src={Logo} />
          </Link>
        </li>
        {/* <li className="inline-block">
          <Link activeClassName="text-teal-700" className="hover:text-teal-700" to="/overview">
            Overview
          </Link>
        </li> */}
        <li className="inline-block">
          <Link activeClassName="text-teal-700" className="hover:text-teal-700" to="/drivers">
            Drivers
          </Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/contact" className="bg-teal-600 text-white px-4 py-2.5 rounded hover:bg-teal-700">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
