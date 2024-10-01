import React from 'react'
import TeamCard from './teamCard'

const Team = () => {
  return (
    <div className='pt-[5rem] pb-[2rem]'>
        <h1 className=' flex items-center justify-center uppercase text-4xl md:text-4xl lg:text-4xl xl:text-4xl font-bold leading-[3rem] md:leading-[4rem]'>
            Meet Your Expert <span className='text-red-500'>Chief</span> </h1>
          <div className='mt-[5rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem] items-center'> 
           <div data-aos="fade-right" data-aos-anchor-placement="top-center"><TeamCard image="/image.7.jpg.png" name="Jhon Doe" position="kitchen porter"/></div>
            <div data-aos="zoom-in" data-aos-anchor-placement="top-center" data-aos-delay="300"><TeamCard image="/image.8.jpg.png" name="Khone Doe" position="Extevi"/></div>
            <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="600"><TeamCard image="/image.10.jpg.png" name="Hone Doe" position="Head Chief"/></div>
            </div>
            </div>
  )
}

export default Team