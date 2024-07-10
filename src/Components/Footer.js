import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci"
import { IoLogoApple } from "react-icons/io5";
import { IoLogoGooglePlaystore } from "react-icons/io5";
export default function Footer() {
  return (
    <>
    <div className='lg:max-w-[1400px] mx-auto'>
    <div className='bg-blue-900 flex justify-between p-3 gap-3 '>
        <div className='flex gap-3 ml-5 text-white'>
        <i><FaInstagram /></i>
        <i><CiLinkedin /></i>
        <i><CiTwitter /></i>
        <i><CiYoutube /></i>
        <i><IoLogoApple /></i>
        <i><IoLogoGooglePlaystore /></i>
        </div>
        <div className='text-[8px] flex gap-2 text-white mx-auto'>
         <h1>Advertise with us</h1>
         <h1 className=''>Contact us</h1>
         <h1 className=''>Privacy Policy</h1>
         <h1 className=''>Careers</h1>
         <h1 className=''>Help Center</h1>
        </div>
    </div>
    <div>
        <h1 className='text-[10px] bg-black text-white p-1'><span className='ml-5'>All trademarks,logos and names are properties of their respective ownerss. All Rights Reserved. @Copyright 2024 Real Estate Really Services limited</span></h1>
    </div>
    </div>
    </>
  )
}
