"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react'; // Import useEffect and useState
import TickerWrapper from '../Assests/ticker';
import Link from 'next/link';
import { MY_TICKER } from '@/utils/gql/GQL_QUERIES';
import { useApolloClient, useQuery } from '@apollo/client'; // Import useApolloClient


const Hero = () => {
  
  return (
    <>
   <div>
        <div className="bg-hero  w-full h-full text-black max-h-550px bg-white transform  origin-top overflow-hidden z-0">
        <div className='flex justify-center bg-[#831843] text-white'> 𝑾𝒆𝒍𝒄𝒐𝒎𝒆 𝒕𝒐 𝑹𝑨𝑲𝑯𝑰𝑺 𝑭𝑨𝑺𝑯𝑰𝑶𝑵𝑺, 𝑾𝒆𝒂𝒓 𝑫𝒊𝒇𝒇𝒆𝒓𝒆𝒏𝒕, 𝑭𝒆𝒆𝒍 𝑺𝒑𝒆𝒄𝒊𝒂𝒍
        </div> 
      
      <div className=' bg-[#831843] z-0   '>
      <div className='relative z-10 flex flex-rows  justify-center items-center sm:flex-row sm:justify-center gap-5 '>
        <Link href="https://www.onati-global.com/"><Image
          alt='Onati Global'
          src="/logos/OGtrans.png"
          height={50}
          width={50}
          className='z-10  sm:mb-0 bg-white'
          loading='lazy'
        />
        </Link>
       <Link href="https://www.rebblebee.com/"> <Image
          alt='Rebblebee'
          src="/logos/RB_KIDS.png"
          height={50}
          width={50}
          className='z-10  sm:mb-0'
          loading='lazy'
        />
        </Link>
       <Link href="https://www.wetailor4u.com/"><Image
          alt='wetailor4u'
          src="/logos/wetailor4u.png"
          height={50}
          width={50}
          className='z-10  sm:mb-0'
          loading='lazy'
        />
        </Link> 
       <Link href="https://www.ogiftbangalore.com/"> <Image
          alt='ogift'
          src="/logos/OGIFT.jpg"
          height={50}
          width={50}
          className='z-10  sm:mb-0'
          loading='lazy'
        />
           </Link>
      </div>
   
      </div>
      <div className='flex justify-center flex-col'>
    <div className='-mt-16'> <TickerWrapper /></div> 
    <div className='' style={{ 
        backgroundImage: `url('/background/bg.jpg')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}>
      <div className='absolute text-center w-30'> 
      </div></div>
      
      <div className='relative z-10  mt-90 flex items-center justify-center' style={{ 
        backgroundImage: `url('/background/hero2.jpg')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height:500,
 
        zIndex: 0,
      }}>
        
      <Image
          src="/logos/rf.png"
          alt='logo'
          height={600}
          width={600}
          className='z-100 -mt-20 shadow-xd '
          style={{ opacity: 5 ,    zIndex: 10 }} 
          loading='lazy'
          
        />
        </div>
      </div>
      </div>
      </div>
     
    </>
  );
}

export default Hero;
