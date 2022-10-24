import React from 'react'
import HeroSection from '../components/HeroSection'
import NewRelease from '../components/NewRelease'
import PopularRelease from '../components/PopularRelease'
import { motion } from 'framer-motion'

const Home = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <HeroSection />
            <NewRelease />
            <PopularRelease />
        </motion.div>
    )
}

export default Home