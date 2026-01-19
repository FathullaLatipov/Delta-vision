"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import ModalForm from "@/components/modals/ModalForm";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <>
           <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className={`fixed top-0 left-0 right-0 z-50 px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 transition-all duration-500 ${
                scrolled
                    ? "glass-strong border-b border-white/20 shadow-glow"
                    : "bg-transparent"
            }`}
        >
            <nav className="mx-auto flex max-w-7xl items-center justify-between">
                {/* Logo */}
                <motion.div 
                    className="flex items-center gap-2 cursor-pointer group"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                    <Image src="/image/logos/logo_white.png" alt="Delta Vision" width={40} height={40} className="object-contain" />
                    <span className="text-white font-bold text-lg sm:text-xl">DELTA VISION</span>
                </motion.div>

                {/* Links (desktop) */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="hidden md:flex items-center rounded-full px-6 py-3
                              glass border border-white/20 shadow-lg backdrop-blur-xl"
                >
                    {[
                        { label: "Главная", href: "#" },
                        { label: "О нас", href: "#about" },
                        { label: "Кейсы", href: "#benefits" },
                        { label: "Услуги", href: "#services" },
                        { label: "Отзывы", href: "#reviews" },
                    ].map((item, index) => (
                        <motion.a
                            key={item.label}
                            href={item.href}
                            className="text-white px-4 py-2 text-sm font-medium transition-all duration-300 neon-white relative group"
                            whileHover={{ scale: 1.05 }}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * index, duration: 0.3 }}
                        >
                            {item.label}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></span>
                        </motion.a>
                    ))}
                </motion.div>

                {/* CTA Buttons */}
                <motion.div 
                    className="hidden md:flex items-center gap-3"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                >
                    <a 
                        href="tel:+998200007934" 
                        className="text-white hover:text-primary transition-colors font-medium"
                        data-gtm-button="phone_navbar_desktop"
                        data-gtm-location="navbar"
                        data-gtm-action="call"
                    >
                        +998 20 000 79 34
                    </a>
                    <Button
                        variant="dark"
                        className="rounded-full py-5 cursor-pointer hover-lift shadow-glow hover:shadow-glow-lg transition-all duration-300"
                        onClick={() => window.open('https://t.me/islamzaripov', '_blank')}
                        data-gtm-button="telegram_navbar_desktop"
                        data-gtm-location="navbar"
                        data-gtm-action="open_telegram"
                    >
                        <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                        </svg>
                        НАПИСАТЬ В ТЕЛЕГРАМ
                    </Button>
                </motion.div>

                {/* Mobile menu toggle with icons */}
                <div className="md:hidden flex items-center gap-2">
                    {/* Phone icon */}
                    <motion.a
                        href="tel:+998200007934"
                        className="p-2 rounded-lg text-white glass border border-white/20 transition-all duration-300"
                        whileTap={{ scale: 0.95 }}
                        whileHover={{ scale: 1.05 }}
                        data-gtm-button="call_phone_navbar_mobile"
                        data-gtm-location="navbar"
                        data-gtm-action="call"
                    >
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                    </motion.a>
                    
                    {/* Telegram icon */}
                    <motion.button
                        onClick={() => window.open('https://t.me/islamzaripov', '_blank')}
                        className="p-2 rounded-lg text-white glass border border-white/20 transition-all duration-300"
                        whileTap={{ scale: 0.95 }}
                        whileHover={{ scale: 1.05 }}
                        data-gtm-button="open_telegram_navbar_mobile"
                        data-gtm-location="navbar"
                        data-gtm-action="open_telegram"
                    >
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                        </svg>
                    </motion.button>

                    {/* Hamburger menu button */}
                    <motion.button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="p-2 rounded-lg text-white glass border border-white/20 transition-all duration-300"
                        whileTap={{ scale: 0.95 }}
                        whileHover={{ scale: 1.05 }}
                    >
                        {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </motion.button>
                </div>
            </nav>

            {/* Mobile menu (slide-down) */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                        className="md:hidden mt-3 rounded-xl sm:rounded-2xl glass-strong border border-white/20 shadow-glow-lg p-3 sm:p-4 space-y-2 sm:space-y-3 overflow-hidden"
                    >
                        {[
                            { label: "Главная", href: "#" },
                            { label: "О нас", href: "#about" },
                            { label: "Кейсы", href: "#benefits" },
                            { label: "Услуги", href: "#services" },
                            { label: "Отзывы", href: "#reviews" },
                        ].map((item, index) => (
                            <motion.a
                                key={item.label}
                                href={item.href}
                                className="flex flex-row text-white text-sm sm:text-base font-medium transition-all duration-300 neon-white py-2.5 sm:py-2 min-h-[44px] items-center"
                                onClick={() => setMenuOpen(false)}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ x: 5 }}
                            >
                                {item.label}
                            </motion.a>
                        ))}

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="space-y-3"
                        >
                            <a 
                                href="tel:+998200007934" 
                                className="block text-white hover:text-primary transition-colors font-medium text-center py-3 sm:py-2 min-h-[44px] flex items-center justify-center"
                            >
                                +998 20 000 79 34
                            </a>
                            <Button
                                variant="dark"
                                className="rounded-full py-4 sm:py-5 cursor-pointer w-full shadow-glow hover:shadow-glow-lg transition-all duration-300 text-sm sm:text-base min-h-[48px]"
                                onClick={() => {
                                    window.open('https://t.me/islamzaripov', '_blank')
                                    setMenuOpen(false)
                                }}
                            >
                                <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                                </svg>
                                НАПИСАТЬ В ТЕЛЕГРАМ
                            </Button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>

            <ModalForm isOpen={isOpen} setIsOpen={setIsOpen} />
        </>

    )
}
