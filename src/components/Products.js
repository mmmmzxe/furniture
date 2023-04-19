import React from 'react';
import {products} from '../data';
import ProductSlider from '../components/ProductSlider';
const Products = () => {
  const {title , subtitle} = products;
  return (
<section className='section text-center '>
  <div className='contaimer mx-auto '>
    <div>
      <h2 className='title text-5xl text-pin font-bold'>{title}</h2>
      <p className='max-w-[639px]  mx-auto mb-[50px] lg:mb-[70px]'>{subtitle}</p>
    </div>
    <ProductSlider/>
  </div>
</section>
  )
};

export default Products;
