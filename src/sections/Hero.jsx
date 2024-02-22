import React from 'react';
import heroImg from '../assets/images/hero-home.png';

const Hero = () => {
    return (
        <section className="mb-40">
            <div className="bg-neutral-50 m-12 text-center lg:text-left">
                <div className="w-100">
                    <div className="grid rounded-lg items-center gap-12 lg:grid-cols-2">
                        <div className="mt-12 px-8 lg:mt-0">
                            <h1 className="mt-2 mb-8 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
                                Find your perfect <br /><span className="text-primary">place to stay</span>
                            </h1>
                            <p className='font-montserrat text-slate-gray text-lg leading-8 my-6 sm:max-w-xl'>Discover unparalleled comfort and luxury with CodeX - your ultimate destination for finding the perfect place to stay.</p>
                            <div className='flex flex-1 gap-8'>
                                <a href="#" class="w-12 h-12 bg-white rounded-full grid place-items-center hover:bg-slate-200 transition">
                                    <span class="sr-only">Watch the video</span>
                                    <svg class="ml-1 w-4" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15 7.26795C16.3333 8.03775 16.3333 9.96225 15 10.7321L3 17.6603C1.66667 18.4301 1.01267e-06 17.4678 1.07997e-06 15.9282L1.68565e-06 2.0718C1.75295e-06 0.532196 1.66667 -0.430054 3 0.339746L15 7.26795Z" fill="#24ab70" />
                                    </svg>
                                </a>
                                <a className="inline-block rounded pt-2 pb-3.5 text-xl font-semibold capitalize leading-normal text-primary" role="button">Watch Video</a>
                            </div>
                        </div>
                        <div className="mb-12 lg:mb-0 rounded-t-xl">
                            <img src={heroImg}
                                className="w-full shadow-lg" alt="Hero Home" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero