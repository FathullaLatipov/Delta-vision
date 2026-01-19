"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const logos = [
    "/image/logos/1.png",
    "/image/logos/2.png",
    "/image/logos/3.png",
    "/image/logos/4.png",
    "/image/logos/5.png",
    "/image/logos/6.png",
    "/image/logos/7.png",
    "/image/logos/8.png",
    "/image/logos/9.png",
]

export const ClientLogos = () => {
    return (
        <div className="relative z-10">
            <div className="w-full">
                <motion.div 
                    className="flex items-center justify-center gap-6 sm:gap-8 md:gap-12 flex-wrap py-8 sm:py-10 md:py-12 px-3 sm:px-4 md:px-6"
                    style={{ backgroundColor: '#f4f4f6', width: '100%' }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    {logos.map((logo, idx) => (
                        <div
                            key={idx}
                            className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto flex items-center justify-center"
                        >
                            <Image
                                src={logo}
                                alt={`Client logo ${idx + 1}`}
                                width={190}
                                height={68}
                                className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}