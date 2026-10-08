import React from 'react'
import WorldMap from "../../assets/world-map.png"
import { motion } from 'framer-motion'
import { fadeDown, fadeUp, scaleOut } from '../../animations/preset'

const WhereToBuy = () => {
    return (
        <div className='container my-36'>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 place-items-center">
                {/* Form Section */}
                <div className="space-y-8">
                    <motion.h1
                        variants={fadeDown()}
                        initial="initial"
                        whileInView="animate" 
                        className='text-4xl font-bold text-darkGray font-serif'
                    >
                        Buy our products from anywhere
                    </motion.h1>
                    <motion.div
                        variants={fadeDown()}
                        initial="initial"
                        whileInView="animate" 
                        className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-4">
                            <input 
                                type="text" 
                                placeholder='Name' 
                                className='input-style w-full lg:w-[150px]' 
                            />
                            <input 
                                type="email" 
                                placeholder='Email'
                                className='input-style w-full'
                            />
                            <input 
                                type="text" 
                                placeholder='Country' 
                                className='input-style w-full' 
                            />
                            <input 
                                type="text" 
                                placeholder='Zipcode'
                                className='input-style w-full lg:w-[150px]'
                            />
                    </motion.div>
                    <motion.button
                        variants={fadeDown({delay:0.5})}
                        initial="initial"
                        whileInView="animate" 
                        className='primary-btn w-full'
                    >
                        Order Now
                    </motion.button>
                </div>
                {/* World Map Section */}
                <div className="col-span-2">
                <motion.img 
                    variants={scaleOut({scale:0.4, delay:0.5})}
                    initial="initial"
                    whileInView="animate"
                    src={WorldMap} 
                    alt=""
                    className='w-full sm:w-[500px] mx-auto'
                />
                </div>
            </div>
        </div>
    )
}

export default WhereToBuy