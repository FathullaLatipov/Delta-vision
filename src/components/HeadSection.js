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
                        className="absolute top-1/4 right-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-gradient-radial opacity-20 sm:opacity-30 blur-3xl"
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
                <div className="relative z-10 px-4 sm:px-6 py-12 sm:py-16 md:py-24 lg:py-32 pt-24 sm:pt-28 md:pt-32">
                    <div className="mx-auto max-w-4xl text-center">
                        <motion.h1 
                            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-sans leading-tight mb-4 sm:mb-6 md:mb-8 px-2"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                        >
                            SMM. Реклама в <span className="inline-block">
                                <span style={{ color: '#4285F4' }}>G</span>
                                <span style={{ color: '#EA4335' }}>O</span>
                                <span style={{ color: '#FBBC05' }}>O</span>
                                <span style={{ color: '#4285F4' }}>G</span>
                                <span style={{ color: '#34A853' }}>L</span>
                                <span style={{ color: '#EA4335' }}>E</span>
                            </span> и <span><span style={{ color: '#FC3F1D' }}>Y</span><span style={{ color: '#ffffff' }}>ANDEX</span></span>
                        </motion.h1>

                        <motion.p 
                            className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-300 font-sans max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-12 leading-relaxed px-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
                        >
                            Запустим Ваш проект за <span className="text-white font-semibold">7 дней</span>. Привлекаем качественных лидов для увеличения продаж. Качественные клиенты с Таргетированной и Контекстной рекламы.
                        </motion.p>

                        <motion.div 
                            className="flex flex-col gap-3 sm:gap-4 justify-center items-center px-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
                        >
                            <motion.a
                                href="/image/DELTA_VISION_COMMERCIAL.pdf"
                                download="DELTA_VISION_COMMERCIAL.pdf"
                                className='cursor-pointer group w-full sm:w-auto'
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                data-gtm-button="pdf_download_head_section"
                                data-gtm-location="head_section"
                                data-gtm-action="download_pdf"
                                data-gtm-pdf-name="DELTA_VISION_COMMERCIAL.pdf"
                            >
                                <Button
                                    className="bg-white text-black hover:bg-white/90 w-full sm:w-auto px-6 sm:px-8 py-4 sm:py-5 md:py-6 text-sm sm:text-base md:text-lg font-semibold rounded-full cursor-pointer shadow-glow hover:shadow-glow-lg transition-all duration-300 group"
                                >
                                    <span className="hidden sm:inline">Получить коммерческое предложение</span>
                                    <span className="sm:hidden">Коммерческое предложение</span>
                                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </motion.a>

                            <motion.a
                                href="https://t.me/islamzaripov"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                data-gtm-button="telegram_head_section"
                                data-gtm-location="head_section"
                                data-gtm-action="open_telegram"
                            >
                                <Button
                                    variant='dark'
                                    className="w-full sm:w-auto px-6 sm:px-8 py-4 sm:py-5 md:py-6 text-sm sm:text-base md:text-lg font-semibold rounded-full hover-gradient cursor-pointer shadow-glow hover:shadow-glow-lg transition-all duration-300 group"
                                    style={{ backgroundColor: 'oklch(0.546 0.245 262.881)' }}
                                >
                                    Заказать экспертный аудит
                                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </motion.a>
                        </motion.div>
                    </div>
                </div>

                {/* Client Logos Carousel */}
                <ClientLogos />
            </main>
        </div>
    )
}
