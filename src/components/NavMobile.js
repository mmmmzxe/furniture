import React from 'react';
import {navigation} from '../data';
const NavMobile = () => {
  return (
    <div className='bg-white w-full h-full shadow-2xl'>
      <ul className='text-center h-full w-full flex flex-col items-center justify-center gap-y-6'>
        {navigation.map((item,index)=>{
        return(
          <li key={index}>
            <a className='text-xl font-medium capitalize text-pin' href={item.href} >{item.name}</a>
          </li>
        );
        })}
        </ul>
    </div>
  )
};

export default NavMobile;
