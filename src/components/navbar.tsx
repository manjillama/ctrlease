import React from 'react';
import Logo from '../images/logo.svg';
import { Link } from 'gatsby';

const Navbar = () => (
  <nav className="px-4 py-2 bg-white border-slate-300 border-b flex justify-between">
    <ul className="flex items-center space-x-8">
      <li className="inline-block">
        <img src={Logo} />
      </li>
      <li className="inline-block">
        <Link to="/overview">Overview</Link>
      </li>
      <li className="inline-block">
        <Link to="/drivers">Drivers</Link>
      </li>
    </ul>
    <ul>
      <li>
        <button className="bg-teal-600 text-white px-4 py-2 rounded">Contact</button>
      </li>
    </ul>
  </nav>
);

export default Navbar;
