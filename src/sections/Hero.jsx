import React from 'react';
import heroImg from '../assets/images/hero-home.png';
import { FaMapMarkerAlt, FaCalendarAlt, FaUser } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

const Hero = () => {
  const minDate = new Date();
  minDate.setDate(minDate.getDate() + 5); // Set minimum date to today's date + 5 days

  const maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth() + 6); // Set maximum date to today's date + 6 months

  const minDateString = minDate.toISOString().split('T')[0]; // Format minimum date as string
  const maxDateString = maxDate.toISOString().split('T')[0]; // Format maximum date as string
  return (
    <section className="mb-10">
      <div className=" my-8 mx-16 text-center lg:text-left">
        <div className="w-100">
          <div className="bg-neutral-50 grid rounded-tl-[50px] items-center gap-12 lg:grid-cols-2">
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
            <div className="bg-white mb-12 lg:mb-0 rounded-t-xl">
              <img src={heroImg}
                className="w-full" alt="Hero Home" />
            </div>
          </div>
        </div>
        <div className="relative bottom-40 w-[75%] mx-auto bg-white left-0 right-0 rounded-full flex justify-between p-2 md:p-6 items-center shadow-lg">
          {/* left div  */}

          {/* 1st */}
          <div className="flex items-start gap-2  ">
            <FaMapMarkerAlt />
            <span className="flex flex-col gap-1">
              {/* <p className="m-0 text-[16px] md:text-[20px] font-normal text-[#222222]">
                Location
              </p> */}
              <label for="countries" class="m-0 text-[16px] md:text-[20px] font-normal text-black">Location</label>
              <select id="countries" class="text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full focus:outline-none ">
                <option selected>Choose a country</option>
                <option value="IN">India</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="UK">United Kingdom</option>
                <option value="DE">Germany</option>
              </select>
            </span>
          </div>
          {/* 2nd  */}
          <div className="flex items-start gap-2">
            <FaCalendarAlt />
            <span className="flex flex-col gap-1">
              <p className="m-0 text-[16px] md:text-[20px] font-normal text-[#222222]">
                Check in
              </p>
              <input type='date' min={minDateString} max={maxDateString} value={minDateString} className="m-0 hidden md:block text-[#555555] text-[14px] focus:outline-none" />
            </span>

          </div>
          {/* 3rd  */}
          <div className="hidden lg:flex items-start gap-2">
            <FaCalendarAlt />
            <span className="flex flex-col gap-1">
              <p className="m-0 text-[20px] font-normal text-[#222222]">
                Check out
              </p>
              <input type='date' min={minDateString} value={minDateString} className="m-0 hidden md:block text-[#555555] text-[14px] focus:outline-none" />
            </span>
          </div>
          {/* 4th  */}
          <div className="hidden md:flex items-start gap-2">
            <FaUser />
            <span className="flex flex-col gap-1">
              <p className="m-0 text-[20px] font-normal text-[#222222]">
                Rooms For
              </p>
              <input type="text" placeholder='1 Room, 2 Guests' className="m-0 text-[#555555] text-[14px] focus:outline-none" />
            </span>
          </div>
          <div className="bg-[#24AB70] flex gap-2 items-center px-2 py-6 md:px-8 rounded-full cursor-pointer">
            <CiSearch color='#fff' size={25} />
            <p className="text-white">Search...</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero