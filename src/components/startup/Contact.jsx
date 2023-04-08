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

const Contact = () => {
  return (
    <div className='bg-black h-auto xl:h-screen w-full flex flex-col justify-between pt-10 text-white '>
       <div className=' w-full md:w-[80%] flex flex-col h-full m-auto justify-between items-center'>
          <div className=' flex w-full justify-between h-full items-center flex-col lg:flex-row'>

            <div className=' flex flex-col gap-5 w-full md:w-[50%] items-center'>
                <span className=' text-2xl lg:text-4xl font-bold'>Connect with us</span>
                <p className=' lg:text-2xl text-center'>Revolutionize Your Startup's IT Strategy with Our Consultancy Services</p>
            </div>

            <div className=' md:bg-gray-700 bg-opacity-20 h-auto py-5 rounded-md flex flex-col  items-center justify-center gap-10 w-full md:w-[70%] lg:w-[40%]'>
              <span className='  text-2xl m-5 lg:text-4xl font-bold'>Let's build it together</span>
              <form className=' flex flex-col gap-5 w-full px-10'>
                <label htmlFor="username" className=' flex border-b-2 border-b-white py-2 gap-2 w-full'>
                  <PersonIcon/>
                  <input type="text" className=' w-full border-none outline-none bg-transparent' placeholder='Name *'/>
                </label>
                <label htmlFor="username" className=' flex border-b-2 border-b-white py-2 gap-2 w-full'>
                  <BusinessIcon/>
                  <input type="text" className=' w-full border-none outline-none bg-transparent' placeholder='Company Name *'/>
                </label>
                <label htmlFor="username" className=' flex border-b-2 border-b-white py-2 gap-2 w-full'>
                  <MailOutlineIcon/>
                  <input type="text" className=' w-full border-none outline-none bg-transparent' placeholder='Email *'/>
                </label>
                <label htmlFor="username" className=' flex border-b-2 border-b-white py-2 gap-2 w-full'>
                  <PhoneInTalkIcon/>
                  <input type="text" className=' w-full border-none outline-none bg-transparent' placeholder='Phone *'/>
                </label>
                <label htmlFor="username" className=' flex border-b-2 border-b-white h-24 gap-2 w-full'>
                  <SmsIcon/>
                  <textarea rows='4' maxheig cols='50' placeholder='Your Message *' className=' h-full w-full bg-transparent outline-none'/>
                </label>

                <button className='  shadow-md shadow-violet-600 w-max py-1 px-5 border-white border-2 bg-transparent rounded-full'>Submit</button>
              </form>
            </div>
           </div>
          <div className=' w-full flex flex-col items-center py-10 gap-5 justify-center'>
               <span className=' text-base font-bold'>Connect with us</span>
               <div className=' flex gap-5'>
                <TwitterIcon/>
                <LinkedInIcon/>
                <InstagramIcon/> 
                <FacebookIcon/>

               </div>
           </div>
       </div>
       <div className=' w-full border-t-2 h-14 border-t-white flex items-center justify-center'>
               <div className=' w-[90%] xl:w-[80%] flex justify-center md:justify-between items-center h-full'>

                    <div className=' flex md:justify-start justify-center w-full text-xs'>
                      <span>Copyright <CopyrightIcon/> 2023 Hubnex, All Rights Reserved</span>
                    </div>

                    <div className='hidden md:flex gap-2 text-xs w-full justify-end'>
                       <Link to='/about'>About Us</Link>
                       <hr className=' border-[1px] h-4'/>
                        <Link to='service'>Data Protection</Link>
                       <hr className=' border-[1px] h-4'/>
                       <Link to='/about'>Terms and Conditions</Link>
                        <hr className=' border-[1px] h-4'/>
                        <Link to='/about'>Privacy Policy</Link>
                        <hr className=' border-[1px] h-4'/>
                        <Link to='/contact'>Contact Us</Link>
                         <hr className=' border-[1px] h-4'/>
                        <Link to='/'>Invest in Us</Link>
                        <hr className=' border-[1px] h-4'/>
                    </div>
               </div>
           </div>
    </div>
  )
}

export default Contact