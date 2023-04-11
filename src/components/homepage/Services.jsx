import React, { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import iphone from '@assets/iphoneTransparent.png'
import service1 from '@assets/service1.png'
import service2 from '@assets/service2.png'
import service3 from '@assets/service3.png'
import service4 from '@assets/service4.png'
import { Link } from 'react-router-dom'



const Services = () => {


    const images = [
        {
            'id': 1,
            'url': service1,
        },
        {
            'id': 2,
            'url': service2
        },
        {
            'id': 3,
            'url': service3
        },
        {
            'id': 4,
            'url': service4
        }
    ]

    const [slide, setSlide] = useState(0);

    const timeoutRef = useRef(null);

    function resetTimeout() {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    }
  
    useEffect(() => {
      resetTimeout();
      timeoutRef.current = setTimeout(
        () =>
          setSlide((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
          ),
        3000
      );
      return () => {
        resetTimeout();
      };
    }, [slide]);
    

  return (


<div className=' w-full h-full relative' >
    <div className=' w-full md:w-[70%] h-full flex-none  md:flex m-auto justify-between items-center py-5 md:py-0'>
        <div className=' flex flex-col md:gap-5 lg:w-full justify-around md:justify-center sm:gap-5 h-full font-semibold w-full'>
            <h2 className=' md:static top-8 left-14 md:mt-0 text-4xl md:text-[60px] lg:w-full font-gilroy-bold text-center leading-tight md:text-start'>let us build it for you.</h2>
            <div className=' flex md:h-full lg:hidden flex-col md:gap-10  justify-center items-center w-full'>
              <div className=' flex w-[200px] md:w-[300px] h-[400px] md:h-auto relative overflow-hidden'>
                <Link to='service' className=' z-10 w-full h-full'>
                  <img src={iphone}/>
                </Link>
                <div style={{ transform: `translate3d(${-slide * 100}%, 0, 0)` }} className=' h-full w-full whitespace-nowrap absolute transition ease-in-out duration-1000'>
                  {images.map((image)=> (
                        <img key={image.id} src={image.url} alt="services" className=' w-full h-full inline-block '/>
                  ))}
                  </div>
              </div>
            <div className=' h-3 rounded-full w-32 mt-5  bg-gray-300 overflow-hidden'>
              {images.map((image)=>(
                  <div key={image.id} style={{ transform: `translate3d(${slide * 132}%, 0, 0)` }} className='h-full rounded-full w-[20%] bg-slate-500 transition ease-linear duration-1000'></div>
              ))}
              </div>
          </div>

            <div className=' md:static md:flex-none flex flex-col justify-center gap-5 items-center md:items-start bottom-5'>
              <p className=' text-lg md:text-[28px] text-center md:text-start font-gilroy-semi-bold'>providing you industry level<br/> solutions to cater your needs and <br/> help you become the next big<br/> thing</p>
              <Link to='/service' className='w-max bg-black text-xs md:text-[20px] text-white py-2 md:py-[10px] px-5 rounded-full'>Get started</Link>
            </div>
        </div>



        <div className='hidden md:static lg:flex lg:h-full flex-col md:gap-10  justify-center items-end w-full'>
            <div className=' flex w-[200px] md:w-[310px] h-[400px] md:h-auto relative overflow-hidden'>
              <Link to='service' className=' z-10 w-full h-full'>
                <img src={iphone}/>
              </Link>
               <div style={{ transform: `translate3d(${-slide * 100}%, 0, 0)` }} className=' h-full w-full  whitespace-nowrap absolute transition ease-in-out duration-1000'>
                {images.map((image)=> (
                       <img src={image.url} alt="services" className=' w-full h-full inline-block object-cover'/>
                ))}
                </div>
            </div>
           <div className=' h-3 rounded-full w-32 md:w-[231px] mt-5 md:mt-0 ml-8 md:ml-0 md:mr-8 bg-gray-300 overflow-hidden'>
            {images.map((image)=>(
                <div style={{ transform: `translate3d(${slide * 132}%, 0, 0)` }} className='h-full rounded-full w-[53px] bg-slate-500 transition ease-linear duration-1000'></div>
            ))}
            </div>
        </div>
    </div>
</div>
  )
}

export default Services