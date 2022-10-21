import React from 'react'
import { useGetNewSongsQuery } from '../services/songsApi'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const NewRelease = () => {
    const { data } = useGetNewSongsQuery()
    return (
        <div className='p-10 pt-0 md:pl-16 md:ml-9'>
            <h1 className='text-white mb-5 font-bold text-2xl'>New Releases</h1>
            <Swiper
                spaceBetween={20}
                // slidesPerView={3}
                breakpoints={{
                    256: {
                        width: 256,
                        slidesPerView: 2
                    },
                    768: {
                        width: 768,
                        slidesPerView: 4
                    },
                    1024: {
                        width: 1024,
                        slidesPerView: 6.5
                    },
                }}
            >
                {data?.map((item, index) => (
                    <SwiperSlide>
                        <div key={index} className=''>
                            <img className='h-[150px] rounded-[25px]' src={item.cover} alt={item.title} />
                            <p>{item.title}</p>
                            <p>{item.artist}</p>
                        </div>
                    </SwiperSlide>))}
            </Swiper>
        </div>
    )
}

export default NewRelease