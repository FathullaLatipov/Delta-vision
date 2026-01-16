"use client"

import Image from "next/image"
import { FaTelegramPlane, FaInstagram, FaFacebookF, FaPhoneAlt, FaEnvelope } from "react-icons/fa"
import { motion } from "framer-motion"

export default function Footer() {
    return (
        <footer className="bg-black/50 text-gray-300 py-16 px-6 relative overflow-hidden border-t border-white/10">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-radial opacity-5 pointer-events-none"></div>
            
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
                    {/* Left side - Logo + Company info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <h2 className="text-white text-2xl font-bold uppercase gradient-text">DELTA VISION</h2>
                        </div>
                        <p className="text-gray-400 leading-relaxed max-w-sm">
                            We're a team of creative thinkers and tech-savvy problem solvers passionate about building digital
                            products that deliver real results. From branding to full-scale web solutions, we turn ambitious ideas
                            into standout experiences.
                        </p>
                    </motion.div>

                    {/* Middle - Navigation */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <h3 className="text-white font-semibold mb-4 text-lg">Навигация</h3>
                        <ul className="space-y-3">
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
                                        className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block"
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
                        <h3 className="text-white font-semibold mb-4 text-lg">Контакты</h3>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2">
                                <FaPhoneAlt className="text-primary" />
                                <a href="tel:+998200007934" className="text-gray-400 hover:text-white transition-all duration-300">
                                    +998 20 000 79 34
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <FaEnvelope className="text-primary" />
                                <a href="mailto:islamzaripov24@gmail.com" className="text-gray-400 hover:text-white transition-all duration-300">
                                    islamzaripov24@gmail.com
                                </a>
                            </li>
                        </ul>

                        {/* Action Buttons */}
                        <div className="flex flex-col gap-3 mt-6">
                            <motion.a
                                href="https://t.me/islamzaripov24"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 bg-gradient-premium text-white rounded-full text-center font-semibold shadow-glow hover:shadow-glow-lg transition-all duration-300"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                            >
                                НАПИСАТЬ В ТЕЛЕГРАМ
                            </motion.a>
                            <motion.a
                                href="tel:+998200007934"
                                className="px-6 py-3 bg-white text-black rounded-full text-center font-semibold shadow-glow hover:shadow-glow-lg transition-all duration-300"
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
                    className="border-t border-white/10 pt-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    <p className="text-gray-500 text-center">
                        © Copyright 2026 Delta Vision. All rights reserved.
                    </p>
                </motion.div>
            </div>
        </footer>
    )
}
