import React from 'react'
import { Link } from 'react-router-dom'

const Abouts = () => {
  return (
    <div className=' bg-abouts bg-center bg-cover bg-no-repeat xl:h-[982px] h-screen w-full'>
        <div className=' h-full w-full flex items-center justify-center'> 
          <div className=' flex items-center h-full w-[80%]'>
            <div className=' flex flex-col text-black gap-10 w-[650px] '>
              <span className=' text-5xl lg:text-[70px] font-gilroy-bold'>Digital guidance <br/>expertise</span>
              <p className=' text-lg lg:w-[861px] font-gilroy-medium lg:text-[24px]'>We are a leading IT consultancy with expertise in innovative solutions for modern challenges. Our client-centric approach enables us to design tailored solutions that keep businesses ahead in the ever-evolving digital landscape.</p>
              <button className=' h-[44px] w-[140px] border-violet-700 border-[2px] lg:py-[10px] px-5 border-t-0 border-l-0 relative bg-transparent rounded-full'>
                    <Link className=' w-full h-full rounded-full flex justify-center items-center  font-gilroy-semi-bold text-[20px] absolute -left-[2px] bottom-[2px] border-black border-2'>Read more</Link>
                  </button>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Abouts