import React, { useEffect, useReducer, useState } from 'react'
import arrow from '../../assets/arrowR.png'
import { Link } from 'react-router-dom'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import CopyrightIcon from '@mui/icons-material/Copyright';
import axios from 'axios';

const Footer = () => {

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNo, setPhoneNo] = useState(null);
  const [message, setMessage] = useState("")

  const userData = {
    method : 'POST',
    headers : { 'Content-Type': 'application/json' },
    body : JSON.stringify({
      firstname: firstName,
      lastname: lastName,
      email: email,
      phoneNo: phoneNo,
      message: message
    })
  };

  const updateUser = {
    method : 'PUT',
    headers : { 'Content-Type': 'application/json' },
    body : JSON.stringify({
        status: true
    })
  };

  
  const handleSubmit = async (e)=>{
    e.preventDefault();
    try {
      const data = await (await fetch("http://localhost:3000/api/user", userData)).json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className=' flex flex-col justify-center items-center h-auto lg:h-full w-full bg-black'>
      <div className=' md:w-[70%] h-full lg:flex sm:justify-between items-center text-white py-5 lg:py-0 md:mt-28'>
        <div className=' flex flex-col gap-[36px] md:gap-8'>
          <div className=' text-4xl lg:text-[70px] font-gilroy-extrabold text-white'>
            <h1 className=' text-center lg:text-start'>let's talk</h1>
          </div>
          <div className=' w-full md:w-[368px] lg:h-[330px] text-1xl lg:text-[48px] font-gilroy-light'>
            <p className=' text-center leading-tight lg:text-start'>have some great idea or brand to develop? let's build it together</p>
          </div>
          <div className=' text-xs font-gilroy-light md:text-[16px]'>
            <p className=' text-center md:text-start leading-6'>our team will reach out to you as soon as <br/>possible</p>
          </div>
        </div>
          <form className='flex flex-col gap-4 m-auto text-[16px] w-80 md:w-auto md:m-0 mt-10  md:mt-0' onSubmit={handleSubmit}>
            <label className=' text-gray-200' htmlFor='first_name'>FIRST NAME</label>
            <input className='  outline-none bg-transparent border-b-[1px] border-b-gray-300 w-80 md:w-96' type='text' id='first_name' required maxLength={25} onChange={(e)=>setFirstName(e.target.value)}/>
            <label className=' text-gray-200' htmlFor='last_name'>LAST NAME</label>
            <input className='  outline-none bg-transparent border-b-[1px] border-b-gray-300 w-80 md:w-96' type='text' id='last_name' required maxLength={25} onChange={(e)=>setLastName(e.target.value)}/>
            <label className=' text-gray-200' htmlFor='email'>EMAIL</label>
            <input className='  outline-none bg-transparent border-b-[1px] border-b-gray-300 w-80 md:w-96' type='email' id='email' required onChange={(e)=>setEmail(e.target.value)}/>
            <label className=' text-gray-200' htmlFor='mobile_no'>PHONE NUMBER</label>
            <input className='  outline-none bg-transparent border-b-[1px] border-b-gray-300 w-80 md:w-96' type='tel' id='mobile_no' required maxLength={12} onChange={(e)=>setPhoneNo(e.target.value)}/>
            <label className=' text-gray-200' htmlFor='message'>MESSAGE</label>
            <input className=' pt-5 outline-none bg-transparent border-b-[1px] border-b-gray-300 w-80 md:w-96' type='text' id='message' required onChange={(e)=>setMessage(e.target.value)}/>
            <button className=' h-[41px] mt-10 w-[121px] py-1 px-5 border-violet-700 border-[2px] border-t-0 border-l-0 relative bg-transparent rounded-full'>
              <label htmlFor='submit' className='flex cursor-pointer gap-3 w-full h-full rounded-full font-gilroy-light items-center justify-center text-[18px] absolute -left-[2px] bottom-[2px] border-white border-2'>
                    <input type='submit' placeholder='Submit' className=' cursor-pointer'/>
                    <img src={arrow} alt="arrow" width={15} height={15} className='object-contain'/>   
              </label>
            </button>
          </form>
      </div>
      <div className=' flex flex-col w-full h-40 justify-center xl:mt-8 items-center gap-8 text-white sm:h-80 text-lg'>
        <span className=' font-gilroy-semi-bold text-[24px]'>connect with us</span>
        <div className=' flex flex-wrap gap-5 items-center'>
          <Link to='/about'><TwitterIcon fontSize='large'/></Link>
          <Link to='/about'><LinkedInIcon fontSize='large'/></Link>
          <Link to='/about'><InstagramIcon fontSize='large'/></Link>
          <Link to='/about'><FacebookIcon fontSize='large'/></Link>
        </div>
      </div>
      <hr className=' w-full border-t-white border-t-[1px]'/>
      <div className=' h-10 w-[90%] xl:w-[80%] m-auto flex justify-center md:justify-between text-white items-center'>
        <div>
          <span className=' text-[15px] font-gilroy-light'>Copyright <CopyrightIcon fontSize='small'/> 2023 Hubnex. All Rights Reserved</span>
        </div>
        <div className='hidden lg:flex gap-2 text-[15px] font-gilroy-light '>
          <Link to='/about'>About Us</Link>
          <hr className=' border-r-[1px] h-5'/>
          <Link to='service'>Data Protection</Link>
          <hr className=' border-r-[1px] h-5'/>
          <Link to='/admin'>Terms and Conditions</Link>
          <hr className=' border-r-[1px] h-5'/>
          <Link to='/about'>Privacy Policy</Link>
          <hr className=' border-r-[1px] h-5'/>
          <Link to='/contact'>Contact Us</Link>
          <hr className=' border-r-[1px] h-5'/>
          <Link to='/'>Invest in Us</Link>
          <hr className=' border-r-[1px] h-5'/>
        </div>
      </div>
    </div>
  )
}

export default Footer