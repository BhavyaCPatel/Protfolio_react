import React from 'react';
import { ImLocation } from "react-icons/im";
import { IoCall } from "react-icons/io5";
import { MdAlternateEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
const Contact = () => {
  return (
    <div id="contact" className="container mx-auto p-8">
      <div className=' text-center'data-aos='fade-up' data-aos-duration="4000">
        <span className="text-5xl font-semibold pt-20 pb-3 text-dgreen-blue bar">Contact</span>
      </div><br /><br />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        <div className="col-span-1" data-aos='fade-right' data-aos-duration="4000" data-aos-delay='1000'>
            <p className="text-lg font-semibold text-gold pb-5">For more information, contact me:</p>
            <p className="text-cream">
              <span className="inline-block align-middle">
                <ImLocation />
              </span>&nbsp;
              Ahmedabad, Gujarat, India
            </p>
            <p className="text-cream">
              <span className="inline-block align-middle">
                <IoCall />
              </span>&nbsp;
              (+91) 7016514303
            </p>
            <p className="text-cream">
              <span className="inline-block align-middle">
                <MdAlternateEmail />
              </span>&nbsp;
              bhavyaaes@gmail.com
            </p>
        </div>
        <div className="col-span-1" data-aos='fade-left' data-aos-duration="4000" data-aos-delay='1000'>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="col-span-1">
              <input
                className="w-full p-2 border-b-2 border-gray-300 bg-transparent rounded-none focus:outline-none focus:border-gold text-cream"
                id="name"
                name="name"
                type="text"
                placeholder="Name"
                required
              />
            </div>
            <div className="col-span-1">
              <input
                className="w-full p-2 border-b-2 border-gray-300 bg-transparent rounded-none focus:outline-none focus:border-gold text-cream"
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="col-span-2"> {/* Set col-span-2 to make the "Subject" field span the full width */}
              <input
                className="w-full p-2 border-b-2 border-gray-300 bg-transparent rounded-none focus:outline-none focus:border-gold text-cream"
                id="subject"
                name="subject"
                type="text"
                placeholder="Subject"
              />
            </div>
          </div>
          <div className="relative">
            <textarea
              className="w-full p-2 border-b-2 border-gray-300 bg-transparent rounded-none focus:outline-none focus:border-gold text-cream"
              id="comments"
              name="comments"
              placeholder="Comment"
              rows="5"
            ></textarea>
          </div>
          <div className="text-center mt-5">
            <button
              className="bg-gold text-navy-blue px-6 py-3 rounded-full text-lg font-semibold hover:bg-yellow-500 hover:text-navy-blue transition duration-300 ease-in-out"
              type="submit"
            >
              Send
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <a href="https://www.linkedin.com/in/bhavya-patel-b2820322a/" className='text-slate-500 pr-5'><FaLinkedin/></a>
        <a href="https://twitter.com/PatelBhavyaaes" className='text-slate-500 px-5'><FaXTwitter/></a>
        <a href="https://github.com/BhavyaCPatel" className='text-slate-500 px-5'><FaGithub/></a>
    </div>
    </div>
  );
};

export default Contact;
