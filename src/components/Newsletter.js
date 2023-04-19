import React from 'react';
import {newsletter} from '../data'
const Newsletter = () => {
  const {title , subtitle , placeholder , buttonText} = newsletter;
  return (
<section className='section bg-newsletter min-h-[500px] sction '>
<div className='container mx-auto flex justify-center lg:justify-end'>
  <div className='w-full max-w-[558px] text-center text-white lg:text-left'>
    <h2 className='text-4xl font-bold max-w-[350px] mx-auto lg:mx-0 mb-5 leading-normal text-pin'>{title}</h2>
    <p className='text-xl font-light mb-10 text-gray-500'>{subtitle}</p>
    <div className='flex flex-col lg:flex-row gap-[22px]'>
      <input className='h-[60px] px-6 autline-none placeholder:text-gray-400 text-gray-600 
      rounded-lg lg:flex-1' type='text'  placeholder ={placeholder}></input>
  
      <button className='bg-pin h-[60px]  px-7 rounded-lg font-medium text-xl transition'>{buttonText}</button>
    </div>
  </div>
</div>
</section>
  )
};

export default Newsletter;
