/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import {features} from '../data';
const FeaturesSecond = () => {
  const{title , subtitle , image} = features.feature2;
  return (
    <section className='section'>
    <div className='container mx-auto'>
    <div  className='flex flex-col lg:flex-row lg:gap-x-[100px]'> 
   
    <div className='flex-1 ' >
      <img src={image.type}></img>
    </div>
    <div className='flex-1 flex flex-col justify-end border border-pin flex text-center justify-center mb-[15px] relative '>
      <h2 className='title text-pin font-bold'>{title}</h2>
      <p className='subtitle'>{subtitle}</p>
      
    </div>
    </div>
    
    </div>
      </section>
    
  );
};

export default FeaturesSecond;
