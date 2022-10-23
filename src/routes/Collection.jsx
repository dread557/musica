import React, { useContext } from 'react'
import { ScreenContext } from '../contexts/Screensize'
import { useGetPlaylistsQuery } from '../services/songsApi'

const Collection = () => {
    const { data } = useGetPlaylistsQuery()
    const { screenSize } = useContext(ScreenContext)
    console.log(screenSize)

    return (
        <div className='flex flex-col md:flex-row gap-x-5'>
            {data?.map((item, index) => {
                const bg = item.cover
                console.log(bg)
                return (
                    <div key={index} className='overlay flex flex-col  justify-end bg-top relative w-full md:w-[213px] h-[234px] p-4 rounded-3xl mt-6 bg-no-repeat' style={{ backgroundImage: `url(${bg})` }}>
                        <h1 className='relative z-30 text-white'>{item.title}</h1>
                        <p className='relative z-30 text-white text-[10px] text-opacity-50'>{item.title.substring(0, 4)}</p>
                        {screenSize < 768 && (
                            <div className='flex justify-between items-center'>
                                <p className='relative z-30 text-white'>22m likes</p>
                                <button className='text-[30px] text-[#FACD66] relative z-30'>
                                    <ion-icon name="play-circle"></ion-icon>
                                </button>
                            </div>
                        )}
                    </div>
                )
            })}
        </div>
    )
}

export default Collection