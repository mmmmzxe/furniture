import React from 'react';
import {hero} from '../data';
import Stats  from '../components/Stats';
const Hero = () => {
  const {title , subtitle , buttonText}=hero;
  return (<section className='h-[850px] w-full bg-hero bg-right bg-cover bg-no-repeat pt-[255px]
  pb-[254px] relativr mb-12 lg:bg-center lg:mb-28'>
    <div className='container mx-auto text-center'>
<h1 className='text-xl mx-auto font-bold mb-[25px] lg:text-[60px] lg:leading-tight lg:max-w-[850px] text-pin  '>{title}</h1>
   <h2 className='mb-[30px] max-w-[617px] mx-auto lg:mb-[65px] lg:text-xl text-white'>{subtitle}</h2>
   <button className='bg-pin hover:bg-[rgba(255,255,255,0.5)] px-[35px] py-[9px]
   mb-[160px] text-xl rounded-md backdrop-blur-md transition lg:px[80px] lg:py-[16px] lg:mb-[194px] text-white'>{buttonText}</button>
    <div>
      <Stats/>
      </div>
    </div>
  </section>
  );
};

export default Hero;
