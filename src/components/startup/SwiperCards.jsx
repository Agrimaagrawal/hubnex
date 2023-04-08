import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import i1 from '../../assets/i1.png'
import i2 from '../../assets/i2.png'
import i3 from '../../assets/i3.png'
import i4 from '../../assets/i4.png'


// import required modules
import { Autoplay, FreeMode, Pagination } from "swiper";

const Swiperpartners = () => {
  return (
    <div className='bg-black text-white h-auto '>
        <div className="text-white font-bold text-4xl p-5 text-center"><h1>Our Partners</h1></div>
     <Swiper
        slidesPerView={1}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination,Autoplay]}
        autoplay={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='  m-auto gap-3 border w-60 flex flex-col justify-center items-center bg-contain bg-no-repeat p-3' id="box" >   
                <img src={i1} alt="icon1" />
                <span className=' text-center '>Design Team</span>
                <p className='text-center '>Our design team turns imagination into reality. What you think, you will have!</p>    
            </div>
          </SwiperSlide>

        <SwiperSlide >
            <div className=' m-auto w-60 p-3 gap-3 bg-contain bg-no-repeat flex flex-col justify-center items-center border ' id="box2">
                    <img src={i2} alt="icon2" />
                    <span className=''>Cloud Team</span>
                    <p className='text-center'>ready to take your offline business online and use the cloud skills to connect to your business from anywhere.</p>
                </div>
          </SwiperSlide>

        <SwiperSlide className='mb-6' >
        <div className=' m-auto w-60 bg-card3 p-3 bg-contain bg-no-repeat gap-3 flex flex-col justify-center items-center border ' id="box3">
                    <img src={i3} alt="icon3" className='m-4' />
                    <span className=''>AI ML Team</span>
                    <p className=' text-center'>Want to use the power of AI? With the help of our ML experts, we can build your product with the latest capabilities.</p>
                </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className='  m-auto w-60 p-3 gap-3 bg-contain bg-no-repeat flex flex-col justify-center items-center border'id="box4">
                    <img src={i4} alt="icon4" className='' />
                    <span className=' '>Developer Team</span>
                    <p className=' text-center'> Get your things done with the help of the best developers on our team. Bring your ideas into reality.</p>
                </div>
        </SwiperSlide>
       
      </Swiper>
      
    </div>
  )
}

export default Swiperpartners