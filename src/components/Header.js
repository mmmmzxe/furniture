/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState } from 'react';
import Logo from '../assets/img/logo.svg';
import {CgMenuRight , CgClose} from 'react-icons/cg';
import {navigation} from '../data';
import NavMobile from './NavMobile';
const Header = () => {
  const [bg ] = useState(false);
const [mobilNav , setModilNav]=useState(false);
  return (
<header className={`${bg ? 'bg-accent py-4 lg:py-6' : 'bg-none' } fixed left-0 w-full
 py-8 z-10 transition-all duration-200`}
>
  <div className='container mx-auto'>
    <div className='flex justify-between items-center  '>
      <a href='#'>
        <img className='h-6 lg:h-8' src={Logo}></img>
      </a>
      <div onClick={()=> setModilNav(!mobilNav)}
       className='text-2xl text-white md:hidden lg:text-3xl  '>
        {mobilNav ? <CgClose/> : <CgMenuRight/>}
      </div>
      <nav className=' hidden md:flex text-white text-bold capitalize'>
        <ul className='md:flex md:gap-x-12 '>{navigation.map((item ,index)=>{
          return(
            <li key={index} className='hover:border-b transition-all cursor-pointer'>
              <a  href={item.href}></a>
              {item.name}
            </li>
          )
        })}</ul>
      </nav>
      <div className={`${mobilNav ? 'left-0' : '-left-full' } md:hidden fixed bottom-0
       w-full max-w-xs h-screen transition-all`}>
        <NavMobile/>
      </div>
    </div>
  </div>
</header>
  )
};

export default Header;
