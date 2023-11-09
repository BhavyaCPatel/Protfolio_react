import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './Assets/Logo2.png';
import { Link as Scroll } from "react-scroll";
import { FiHome } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";
import { FiBookOpen } from "react-icons/fi";
import { IoRocketOutline } from "react-icons/io5";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between flex-wrap p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6 lg:mr-72">
        <Link to="/" className="text-gold text-3xl font-semibold">
          <img src={logo} alt="logo" width={'70px'} height={'70px'} />
        </Link>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 rounded text-gold hover:text-gold-300"
        >
          <svg
            className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
          <svg
            className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>
        </button>
      </div>
      <div className={`w-full flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`}>
        {isOpen ? 
          <div className={`text-sm lg:flex-grow space-x-6 list-none `}>
            <ul className='m-3 p-3'>
              <li className='m-3'>
                <Link to="/" className="text-gold hover:text-cream">
                  <FiHome  style={{ display: 'inline-block' }}/>&nbsp;
                  Home
                </Link>
              </li>
              <li className='m-3'>
                <Scroll activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={500} className="text-gold hover:text-cream scroll">
                  <FiUser style={{ display: 'inline-block' }}/>&nbsp;
                  About
                </Scroll>
              </li>
              <li className='m-3'>
                <Scroll activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={500} className="text-gold hover:text-cream scroll">
                  <FiPhone style={{ display: 'inline-block' }}/>&nbsp;
                  Contact
                </Scroll>
              </li>
              <li className='m-3'>
                <Link to="/projects" className="text-gold hover:text-cream">
                  <IoRocketOutline style={{ display: 'inline-block' }}/>&nbsp;
                  Projects
                </Link>
              </li>
              <li className='m-3'>
                <a href="https://theinformativecorner.netlify.app/" target='__blank' className="text-gold hover:text-cream">
                  <FiBookOpen style={{ display: 'inline-block' }}/>&nbsp;
                  Blogs
                </a>
              </li>
            </ul>
          </div>
          : 
          <div className={`text-lg lg:flex-grow space-x-6`}>
              <Link to="/" className="text-gold hover:text-cream">
                Home
              </Link>
              <Scroll activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={500} className="text-gold hover:text-cream scroll">
                About
              </Scroll>
              <Scroll activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={500} className="text-gold hover:text-cream scroll">
                Contact
              </Scroll>
              <Link to="/projects" className="text-gold hover:text-cream">
                Projects
              </Link>
              <a href="https://theinformativecorner.netlify.app/" target='__blank' className="text-gold hover:text-cream">Blogs</a>
          </div>
        }
      </div>
    </nav>
  );
}
export default App;