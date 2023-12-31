'use client'
import Image from 'next/image';
import React from 'react';
import { TypeAnimation } from 'react-type-animation';

export const HeroSection = () => {
  return (
	  <section>
		  <div className='grid grid-cols-1 sm:grid-cols-12'>
			  <div className='col-span-7 place-self-center text-center sm:text-left'>
				  <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
					  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600">Hi, I´m </span>
					  <br />
					  <TypeAnimation
						sequence={[
							'Jesús Suárez',
							1000,
							'Backend Developer in youtube MIN 1:11:00',
							1000,
							'Frontend Developer',
							1000,
							'FullStack Developer',
							1000
						]}
						wrapper="span"
						speed={50}
						repeat={Infinity}
					/>
				  </h1>
				<p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
					In this world every thing is possible, you just need to believe in yourself and work hard to achieve your goals.
				  </p>
				  <div>
					  <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-500 hover:bg-slate-600 text-white'>
						  Hire Me
					  </button>
					  <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br  from-cyan-500 via-blue-500 to-indigo-500 hover:bg-slate-800 text-white mt-3'>
						  <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV</span>
					  </button>
				  </div>
			  </div>			
			  <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
				  <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:h-[400px] relative">
					  <Image						  
						src='/images/img-not-found.gif'
						alt='Hero'
						className='absolute transform -translate-x-1/2 top-1/2 left-1/2'
						width={500}
						height={500}
				  		/>
				  </div>

			  </div>
		  </div>
	 </section>
  )
}
