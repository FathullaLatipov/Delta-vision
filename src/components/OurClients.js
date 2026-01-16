"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const companies = [
    {
        id: 1,
        name: "Сибирская Генерирующая Компания",
        logo: "/image/clientsLogo/1.jpg",
    },
    {
        id: 2,
        name: "Газпром",
        logo: "/image/clientsLogo/2.webp",
    },
    {
        id: 3,
        name: "Лукойл",
        logo: "/image/clientsLogo/3.jpg",
    },
    {
        id: 4,
        name: "Лукойл",
        logo: "/image/clientsLogo/4.jpg",
    },
    {
        id: 5,
        name: "Лукойл",
        logo: "/image/clientsLogo/5.png",
    },
    {
        id: 6,
        name: "Лукойл",
        logo: "/image/clientsLogo/6.jpeg",
    },
    {
        id: 7,
        name: "Лукойл",
        logo: "/image/clientsLogo/7.jpg",
    },
    {
        id: 8,
        name: "Лукойл",
        logo: "/image/clientsLogo/8.png",
    },
    {
        id: 9,
        name: "Лукойл",
        logo: "/image/clientsLogo/9.png",
    },
    {
        id: 10,
        name: "Лукойл",
        logo: "/image/clientsLogo/10.png",
    },
    {
        id: 11,
        name: "Лукойл",
        logo: "/image/clientsLogo/11.png",
    },
    {
        id: 12,
        name: "Лукойл",
        logo: "/image/clientsLogo/12.png",
    },
    {
        id: 13,
        name: "Лукойл",
        logo: "/image/clientsLogo/13.png",
    },
    {
        id: 14,
        name: "Лукойл",
        logo: "/image/clientsLogo/14.png",
    },
    {
        id: 15,
        name: "Лукойл",
        logo: "/image/clientsLogo/15.png",
    },
]

export default function CompanyLogos() {
    return (
        <section className="py-10 sm:py-12 md:py-16 relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-radial opacity-10 pointer-events-none"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div 
                    className="text-center mb-8 sm:mb-10 md:mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold mb-3 sm:mb-4">
                        <span className="gradient-text">Наши партнеры</span>
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-gray-300">
                        Компании, которые доверяют нам
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6 place-items-center">
                    {companies.map((company, index) => (
                        <motion.div
                            key={company.id}
                            className="glass rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 lg:p-6 shadow-glow cursor-pointer group flex items-center justify-center border border-white/10 hover:border-white/20 transition-all duration-300 hover-lift w-full aspect-square"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05, duration: 0.4 }}
                            whileHover={{ scale: 1.05, y: -3 }}
                        >
                            <div className="relative h-12 sm:h-16 md:h-20 w-full flex items-center justify-center">
                                <Image
                                    src={company.logo || "/placeholder.svg"}
                                    alt={company.name}
                                    width={160}
                                    height={80}
                                    className="max-w-full max-h-full object-contain transition-all duration-500
                   filter grayscale opacity-60
                   group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
