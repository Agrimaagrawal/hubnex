import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../navbar/Navbar'

const Hero = () => {
  return (
    
    <div className=' h-screen xl:h-[908px] bg-serviceLander bg-cover bg-center w-full relative '>
        <Navbar />
        <div className='w-full h-full flex items-center justify-center'>
            <div className=' text-white w-[85%] flex justify-start h-full  items-center'>
                <div className=' w-90 flex flex-col gap-14 xl:mb-48'>
                    <span className=' text-[50px] lg:text-[70px] font-gilroy-bold leading-tight'>Services to <br/> help you grow</span>
                    <p className=' text-[24px] font-gilroy-semi-bold'>"Expert IT Consulting Services to Boost Your Business Growth"</p>
                    <button className=' h-[44px] w-[140px] bg-violet-700 lg:py-[10px] px-5 border-t-0 border-l-0 relative bg-transparent rounded-full'>
                    <Link className=' w-full h-full rounded-full flex justify-center items-center  font-gilroy-semi-bold text-[20px] absolute bg-white text-black -left-[3px] bottom-[4px] border-white border-2'>Get in touch</Link>
                  </button>
                </div>  
            </div>
        </div>
    </div>
  )
}

export default Hero