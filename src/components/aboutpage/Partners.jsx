import React from 'react'
import reddit from '../../assets/reddit.png'
import chorus from '../../assets/chorus.png'
import tcs from '../../assets/Tata Consultancy Services - png 0.png'
import pantera from '../../assets/pantera.png'


const Partners = () => {
 
  return (
    <div className=' h-56 bg-black w-full flex flex-col justify-center items-center gap-10 md:gap-12' id="backgorund">
        <span className=' text-[60px] text-white font-gilroy-semi-bold'>Our Partners</span>
        <div className=' flex flex-wrap justify-around md:justify-evenly items-center w-full px-5 md:px-0'>
            <img src={pantera} className= ' w-[158px] h-[70] '/>
            <img src={reddit} className= ' w-[158px] h-[70] '/>
            <img src={tcs} className= ' w-[158px] h-[70] '/>
            <img src={chorus} className= ' w-[158px] h-[70] '/>
            <img src={pantera} className= ' w-[158px] h-[70] '/>
        </div>
    </div>
  )
}

export default Partners