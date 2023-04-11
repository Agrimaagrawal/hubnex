import React from 'react'
import line from '../../assets/line.png'

const Choose = () => {
  return (
    <div className=" h-auto md:py-0 py-24 md:h-screen overflow-hidden w-full bg-black bg-cover">
        <div className=' h-full w-full flex justify-center '>
            <div className='w-[80%] flex justify-center '>
                <div className=' w-full flex flex-col gap-20 text-white '>

                   <div className=' w-90 flex flex-col gap-10 text-center md:mt-40 '>
                    <span className=' text-4xl lg:text-[64px] font-gilroy-bold tracking-wider '>why choose us?</span>
                    <p className='text-center text-[20px] font-gilroy-regular'>Hubnex Lab employs industry best practices to help businesses globally scale, transform, and gain competitive advantage through <br /> innovative software solutions. <br /></p>
                   </div>

                   <div className=' w-full flex flex-col gap-8 lg:gap-0 lg:flex-row justify-between items-center  '>
                        <div className=' w-80 text-center mb-4 lg:mr-9 '>
                            <span className=' text-[24px] font-gilroy-semibold'>Your Next-Gen Technology <br/> Partner</span>
                            <p className='text-[18px] font-gilroy-regular'><br />Adherence to agile and CI/CD <br />principles throughout the product <br />development lifecycle gain <br />competitive advantage through <br />innovative software solutions.</p>    
                        </div>
                        <hr className=' w-[50%] md:w-0 h-[50%] border-gray-700 border-[1px]'/>
                       
                        <div className='w-80 text-center mb-4 lg:mr-9 '>
                            <span className=' text-[24px] font-gilroy-semibold '>Team-Oriented</span>
                            <p className='text-[18px] font-gilroy-regular'> <br /><br />Efficient & transparent <br />development, communication, and<br /> reporting Our domain knowledge,<br /> expertise, and proven<br /> methodologies enable us to create.</p>
                        </div>
                        <hr className=' w-[50%] md:w-0 h-[50%] border-gray-700 border-[1px]'/>

                        <div className='w-80 text-center  mb-4 lg:mr-9 max-[360px]:w-60'>
                            <span className=' text-[24px] font-gilroy-semibold'>Client-Focused</span>
                            <p className=' text-[18px] font-gilroy-regular'> <br /><br />Guaranteed maintenance and <br />after-sales support smart digital<br /> experiences that add value to <br />diverse businesses.</p>
                        </div>
                   </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Choose