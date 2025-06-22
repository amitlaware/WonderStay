import React from 'react'
import { assets } from '../assets/assets';
const Hero = () => {
    return (
        <div className='flex flex-col items-start justify-center px-6 md:px-16 lg:px-12 text-white  bg-no-repeat bg-cover bg-center h-screen'
            style={{backgroundImage:`url(${assets.heroImage})`}}
        >
            <p className='bg-[#49B9ff]/50 px-3.5 py-1 rounded-full mt-20'>Ultimate Hotel Experience</p>
            <h1 className='font-playfair text-2xl md:text-5xl md:text-[56px] md:leading-[56px] font-bold md:font-extrabold max-w-xl mt-4'>Discover your Perfect Gateway Destination</h1>
            <p className='max-w-130 mt-2 text-sm md:text-base'>Unparalled luxury and perfect comfort  await at the world's most exclusive hotels
                and resorts.Start you journey today.</p>

        </div>
    )
}

export default Hero;