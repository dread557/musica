import React from 'react'
import { NavLink } from 'react-router-dom'



const SideNav = () => {
    return (
        <div className=' pl-10 absolute top-[100px]'>
            <div className=' bg-[#1E1E1E] w-fit p-2 rounded-[60px] mb-4 flex flex-col items-center'>
                <NavLink className={({ isActive }) =>
                    isActive ? 'flex items-center mb-7 text-lg text-[#FACD66]' : 'flex items-center mb-7 text-lg'
                } to='/home'>
                    <ion-icon name="home-sharp"></ion-icon>
                </NavLink>
                <NavLink className={({ isActive }) =>
                    isActive ? 'flex items-center mb-7 text-lg text-[#FACD66]' : 'flex items-center mb-7 text-lg'
                } to='/collectionslikes'>
                    <ion-icon name="musical-notes-sharp"></ion-icon>
                </NavLink>
                <NavLink className={({ isActive }) =>
                    isActive ? 'flex items-center mb-7 text-lg text-[#FACD66]' : 'flex items-center mb-7 text-lg'
                } to='/radio'>
                    <ion-icon name="file-tray-full-sharp"></ion-icon>
                </NavLink>
                <NavLink className={({ isActive }) =>
                    isActive ? 'flex items-center mb-7 text-lg text-[#FACD66]' : 'flex items-center mb-7 text-lg'
                } to='/videos'>
                    <ion-icon name="film-sharp"></ion-icon>
                </NavLink>

            </div>
            <div className='bg-[#1E1E1E] w-fit p-2 rounded-[60px] flex flex-col items-center'>
                <NavLink className={({ isActive }) =>
                    isActive ? 'flex items-center mb-7 text-lg text-[#FACD66]' : 'flex items-center mb-7 text-lg'
                } to='/profile'>
                    <ion-icon name="person-sharp"></ion-icon>
                </NavLink>
                <NavLink className={({ isActive }) =>
                    isActive ? 'flex items-center mb-7 text-lg text-[#FACD66]' : 'flex items-center mb-7 text-lg'
                } to='/logout'>
                    <ion-icon name="log-out"></ion-icon>
                </NavLink>
            </div>
        </div>
    )
}

export default SideNav