"use client";
import Cards from '@/components/ThreeCards';
import Image from 'next/image';
import React from 'react';
import "../../../lib/threeUtil";

const Page: React.FC = () => (
  <div className="w-screen h-screen">
    <div className='absolute top-0 left-0 w-full h-full'>
      {/* <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-purple-800/75  to-blue-900'> */}
      {/* </div> */}
      <Image src="/three-js/three-bg.png" layout="fill" objectFit="cover" className='absolute -z-40 w-screen h-screen' alt='backkground' />
      <h1 className="absolute top-24 left-24 text-slate-200 animate-pulse">Scroll up/down to rotate...</h1>
    </div>
    <Cards />
  </div>
)

export default Page;
