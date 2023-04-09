

const Testimonial = () => {

  return (

    <div className=' h-full md:flex w-full '>
        <div className=' w-full md:w-[75%] h-full m-auto flex flex-col justify-around items-center md:items-start md:justify-around'>

            <div className=" flex md:flex-col flex-row w-full ml-0 md:ml-16 items-center md:gap-20 md:items-start justify-center">
                <div className=' text-2xl md:text-4xl flex-1 flex flex-col gap-10 font-gilroy-bold text-blue-700 text-center md:text-start'>
                    <span className=' text-5xl md:text-[120px] '>200</span>
                    <p className=" lg:text-[40px] ">Leading businesses</p>
                </div>
                <div className=' text-2xl flex-1 flex flex-col gap-10 font-gilroy-bold text-blue-700 text-center md:text-start'>
                    <span className=' text-5xl md:text-[120px]'>200</span>
                    <p className=" lg:text-[40px]">Leading businesses</p>
                </div>
            </div>

            <div className=' w-[90%] flex-2 pt-48 md:w-[420px] mt-10 sm:mt-0 md:pt-0 font-gilroy-semi-bold lg:text-[24px] text-blue-800 text-center md:text-start'>
                <p className=' '>Not only do we help businesses reach their goals, but help build the empire</p>
                <span>- Sathya Nadela</span>
            </div>
        </div>
    </div>

  )
}

export default Testimonial