import Navbar from '../navbar/Navbar'
import { Link } from 'react-router-dom'
import React from 'react'
 
const Hero = () => {

  return (
  
    <div className=' h-[calc(100%-110px)] w-full relative m-auto'>
      <div className=' flex h-full w-[75%] flex-col lg:gap-2  md:justify-center items-start m-auto text-white'>
        <div className=' text-3xl flex flex-col lg:gap-10 lg:text-[70px] mt-48 md:mt-0 font-gilroy-bold'>
          <h1>scale your business</h1>
          <h1>lead the market.</h1>
        </div>
        <div className=' flex flex-col gap-5 sm:gap-2'>
          <p className=' py-5 text-[16px] lg:text-[24px] font-gilroy-regular'>let our team, help you reach your dream</p>
          <Link to='/service' className=' w-max border-white font-gilroy-semi-bold text-[20px] border-2 md:border-none bg-transparentmd:border-none md:bg-white text-white md:text-black rounded-full py-2 lg:py-[10px] px-5'>get Started</Link>
        </div>
      </div>
    </div>
  )
}

export default Hero