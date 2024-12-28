import React from 'react'
import Cards from './Cards'
import avirat from './Assets/avirat.png'
import blogs from './Assets/blogs.png'
import applec from './Assets/applec.png'
import shoppingCart from './Assets/shoppingCart.png'
import eventara from './Assets/eventara.png'
import mediumClone from './Assets/medium-clone.png'
import todoApp from './Assets/todoApp.png'
import studentManagement from './Assets/studentManagement.png'
import { NavLink } from 'react-router-dom'
const RecentWorks = () => {
  return (
    <div className='my-10'>
      <div className=' text-center mt-10' data-aos='fade-left' data-aos-duration="4000">
        <span className="text-5xl font-semibold pt-20 pb-3 text-dgreen-blue bar">Recent Works</span>
      </div><br /><br />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center m-5" >
      <div data-aos='zoom-in' data-aos-duration="4000" data-aos-delay='1000'>
          <Cards
            image={eventara}
            title='EvenTara'
            desc='Welcome to EvenTara, your go-to event management solution! Create, update, and delete events seamlessly with authentication and authorization powered by Clerk. Integrate Stripe for secure payment processing.'
            source='https://github.com/BhavyaCPatel/EvenTara'
            demo='https://eventara.vercel.app/' />
        </div>
        <div data-aos='zoom-in' data-aos-duration="4000" data-aos-delay='1000'>
          <Cards
            image={mediumClone}
            title='Medium Clone'
            desc='This is Medium Clone, your ultimate blogging platform! Effortlessly publish blogs with a rich-text editing experience powered by Tiptap. Enjoy seamless user authentication and a reliable backend hosted on Cloudflare for a secure blogging journey.'
            source='https://github.com/BhavyaCPatel/Medium'
            demo='https://medium-ten-blue.vercel.app/' />
        </div>
        <div data-aos='zoom-in' data-aos-duration="4000" data-aos-delay='1000'>
          <Cards
            image={studentManagement}
            title='Student Management App'
            desc='This MERN stack Student Management System allows students to log in, view details, and check marksheets, while faculty can manage student details and upload marksheets.'
            source='https://github.com/BhavyaCPatel/Students-Management' />
        </div>
        <div data-aos='zoom-in' data-aos-duration="4000" data-aos-delay='1000'>
          <Cards
            image={todoApp}
            title='To Do App'
            desc='This full-stack application allows users to efficiently manage their to-dos and user information with full CRUD(Create, Read, Update, Delete) functionality and secure authentication.'
            source='https://github.com/BhavyaCPatel/To-Do-App' />
        </div>
        <div data-aos='zoom-in' data-aos-duration="4000" data-aos-delay='1000'>
          <Cards
            image={shoppingCart}
            title='Shopping Cart'
            desc='Welcome to ReduxBasket, your go-to shopping cart solution! Manage your items effortlessly with features like adding, removing, updating quantities, deleting items, and clearing the entire cart.'
            source='https://github.com/BhavyaCPatel/ShoppingCart_Redux'
            demo='https://reduxbasket.netlify.app/' />
        </div>
        <div data-aos='zoom-in' data-aos-duration="4000" data-aos-delay='1000'>
          <Cards
            image={avirat}
            title='Avirat'
            desc='Avirat Escapes is a ReactJS-based web application for travel and adventure enthusiasts. It simplifies travel planning, offering features like tour packages,trekking adventures, and campsite getaways.'
            source='https://github.com/BhavyaCPatel/Avirat'
            demo='https://aviratescapes.netlify.app/' />
        </div>
        <div data-aos='zoom-in' data-aos-duration="4000" data-aos-delay='1000'>
          <Cards
            image={blogs}
            title='The Informatice Corner'
            desc='Welcome to The Informative Corner! This is my personal blog where I share insights, thoughts, and expertise on a wide range of trending topics.'
            source='https://github.com/BhavyaCPatel/Blog'
            demo='https://theinformativecorner.netlify.app/' />
        </div>
        <div data-aos='zoom-in' data-aos-duration="4000" data-aos-delay='1000'>
          <Cards
            image={applec}
            title='Apple Clone'
            desc="A clone of apple's official website built with html, css and bootstrap."
            source='https://github.com/BhavyaCPatel/Apple-Clone'
            demo='https://applec.netlify.app/' />
        </div>
      </div>
      <div className="text-center mt-14">
        <NavLink to="/projects" className="border-2 border-gold text-gold px-6 py-3 rounded-full text-lg font-semibold hover:bg-gold hover:text-navy-blue transition duration-300 ease-in-out"
        >
          View More
        </NavLink>
      </div>
    </div>
  )
}

export default RecentWorks