"use client"

import Image from "next/image"
import { FaTelegramPlane, FaInstagram, FaFacebookF, FaPhoneAlt, FaEnvelope } from "react-icons/fa"
import { motion } from "framer-motion"

export default function Footer() {
    return (
        <footer className="bg-black/50 text-gray-300 py-10 sm:py-12 md:py-16 px-4 sm:px-6 relative overflow-hidden border-t border-white/10">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-radial opacity-5 pointer-events-none"></div>
            
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-10 md:mb-12">
                    {/* Left side - Logo + Company info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center gap-3 mb-4 sm:mb-6">
                            <h2 className="text-white text-xl sm:text-2xl font-bold uppercase gradient-text">DELTA VISION</h2>
                        </div>
                        <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-sm">
                        Cпециалисты по интернет-маркетингу с 6-летним опытом работы в продвижении брендов в разных нишах: от fashion и ритейла до образования, IT и HoReCa. Наша ключевая цель в каждом проекте — не просто увеличить охваты и
                            лайки, а выстроить систему, которая приводит целевой трафик и конвертирует
                            его в продажи.

                            
                        </p>
                    </motion.div>

                    {/* Middle - Navigation */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <h3 className="text-white font-semibold mb-3 sm:mb-4 text-base sm:text-lg">Навигация</h3>
                        <ul className="space-y-2 sm:space-y-3">
                            {[
                                { label: "Основной", href: "#" },
                                { label: "О нас", href: "#about" },
                                { label: "Кейсы", href: "#benefits" },
                                { label: "Услуги", href: "#services" },
                                { label: "Отзывы", href: "#reviews" },
                            ].map((item, index) => (
                                <motion.li
                                    key={item.label}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 + index * 0.05 }}
                                >
                                    <a 
                                        href={item.href} 
                                        className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block text-sm sm:text-base min-h-[32px] flex items-center"
                                    >
                                        {item.label}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Right side - Contact + Socials */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3 className="text-white font-semibold mb-3 sm:mb-4 text-base sm:text-lg">Контакты</h3>
                        <ul className="space-y-2 sm:space-y-3">
                            <li className="flex items-center gap-2 min-h-[32px]">
                                <FaPhoneAlt className="text-primary text-sm sm:text-base flex-shrink-0" />
                                <a href="tel:+998200007934" className="text-gray-400 hover:text-white transition-all duration-300 text-sm sm:text-base break-all">
                                    +998 20 000 79 34
                                </a>
                            </li>
                            <li className="flex items-center gap-2 min-h-[32px]">
                                <FaEnvelope className="text-primary text-sm sm:text-base flex-shrink-0" />
                                <a href="mailto:islamzaripov24@gmail.com" className="text-gray-400 hover:text-white transition-all duration-300 text-sm sm:text-base break-all">
                                    islamzaripov24@gmail.com
                                </a>
                            </li>
                        </ul>

                        {/* Action Buttons */}
                        <div className="flex flex-col gap-2 sm:gap-3 mt-4 sm:mt-6">
                            <motion.a
                                href="https://t.me/islamzaripov24"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 sm:px-6 py-3 bg-gradient-premium text-white rounded-full text-center font-semibold shadow-glow hover:shadow-glow-lg transition-all duration-300 min-h-[48px] flex items-center justify-center text-sm sm:text-base"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                style={{ backgroundColor: "oklch(0.546 0.245 262.881)" }}
                            >
                                НАПИСАТЬ В ТЕЛЕГРАМ
                            </motion.a>
                            <motion.a
                                href="tel:+998200007934"
                                className="px-4 sm:px-6 py-3 bg-white text-black rounded-full text-center font-semibold shadow-glow hover:shadow-glow-lg transition-all duration-300 min-h-[48px] flex items-center justify-center text-sm sm:text-base"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                            >
                                ПОЗВОНИТЬ
                            </motion.a>
                        </div>
                    </motion.div>
                </div>

                {/* Copyright */}
                <motion.div 
                    className="border-t border-white/10 pt-6 sm:pt-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    <p className="text-gray-500 text-center text-xs sm:text-sm">
                        © Copyright 2026 Delta Vision. All rights reserved.
                    </p>
                </motion.div>
            </div>
        </footer>
    )
}
