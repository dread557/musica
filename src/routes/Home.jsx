import React from 'react'
import HeroSection from '../components/HeroSection'
import NewRelease from '../components/NewRelease'
import PopularRelease from '../components/PopularRelease'

const Home = () => {
    return (
        <div>
            <HeroSection />
            <NewRelease />
            <PopularRelease />
        </div>
    )
}

export default Home