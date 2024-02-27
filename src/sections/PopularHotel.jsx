import React from 'react'
import HotelCard from '../Components/HotelCard'

const PopularHotel = () => {
    return (
        <section className="mb-10">
            <div className="mx-16 text-center lg:text-left">
                <div className="w-100">
                        <div className="px-8 lg:mt-0">
                            <h1 className="mt-2 mb-4 text-xl font-bold tracking-tight md:text-2xl xl:text-4xl">
                                Our Most Popular Hotels
                            </h1>
                            <p className='font-montserrat text-slate-gray text-lg leading-8 my-6 sm:max-w-xl'>Discover the best of luxury with CodeX - Luxurious Stays. Explore our top-rated hotels, from boutique gems to lavish resorts.</p>
                            <HotelCard />
                        </div>
                </div>
            </div>
        </section>
    )
}

export default PopularHotel