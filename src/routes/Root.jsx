import React from 'react'
import { Outlet } from 'react-router-dom'
import ScrollTop from './ScrollTop.js'


const Root = () => {
  return (
    <>
      <div className='font-gilroy-regular'>
        <ScrollTop/>
          <Outlet />
      </div>
    </>
  )
}

export default Root