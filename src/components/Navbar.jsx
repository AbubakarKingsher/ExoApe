import { motion } from 'framer-motion'
import React from 'react'
import { IoMenu } from 'react-icons/io5'

function Navbar() {


    return (
        <div className='flex items-center fixed justify-between md:py-10 py-7 md:px-10 px-7 w-full z-50'>
            <motion.img initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2, delay: .5 }} className='w-22' src="/assets/logo.svg" />
            <motion.ul initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2, delay: .5 }} className='md:flex hidden items-center gap-8 text-sm'>
                <li className='cursor-pointer'>Work</li>
                <li className='cursor-pointer'>Studio</li>
                <li className='cursor-pointer'>News</li>
                <li className='cursor-pointer'>Contact</li>
            </motion.ul>
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2, delay: .2 }} className='md:hidden block'><IoMenu size={25} /></motion.span>
        </div>
    )
}

export default Navbar