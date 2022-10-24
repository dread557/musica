import React, { useContext } from 'react'
import { ScreenContext } from '../contexts/Screensize'
import { useGetPlaylistsQuery } from '../services/songsApi'
import { motion } from 'framer-motion'

const Collection = () => {
    const { data } = useGetPlaylistsQuery()
    const { screenSize } = useContext(ScreenContext)
    console.log(screenSize)

    const vanish = {
        hidden: {
            opacity: 0,
            y: '10px'
        },
        hover: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.3,
                type: 'spring'
            }
        }
    }

    const stay = {
        hidden: {
            y: '10px'
        },
        hover: {
            opacity: 1,
            y: 0
        }
    }

    return (
        <motion.div className='flex flex-col md:flex-row gap-x-5 flex-wrap'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            {data?.map((item, index) => {
                const bg = item.cover
                return (
                    <motion.div whileHover='hover' animate='hidden' key={index} className='overlay cursor-pointer flex flex-col justify-end bg-top relative w-full md:w-[213px] h-[234px] p-4 rounded-3xl mt-6 bg-no-repeat' style={{ backgroundImage: `url(${bg})` }}>
                        <motion.div variants={stay} className='-mb-3'>
                            <h1 className='relative z-30 text-white'>{item.title}</h1>
                            <p className='relative z-30 text-white text-[10px] text-opacity-50'>{item.title.substring(0, 4)}</p>
                        </motion.div>
                        <motion.div variants={vanish} className='flex justify-between items-center'>
                            <p className='relative z-30 text-white'>22m likes</p>
                            <button className='text-[40px] text-[#FACD66] relative z-30'>
                                <ion-icon name="play-circle"></ion-icon>
                            </button>
                        </motion.div>
                    </motion.div>
                )
            })}
        </motion.div>
    )
}

export default Collection