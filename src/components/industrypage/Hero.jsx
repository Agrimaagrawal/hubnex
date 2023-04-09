import React from 'react'
import Navbar from '../navbar/Navbar'

const Hero = () => {
  return (
    <div>
       <div className=' h-screen bg-healthindus bg-cover bg-center w-full relative '>
        <Navbar />
    <div className=' h-screen w-full flex items-center justify-center'>
        <div className=' w-[80%] flex items-center'>
            <div className=' text-white flex flex-col gap-10 w-90 max-[820px]:text-center'>
                <span className=' xl:text-[70px] text-5xl font-gilroy-bold'>empowering <br/> healthcare with AI</span>
                <p className=' text-[24px] font-gilroy-semi-bold '>We help you realize intelligent, connected, <br></br>and patient-centric healthcare.</p>
                <button className=' w-[152px] h-[44px] border-2 border-black font-gilroy-semi-bold text-[20px]  px-5 bg-white text-black rounded-full max-[820px]:mx-auto relative z-10 left-6'>Let's talk</button>
                <button className=' w-[152px] h-[44px] border-2 border-black font-gilroy-semi-bold text-[20px]  px-5 bg-purple-400 text-black rounded-full max-[820px]:mx-auto relative bottom-20 left-8'>Let's talk</button>

            </div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Hero
