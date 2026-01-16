"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"

function AnimatedCounter({ end, duration = 2000, suffix = "" }) {
    const [count, setCount] = useState(0)
    const [isVisible, setIsVisible] = useState(false)
    const counterRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.1 },
        )

        if (counterRef.current) {
            observer.observe(counterRef.current)
        }

        return () => observer.disconnect()
    }, [isVisible])

    useEffect(() => {
        if (!isVisible) return

        let startTime = null
        const startValue = 0

        const animate = (currentTime) => {
            if (startTime === null) startTime = currentTime
            const progress = Math.min((currentTime - startTime) / duration, 1)

            const easeOutQuart = 1 - Math.pow(1 - progress, 4)
            const currentCount = Math.floor(easeOutQuart * (end - startValue) + startValue)

            setCount(currentCount)

            if (progress < 1) {
                requestAnimationFrame(animate)
            } else {
                setCount(end)
            }
        }

        requestAnimationFrame(animate)
    }, [isVisible, end, duration])

    return (
        <motion.div 
            ref={counterRef} 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2 gradient-text-accent"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            {count}
            {suffix}
        </motion.div>
    )
}

export default function AboutUs() {
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.1 }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => observer.disconnect()
    }, [])

    return (
        <section 
            id='about' 
            ref={sectionRef}
            className="px-4 sm:px-6 py-10 sm:py-12 md:py-16 lg:px-16 lg:py-24 relative overflow-hidden"
        >
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-radial opacity-20 pointer-events-none"></div>
            
            <div className="max-w-7xl mx-auto relative z-10">
                {/* About Us Label */}
                <motion.div 
                    className="mb-6 sm:mb-8 md:mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <p className="text-gray-400 text-xs sm:text-sm font-medium tracking-wider uppercase">
                        О нас
                    </p>
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-24 mb-12 sm:mb-16 md:mb-24">
                    {/* Left Column - Heading */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                            <span className="gradient-text">Рентабельный</span> интернет-маркетинг для Вашего бизнеса
                        </h1>
                    </motion.div>

                    {/* Right Column - Description */}
                    <motion.div 
                        className="space-y-4 sm:space-y-5 md:space-y-6"
                        initial={{ opacity: 0, x: 30 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
                            {
                                "Делаем предварительный расчёт UNIT-экономики (экономика маркетинга) Вашего  проекта на рентабельность рекламы"
                            }
                        </p>
                        <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
                            {
                                "Прогнозируем сроки окупаемости вложений в продвижение и выхода в прибыль"
                            }
                        </p>
                        <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
                            {
                                "Работаем с проектами, когда уверены, что сможем помочь и заработать для них"
                            }
                        </p>
                    </motion.div>
                </div>

                {/* Statistics Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-16">
                    {[
                        { end: 6, suffix: "лет", label: "опыта в SMM-продвижении" },
                        { end: 100, suffix: "+", label: "проекта на SMM-продвижении за все время работы" },
                        { end: 100, suffix: "%", label: "финансовых гаранти" },
                        { end: 95, suffix: "%", label: "клиентов остаются довольны" },
                    ].map((stat, index) => (
                        <motion.div 
                            key={index}
                            className="text-center lg:text-left p-3 sm:p-4 md:p-5 lg:p-6 rounded-xl sm:rounded-2xl glass border border-white/10 hover:border-white/20 transition-all duration-300 hover-lift"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isVisible ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <AnimatedCounter end={stat.end} suffix={stat.suffix} />
                            <div className="text-gray-400 text-xs sm:text-sm mt-1 sm:mt-2 leading-tight">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>

                {/* Unit Economics Button */}
                <motion.div 
                    className="mt-8 sm:mt-10 md:mt-12 text-center px-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                >
                    <motion.button
                        className="w-full sm:w-auto px-6 sm:px-8 py-4 sm:py-5 md:py-6 bg-gradient-premium text-white rounded-full text-sm sm:text-base md:text-lg font-semibold shadow-glow hover:shadow-glow-lg transition-all duration-300 hover-lift min-h-[48px]"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        <span className="hidden sm:inline">РАССЧИТАТЬ UNIT-ЭКОНОМИКУ ПРОЕКТА</span>
                        <span className="sm:hidden">UNIT-ЭКОНОМИКА</span>
                    </motion.button>
                </motion.div>
            </div>
        </section>
    )
}
