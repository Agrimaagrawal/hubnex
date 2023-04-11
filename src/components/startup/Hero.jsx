import React from 'react'
import Navbar from '../navbar/Navbar'
import SideLine from './SideLine'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import styleArrow from '../../assets/styledArrow.png'
import './style.css'
import line from '@assets/lineDesign.png'

const Hero = () => {
  return (
    <div className=' h-screen lg:h-auto bg-black w-full overflow-hidden  '>
    <Navbar/>
    <SideLine/>
    <div className=' lg:h-[700px] h-[90%] w-full flex flex-col items-center lg:justify-center '>

      <div className='w-52 h-40 rounded-full bg-slate-400 absolute top-8 left-6 ' id="circle"></div>
      
      <div className=' w-[80%] h-full flex flex-col items-center justify-evenly'>
          <div className=' text-white  relative h-auto py-10 flex flex-col items-center gap-16 lg:w-[680px] max-[820px]:text-center'>
              <img src={styleArrow} alt="styledArrow" className=' absolute -bottom-10 md:-bottom-5 w-32 left-2 md:left-20' />
              <div className=' flex flex-col w-full items-center gap-8'>
                <span className=' text-4xl  font-gilroy-bold lg:text-[70px] text-center'>Helping business</span>
                <p className=' text-4xl font-gilroy-bold lg:text-[70px]  text-center'>through technology</p>
              </div>
              <p className=' text-[16px] lg:h-auto lg:text-[28px] font-gilroy-medium text-center'>revolutionize Your Startup's IT Strategy With Our Consultancy Services</p>
              <button className=' flex gap-2 py-[16px] px-[24px] bg-violet-500 rounded-full font-gilroy-semi-bold text-[20px] items-center justify-center'>Get started <ChevronRightIcon/></button>
          </div>    
      </div>
      <div className=' w-full flex justify-center items-center'>
            <img src={line} alt="" />
      </div> 
    <div className='w-64 h-40 rounded-full bg-slate-400 absolute right-8 bottom-24 ' id="circle"></div>
  </div>
</div>
  )
}

export default Hero