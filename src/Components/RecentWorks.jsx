import React from 'react'
import Cards from './Cards'
import avirat from './Assets/avirat.png'
import blogs from './Assets/blogs.png'
import applec from './Assets/applec.png'
import clearsky from './Assets/clearsky.png'
const RecentWorks = () => {
  return (
    <div>
        <div className=' text-center'>
        <span className="text-5xl font-semibold pt-20 pb-3 text-dgreen-blue bar">Recent Works</span>
        </div><br /><br />
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4 items-center mx-5">
            <Cards
            image={avirat}  
            title='Avirat' 
            desc='Avirat Escapes is a ReactJS-based web application for travel and adventure enthusiasts. It simplifies travel planning, offering features like tour packages,trekking adventures, and campsite getaways.'
            source='https://github.com/BhavyaCPatel/Avirat'
            demo='https://aviratescapes.netlify.app/'/>
            <Cards
            image={blogs}
            title='The Informatice Corner'
            desc='Welcome to The Informative Corner! This is my personal blog where I share insights, thoughts, and expertise on a wide range of trending topics.'
            source='https://github.com/BhavyaCPatel/Blog'
            demo='https://theinformativecorner.netlify.app/'/>
            <Cards
            image={applec}
            title='Apple Clone'
            desc="A clone of apple's official website built with html, css and bootstrap."
            source='https://github.com/BhavyaCPatel/Apple-Clone'
            demo='https://applec.netlify.app/'/>
            <Cards
            image={clearsky}
            title='ClearSky Forecast'
            desc='ClearSky Forecast is a weather application that allows users to fetch and view weather information for any city.'
            source='https://github.com/BhavyaCPatel/Weather-app'
            demo='https://clearskyforecast.netlify.app/'/>
        </div>
    </div>
  )
}

export default RecentWorks