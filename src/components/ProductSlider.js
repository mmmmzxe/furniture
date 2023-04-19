/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../slider.css';
import {Navigation , Pagination} from 'swiper';
import {products} from '../data';
import {HiPlus} from 'react-icons/hi';
const ProductSlider = () => {
  const {pages} = products;
  return (
    <Swiper modules={[Navigation , Pagination]} pagination={{ clickable:true }} navigation={true} 
  className='productSlider' >
      {pages.map((page, index)=>{
        return(
          <SwiperSlide key={index}>
          <div className='grid grid-cols-2 gap-x-3 md:grid-cols-3 lg:grid-cols-3 lg:gap-[30px] '>
          {page.productList.map((product, index)=>{
            const {image , name , price , oldPrice}=product;
            return(
              <div className='w-full max-w-[290px] h-[380px] text-left  ' key={index}>
                <div className='border hover:border-pin rounded-[18px] w-full max-w-[250px] h-full
                 max-h-[290px] flex items-center justify-center mb-[15px] relative transition'>
                  <img src={image.type}></img>
                  <div className='absolute bottom-4 right-[22px] bg-gray-100 w-8 h-8 rounded-full flex justify-center items-center cursor-pointer hover:bg-gray-200 transition'><HiPlus className='text-xl text-pin'></HiPlus></div>
                </div>
                <div className='lg:text-xl font-bold'>{name}</div>
                <div className='flex items-center gap-x-3'>
                  <div>${price}</div>
                  <div className='text-[13px] text-gray line-through'>${oldPrice}</div>
                </div>
              </div>
            )
          })}
          </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  )
};

export default ProductSlider;
