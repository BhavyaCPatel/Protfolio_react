import React from 'react';
import { Link } from 'react-router-dom';
import logo from './Assets/Logo2.png';

const Navbar = () => {
  return (
    <nav className="bg-navy-blue text-cream py-4 px-3">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-gold text-3xl font-semibold">
          <img src={logo} alt="logo" width={'70px'} height={'70px'} />
        </Link>

        {/* Menu */}
        <ul className="space-x-6">
          <li className="inline-block">
            <Link to="/" className="text-gold hover:underline">
              Home
            </Link>
          </li>
          <li className="inline-block">
            <Link to="/projects" className="text-gold hover:underline">
              Projects
            </Link>
          </li>
          <li className="inline-block">
            <a href="https://theinformativecorner.netlify.app/" className="text-gold hover:underline">Blogs</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
