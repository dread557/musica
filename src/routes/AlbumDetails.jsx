import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ScreenContext } from '../contexts/Screensize'
import { useGetPlaylistsQuery } from '../services/songsApi'
import { SongContext } from '../contexts/SongContext'
import { motion } from 'framer-motion'

const AlbumDetails = () => {
    const { screenSize } = useContext(ScreenContext)
    const { data } = useGetPlaylistsQuery()
    const { setSrc, setAudioImage, setArtist, setTitle, setSongsArray, setCurrSongIndex } = useContext(SongContext)
    let { Id } = useParams()
    let id = Number(Id.charAt(Id.length - 1) - 1)
    const playlist = data[id]
    return (
        <motion.div className='p-10 pt-0 md:pl-16 md:ml-9'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <div className='flex flex-col md:flex-row gap-x-5 md:items-end mb-12'>
                <img className='max-w-[284px] rounded-[35px]' src={playlist?.cover} alt={playlist?.title} />
                <div className=' flex flex-col space-y-4 '>
                    <h1 className='text-[#A4C7C6] font-bold text-4xl'>{playlist?.title}</h1>
                    <p>{playlist?.info}</p>
                    <p>{playlist?.files?.length} songs - 55 mins</p>
                    <div className='flex items-center gap-3'>
                        <button className=' text-[#FACD66] flex items-center bg-[#343139] bg-opacity-70 p-3 rounded-[32px] gap-3'>
                            <ion-icon name="play-circle"></ion-icon> <p className='text-white text-opacity-40 text-xs'>Play all</p>
                        </button>
                        <button className=' text-[#FACD66] flex items-center bg-[#343139] bg-opacity-70 p-3 rounded-[32px] gap-3'>
                            <ion-icon name="musical-notes"></ion-icon><p className='text-white text-opacity-40 text-xs'>Add to collection</p>
                        </button>
                        <button className=' text-[#FACD66] flex items-center bg-[#343139] bg-opacity-70 p-3 rounded-[32px]'>
                            <ion-icon name="heart"></ion-icon>
                        </button>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-y-2 mb-12'>
                {playlist.files?.map((track, index) => {
                    const changeAttrb = () => {
                        setSrc(track.audio)
                        setTitle(track.title)
                        setArtist(track.artist)
                        setAudioImage(track.cover)
                        setSongsArray(playlist.files)
                        setCurrSongIndex(index)
                    }
                    return (
                        <div onClick={() => changeAttrb()} key={track.id} className='grid grid-p bg-[#33373B5E] p-2 cursor-pointer rounded-2xl items-center justify-between'>
                            <span className='flex gap-5 items-center'>
                                <img className='w-[39px] h-[39px] rounded-lg' src={playlist?.cover} alt='cover' />
                                {screenSize > 768 && <ion-icon name="heart-outline"></ion-icon>}
                            </span>
                            <div className='flex justify-between md:w-full'>
                                <span className='flex flex-col md:flex-row justify-between md:w-[35%]'>
                                    <p>{track.title}</p>
                                    <p className=''>Single</p>
                                </span>
                                <span className='flex flex-col-reverse md:flex-row justify-between justify-self-end items-center md:w-[35%]'>
                                    <p className=''>{track.duration}</p>
                                    <span className='text-[#FACD66]'>
                                        <ion-icon name="ellipsis-vertical"></ion-icon>
                                    </span>
                                </span>
                            </div>
                        </div>)
                })}
            </div>
        </motion.div>
    )
}

export default AlbumDetails