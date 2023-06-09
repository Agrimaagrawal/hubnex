import React from 'react'
import Navbar from '../navbar/Navbar'
import Ourself from '../Aboutus'
import Partner from '../aboutpage/Partners'
import Footer from '../footer/Footer'
import Swiperpartners from '../aboutpage/Swiperpartners'

const Healthcare = () => {

    const isMobile=()=> {
        const match=window.matchMedia('(pointer:coarse)');
        return(match && match.matches); 
      }

  return (
    <>
     <div className=' h-screen bg-healthindus bg-cover bg-center w-full relative '>
        <Navbar />
    <div className=' h-screen w-full flex items-center justify-center'>
        <div className=' w-[80%] flex items-center'>
            <div className=' text-white flex flex-col gap-10 w-90 max-[820px]:text-center'>
                <span className=' text-4xl md:text-5xl font-gilroy-bold'>empowering <br/> healthcare with AI</span>
                <p className=' text-lg '>We help you realize intelligent, connected, <br></br>and patient-centric healthcare.</p>
                <button className=' h-[44px] w-[140px] border-violet-700 border-[2px] lg:py-[10px] px-5 border-t-0 border-l-0 relative bg-transparent rounded-full'>
                    <Link className=' w-full h-full rounded-full flex justify-center items-center  font-gilroy-semi-bold text-[20px] absolute -left-[2px] bottom-[2px] border-white border-2'>Read more</Link>
                  </button>            
            </div>
        </div>
    </div>
    </div>
    
    <div className=' h-auto py-10 md:py-0 md:min-h-screen w-full bg-bgblack flex items-center flex-col'>
        <div className=' text-white xl:mt-20'>
            <h1 className='font-extrabold xl:text-5xl text-2xl font-gilroy p-6 text-center'>Innovating for the Future of Care</h1>

        </div>
        <div className='text-white xl:w-[990px]  '>
        <p className='font-gilroy xl:text-lg font-extrathin xl:justify-center text-center text-sm m-3'>Our focus is on assisting healthcare and life sciences companies on a global scale to rethink their operational procedures and provide exceptional patient experiences. By combining our extensive knowledge of the industry and business processes with advanced technological expertise, we are dedicated 
                to creating groundbreaking solutions that revolutionize the way our clients conduct their business.</p>
        </div>
        <div className='flex mt-5 xl:mt-20 xl:gap-36 xl:flex-row flex-col gap-4'>
            
            <div className='text-white flex  '>
            <div className='xl:w-[12px] xl:h-[66px] w-[5px] h-[43px] bg-linegreen rounded-full mr-2'></div>
                <p className='xl:p-2 xl:w-[300px] w-[250px]'  >Emergency services  impacting 850+ million people</p>

            </div>
            <div className='text-white flex'>
            <div className='xl:w-[12px] xl:h-[66px] w-[5px] h-[43px] bg-linegreen rounded-full mr-2'></div>
                <p className='p-2 xl:w-[300px] w-[250px]'>Extrema Market Access Program</p>
            </div>
            <div className='text-white flex'>
            <div className='xl:w-[12px] xl:h-[66px] w-[5px] h-[43px] bg-linegreen rounded-full mr-2'></div>
                <p className='xl:p-2 xl:w-[300px] w-[250px]'>Digital transformation partner for larger hospitals</p>

            </div>

        </div>
        <div className='flex xl:mt-20 xl:gap-36 xl:flex-row flex-col  gap-4 mt-4 '>
            
            <div className='text-white flex  '>
            <div className='xl:w-[12px] xl:h-[66px] w-[5px] h-[43px] bg-linegreen rounded-full mr-2'></div>
                <p className='xl:p-2 xl:w-[300px] w-[250px]'>Bot enabled emergency access for differently abled</p>

            </div>
            <div className='text-white flex'>
            <div className='xl:w-[12px] xl:h-[66px] w-[5px] h-[43px] bg-linegreen rounded-full mr-2'></div>
                <p className='p-2 xl:w-[300px] w-[250px]'>Technology led next generation drug development</p>
            </div>
            <div className='text-white flex'>
            <div className='xl:w-[12px] xl:h-[66px] w-[5px] h-[43px] bg-linegreen rounded-full mr-2'></div>
                <p className='xl:p-2 xl:w-[300px] w-[250px] '>10000 patient through our Patient Access Program</p>

            </div>

        </div>

        



    </div>

    <div className='bg-bgblack h-auto py-10 md:py-0 md:min-h-screen flex justify-center items-center flex-col '>
            <div className='text-white text-5xl font-gilroy font-bold '><h1>What We Do</h1></div>
            <div className='text-white text-lg font-gilroy p-6' ><p>Delivering exponential value throughout the care ecosystem</p></div>
            <div className='flex flex-wrap justify-center'>
            <div className=' text-white bg-white/10 backdrop-blur-lg rounded-md border p-4 xl:w-[600px] m-2'>
                    <h1 className='font-semibold text-2xl mb-4'>Healthcare Provider</h1>
                    <p>Technology led value-driven solutions for patient care. We offer innovative and end-to-end integrated solutions for healthcare providers. Our solutions enhance the efficiency of physicians, 
                        hospitals, ancillary facilities, clinics, governmental health bodies and public health organizations.</p>

                </div>
                <div className=' text-white bg-white/10 backdrop-blur-lg rounded-md border p-4 xl:w-[600px] m-2'>
                    <h1 className='font-semibold text-2xl mb-4 '>MedTech</h1>
                    <p>Enabling device manufacturers to design and build nexgen healthcare technologies. Our MedTech practice is a partner of choice for global industry majors. We develop next generation products and 
                        technologies through strong domain capabilities in end to end medical product development solutions.</p>

                </div>
                <div className=' text-white bg-white/10 backdrop-blur-lg rounded-md border p-4 xl:w-[600px] m-2'>
                    <h1 className='font-semibold text-2xl mb-4'>Pharmaceuticals</h1>
                    <p>Committed to enhance continuum of care for our clients by innovative and disruptive technologies. Our deep pharmaceutical domain expertise, historical R&D experience, outcome-based partnerships with global giants 
                        and diverse geographical outreach have enabled our clients to achieve seamless digital transformation</p>

                </div>
                <div className=' text-white bg-white/10 backdrop-blur-lg rounded-md border p-4 xl:w-[600px] m-2'>
                    <h1 className='font-semibold text-2xl mb-4 '>Healthcare Payors</h1>
                    <p>Next-generation solutions empowering Payors to improve care quality and increase member satisfaction. Our Healthcare Payer Practice has been consistently ranked as one of the
                         most matured practices in the industry, with over 15 years’ experience in serving several US Health Insurers.</p>
                </div>
            </div>

        </div>
        <Ourself/>
         {isMobile() ? <Swiperpartners/> : <Partner/> }
        <Footer/>
    </>
  )
}

export default Healthcare
