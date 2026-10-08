import React from 'react'
import { motion } from 'framer-motion'
import { containerVariants, fadeDown, fadeIn } from '../../animations/preset'
import Coffee1 from "../../assets/coffee/coffee1.png"
import Coffee3 from "../../assets/coffee/coffee3.png"

const serviceData = [
    {
        id: 1,
        image: Coffee1,
        title: "Black Coffee",
        subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minus accusantium fugit molestias rem eveniet facilis quam veritatis minima nesciunt provident, nihil porro iste quasi, pariatur, laborum adipisci. Quam, expedita."

    },
    {
        id: 2,
        image: Coffee3,
        title: "Hot Coffee",
        subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minus accusantium fugit molestias rem eveniet facilis quam veritatis minima nesciunt provident, nihil porro iste quasi, pariatur, laborum adipisci. Quam, expedita."

    },
    {
        id: 3,
        image: Coffee1,
        title: "Cold Coffee",
        subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minus accusantium fugit molestias rem eveniet facilis quam veritatis minima nesciunt provident, nihil porro iste quasi, pariatur, laborum adipisci. Quam, expedita."

    },
]

const Service = () => {
    return (
        <div className='container my-16 space-y-4'>
            {/* Header Section */}
            <div className="text-center max-w-lg mx-auto space-y-2">
                <motion.h1 
                    variants={fadeDown()}
                    initial="initial"
                    whileInView="animate"
                    className='text-3xl font-bold text-lightGray'>
                        Fresh and 
                        <span className='text-primary'> Tasty Coffee </span>
                </motion.h1>
                <p className='text-sm opacity-50'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem doloremque impedit architecto ullam. Voluptate, fugiat officiis optio enim asperiores, magni tempora expedita eius commodi nesciunt sequi, porro officia ducimus sit?
                </p>
            </div>
            {/* Card Section */}
            <motion.div 
                variants={containerVariants()}
                initial="initial"
                whileInView="animate"
                viewport={{ amount:0.2}}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {serviceData.map((service, index) => (
                        <motion.div 
                        variants={fadeIn()}
                        key = {index}
                        className="text-center p-4 space-y-6">
                            <img 
                                src={service.image} 
                                alt="" 
                                className='img-shadow2 max-w-[200px] mx-auto hover:scale-110 duration-300 cursor-pointer'
                            />
                            <div className="space-y-2">
                                <h1 className='text-2xl font-bold text-primary'>{service.title}</h1>
                                <p className='text-darkGray'>{service.subtitle}</p>
                            </div>
                        </motion.div>
                    ))}
            </motion.div>
        </div>
    )
}

export default Service