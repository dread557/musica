import React, { useState, createContext } from 'react'

export const SongContext = createContext()

const SongContextProvider = (props) => {
    const [src, setSrc] = useState("")
    return (
        <SongContext.Provider value={{ src, setSrc }}>
            {props.children}
        </SongContext.Provider>
    )
}

export default SongContextProvider