import React, { useState, createContext } from 'react'

export const SongContext = createContext()

const SongContextProvider = (props) => {
    const [src, setSrc] = useState("https://musica-api.up.railway.app/audio/audio_1.mp3")
    const [audioImg, setAudioImage] = useState("")
    const [artist, setArtist] = useState("")
    const [title, setTitle] = useState("")
    return (
        <SongContext.Provider value={{ src, setSrc, audioImg, setAudioImage, artist, setArtist, title, setTitle }}>
            {props.children}
        </SongContext.Provider>
    )
}

export default SongContextProvider