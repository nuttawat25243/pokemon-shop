import React from 'react'
import { BsTelephoneFill } from "react-icons/bs";
import { IoMail } from "react-icons/io5";

function Shop() {
  return (
        <div className='  max-w-7xl  flex  justify-center m-auto mb-12 '>
            <div className='flex flex-col gap-8 sm:gap-0 sm:grid my-8 w-full sm:grid-cols-4 justify-center m-4 text-sm'>
                <div className='flex flex-col gap-4 mx-4'>
                  <h1><img className='w-32' src="/pokeshop.png" alt="" /></h1>
                  <p >
                    "Welcome to 'POKESHOP,' your one-stop destination for all things Pokémon!" </p>
                  <p className='flex gap-2 '>
                    <BsTelephoneFill size='16'/> (123) -456-789
                  </p>
                  <p className='flex gap-2'>
                    <IoMail size='20'/>pokeshop@pokemon.com
                  </p>
                </div>
                <div className='flex flex-col gap-4 mx-4'>
                  <h1 className='text-xl font-bold'>COMPANY</h1>
                  <ul className='flex flex-col gap-1'>
                      <li className='hover:text-orange-500 cursor-pointer w-max'>BKK.</li>
                      <li className='hover:text-orange-500 cursor-pointer w-max'>Careers</li>
                      <li className='hover:text-orange-500 cursor-pointer w-max'>Mobile</li>
                      <li className='hover:text-orange-500 cursor-pointer w-max'>Blog</li>
                      <li className='hover:text-orange-500 cursor-pointer w-max'>How we work</li>
                  </ul>
                </div>
                <div className='flex flex-col gap-4 mx-4'>
                  <h1 className='text-xl font-bold'>WORKING HOURS</h1>
                  <div className='flex flex-col gap-1'>
                    <p>Sun: Closed</p>
                    <p>Mon - Fri: 9:00AM - 9:00PM  </p>
                    <p>Sat: 9:00AM - 19:00PM</p>
                  </div>
                </div>
                <div className='flex flex-col gap-4 mx-4'>
                  <h1 className='text-xl font-bold'>SUBSCRIPTION</h1>
                  <p>Subscribe your Email address for latest news & updates.</p>
                  <form className='flex flex-wrap gap-2' action="">
                    <input className='bg-gray-50 p-2 w-full   ' placeholder='Enter Email Address' type="email" />
                    <button className='w-min text-white bg-orange-500 p-2 px-4 rounded-lg drop-shadow-lg hover:bg-orange-400'>Submit</button>
                  </form>
                </div>
            </div>
        </div>
  )
}

export default Shop