import React from 'react'
import { Link } from 'react-router-dom'
import aboutLander from '../../assets/aboutLander.png'

const Hero = () => {
  return (
    <div className=' h-screen bg-aboutLander bg-center bg-cover  bg-no-repeat md:bg-none lg:h-[calc(100%-110px)] w-full relative'>
        <img src={aboutLander} alt='aboutLanderPage' className=' hidden md:flex absolute bottom-0 right-0 w-full object-cover h-[80%] md:h-[680px] md:w-[1300px]'/>
        <div className=' w-full md:w-[70%] h-full md:m-auto flex  lg:items-center'>
            <div className=' flex flex-col top-40 lg:top-0 w-[285px] lg:w-auto h-full lg:justify-center text-white gap-8 absolute left-16 md:left-28'>
              <div className=' text-[36px] font-gilroy-semi-bold lg:text-[70px] '>
                <span>About Us</span>
              </div>
              <div className=' w-full text-[20px] md:w-[700px]  md:text-[28px]'>
                <p className=' leading-tight font-gilroy-medium'>Passionate about exceptional IT services, delivering innovative solutions to meet unique needs.</p>
              </div>
              <div>
                  <button className=' h-[44px] w-[140px] border-violet-700 border-[2px] lg:py-[10px] px-5 border-t-0 border-l-0 relative bg-transparent rounded-full'>
                    <Link className=' w-full h-full rounded-full flex justify-center items-center  font-gilroy-semi-bold text-[20px] absolute -left-[2px] bottom-[2px] border-white border-2'>Read more</Link>
                  </button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Hero