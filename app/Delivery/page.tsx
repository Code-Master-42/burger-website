import Image from 'next/image'
import React from 'react'
import logo from "@/public/image.6.jpg.png"
import { RiEBike2Fill } from "react-icons/ri";
import { IoFastFood } from "react-icons/io5";
import { BsDoorOpen } from "react-icons/bs";
const Delivery = () => {
  return (
    <div id='Blog'>
    <div className='pt-[8rem] pb-[3rem]'>
<div className='w-[80%] mx:auto grid items-center grid-cols-1 lg:grid-cols-2 gap-[2rem]'>
<div data-aos="fade-right" data-aos-anchor-placement="top-center">
    <Image src={logo} alt="delivery"/>
</div>
<div>
<h1 className='text-[30px] md:text-[40px] lg:text-[50px] xl:text-[60px] font-bold leading-[3rem] md:leading-[4rem]'>
    Your<span className='text-red-600'> Favourite Burger</span> On the way
</h1>
<p className='mt-[2rem]  text-black text-[17px] text-opacity-70'>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero provident animi aliquam natus quibusdam? Velit nobis, explicabo sequi nam quibusdam repellendus et asperiores dicta ex beatae quia quae recusandae expedita?
</p>
<div className='flex items-center space-x-3 mt-[2rem]'>
    <RiEBike2Fill className='w-[2rem] h-[2rem] text-red-500'/>
    <h2 className='text-[18px] text-black font-medium'>
        Delivery in 30 minute
    </h2>
</div>
<div className='flex items-center space-x-3 mt-[2rem]'>
    <IoFastFood className='w-[2rem] h-[2rem] text-red-500'/>
    <h2 className='text-[18px] text-black font-medium'>
        Free Shipping From 75$
    </h2>
</div>
<div className='flex items-center space-x-3 mt-[2rem]'>
    <BsDoorOpen className='w-[2rem] h-[2rem] text-red-500'/>
    <h2 className='text-[18px] text-black font-medium'>
        Delivery on Your Door Step
    </h2>
</div>
</div>
</div>
    </div>
    </div>
  )
}

export default Delivery