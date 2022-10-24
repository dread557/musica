import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ScreenContext } from '../contexts/Screensize'
import Navbar from './Navbar'

const Header = () => {

    const { activeMenu, setActiveMenu } = useContext(ScreenContext)

    return (
        <div className='flex justify-between items-center md:justify-start p-10 pt-8'>
            <Link to='/home'>
                <img src='/../assets/logo.png' alt='logo' />
            </Link>
            <div className='flex items-center space-x-5 pl-6'>
                <ion-icon name="search-outline"></ion-icon>
                <input className='bg-transparent outline-none' type='text' placeholder='Search' />
            </div>
            <div className=' text-2xl md:hidden cursor-pointer relative z-20' onClick={() => setActiveMenu(!activeMenu)}>
                <ion-icon name={activeMenu ? 'close' : 'menu'}></ion-icon>
            </div>
            {activeMenu && <Navbar />}
        </div>
    )
}

export default Header