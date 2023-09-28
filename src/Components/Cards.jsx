import React from 'react'
import './Cards.css'

const Cards = (props) => {
  return (
    <div>
                <div class="containers flex justify-center items-center">
                    <img src={props.image} alt="travel" class="image"/>
                    <div class="middle">
                        <div class="pl-10 text-cream text-lg">
                            <h3 className='text-center text-2xl pb-5'>{props.title}</h3>
                            <p className='pl-5'>{props.desc}</p>
                            <div className="text-center mt-10">
                                <a href={props.source} target='__blank' className=" border border-current text-cream px-6 py-3 rounded-full text-sm font-semibold hover:bg-white hover:text-navy-blue transition duration-300 ease-in-out mx-5"
                                >
                                    Source Code
                                </a>
                                <a href={props.demo} target='__blank' className=" border border-current text-cream px-6 py-3 rounded-full text-sm font-semibold hover:bg-white hover:text-navy-blue transition duration-300 ease-in-out "
                                >
                                    Live Demo
                                </a>
        </div>
                        </div>
                    </div>
                </div><br/>
    </div>
  )
}

export default Cards