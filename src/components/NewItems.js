/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {newInStore} from '../data';
import NewItemsSlider from './NewItemsSlider';
const NewItems = () => {
  const {title , subtitle , link , icon }= newInStore;
  return (
<section className='section'>
  <div className='container mx-auto'>
    <div className='flex flex-col lg:flex-row '>
      <div className='flex md:flex-col items-baseline gap-x-6 mb-6 lg:mb-0'>
        <h2 className='title max-w-[245px] lg:mt-[30px] lg:mb-[90px] text-pin font-bold'>{title}</h2>
        <p className='max-w-[245px] lg:mb-12'>{subtitle}</p>
        <div className='hidden lg:flex items-center'>
          <a href='#' className='hover:border-b border-pin lg:items-center font-medium transition-all'>{link}</a>
          <div className='text-3xl'>{icon}</div>
        </div>
      </div>
      <div className='lg:max-w-[800px] xl:max-w-[990px] lg:absolute lg:-right-24'>
      <NewItemsSlider></NewItemsSlider>
    </div></div>
  </div>
</section>
  );
};

export default NewItems;
