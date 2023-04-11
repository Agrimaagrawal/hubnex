import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import BusinessIcon from '@mui/icons-material/Business';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import SmsIcon from '@mui/icons-material/Sms';
import CopyrightIcon from '@mui/icons-material/Copyright';
import { Link } from 'react-router-dom';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import './style.css'

const Contact = () => {
  return (
    <div className='bg-black h-[1024px] w-full flex flex-col justify-between pt-10 text-white '>
       <div className=' w-full md:w-[90%] flex flex-col h-full m-auto justify-between items-center'>
          <div className=' flex w-full justify-between h-full items-center flex-col lg:flex-row'>

            <div className=' flex flex-col gap-20 w-full md:w-[50%] items-center lg:items-start'>
                <span className=' text-2xl lg:text-[70px] font-gilroy-semi-bold'>Connect with us</span>
                <p className=' lg:text-[28px] text-center lg:text-start font-gilroy-medium'>Revolutionize Your Startup's IT Strategy with Our Consultancy Services</p>
            </div>

            <div className='  formDesign box h-auto py-5 rounded-md flex flex-col  items-center justify-center gap-10 w-[95%] md:w-[70%] lg:w-[592px]'>
              <span className='  text-2xl m-5 lg:text-[40px] font-gilroy-bold'>Let's build it together</span>
              <form className=' flex flex-col gap-5 w-full px-10 font-gilroy-medium text-[20px] z-50'>
                <label htmlFor="username" className=' flex border-b-2 border-b-gray-600 py-2 gap-5 w-full'>
                  <PersonIcon/>
                  <input type="text" className=' w-full border-none outline-none bg-transparent' placeholder='Name *'/>
                </label>
                <label htmlFor="username" className=' flex border-b-2 border-b-gray-600 py-2 gap-5 w-full'>
                  <BusinessIcon/>
                  <input type="text" className=' w-full border-none outline-none bg-transparent' placeholder='Company Name *'/>
                </label>
                <label htmlFor="username" className=' flex border-b-2 border-b-gray-600 py-2 gap-5 w-full'>
                  <MailOutlineIcon/>
                  <input type="text" className=' w-full border-none outline-none bg-transparent' placeholder='Email *'/>
                </label>
                <label htmlFor="username" className=' flex border-b-2 border-b-gray-600 py-2 gap-5 w-full'>
                  <PhoneInTalkIcon/>
                  <input type="text" className=' w-full border-none outline-none bg-transparent' placeholder='Phone *'/>
                </label>
                <label htmlFor="username" className=' flex border-b-2 border-b-gray-600 h-24 gap-5 w-full'>
                  <SmsIcon/>
                  <textarea rows='4' maxheig cols='50' placeholder='Your Message *' className=' h-full w-full bg-transparent outline-none'/>
                </label>
                
                <button className=' h-[41px] w-[121px] py-1 px-5 border-violet-700 border-[2px] border-t-0 border-l-0 relative bg-transparent rounded-full'>
                  <input type='submit' placeholder='Submit' className=' w-full h-full rounded-full font-gilroy-light text-[18px] absolute -left-1 bottom-1 border-white border-2'/>
                  </button>
              </form>
            </div>
           </div>
          <div className=' w-full flex flex-col items-center py-10 gap-5 justify-center'>
               <span className=' text-[24px] font-gilroy-semi-bold'>Connect with us</span>
               <div className=' flex gap-5'>
                <TwitterIcon fontSize='large'/>
                <LinkedInIcon fontSize='large'/>
                <InstagramIcon fontSize='large'/> 
                <FacebookIcon fontSize='large'/>

               </div>
           </div>
       </div>
       <div className=' w-full border-t-2 h-14 border-t-white flex items-center justify-center'>
               <div className=' w-[90%]  flex justify-center md:justify-between items-center h-full'>

                    <div className=' flex md:justify-start justify-center w-full font-gilroy-light text-[15px]'>
                      <span>Copyright <CopyrightIcon/> 2023 Hubnex, All Rights Reserved</span>
                    </div>

                    <div className='hidden md:flex gap-2 text-[15px] font-gilroy-light w-full justify-end'>
                       <Link to='/about'>About Us</Link>
                       <hr className=' border-[1px] h-5'/>
                        <Link to='service'>Data Protection</Link>
                       <hr className=' border-[1px] h-5'/>
                       <Link to='/about'>Terms and Conditions</Link>
                        <hr className=' border-[1px] h-5'/>
                        <Link to='/about'>Privacy Policy</Link>
                        <hr className=' border-[1px] h-5'/>
                        <Link to='/contact'>Contact Us</Link>
                         <hr className=' border-[1px] h-5'/>
                        <Link to='/'>Invest in Us</Link>
                        <hr className=' border-[1px] h-5'/>
                    </div>
               </div>
           </div>
    </div>
  )
}

export default Contact