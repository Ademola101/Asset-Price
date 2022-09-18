import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';

export default function Footer() {
  return (
    <div className='bg-gray-100 w-full mt-8 flex h-1/5 flex-col justify-center items-center gap-4 font-bold md:flex-row'>
      <div className='flex '>
        <a aria-label='Github' href="https://github.com/Ademola101"> <AiFillGithub className='text-2xl mx-2' /></a>
        <a aria-label='Linkedin' href="https://www.linkedin.com/in/ademola-ogunmokun10/"><AiFillLinkedin className='text-2xl mx-2' /></a>
        <a aria-label='Twitter' href="https://www.linkedin.com/in/ademola-ogunmokun10/"> <AiFillTwitterCircle className='text-2xl mx-2' /></a>

      </div>

      <div>
        All rights reserved &copy; 2022
      </div>


      <div>
  Ademola Ogunmokun
      </div>


    </div>
  );
}
