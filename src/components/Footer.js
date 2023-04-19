/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Logo from '../assets/img/logo.svg';
import {footer} from '../data';

const Footer = () => {
  return (
    <footer className='section bg-accent '>
      <div className='container mx-auto '>
        <div className='flex flex-col lg:flex-row justify-between 
        border-b border-opacity-75 border-pin-700 pb-7 lg:pb-17 mb-14 text-white '>
          <a href='#' className='mb-6 lg:mb-0 '>
            <img src={Logo}></img>
          </a>
          <div className='flex gap-x-4'>
            {footer.social.map((item,index)=>{
              return(
                <div className='w-12 h-12 text-2xl bg-pin hover:bg-primary rounded-full flex 
                justify-center items-center transition' key={index}>
                  <a href='#'>{item.icon}</a>
                </div>
              )
            })}
          </div>
        </div>
        <p className='text-center text-white'>&copy; FurniShop 2022 -All rights reserved 
        maryem mostafa</p>
      </div>

    </footer>
  )
};

export default Footer;
