import React from 'react';
import { Link } from 'react-router-dom';
import logo from './Assets/Logo2.png';
import {Link as Scroll } from "react-scroll";

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
            <Link to="/" className="text-gold hover:text-cream">
              Home
            </Link>
          </li>
          <li className="inline-block">
            <Scroll activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={500} className="text-gold hover:text-cream scroll">
              About
            </Scroll>
          </li>
          <li className="inline-block">
          <Scroll activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={500} className="text-gold hover:text-cream scroll">
              Contact
            </Scroll>
          </li>
          <li className="inline-block">
            <Link to="/projects" className="text-gold hover:text-cream">
              Projects
            </Link>
          </li>
          <li className="inline-block">
            <a href="https://theinformativecorner.netlify.app/" className="text-gold hover:text-cream">Blogs</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
