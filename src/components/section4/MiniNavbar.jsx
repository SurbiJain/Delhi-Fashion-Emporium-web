import React from 'react'

const MiniNavbar = () => {
  return (
    <div className='miniNav mb-10 '>
      <ul className=' flex flex-row gap-2 text-[14px] '>
          <li>ALL</li>
          <li>FOODS</li>
          <li>DRINKS</li>
          <li>EVENTS</li>
          <li>PASTRIES</li>
        </ul>
    </div>
  )
}

export default MiniNavbar;