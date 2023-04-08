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
    <div className=' h-auto md:h-screen py-10 bg-black w-full text-white flex justify-center items-center'>
       <div className=' w-[80%] flex flex-col justify-between items-center'>
          <span>Why Choose Us</span>
          <div className=' flex flex-col w-full items-center  justify-center gap-10'>
            <span className=' text-4xl font-bold m-7'>Meet Our Team</span>
            <div className=' flex flex-wrap w-full lg:justify-between item-center justify-center'>
                
                <div className='  bg-transparent w-60 relative flex flex-col justify-center items-center '>
                    <img src={t1} alt="" className=' absolute -top-2 right-2 '/>
                    <img src={i1} alt="icon1" className=' z-10'/>
                    <span className='m-5 z-10'>Design Team</span>
                    <p className='m-2 text-center text-sm px-2 z-10'>Our design team turns imagination into reality. What you think, you will have!</p>
                </div>
                
                <div className=' relative w-60 bg-transparent flex flex-col justify-center items-center ' >
                    <img src={t2} alt="" className=' absolute top-0 right-0 '/>
                    <img src={i2} alt="icon2" className=' z-10'/>
                    <span className='m-5 z-10'>Cloud Team</span>
                    <p className='m-2 text-center text-sm px-2 z-10'>ready to take your offline business online and use the cloud skills to connect to your business from anywhere.</p>
                </div>
                
                <div className=' w-60 bg-transparent relative flex flex-col justify-center items-center '>
                    <img src={t3} alt="" className=' absolute top-0 left-1 '/>
                    <img src={i3} alt="icon3" className='m-4 z-10' />
                    <span className='m-5 z-10'>AI ML Team</span>
                    <p className='m-2 text-center text-sm z-10 px-2'>Want to use the power of AI? With the help of our ML experts, we can build your product with the latest capabilities.</p>
                </div>
                
                <div className='  w-60 bg-transparent relative flex flex-col justify-center items-center '>
                    <img src={t4} alt="" className=' absolute -top-2 left-3 '/>
                    <img src={i4} alt="icon4" className='m-4 z-10' />
                    <span className='m-5 z-10'>Developer Team</span>
                    <p className='m-2 text-center z-10 text-sm px-2'> Get your things done with the help of the best developers on our team. Bring your ideas into reality.</p>
                </div>
            </div>
          </div>
          <div className=' w-full flex justify-center items-center mt-32'>
            <img src={line} alt="" />
          </div>
       </div>
    </div>
  )
}

export default Field