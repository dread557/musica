import React from 'react'
import { motion } from 'framer-motion'

const Likes = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <p className='mt-4'> You have no Likes</p>
        </motion.div>
    )
}

export default Likes