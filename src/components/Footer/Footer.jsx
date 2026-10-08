import React from 'react'
import bannerImg from "../../assets/coffee-cover.jpg";
import AppStoreImg from "../../assets/website/app_store.png";
import PlayStoreImg from "../../assets/website/play_store.png";
import { motion } from 'framer-motion';
import { fadeDown } from '../../animations/preset';

const BannerStyle = {
    backgroundImage: `url(${bannerImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
};

const Footer = () => {
    return (
        <div className='container my-14'>
            <div style={BannerStyle} 
                className="sm:min-h-[400px] sm:flex sm:justify-end sm:items-center rounded-xl"
            >
                <div className="space-y-5 max-w-xl mx-auto">
                    <motion.h1
                        variants={fadeDown({delay:0.4})}
                        initial="initial"
                        whileInView="animate"
                        className='text-2xl text-center sm:text-4xl font-semibold'
                    >
                    Download the app
                    </motion.h1>
                    <motion.p
                        variants={fadeDown({delay:0.4})}
                        initial="inital"
                        whileInView="animate"
                        className='text-center sm:px-20'
                    >
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum aut eligendi voluptate, perspiciatis aliquid sequi ipsa quasi culpa. Officia atque vero necessitatibus unde nihil nostrum, eveniet pariatur minus accusamus omnis?
                    </motion.p>
                    {/* Images Link */}
                    <div className="flex justify-center  items-center gap-4">
                        <a href="#" className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]'>
                            <motion.img 
                                variants={fadeDown({delay:0.4})}
                                initial="initial"
                                whileInView="animate"
                                src={AppStoreImg} 
                                alt="" 
                            />
                        </a>
                        <a href="#" className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]'>
                            <motion.img
                                variants={fadeDown({delay:0.4})}
                                initial="initial"
                                whileInView="animate" 
                                src={PlayStoreImg} 
                                alt="" 
                            />
                        </a>
                    </div>
                </div>
            </div>   
        </div>
    )
}

export default Footer