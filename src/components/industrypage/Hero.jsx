import React from 'react'
import Navbar from '../navbar/Navbar'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div>
       <div className=' xl:h-[838px] h-screen   bg-healthindus bg-cover bg-center w-full relative '>
        <Navbar />
        <div className=' h-screen w-full flex items-center justify-center'>
        <div className=' w-[80%] flex items-center'>
            <div className=' text-white flex flex-col justify-center items-center lg:items-start gap-10 w-90 max-[820px]:text-center'>
                <span className=' xl:text-[70px] text-5xl font-gilroy-bold'>empowering <br/> healthcare with AI</span>
                <p className=' text-[24px] font-gilroy-semi-bold '>We help you realize intelligent, connected, <br></br>and patient-centric healthcare.</p>
                <button className=' h-[44px] w-[140px] border-violet-700 border-[2px] lg:py-[10px] px-5 border-t-0 border-l-0 relative bg-transparent rounded-full'>
                    <Link className=' w-full h-full rounded-full flex justify-center items-center  font-gilroy-semi-bold text-[20px] absolute bg-white text-black -left-[2px] bottom-[2px] border-white border-2'>Let's talk</Link>
                  </button>

            </div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Hero