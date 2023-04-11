import React from 'react'
import { useState } from 'react'

import search from '@assets/search_icon.png'
import close from '@assets/Xmark.png'


const Search = ({toggler}) => {

  const items = ['chatgpt', 'industry', 'startups', 'business'];

  const [state, setState] = useState(
    {
      query : "",
      list: [],
    }
  );

  const [checkOpen, setCheckOpen] = useState(false)

  const handleSearch = (e)=>{
    const results = items.filter((item)=>{
      if(e.target.value == " ") return items;
      return item.includes(e.target.value);
    })
    setState(
      {
        query : e.target.value,
        list: results
      }
    )
  }

  const handleCloseSearch = ()=>{
    toggler ? setCheckOpen((prev)=>!prev) : setCheckOpen(false)
  }
  return (
    <>
    {!checkOpen &&
      <div className=' absolute bg-[#66666633] lg:h-[73px] lg:w-[430px] justify-center items-center flex z-[100] top-24 right-20'>
        <input type='text' placeholder='Search' className=' px-2 h-[40px] outline-none placeholder:text-white text-white w-[400px] bg-transparent rounded-md border-[2px] border-white'/>
      </div>
    }
    </>
  )
}

export default Search