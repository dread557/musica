import React, { useState, createContext } from 'react'

export const SongContext = createContext()

const SongContextProvider = (props) => {
    const [src, setSrc] = useState("https://musica-api.up.railway.app/audio/audio_3.mp3")
    return (
        <SongContext.Provider value={{ src, setSrc }}>
            {props.children}
        </SongContext.Provider>
    )
}

export default SongContextProvider