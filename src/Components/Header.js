import React from 'react'

export default function Header() {
  return (
    <>
    <div className='bg-blue-900 p-5 lg:max-w-[1400px] mx-auto'>
    <div className=''>
    <input type="text" className=' rounded-3xl' placeholder='Find your Services' />
    {/* <i className='absolute '><IoIosSearch /></i> */}
    </div>
    </div>
    </>
  )
}
