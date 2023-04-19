/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import {features} from '../data';
const Features = () => {
  const {title , subtitle , image  , items} = features;
  return  (
  <section className='section'>
<div className='container mx-auto'>
<div  className='flex flex-col lg:flex-row lg:gap-x-[100px]'>
<div className='flex-1 order-1 lg:-order-1 ' >
  <img src={image.type}></img>
</div>
<div className='flex-1 flex flex-col justify-end'>
  <h2 className='title text-pin font-bold'>{title}</h2>
  <p className='subtitle'>{subtitle}</p>
  <div >
    {items.map((item , index)=>{
      const {title , subtitle , icon} = item;
      return(
        <div className='flex mb-6 lg:last:mb-0'>
          <div className='text-2xl mr-4 lg:text-3xl text-pin '>{icon}</div>
          <div>
            <h4 className='text-base lg:text-xl mb-3 text-pin font-bold'>{title}</h4>
            <p>{subtitle}</p>
          </div>
        </div>
      )
    })}
  </div>
</div>
</div>

</div>
  </section>);
};

export default Features;
