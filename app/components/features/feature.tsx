import React from 'react'
import Image1 from "@/public/burger.image.4.jpg"
import Image2 from "@/public/burger.image.4.jpg"
import Image5 from "@/public/burger.image.4.jpg"
import Image from 'next/image'
const Feature = () => {
  return (
    <div className='pt-[5rem] pb-[3rem]'>
        {/*Heading*/}
        <h1 className='heading flex items-center justify-center text-3xl uppercase font-bold'>burgers made with <br/>
        love and<span className='text-red-600 flex text-center justify-center'>care</span>
        </h1>
        {/*card*/}
        <div className='w-[90%] md:w-[80%] h-[80%] md:h-[80%] mt-[3rem] md:mt-[5rem] mb-[3rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem]'>
        {/*1st cards*/}
        <div data-aos="fade-left" data-aos-anchor-placement="top-center">
<div className='p-6 hover:bg:white lg:translate-y-[3rem] rounded-lg transition-all duration-200 '>
  <Image src={Image1} alt="burger" className='rounded-3xl'/>
  <h1 className='mt-[1.5rem] text-center text-[24px] text-black font-semibold'>Our Burger</h1>
</div>
</div>
 {/*2st cards*/}
 <div data-aos="zoom-in" data-aos-delay="200" data-aos-anchor-placement="top-center">
<div className='p-6 hover:bg:white lg:translate-y-[3rem] rounded-lg transition-all duration-200'>
  <Image src={Image2} alt="burger" className='rounded-3xl'/>
  <h1 className='mt-[1.5rem] text-center text-[24px] text-black font-semibold'>Your Openion is Important</h1>
</div>
</div>
 {/*3st cards*/}
 <div data-aos="fade-right" data-aos-delay="400" data-aos-anchor-placement="top-center">
<div className=' p-6 hover:bg:white lg:translate-y-[3rem] rounded-lg transition-all duration-200'>
  <Image src={Image5} alt="burger"className='rounded-3xl'/>
  <h1 className='mt-[1.5rem] text-center text-[24px] text-black font-semibold'>Chicken Burgers</h1>
</div>
</div>
        </div>
    </div>
  )
}

export default Feature