import React, { useState, useEffect, createContext } from 'react'

export const ScreenContext = createContext()

const ScreensizeProvider = (props) => {
    const [activeMenu, setActiveMenu] = useState(false)
    const [screenSize, setScreenSize] = useState(null)

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth)

        window.addEventListener('resize', handleResize)

        handleResize()
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    useEffect(() => {
        if (screenSize <= 800) {
            setActiveMenu(false)
        } else {
            setActiveMenu(true)
        }
    }, [screenSize])
    return (
        <ScreenContext.Provider value={{ activeMenu, screenSize, setActiveMenu }}>
            {props.children}
        </ScreenContext.Provider>
    )
}

export default ScreensizeProvider