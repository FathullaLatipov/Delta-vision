"use client"

import { useEffect, useState } from "react"
import { Sparkles, Menu, X } from "lucide-react"
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
            className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-500 ${
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
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-premium shadow-glow group-hover:shadow-glow-lg transition-all duration-300">
                        <Sparkles className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-xl font-bold font-sans bg-gradient-to-r from-white via-accent-light to-primary bg-clip-text text-transparent">
                        DELTA VISION
                    </span>
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
                    >
                        +998 20 000 79 34
                    </a>
                    <Button
                        variant="dark"
                        className="rounded-full py-5 cursor-pointer hover-lift shadow-glow hover:shadow-glow-lg transition-all duration-300"
                        onClick={() => window.open('https://t.me/islamzaripov24', '_blank')}
                    >
                        <Sparkles className="mr-2 h-4 w-4" />
                        НАПИСАТЬ В ТЕЛЕГРАМ
                    </Button>
                </motion.div>

                {/* Mobile menu toggle */}
                <div className="md:hidden">
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
                        className="md:hidden mt-4 rounded-2xl glass-strong border border-white/20 shadow-glow-lg p-4 space-y-3 overflow-hidden"
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
                                className="flex flex-row text-white text-base font-medium transition-all duration-300 neon-white py-2"
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
                                className="block text-white hover:text-primary transition-colors font-medium text-center py-2"
                            >
                                +998 20 000 79 34
                            </a>
                            <Button
                                variant="dark"
                                className="rounded-full py-5 cursor-pointer w-full shadow-glow hover:shadow-glow-lg transition-all duration-300"
                                onClick={() => {
                                    window.open('https://t.me/islamzaripov24', '_blank')
                                    setMenuOpen(false)
                                }}
                            >
                                <Sparkles className="mr-2 h-4 w-4" />
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
