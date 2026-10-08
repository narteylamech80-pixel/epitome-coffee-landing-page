import React from 'react'
import { useState } from 'react';
import BgImage from '../../assets/bg-slate.png';
import BlackCoffee from "../../assets/black.png"
import EpitomeLogo from "../../assets/Epitome_Logo.png";
import { motion } from 'framer-motion';
import Navbar from '../navbar/Navbar';
import { fade2Left, fadeUp } from '../../animations/preset';
import {FaFacebookF, FaTwitter, FaInstagram} from "react-icons/fa";


const bgImage = {
    backgroundImage: `url(${BgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
};

const Hero = () => {
    const [sidebar, setSidebar] = useState(false)
    return (
        <main style={bgImage}>
            <section className='relative min-h-[450px] w-full'>
                <div className='container'>
                    {/* Navbar Section */}
                    <Navbar sidebar={sidebar} setSidebar={setSidebar}/>
                    {/* Hero Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px]">
                        {/* Text Content Section */}
                        <div className='text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28'>
                            <motion.h1 
                                initial={{opacity: 0, y: -100}} 
                                whileInView={{opacity: 1, y: 0}}
                                transition={{
                                    type: "string",
                                    stiffness: 100,
                                    damping: 10,
                                    delay: 1,
                                }} 
                                className='text-7xl font-bold leading-tight ml-14'>
                                Black Tumbler
                            </motion.h1>
                            <div>
                                <motion.div 
                                    initial={{opacity: 0, y: 100}} 
                                    whileInView={{opacity: 1, y: 0}}
                                    transition={{
                                        type: "string",
                                        stiffness: 100,
                                        damping: 10,
                                        delay: 1,
                                    }}                                
                                    className="relative z-10 space-y-4"> 
                                        <h1 className='text-2xl'>Black LifeStyle Lovers,</h1>
                                        <h1 className='text-sm opacity-55 leading-loose'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, excepturi incidunt, et ipsam atque id, quis maxime ullam maiores error molestiae corporis? Minima vitae aut similique quasi qui dolorum eaque.</h1>
                                </motion.div>
                                <div className='absolute -top-6 -left-10 w-[250px] h-[190px] bg-gray-700/25'>

                                </div>
                            </div>
                        </div>
                        {/* Hero Image Section */}
                        <div className='relative'>
                            <motion.img
                                initial={{opacity: 0, scale:0, y: -100}} 
                                whileInView={{opacity: 1, scale:1, y: 0}}
                                viewport={{once:true}}
                                transition={{
                                    type: "string",
                                    stiffness: 100,
                                    damping: 10,
                                    delay: 0.5,
                                }}                             
                                src={BlackCoffee} alt='' className='relative z-40 h-[400px] md:h-[700px] img-shadow'
                            />
                            {/* Epitome Logo */}
                            <motion.img
                                variants = {fadeUp()}
                                initial = {fadeUp().initial}
                                whileInView = {fadeUp().animate}
                                src={EpitomeLogo}
                                alt=""
                                className='h-[180px] w-[180px] absolute top-24 -right-16 z-10'
                            />
                            
                            {/* text content section */}
                            <div className='absolute -top-20 left-[200px] z-1'>
                                <h1 className='text-[140px] scale-150 font-bold text-darkGray/40 leading-none'>Black Tumbler </h1>
                            </div>
                        </div>
                        {/* Text Content Section */}
                        <div className="hidden lg:block">
                            <motion.div
                                initial={{opacity: 0, y: 100}} 
                                whileInView={{opacity: 1, y: 0}}
                                transition={{
                                    type: "string",
                                    stiffness: 100,
                                    damping: 10,
                                    delay: 1,
                                }}                         
                                className='text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28'>
                                    <h1 className='opacity-0 text-7xl font-bold leading-tight ml-14'>Black Tumbler</h1>
                                    <div>
                                        <div className="relative z-10 space-y-4"> 
                                            <h1 className='text-2xl'>Black Tumbler</h1>
                                            <h1 className='text-sm opacity-55 leading-loose'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, excepturi incidunt, et ipsam atque id, quis maxime ullam maiores error molestiae corporis? Minima vitae aut similique quasi qui dolorum eaque.</h1>
                                        </div>
                                        <div className='absolute -top-6 -right-10 w-[250px] h-[190px] bg-darkGray/50'>

                                        </div>
                                    </div>
                            </motion.div>
                            <div className=""></div> 
                        </div>                       
                    </div>
                </div>
                {/* Sidebar Menu Section */}
                {sidebar && (
                    
                    <motion.div
                        variants={fade2Left()}
                        initial={fade2Left({}).initial}
                        animate={fade2Left({delay:0.3}).animate} 
                        className="absolute top-0 right-0 w-[140px] h-full bg-gradient-to-b from-primary/80 to-primaryDark/80 backdrop-blur-sm z-50">
                            <div className='w-full h-full flex justify-center items-center'>
                                <div className="flex flex-col justify-center items-center gap-6 text-white">
                                    {/* Line */}
                                    <div className="w-[3px] h-[70px] bg-white">

                                    </div>
                                    {/* Social Icons */}
                                    <div className='inline-block p-2 rounded-full cursor-pointer border border-white'>
                                        <FaFacebookF className='text-2xl'/>
                                    </div>
                                    <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                                        <FaTwitter className='text-2xl'/>
                                    </div>
                                    <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                                        <FaInstagram className='text-2xl'/>
                                    </div>
                                    {/* Line */}
                                    <div className="w-[3px] h-[70px] bg-white">

                                    </div>
                                </div>
                            </div>
                    </motion.div>
                )}
            </section>
        </main>

    )
}

export default Hero