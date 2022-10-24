import React from 'react'
import { motion } from 'framer-motion'

const Radio = () => {
    return (
        <motion.div className='p-10 pt-0 md:pl-16 md:ml-9'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >Radio
        </motion.div>
    )
}

export default Radio