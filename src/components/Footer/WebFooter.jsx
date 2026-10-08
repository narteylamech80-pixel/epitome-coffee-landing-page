import React from 'react'
import {
    FaFacebook,
    FaGoogle,
    FaInstagram,
    FaPhone,
    FaTelegram,
} from "react-icons/fa";
import {FaMapLocation} from "react-icons/fa6"
import CreditCards from "../../assets/website/credit-cards.webp";
import { motion } from 'framer-motion';
import { fadeDown } from '../../animations/preset';
const WebFooter = () => {
    return (
        <div className='bg-gradient-to-r from-primary to-primaryDark pt-12 pb-8 text-white'>
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {/* Company Details Section */}
                    <motion.div 
                        variants={fadeDown({delay:0.4})}
                        initial="initial"
                        whileInView="animate"
                        viewport={{once: true, amount: 0.5}}
                        className="space-y-6"
                    >
                        <h1 className='text-3xl font-bold uppercase'>
                            Coders Cafe
                        </h1>
                        <p className='text-sm max-w-[300px]'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor sequi eveniet asperiores nesciunt obcaecati, nulla eligendi sunt praesentium voluptatum impedit rem, ratione id libero dolorum a perspiciatis nobis maiores culpa?
                        </p>
                        <div className="">
                            <p className='flex items-center gap-2'>
                                <FaPhone /> +(233) 55 477 6095
                            </p>
                            <p className='flex items-center gap-2 mt-2'>
                                {" "}
                                <FaMapLocation /> Kumasi, Ghana
                            </p>
                        </div>
                    </motion.div>
                    {/* Footer Links Section */}
                    <motion.div
                        variants={fadeDown({delay:0.4})}
                        initial="initial"
                        whileInView="animate"
                        viewport={{once: true, amount: 0.5}} 
                        className="space-y-6"
                    >
                        <h1 className="text-3xl font-bold">
                            Quick Links
                        </h1>
                        <div className="grid grid-cols grid-cols-2 gap-3">
                            {/* first column section  */}
                            <div className="">
                                <ul className='space-y-2'>
                                    <li>Home</li>
                                    <li>About</li>
                                    <li>Contact Us</li>
                                    <li>Privacy Policy</li>
                                </ul>
                            </div>
                            {/* second column section  */}
                            <div className="">
                                <ul className='space-y-2'>
                                    <li>Home</li>
                                    <li>About</li>
                                    <li>Contact Us</li>
                                    <li>Privacy Policy</li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                    {/* Social Link Section  */}
                    <motion.div
                        variants={fadeDown({delay:0.4})}
                        initial="initial"
                        whileInView="animate"
                        viewport={{once: true, amount: 0.5}} 
                        className="space-y-6"
                    >
                        <h1 className='text-3xl font-bold'>
                            Follow Us
                        </h1>
                        <div className="flex items-center gap-3">
                            <FaFacebook className='text-3xl hover:scale-105 duration-300' />
                            <FaInstagram className='text-3xl hover:scale-105 duration-300' />
                            <FaTelegram className='text-3xl hover:scale-105 duration-300' />
                            <FaGoogle className='text-3xl hover:scale-105 duration-300' />
                        </div>
                        <div className="">
                            <h1 className='text-xl font-semibold'>Payment Methods</h1>
                            <img 
                                src={CreditCards} 
                                alt="credit cards" 
                                className='w-[80%]'
                            />
                        </div>
                    </motion.div>
                </div>
                {/* Copyright Section  */}
                <p 
                    className='text-white text-center mt-8 pt-8 border-t-2'
                >
                    Copyright &copy; 2026 EPITOME. All Rights Reserved.
                </p>
            </div>
        </div>
    )
}

export default WebFooter