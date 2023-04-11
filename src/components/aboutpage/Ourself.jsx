import React from 'react'

const Ourself = () => {
  return (
    <div className=" h-auto md:py-0 py-24 md:h-screen w-full bg-earth bg-cover">
        <div className=' h-full w-full flex justify-center '>
            <div className=' w-[80%] flex justify-between '>
                <div className=' w-full flex flex-col gap-20 text-white   '>
                   <div className=' w-90 flex flex-col gap-5 text-center md:mt-40 '>
                    <span className=' text-4xl lg:text-5xl font-bold '>Who We Are</span>
                    <p className='text-center '>Our values shape the culture of our organization and define who we are. These are at the core<br></br> of how we work and what we do. We are:</p>
                   </div>

                   <div className=' w-full flex flex-col gap-8 lg:flex-row  lg:justify-evenly items-center  '>
                        <div className=' w-[303px] lg:h-[163px] text-center  '>
                            <span className=' text-[22px] font-gilroy-semi-bold'>Your Next-Gen Technology <br/> Partner</span>
                            <p className='text-sm mt-5 lg:text-[20px] font-gilroy-regular leading-6'>We provide industry expertise and solution IPs to help customers achieve successful business outcomes.</p>  
                        </div>
                        <hr className=' md:h-[60%] w-[50%] md:w-0 border-[1px] border-gray-500'/>
                          
                        <div className='w-[303px] lg:h-[163px] text-center '>
                            <span className=' text-[22px] font-gilroy-semi-bold'>Team-Oriented</span>
                            <p className='text-sm mt-5 lg:text-[20px] font-gilroy-regular leading-6'>We work together to drive change by setting the bar for future technologies and our way of working.</p>
                        </div>
                        <hr className=' md:h-[60%] w-[50%] md:w-0 border-[1px] border-gray-500'/>

                        <div className='w-[303px] lg:h-[163px] text-center max-[360px]:w-60'>
                            <span className=' text-[22px] font-gilroy-semi-bold'>Client-Focused</span>
                            <p className='text-sm mt-5 lg:text-[20px] font-gilroy-regular leading-6'>We are, above all else, customer-centric. We are in it for the long run and have an unwavering passion for client success, reflected in every aspect of our relationship with them.</p>
                        </div>
                   </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Ourself