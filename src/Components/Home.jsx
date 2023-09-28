import React from 'react'
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import image from './Assets/images-removebg-preview.png'
import About from './About';
import Skills from './Skills';
const Home = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Developer", "Designer", "Freelancer"], 
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      smartBackspace: true,
      loop: true,
      showCursor: true,
    });


    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-navy-blue">
      {/* Text Content */}
      <div className="p-4">
        <h1 className="text-3xl font-semibold mb-4 text-gold">Hello, I'm</h1>
        <h1 className="text-6xl font-semibold mb-4 text-gold">Bhavya Patel</h1>
        <span className="text-4xl text-gold" ref={el}></span>
      </div>

      {/* Image */}
      <div className="p-4">
        <img src={image} alt="" className="w-full h-auto" />
      </div>
    </div>
    <About/>
    <Skills/>
    </div>
  )
}

export default Home