import React from 'react'
import line from '@assets/lineDesign.png'

const Testimonial = () => {
  return (
    <div className=' bg-black h-[700px] w-full relative flex py-10 justify-center text-white'>
      <div className='w-52 h-40 rounded-full bg-slate-400 absolute top-8 left-6 ' id="circle"></div>
      <div className=' w-[80%] flex flex-col justify-between'>
           <span className=' text-[20px] font-gilroy-medium'>Testimonial</span>
         <div className=' flex flex-col justify-between w-full md:w-[80%] m-auto h-[60%] items-center'>
              <h1 className=' text-4xl lg:text-[70px] font-gilroy-bold text-center'>what people say about us</h1>
              <p className=' text-center m-5 font-gilroy-regular lg:text-[24px]'>Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. </p>
              <span className=' text-center flex flex-col items-center gap-1 text-[28px] font-gilroy-bold'>Rahul Sarkar <span className=' text-[20px] font-gilroy-medium'>UI/UX Design</span></span>
            </div>
         <div className=' w-full flex justify-center items-center'>
          <img src={line} alt="" />
         </div>
      </div>
    </div>
  )
}

export default Testimonial