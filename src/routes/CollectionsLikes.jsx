import React, { useState } from 'react'
import { Collection, Likes } from './index'

const CollectionsLikes = () => {
    const [collection, setCollection] = useState(true)
    const [likes, setLikes] = useState(false)

    const handleCol = () => {
        setCollection(true)
        setLikes(false)
    }

    const handleLikes = () => {
        setCollection(false)
        setLikes(true)
    }

    return (
        <div className='p-10 pt-0 md:pl-16 md:ml-9 '>
            <header className='flex justify-between md:justify-start'>
                <button onClick={() => handleCol()}
                    className={collection ? 'bg-[#FACD66] mr-4 h-[38px] p-3 border border-[#FACD66] rounded-[27px] text-[#1D2123] flex items-center justify-center md:justify-start flex-grow md:flex-grow-0' : 'cursor-pointer mr-4 h-[38px] p-3 border border-[#EFEEE0] rounded-[27px] text-[#EFEEE0] flex items-center justify-center md:justify-start flex-grow md:flex-grow-0'}
                >My collection</button>
                <button onClick={() => handleLikes()}
                    className={likes ? 'bg-[#FACD66] h-[38px] p-3 border border-[#FACD66] rounded-[27px] text-[#1D2123] flex items-center justify-center md:justify-start flex-grow md:flex-grow-0' : 'cursor-pointer h-[38px] p-3 border border-[#EFEEE0] rounded-[27px] text-[#EFEEE0] flex items-center justify-center md:justify-start flex-grow md:flex-grow-0'}
                >Likes</button>
            </header>
            {collection && <Collection />}
            {likes && <Likes />}
        </div>
    )
}
export default CollectionsLikes