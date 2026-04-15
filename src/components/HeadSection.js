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
                    {/* Hero background image - simplified on mobile */}
                    {/* <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
                        style={{
                            backgroundImage: `url('/image/hero-bg.png')`,
                        }}
                    ></div> */}
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/80"></div>
                    {/* Animated gradient orb - disabled on mobile for performance */}
                    <motion.div
                        className="absolute top-1/4 right-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-gradient-radial opacity-20 sm:opacity-30 blur-3xl hidden sm:block"
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.2, 0.4, 0.2],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    ></motion.div>
                </div>

                {/* Hero Content */}
                <div className="relative z-10 px-4 sm:px-6 py-12 sm:py-16 md:py-20 lg:py-24 pt-24 sm:pt-28 md:pt-32">
                    <div className="mx-auto max-w-7xl">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
                            <div className="text-left max-w-xl">
                        <motion.h1 
                            className="text-4xl sm:text-5xl md:text-6xl font-bold font-sans leading-[1.05] mb-6 sm:mb-7"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                        >
                            Увеличим поток
                            <br />
                            клиентов <span className="text-emerald-400">на 38%</span>
                            <br />
                            за 10 дней
                        </motion.h1>

                        <motion.p 
                            className="text-base sm:text-lg text-gray-300 font-sans mb-8 sm:mb-10 leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
                        >
                            Мы настроим идеальную рекламу в Google и Яндекс, поднимем ваши позиции, усилим доверие и увеличим звонки и клики до 100% в первый месяц
                        </motion.p>

                        <motion.div
                            className="flex flex-wrap gap-3 mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
                        >
                            <div className="px-4 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm min-w-[132px]">
                                <div className="text-3xl font-bold text-white">50+</div>
                                <div className="text-xs text-gray-400">Успешных проектов</div>
                            </div>
                            <div className="px-4 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm min-w-[132px]">
                                <div className="text-3xl font-bold text-white">+30%</div>
                                <div className="text-xs text-gray-400">Средний рост клиентов</div>
                            </div>
                        </motion.div>

                        <motion.div 
                            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-start items-start"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
                        >
                            <motion.a
                                href="https://t.me/deltavison"
                                target="_blank"
                                rel="noopener noreferrer"
                                className='cursor-pointer group w-full sm:w-auto'
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                data-gtm-button="telegram_head_section"
                                data-gtm-location="head_section"
                                data-gtm-action="open_telegram"
                            >
                                <Button
                                    className="bg-white text-black hover:bg-white/90 w-full sm:w-auto px-8 py-6 text-base font-semibold rounded-full cursor-pointer shadow-glow hover:shadow-glow-lg transition-all duration-300 group"
                                >
                                    Заказать рекламу
                                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </motion.a>
                        </motion.div>
                            </div>

                            <motion.div
                                className="relative flex justify-center lg:justify-end"
                                initial={{ opacity: 0, x: 40 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.9, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
                            >
                                <img
                                    src="https://delta-vision-boost.lovable.app/assets/laptop-mockup-CSr-qIxQ.png"
                                    alt="Google Ads dashboard on laptop"
                                    className="w-full max-w-[520px] object-contain"
                                    loading="eager"
                                />
                                <div className="absolute -bottom-4 right-0 sm:-right-4 rounded-2xl px-4 py-3 bg-[#101827]/80 border border-white/10 backdrop-blur-md">
                                    <div className="text-[11px] text-gray-400">Рост конверсии</div>
                                    <div className="text-xl font-bold text-white">
                                        <span className="text-emerald-400 text-base mr-1">↑ 24%</span>78
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Client Logos Carousel */}
                <ClientLogos />
            </main>
        </div>
    )
}
