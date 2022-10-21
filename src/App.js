import React, { useContext } from 'react'
import Header from './components/Header'
import SideNav from './components/SideNav'
import { ScreenContext } from './contexts/Screensize'
import { Routes, Route, Navigate } from 'react-router-dom'
import { CollectionsLikes, Home, Logout, Profile, Radio, Videos, AlbumDetails, Collection, Likes } from './routes'
import Player from './components/Player'

function App() {

  const { screenSize } = useContext(ScreenContext)

  return (
    <>
      <Header />
      {screenSize > 768 && <SideNav />}
      <Routes>
        <Route exact path='/' element={<Navigate to='home' />} />
        <Route path='/home' element={<Home />} />
        <Route path='home/playlist/:Id' element={<AlbumDetails />} />
        <Route path='/collectionslikes' element={<CollectionsLikes />} />
        <Route path='/radio' element={<Radio />} />
        <Route path='/videos' element={<Videos />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/logout' element={<Logout />} />
      </Routes>
      <Player />
    </>
  );
}

export default App;
