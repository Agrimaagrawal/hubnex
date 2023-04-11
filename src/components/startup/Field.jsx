import React from 'react'
import line from '../../assets/lineDesign.png'
import  './style.css'
import i1 from '@assets/i1.png'
import i2 from '@assets/i2.png'
import i3 from '@assets/i3.png'
import i4 from '@assets/i4.png'
import t1 from '@assets/team1.png'
import t2 from '@assets/team2.png'
import t3 from '@assets/team3.png'
import t4 from '@assets/team4.png'

const Field = () => {
  return (
    <div className=' h-auto py-10 bg-black w-full relative text-white flex justify-center items-center'>
        <div className='w-52 h-40 rounded-full bg-slate-400 absolute bottom-8 left-6 ' id="circle"></div>
       <div className=' w-[90%] flex flex-col gap-20 justify-between items-center'>
          <span className=' font-gilroy-medium text-[20px]'>Why Choose Us</span>
          <div className=' flex flex-col w-full items-center  justify-center gap-10'>
            <span className=' text-[70px] font-gilroy-semi-bold'>Meet Our Team</span>
            
            <div className=' flex flex-wrap w-full  item-center justify-between'>
                
                <div className='  bg-transparent w-[352px] h-[509px]  relative flex flex-col justify-start pt-10 items-center '>
                    <img src={t1} alt="" className=' absolute bottom-24 right-12 w-[297px] h-[465px]'/>
                    <img src={i1} alt="icon1" className=' z-10'/>
                    <span className='m-5 z-10 font-gilroy-semi-bold text-[24px]'>Design Team</span>
                    <p className='m-2 text-center text-[16px] w-[200px] h-[96px] px-2 z-10 font-gilroy-regular'>Our design team turns imagination into reality. What you think, you will have!</p>
                </div>
                
                <div className=' relative w-[300px] h-[404px] bg-transparent flex flex-col justify-center items-center ' >
                    <img src={t2} alt="" className=' absolute top-0 right-0 w-full h-full'/>
                    <img src={i2} alt="icon2" className=' z-10'/>
                    <span className='m-5 z-10 font-gilroy-semi-bold text-[24px]'>Cloud Team</span>
                    <p className='m-2 text-center text-[16px] w-[200px] h-[96px] px-2 z-10 font-gilroy-regular'>ready to take your offline business online and use the cloud skills to connect to your business from anywhere.</p>
                </div>
                
                <div className=' w-[300px] h-[404px] relative bg-transparent  flex flex-col justify-center items-center '>
                    <img src={t3} alt="" className=' absolute top-0 left-0 w-full h-full'/>
                    <img src={i3} alt="icon3" className='m-4 z-10' />
                    <span className='m-5 z-10 font-gilroy-semi-bold text-[24px]'>AI ML Team</span>
                    <p className='m-2 text-center text-[16px] w-[200px] h-[96px] z-10 px-2 font-gilroy-regular'>Want to use the power of AI? With the help of our ML experts, we can build your product with the latest capabilities.</p>
                </div>
                
                <div className='  w-[352px] h-[509px] relative bg-transparent  flex flex-col justify-start pt-10 items-center '>
                    <img src={t4} alt="" className=' absolute bottom-24 left-12 w-[297px] h-[465px]'/>
                    <img src={i4} alt="icon4" className='m-4 z-10' />
                    <span className='m-5 z-10 font-gilroy-semi-bold text-[24px]'>Developer Team</span>
                    <p className='m-2 text-center z-10 text-[16px] w-[200px] h-[96px] px-2 font-gilroy-regular'> Get your things done with the help of the best developers on our team. Bring your ideas into reality.</p>
                </div>
            </div>
          </div>
          <div className=' w-full flex justify-center items-center '>
            <img src={line} alt="" />
          </div>
       </div>
    </div>
  )
}

export default Field