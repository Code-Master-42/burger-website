import React from 'react'
import { FaBurger, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='pt-[5rem] pb-[5rem] bg-gray-500'>
        <div className='w-[80%] pb-[2rem] border-b-[2px] border-b-gray-500 border-opacity-50 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[3rem] items-start'> 
    <div>
    <div className='flex items-center text-black space-x-2'>
        <FaBurger className='w-[1.2rem] h-[1.2rem] sm:w-[1.4rem] sm:h-[1.4rem] text-orange-800'/>
        <h1 className='text-[20px] sm:text-[30px] font-bold'>
            BurgerBite
        </h1>
    </div>
    <p className='text-white  mt-[0.4rem]'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        </p>
        <p className='mt-[1rem] text-white'>support@example.com</p>
        <p className='text-yellow-400 text-[19px] font-bold'>+93445678</p>
        </div>
        <div>
        <h1 className='text-[23px] font-bold mb-[2rem] text-black'>Product</h1>
        <p className='mt-[0.7rem] text-white  hover:text-yellow-400 transition-all duration-200 cursor-pointer w-fit'>Chicken Burger</p>
        <p className='mt-[0.7rem] text-white  hover:text-yellow-400 transition-all duration-200 cursor-pointer w-fit'>Beffy Burger</p>
        <p className='mt-[0.7rem] text-white  hover:text-yellow-400 transition-all duration-200 cursor-pointer w-fit'>Egg Burger</p>
        <p className='mt-[0.7rem] text-white  hover:text-yellow-400 transition-all duration-200 cursor-pointer w-fit'> Burger</p>
        <p className='mt-[0.7rem] text-white  hover:text-yellow-400 transition-all duration-200 cursor-pointer w-fit'>Cheez Burger</p>
        </div>
        <div>
        <h1 className='text-[23px] font-bold mb-[2rem] text-black'>Quick Link</h1>
        <p className='mt-[0.7rem] text-white  hover:text-yellow-400 transition-all duration-200 cursor-pointer w-fit'>Home</p>
        <p className='mt-[0.7rem] text-white  hover:text-yellow-400 transition-all duration-200 cursor-pointer w-fit'>About</p>
        <p className='mt-[0.7rem] text-white  hover:text-yellow-400 transition-all duration-200 cursor-pointer w-fit'>Menu</p>
        <p className='mt-[0.7rem] text-white  hover:text-yellow-400 transition-all duration-200 cursor-pointer w-fit'> Products</p>
        <p className='mt-[0.7rem] text-white  hover:text-yellow-400 transition-all duration-200 cursor-pointer w-fit'>NewsLetter</p>
        </div>
        <div>
        <h1 className='text-[23px] font-bold mb-[2rem]  text-black'>Opening Hours</h1>
        <p className='text-white text-[18px]'>
          Monday - Friday : <span className='text-yellow-400'>8am-4pm</span>
        </p>
        <p className='text-white text-[18px]'>Saturday :<span className='text-yellow-400'>8am-12am</span></p>
        <div className='flex mt-[2rem] items-center space-x-4'>
          <FaFacebook className='w-[1.5rem] h-[1.5rem] text-blue-700'/>
          <FaInstagram className='w-[1.5rem] h-[1.5rem] text-red-700'/>
          <FaTwitter className='w-[1.5rem] h-[1.5rem] text-blue-700'/>

        </div>
        </div>

    </div>
    <p className='text-center text-white mt-[1.5rem]'>
      Copyright 0 2024 <span className='text-yellow-400'>WebDev Warriors</span>All right reversed
    </p>
    </div>
  )
}

export default Footer