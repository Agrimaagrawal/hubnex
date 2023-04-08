import React from 'react'
import Navbar from '../navbar/Navbar'
import SideLine from './SideLine'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import styleArrow from '../../assets/styledArrow.png'
import './style.css'

const Hero = () => {
  return (
    <div className=' h-screen bg-black w-full   '>
    <Navbar/>
    <SideLine/>
    <div className=' h-full w-full flex items-center justify-center '>
    <div className='w-52 h-40 rounded-full bg-slate-400 absolute top-8 left-6 ' id="circle"></div>
    <div className=' w-[80%] flex items-center justify-center '>
        <div className=' text-white relative h-auto py-10 flex flex-col items-center gap-10 w-[600px] max-[820px]:text-center'>
            <img src={styleArrow} alt="styledArrow" className=' absolute -bottom-10 md:-bottom-5 w-32 left-2 md:left-20' />
            <div className=' flex flex-col w-full items-center gap-5'>
            <span className=' text-4xl  font-bold md:text-5xl text-center'>Helping business</span>
            <p className=' text-4xl font-bold md:text-5xl text-center'>through technology</p>
            </div>
            <p className=' text-2xl text-center'>revolutionize Your Startup's IT Strategy With Our Consultancy Services</p>
            <button className=' flex gap-2 py-2 px-3 bg-violet-500 rounded-full font-semibold items-center justify-center'>Get started <ChevronRightIcon/></button>
        </div>
    </div>
    <div className='w-64 h-40 rounded-full bg-slate-400 absolute right-8 bottom-24 ' id="circle"></div>
</div>
</div>
  )
}

export default Hero