import React from 'react'
import portrait from './Assets/img5.jpg'
const About = () => {
  return (
    <div className='container mx-auto' id='about' title='about'>
      <div className=' text-center' data-aos='fade-right' data-aos-duration="4000">
        <span className="text-5xl font-semibold pt-20 pb-3 text-dgreen-blue bar">About</span>
      </div><br /><br />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-navy-blue">
        <div className="p-4 flex justify-center items-center" data-aos='fade-up' data-aos-duration="4000">
          <img src={portrait} alt="" className="w-3/4 h-3/4 lg:ml-20 border-8  border-slate-800" />
        </div>
        <div className="p-4" data-aos='fade-left' data-aos-duration="4000">
          <div className='text-center'>
            <span className="text-3xl sm:text-5xl font-semibold pt-20 pb-3 text-dgreen-blue bar ">I'm Bhavya Patel</span>
          </div>
            <p className="sm:text-1xl font-semibold p-5 m-4 my-10 text-cream text-sm">A passionate web developer with a keen eye for crafting beautiful and functional websites. Welcome to my portfolio, where I'll take you on a journey through some of my most exciting projects and experiences.Web development isn't just a career for me, it's my creative outlet. From the moment I built my first website, I knew I had found my calling. I thrive on the ever-evolving nature of the web, and I am dedicated to staying at the forefront of technology to deliver the best solutions for my clients.</p>
            <div className="text-center mt-10">
              <a
                href="https://drive.google.com/file/d/1Ii0a9ZKDbVgjBvmoCh6ocs-8gWda_pHx/view?usp=drive_link"
                download="Resume_Bhavya.pdf"
                target='__blank'
                className="border-2 border-gold text-gold  px-6 py-3 rounded-full text-lg font-semibold hover:bg-gold hover:text-navy-blue transition duration-300 ease-in-out"
              >
                Download CV
              </a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About