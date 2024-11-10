"use client"
import React, { useEffect } from 'react'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

import NewsLetter from './NewsLetter/newsLetter';


import Hero from './Hero/page';
import Delivery from '../Delivery/page';
import Popular from '../Popular/page';
import Feature from '../features/page';
import Team from '../Team/page';
import Reservation from '../Reversation/page';





const Home = () => {
useEffect(()=>{
  const initAOS=async()=>{
await import("aos")
AOS.init({
  duration:1000,
  easing:'ease',
  once:true,
  anchorPlacement:"top-center",

})
  }
  initAOS();
},[])
  return (
   <div className='overflow-hidden'>
<Hero/>
<Feature/>
<Popular/>
<Delivery/>
<Team/>
<Reservation/>
<NewsLetter/>
   </div>
  )
}

export default Home;




















