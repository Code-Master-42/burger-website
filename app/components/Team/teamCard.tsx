import Image from 'next/image';
import React from 'react'
interface Props{
    image:string;
    name:string;
    position:string
}
const TeamCard = ({image,name,position}:Props) => {
  return (
    <div>
        <Image src={image} alt={name} height={400} width={400} className='rounded-md'/>
        <h1 className='text-[40px] text-gray-800 mt-[1.5rem] text-center font-bold'>{name}</h1>
        <p className='mt-[0.4rem] mb-[0.4rem] px-4 py-1 bg-green-600 text-white mx-auto w-fit font-medium'>{position}</p>
    <p className='text-center md:w-[70%] mx-auto text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus error illum optio explicabo adipisci! Omnis ea nesciunt, placeat tempora tenetur quas accusamus voluptate error? Suscipit alias eum iure ut id?</p>
    </div>
  )
}

export default TeamCard