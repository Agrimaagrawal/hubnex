import React from 'react'
import { Link } from 'react-router-dom'
import aboutLander from '../../assets/aboutLander.png'

const Hero = () => {
  return (
    <div className=' h-[calc(100%-110px)] w-full relative'>
        <img src={aboutLander} alt='aboutLanderPage' className=' absolute bottom-0 right-0 w-full object-cover h-[60%] md:h-[650px] md:w-[1300px]'/>
        <div className=' w-full md:w-[70%] h-full md:m-auto flex items-center'>
            <div className=' flex flex-col h-full lg:justify-center text-white gap-8 absolute left-10 md:left-28'>
              <div className=' text-5xl font-gilroy-semi-bold lg:text-[70px] '>
                <span>About Us</span>
              </div>
              <div className=' w-full text-[20px] md:w-[700px]  md:text-[28px]'>
                <p className=' leading-tight font-gilroy-medium'>Passionate about exceptional IT services, delivering innovative solutions to meet unique needs.</p>
              </div>
              <div>
                <button className=' bg-transparent border-white border-[2px] py-1 px-4 md:py-2 md:px-5 rounded-full '>Read more</button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Hero