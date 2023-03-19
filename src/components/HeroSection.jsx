import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ScreenContext } from '../contexts/Screensize'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useGetPlaylistsQuery } from '../services/songsApi'

const HeroSection = () => {
    const { screenSize } = useContext(ScreenContext)
    const { data } = useGetPlaylistsQuery()
    return (
        <div className='p-10 pt-0 md:pl-16 md:ml-9 flex flex-col md:flex-row'>
            <div className='flex justify-between bg-[#609EAF] text-white max-w-[686px] md:w-[70%] pt-0 rounded-[20px] md:rounded-[40px] p-5 bg-[url("/public/assets/mob-wave.png")] md:bg-[url("/public/assets/bg-wave.png")] bg-no-repeat bg-right-top bg-contain md:bg-right-bottom pb-0'>
                <div className='flex flex-col justify-between'>
                    <p className=' text-xs mt-6'>Curated Playlist</p>
                    <div className='mt-[200px] md:mt-0'>
                        <h1 className='text-3xl font-bold mb-4'>R & B Hits</h1>
                        <p className='text-sm leading-4'>All mine, Lie again, Petty call me everyday,
                            Out of time, No love, Bad habit,
                            and so much more</p>
                    </div>
                    <div className='flex gap-4 items-center mb-5 mt-[40px] md:mt-0'>
                        <img src='../assets/heads.png' alt='avatars' />
                        <img src='../assets/heart.png' alt='likes' />
                        <p className='text-sm'>33k Likes</p>
                    </div>
                </div>
                {screenSize > 768 && <img src='../assets/eric.png' alt='hero' />}

            </div>
            <div className='md:pl-[22px] md:w-[40%]'>
                <h1 className='text-2xl font-bold text-white mt-5 md:mt-0'>Top charts</h1>
                <div className='flex md:flex-col'>
                    {screenSize < 768 ? (
                        <Swiper
                            spaceBetween={5}
                            slidesPerView={1.2}
                        >
                            {data?.map((item, index) => {
                                if (index >= 3) {
                                    return null
                                } else {
                                    return <SwiperSlide>
                                        <Link to={`playlist/:${item.id}`} className='flex justify-between gap-3 mb-3 h-[200px] bg-[#1A1E1F] p-3 rounded-[20px]' key={index}>
                                            <div className='flex flex-col'>
                                                <img className='h-[63px] w-[63px] rounded-[10px] mb-3 md:mb-0' src={item.cover} alt="item.name" />
                                                <span className='flex flex-col space-y-3 md:ml-2'>
                                                    <h6 className='text-[14px] text-white capitalize'>{item?.title}</h6>
                                                    <p className='text-xs capitalize'>{item?.title}</p>
                                                    <p className='text-xs text-white'>1:02:20</p>
                                                </span>
                                            </div>
                                            <span className='rounded-[50%] p-[2px] w-[30px] h-[30px] text-[#FACD66] border border-slate-600 flex items-center justify-center'>
                                                <ion-icon className='' name="heart-outline" ></ion-icon>
                                            </span>
                                        </Link>
                                    </SwiperSlide>
                                }
                            })}

                        </Swiper>
                    ) : (
                        data?.map((item, index) => {
                            if (index >= 3) {
                                return null
                            } else {
                                return (
                                    <Link to={`playlist/:${item.id}`} className='flex items-center justify-between gap-3 mb-3 bg-[#1A1E1F] p-2  rounded-[20px]' key={index}>
                                        <div className='flex'>
                                            <img className='h-[63px] w-[63px] rounded-[10px]' src={item.cover} alt="item.name" />
                                            <span className='flex flex-col space-y-1 ml-2'>
                                                <h6 className='text-[14px] text-white capitalize'>{item?.title}</h6>
                                                <p className='text-xs capitalize'>{item?.title}</p>
                                                <p className='text-xs text-white'>1:02:20</p>
                                            </span>
                                        </div>
                                        <span className='rounded-[50%] p-[2px] w-[30px] h-[30px] text-[#FACD66] border border-slate-600 flex items-center justify-center'>
                                            <ion-icon className='' name="heart-outline" ></ion-icon>
                                        </span>
                                    </Link>)
                            }
                        })
                    )}
                </div>
            </div>
        </div>
    )
}

export default HeroSection

