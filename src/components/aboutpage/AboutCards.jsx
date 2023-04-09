import React from 'react';
import mission from '@assets/Our-Mission.png.png';
import philosophy from '@assets/Our-Philosophy.png.png';
import strategy from '@assets/Our-Strategy.png.png';
import vision from '@assets/Our-Vision.png.png';


const Aboutsection3 = () => {
  return (
    <>
      <div className='bg-ablack w-full h-screen flex justify-evenly items-center gap-5 flex-col '>
        <div className='text-white font-gilroy-bold text-4xl flex justify-center items-center lg:h-[146px] lg:w-full md:text-[3rem] lg:text-[70px] text-center px-5 md:px-0 pt-20 max-w-[600px]'>
          <h1 className='text-twhite h-full w-full leading-10 '>Your success is our top priority -always.</h1>
        </div>
        <div className='text-white flex justify-center items-center lg:h-[180px] font-gilroy-regular text-base md:text-[1.3rem] lg:text-[23px] text-center p-5 max-w-[1090px] mt-3'>
          <p>At our IT consultancy firm, we prioritize certain values and approaches that have helped us build a reputation for excellence in the industry. First and foremost, we prioritize customer satisfaction, and we always go the extra mile to ensure our clients' needs are met.</p>
        </div>
        <div className='flex flex-wrap justify-center mt-6'>
          <div className="card flex flex-col w-56 rounded-lg m-6 p-5 lg:p-2 bg-gray-100 items-center font-gilroy-bold sm:w-60 overflow-hidden">
            <div className='m-4 bg-orange p-2 rounded-full '>
              <img src={mission} alt="mission" className='w-[31px] h-[31px]'/>
            </div>
            <h1 className='text-center mt-2 text-grey text-2xl font-semibold'>Our Mission</h1>
            <div className='text-center m-2 text-grey text-base'>Use the power of technology and our deep understanding of the industry to solve engineering challenges of any nature, scale, or complexity</div>

          </div>
          <div className="card flex flex-col w-56 rounded-lg m-6 p-5 lg:p-2 bg-gray-100 items-center font-gilroy-bold sm:w-60 overflow-hidden">
            <div className='m-4 bg-orange p-2 rounded-full '><img src={philosophy} alt="mission" className='w-[31px] h-[31px]'/></div>
            <h1 className='text-center m-2 text-grey text-2xl font-semibold '>Our Philosophy</h1>
            <div className='text-center m-2 text-grey text-base'>Go above and beyond to bring in new perspectives, relentless energy, and utmost dedication to driving client success</div>

          </div>
          <div className="card flex flex-col w-56 rounded-lg m-6 p-5 lg:p-2 bg-gray-100 items-center font-gilroy-bold sm:w-60 overflow-hidden">
            <div className='m-4 bg-orange p-2 rounded-full '><img src={vision} alt="mission" className='w-[31px] h-[31px]'></img></div>
            <h1 className='text-center mt-2 text-grey text-2xl font-semibold'>Our Vision</h1>
            <div className='text-center m-2 text-grey text-base'>Harness innovation to accelerate digital transformation and drive change & client success</div>

          </div>
          <div className="card flex flex-col w-56 rounded-lg m-6 p-5 lg:p-2 bg-gray-100 items-center font-gilroy-bold sm:w-60 overflow-hidden">
            <div className='m-4 bg-orange p-2 rounded-full '><img src={strategy} alt="mission" className='w-[31px] h-[31px]'></img></div>
            <h1 className='text-center mt-2 text-grey text-2xl font-semibold'>Our Strategy</h1>
            <div className='text-center m-2 text-grey text-base'>Leverage next-gen technologies, robust internal frameworks, and defined processes to provide best-in-class services within timelines</div>
          </div>     
        </div>
      </div>
    </>
  )
}

export default Aboutsection3
