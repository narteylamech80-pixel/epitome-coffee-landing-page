import React from 'react'
import {GiHamburgerMenu} from "react-icons/gi";
import { motion } from 'framer-motion';
import { fadeDown, fadeUp } from '../../animations/preset';


const Navbar = ({sidebar, setSidebar}) => {
    return (
        <nav className='absolute top-0 left-0 w-full pt-10 text-white z-[9999]'>
            <div className="container">
                <div className="flex justify-between items-center">
                    {/* Logo Section */}
                    <motion.h1
                        variants={fadeDown()}
                        initial = {fadeDown({}).initial}
                        animate = {fadeDown({}).animate}
                        className='text-2xl font-semibold uppercase'>
                            <span className='text-primary'>EPITOME</span> Coffee.
                    </motion.h1>
                    {/* Hamburger Menu Section */}
                    <motion.div
                        variants = {fadeUp()}
                        initial = {fadeUp({}).initial}
                        animate = {fadeUp({}).animate}
                        onClick={() => setSidebar(!sidebar)}>
                        <GiHamburgerMenu className="text-3xl cursor-pointer" />
                    </motion.div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar