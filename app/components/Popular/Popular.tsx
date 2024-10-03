"use client";
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import BurgerCard from './burgercard';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1324 },
      items: 4,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1324, min: 764 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 764, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
const Popular = () => {
  return (
    <div className="pt-[3rem] pb-[3rem]">
        <h1 className="heading flex items-center justify-center text-4xl uppercase font-bold text-black gap-1">
            Over Popular  <span className='text-red-600 '>Burgers</span>
        </h1>
        <div className='w-[100%] mt-[4rem] mx:auto '>
<Carousel additionalTransfrom={0} arrows={true} autoPlay={true} autoPlaySpeed={4000} centerMode={false} infinite responsive={responsive} itemClass='item' showDots>
<BurgerCard title="Beffy Bite" image="/image.5.jpg" reviews="4" price="15.88$"/>
<BurgerCard title='Egg Burger'image='/burger.image.4.jpg' reviews='6' price='15.88$'/>
<BurgerCard title='Burger' image='/burger.image.3.jpg' reviews='8' price='20.88$'/>
<BurgerCard title='Chicken Burger' image='/image.number1.jpg' reviews='10' price='25.88$'/>
<BurgerCard title='Cheez Burger' image='/image.number2.jpg' reviews='12' price='30.88$'/>
</Carousel>

        </div>
    </div>
  )
}

export default Popular