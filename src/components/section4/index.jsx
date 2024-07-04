import React from 'react'
import MiniNavbar from './MiniNavbar'
import Image from './Image'

const Section4 = () => {
  return (
    <div className='section4 '>
    <div className='flex flex-col items-center  p-[140px_15px_140px] lg:mx-44 '>
      <div className='flex flex-col items-center gap-5 mb-10'>
      <div className='heading mb-3 basis-auto text-4xl font-semibold leading-7'>My Selected Shots</div>
      <div className='description'>Photography is my passion and I love to turn ideas into beautiful things</div>
      </div>
      <MiniNavbar/>
      <Image/>
    </div>
    </div>
  )
}

export default Section4