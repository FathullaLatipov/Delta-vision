"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const logos = [
    "/image/logos/img.png",
    "/image/logos/img_2.png",
    "/image/logos/img_3.png",
    "/image/logos/img_4.png",
    "/image/logos/img_5.png",
    "/image/logos/img_6.png",
    "/image/logos/img_7.png",
    "/image/logos/img_8.png",
    "/image/logos/img_9.png",
]

export const ClientLogos = () => {
    return (
        <div className="relative z-10 md:px-6 pb-20">
            <div className="mx-auto max-w-full">
                <div className="overflow-hidden">
                    <motion.div 
                        className="flex animate-scroll gap-12"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* First set of logos */}
                        <div className="flex items-center gap-12 shrink-0">
                            {logos.map((logo, idx) => (
                                <motion.div
                                    key={idx}
                                    className="h-16 w-auto flex items-center justify-center"
                                    whileHover={{ scale: 1.2 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Image
                                        src={logo}
                                        alt={`Client logo ${idx + 1}`}
                                        width={120}
                                        height={60}
                                        className="h-16 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                                    />
                                </motion.div>
                            ))}
                        </div>

                        {/* Duplicate set for seamless loop */}
                        <div className="flex items-center gap-12 shrink-0">
                            {logos.map((logo, idx) => (
                                <motion.div
                                    key={`dup-${idx}`}
                                    className="h-16 w-auto flex items-center justify-center"
                                    whileHover={{ scale: 1.2 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Image
                                        src={logo}
                                        alt={`Client logo duplicate ${idx + 1}`}
                                        width={120}
                                        height={60}
                                        className="h-16 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Add the necessary CSS for the animation */}
            <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        
        @media (min-width: 768px) {
          .animate-scroll {
            animation-duration: 30s;
          }
        }
        
        @media (min-width: 1024px) {
          .animate-scroll {
            animation-duration: 40s;
          }
        }
      `}</style>
        </div>
    )
}