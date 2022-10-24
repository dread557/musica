import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ScreenContext } from '../contexts/Screensize'

const Navbar = () => {
    const { setActiveMenu } = useContext(ScreenContext)
    return (
        <div className='w-full h-full absolute top-20 bottom-0 bg-[#1D2123] right-0 z-50 left-0 p-10 md:hidden'>
            <NavLink className={({ isActive }) =>
                isActive ? 'flex gap-4 items-center mb-12 text-lg text-[#FACD66]' : 'flex gap-4 items-center mb-12 text-lg'
            } to='/' onClick={() => setActiveMenu(false)}>
                <ion-icon className='w-[17px] h-[18px] text-2xl' name="home-sharp"></ion-icon>
                Home
            </NavLink>
            <NavLink className={({ isActive }) =>
                isActive ? 'flex gap-4 items-center mb-12 text-lg text-[#FACD66]' : 'flex gap-4 items-center mb-12 text-lg'
            } to='/collectionslikes' onClick={() => setActiveMenu(false)}>
                <ion-icon name="musical-notes-sharp"></ion-icon>
                My Collection
            </NavLink>
            <NavLink className={({ isActive }) =>
                isActive ? 'flex gap-4 items-center mb-12 text-lg text-[#FACD66]' : 'flex gap-4 items-center mb-12 text-lg'
            } to='/radio' onClick={() => setActiveMenu(false)}>
                <ion-icon name="file-tray-full-sharp"></ion-icon>
                Radio
            </NavLink>
            <NavLink className={({ isActive }) =>
                isActive ? 'flex gap-4 items-center mb-12 text-lg text-[#FACD66]' : 'flex gap-4 items-center mb-12 text-lg'
            } to='/videos' onClick={() => setActiveMenu(false)}>
                <ion-icon name="film-sharp"></ion-icon>
                Music videos
            </NavLink>
            <NavLink className={({ isActive }) =>
                isActive ? 'flex gap-4 items-center mb-12 text-lg text-[#FACD66]' : 'flex gap-4 items-center mb-12 text-lg'
            } to='/profile' onClick={() => setActiveMenu(false)}>
                <ion-icon name="person-sharp"></ion-icon>
                Profile
            </NavLink>
            <NavLink className={({ isActive }) =>
                isActive ? 'flex gap-4 items-center mb-12 text-lg text-[#FACD66]' : 'flex gap-4 items-center mb-12 text-lg'
            } to='/logout' onClick={() => setActiveMenu(false)}>
                <ion-icon name="log-out"></ion-icon>
                Logout
            </NavLink>
        </div>
    )
}

export default Navbar