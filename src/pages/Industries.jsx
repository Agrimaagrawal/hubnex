import React from 'react'
import Hero from '../components/industrypage/Hero'
import Work from '../components/industrypage/Work'
import Footer from '../components/footer/Footer'
import Innovation from '../components/industrypage/Innovation'
import Partners from '../components/aboutpage/Partners'
import Swiperpartners from '../components/aboutpage/Swiperpartners'


const Industries = ()=>{
  const isMobile=()=> {
    const match=window.matchMedia('(pointer:coarse)');
    return(match && match.matches);
    
    
  }
  
  return (
    <div className=' overflow-hidden'>
        <Hero/>
        <Innovation/>
        <Work/>
        {isMobile()? <Swiperpartners/> :<Partners/>}
        <Footer />
    </div>
  )
}

export default Industries