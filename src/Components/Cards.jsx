import React from 'react'
import './Cards.css'

const Cards = (props) => {
    return (
        <div className='text-sm md:text-lg'>
            <div className="containers flex justify-center items-center ">
                <img src={props.image} alt="travel" className="image" />
                <div className="middle">
                    <div className="pl-3 md:pl-10 text-cream ">
                        <h3 className='md:text-center text-2xl pb-5'>{props.title}</h3>
                        <p className='pl-5'>{props.desc}</p>
                        <div className="text-center mt-2 md:mt-9 flex flex-col md:flex-row">
                            <a href={props.source} target='__blank' className="border border-current text-cream px-2 md:px-4 py-4 rounded-full text-sm font-semibold hover:bg-white hover:text-navy-blue transition duration-300 ease-in-out md:mx-5 mb-3 md:mb-0">
                                Source Code
                            </a>
                            <a href={props.demo} target='__blank' className="border border-current text-cream px-2 md:px-4 py-4 rounded-full text-sm font-semibold hover:bg-white hover:text-navy-blue transition duration-300 ease-in-out md:mx-5 mb-3 md:mb-0">
                                Live Demo
                            </a>
                        </div>

                    </div>
                </div>
            </div><br />
        </div>
    )
}

export default Cards