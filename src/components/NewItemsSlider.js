/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import {Swiper , SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {newInStore} from '../data';
const NewItemsSlider = () => {
  return (
<Swiper className='productSliderr' grabCursor={true} breakpoints={{
  320:{
    slidesPerView:2 , 
    spaceBetween:15,
  },
  768:{
    slidesPerView:3 , 
    spaceBetween:18,
  },
}}>
  {newInStore.products.map((product,index)=>{
    return(
      <SwiperSlide key={index} className='max-w-[230px] '>
        <div className='relative' >
          <img src={product.image.type}></img>
          <div className='absolute text-white bottom-[20px] w-full text-center text-[18px] lg:text-2xl font-medium capitalize'>
            {product.name}</div>
        </div>
      </SwiperSlide>
    )
  })}
</Swiper>
  );
};

export default NewItemsSlider;
