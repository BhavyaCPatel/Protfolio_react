import React,{useEffect} from 'react';
import Home from './Home';
import Projects from './Projects';
import { Routes, Route } from 'react-router-dom';
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import AOS from 'aos';
import 'aos/dist/aos.css';
function Mainpage() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <div className="flex justify-center mt-10 mb-5">
        <a href="https://www.linkedin.com/in/bhavya-patel-b2820322a/" className='text-slate-500 pr-5'><FaLinkedin/></a>
        <a href="https://twitter.com/PatelBhavyaaes" className='text-slate-500 px-5'><FaXTwitter/></a>
        <a href="https://github.com/BhavyaCPatel" className='text-slate-500 px-5'><FaGithub/></a>
    </div>
    </div>
  );
}

export default Mainpage;
