import React from 'react'
import { BiPhone } from 'react-icons/bi'
import PresevationForn from './presevationForn'

const Reservation = () => {
  return (
    <div className="pt-[5rem] bg-center bg-cover relative mt-[2rem] pb-[rem] mb-[3rem] bg-[url/('/image/bg-black.jpg')]">
    <div className='absolute w-full h-full bg-black top-0 bottom-0 left-0 right-0'></div>
    <div className='[80%] relative z-[20] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-[3rem]'>
<div > <h1 className='text-[30px] md:text-[40px] lg:text-[50px] text-white font-bold leading-[3rem] md:leading-[4rem] uppercase'>
    Do You Have any dinner play today? reserve your table
    </h1>
    <p className='text-[17px] mt-1rem text-white text-opacity-50'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis tenetur atque in, veniam tempora reiciendis explicabo repudiandae, molestiae optio ratione blanditiis magnam necessitatibus, aperiam recusandae assumenda! Nostrum, sint? Facere, minima!</p>
<div className='flex mt-[2rem] items-center space-x-4'>
    <div className='w-[3rem] h-[3rem] bg-red-500 rounded-full items-center justify-center flex-col'>
        <BiPhone className='w-[1.7rem] h-[1.7rem] text-white'/>
    </div>
    <div>
    <h1 className='text-[25px] text-white font-semibold'>
      Quick Order 24/7
    </h1>
    <h1 className='text-yellow-400 text-[30px] font-bold'>
        +09233456754
    </h1>
    </div>
</div>
</div>
    <PresevationForn/>
    
    </div>
  </div>
  
  
    )
}

export default Reservation