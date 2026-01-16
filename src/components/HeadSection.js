"use client"

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {ClientLogos} from "@/components/carusel";
import { motion } from "framer-motion";


export const HeadSection = () => {
    return (
        <div id='home' className="text-foreground relative overflow-hidden">
            {/* Navigation Header */}


            {/* Hero Section */}
            <main className="relative">
                <div className="absolute inset-0 overflow-hidden">
                    {/* Hero background image with parallax effect */}
                    <motion.div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
                        style={{
                            backgroundImage: `url('/image/hero-bg.png')`,
                        }}
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                    ></motion.div>
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/80"></div>
                    {/* Animated gradient orb */}
                    <motion.div
                        className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-radial opacity-30 blur-3xl"
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.5, 0.3],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    ></motion.div>
                </div>

                {/* Hero Content */}
                <div className="relative z-10 px-6 py-20 md:py-32 pt-32">
                    <div className="mx-auto max-w-4xl text-center">
                        <motion.h1 
                            className="text-4xl md:text-6xl lg:text-7xl font-bold font-sans leading-tight mb-8"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                        >
                            <span className="gradient-text">SMM. Реклама в GOOGLE и YANDEX</span>
                        </motion.h1>

                        <motion.p 
                            className="text-lg md:text-xl lg:text-2xl text-gray-300 font-sans max-w-2xl mx-auto mb-12 leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
                        >
                            Запустим Ваш проект за <span className="text-white font-semibold">7 дней</span>. Привлекаем качественных лидов для увеличения продаж. Качественные клиенты с Таргетированной и Контекстной рекламы.
                        </motion.p>

                        <motion.div 
                            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
                        >
                            <motion.a
                                href="#contact"
                                className='cursor-pointer group hidden md:block'
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Button
                                    size="lg"
                                    className="bg-white text-black hover:bg-white/90 px-8 py-6 text-base md:text-lg font-semibold rounded-full cursor-pointer shadow-glow hover:shadow-glow-lg transition-all duration-300 group"
                                >
                                    Получить коммерческое предложение
                                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </motion.a>
                            <motion.a
                                href="#contact"
                                className='cursor-pointer group block md:hidden'
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Button
                                    className="bg-white text-black hover:bg-white/90 text-base md:text-lg font-semibold rounded-full cursor-pointer shadow-glow hover:shadow-glow-lg transition-all duration-300 group"
                                >
                                    Получить коммерческое предложение
                                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </motion.a>

                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Button
                                    variant='dark'
                                    size="lg"
                                    className="px-8 py-6 text-lg font-semibold rounded-full hover-gradient cursor-pointer shadow-glow hover:shadow-glow-lg transition-all duration-300 group"
                                >
                                    Заказать экспертный аудит
                                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>

                {/* Client Logos Carousel */}
                <ClientLogos />
            </main>
        </div>
    )
}
