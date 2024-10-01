"use client"
import React, { useEffect } from 'react'
import Hero from './Hero/hero';
import Feature from './features/feature';
import Popular from './Popular/Popular';
import Delivery from './Delivery/delivery';
import Team from './Team/team';
import Reservation from './Reservation/reservation';
import NewsLetter from './NewsLetter/newsLetter';
import Footer from './footer/footer';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles




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
<Footer/>
   </div>
  )
}

export default Home;




















