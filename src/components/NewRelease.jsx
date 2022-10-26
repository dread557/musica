import React, { useContext } from 'react'
import { useGetNewSongsQuery } from '../services/songsApi'
import { SongContext } from '../contexts/SongContext'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const NewRelease = () => {
    const { data } = useGetNewSongsQuery()
    const { setSrc, setAudioImage, setArtist, setTitle, setSongsArray, setCurrSongIndex } = useContext(SongContext)

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
                {data?.map((song, index) => {
                    const changeAttrb = () => {
                        setSrc(song.audio)
                        setTitle(song.title)
                        setArtist(song.artist)
                        setAudioImage(song.cover)
                        setSongsArray(data)
                        setCurrSongIndex(index)
                    }
                    return (<SwiperSlide>
                        <div key={index} className='cursor-pointer' onClick={() => changeAttrb()}>
                            <img className='h-[150px] rounded-[25px]' src={song.cover} alt={song.title} />
                            <p>{song.title}</p>
                            <p>{song.artist}</p>
                        </div>
                    </SwiperSlide>)
                })}
            </Swiper>
        </div>
    )
}

export default NewRelease