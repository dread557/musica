import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import { useGetPlaylistsQuery } from '../services/songsApi'
import { Collection, Likes } from './index'

const Collections = () => {
    const { data } = useGetPlaylistsQuery()
    return (
        <div className='p-10 pt-0 md:pl-16 md:ml-9 '>
            <header className='flex '>
                <NavLink to='/collection' className={({ isActive }) =>
                    isActive ? 'bg-[#FACD66] h-[38px] p-3 border border-[#FACD66] rounded-[27px] text-[#1D2123] flex items-center' : ' h-[38px] p-3 border border-[#EFEEE0] rounded-[27px] text-[#EFEEE0] flex items-center'
                }>My collection</NavLink>
                <NavLink to='/likes' className={({ isActive }) =>
                    isActive ? 'bg-[#FACD66] h-[38px] p-3 border border-[#FACD66] rounded-[27px] text-[#1D2123] flex items-center' : ' h-[38px] p-3 border border-[#EFEEE0] rounded-[27px] text-[#EFEEE0] flex items-center'
                }>Likes</NavLink>
            </header>
        </div>
    )
}

export default Collections