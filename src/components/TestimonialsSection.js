"use client"

import { useState, useEffect } from "react"
import { Card } from "./ui/card"
import { Button } from "./ui/button"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"


const testimonials = [
    {
        id: 1,
        title: "ОТЗЫВЫ",
        content:
            "Работа с «Delta Vision» для нашей компании — это оптимальный вариант. Содержать в штате отдельно IT-специалистов считаю экономически нецелесообразно. При этом сотрудник будет узконаправленным, а результаты его работы не всегда будут решать стоящие перед компанией задачи. Оптимальнее работать с группой специалистов , которые видят задачу во всех ракурсах и совместно предлагают лучшее решение заказчику. Мы профессионально занимаемся производством и продажей сэндвич-панелей и профнастила по Узбекистану и СНГ , Delta Vision занимаются рекламной нашей продукции в интернет пространстве.",
        author: "Хикматов Ж.",
        position: "Директор по маркетингу «Maxproduct»",
        rating: 5,
    },
    {
        id: 2,
        title: "ОТЗЫВЫ",
        content:
            "Познакомились с компанией «Delta Vision» первый раз, когда ребята предлагали свои услуги по SMM и контекстной рекламе. Рассматривали КП местных агентств, но Delta Vision были первые, кто был готов предоставить комплексную услугу, закрывающую все наши потребности в одном агентстве. За одну встречу ребята подробно рассказали о поисковой рекламе в Google и про таргетированную рекламу в Instagram и Facebook. Рассказали каких показателей можно достигнуть за небольшой срок и в итоге выбор для нас был очевиден. В результате наш сайт и соцсети начали посещать в 3 раза больше пользователей. Коммуникация во время работы и встреч была на высшем уровне.",
        author: "Эрназаров А.О.",
        position: "Учредитель и CEO агентства «GLOBAL EDUCATION»",
        rating: 5,
    },
    {
        id: 3,
        title: "ОТЗЫВЫ",
        content:
            "Выражаем благодарность маркетинговому агентству «Delta Vision» за плодотворную работу по настройке контекстной рекламы Google Ads для компании «Eastline Express». Ваш профессионализм, высокое качество оказываемых услуг и индивидуальный подход помогли нам обеспечить и поддерживать бесперебойную работу сайта и поток клиентов. Надеемся на дальнейшее плодотворное сотрудничество по новым проектам. Желаем развития и процветания.",
        author: "Сафаров Улугбек",
        position: "Генеральный директор компании «Eastline Express»",
        rating: 5,
    },
]


export default function TestimonialsSection() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [visibleCount, setVisibleCount] = useState(3)

    // responsive visible count
    useEffect(() => {
        const updateCount = () => {
            if (window.innerWidth < 640) setVisibleCount(1) // mobile
            else if (window.innerWidth < 1024) setVisibleCount(2) // tablet
            else setVisibleCount(3) // desktop
        }

        updateCount()
        window.addEventListener("resize", updateCount)
        return () => window.removeEventListener("resize", updateCount)
    }, [])

    const nextTestimonial = () => {
        if (currentIndex < testimonials.length - visibleCount) {
            setCurrentIndex((prev) => prev + 1)
        }
    }

    const prevTestimonial = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prev) => prev - 1)
        }
    }

    return (
        <section id='reviews' className="py-12 sm:py-16 md:py-20 px-3 sm:px-4 relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-radial opacity-10 pointer-events-none"></div>
            
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <motion.div 
                    className="text-center mb-8 sm:mb-12 md:mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="text-xs sm:text-sm font-medium text-gray-400 mb-3 sm:mb-4 tracking-wider uppercase">
                        Отзывы
                    </p>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">
                        <span className="gradient-text">Что говорят</span> о нас клиенты
                    </h2>
                    <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
                        Средний LTV работы с проектом — <span className="text-white font-semibold">12 месяцев</span>
                    </p>
                </motion.div>

                {/* Carousel */}
                <div className="relative mb-8 sm:mb-10 md:mb-12 overflow-hidden">
                    <motion.div
                        className="flex transition-transform duration-500 ease-in-out"
                        animate={{ transform: `translateX(-${(100 / visibleCount) * currentIndex}%)` }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={testimonial.id}
                                className={`flex-shrink-0 px-1.5 sm:px-2 md:px-3`}
                                style={{ width: `${100 / visibleCount}%` }}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className="p-4 sm:p-6 md:p-8 h-full glass border border-white/10 hover:border-white/20 transition-all duration-300 hover-lift">
                                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-3 sm:mb-4 md:mb-6 gradient-text-accent">
                                        {testimonial.title}
                                    </h3>
                                    <p className="text-gray-300 leading-relaxed mb-4 sm:mb-6 md:mb-8 flex-grow text-xs sm:text-sm md:text-base">
                                        {testimonial.content}
                                    </p>

                                    {/* Rating */}
                                    <div className="flex gap-1 mb-4 sm:mb-5 md:mb-6">
                                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, scale: 0 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.1 * i }}
                                            >
                                                <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* Author */}
                                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-3 sm:pt-4 border-t border-white/10 gap-3 sm:gap-0">
                                        <div className="flex-1 min-w-0">
                                            <p className="font-bold text-white text-sm sm:text-base">{testimonial.author}</p>
                                            <p className="text-xs sm:text-sm text-gray-400 leading-tight">{testimonial.position}</p>
                                        </div>
                                        <div className="flex items-center gap-2 flex-shrink-0">
                                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-premium rounded-full flex items-center justify-center shadow-glow">
                                                <span className="text-white font-bold text-xs sm:text-sm">L</span>
                                            </div>
                                            <span className="text-white font-semibold text-xs sm:text-sm hidden sm:inline">Logoipsum</span>
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Navigation */}
                <motion.div 
                    className="flex justify-center gap-3 sm:gap-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                >
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={prevTestimonial}
                            disabled={currentIndex === 0}
                            className="rounded-full bg-gradient-premium text-white hover:opacity-90 border-0 w-12 h-12 sm:w-14 sm:h-14 shadow-glow hover:shadow-glow-lg transition-all disabled:opacity-40 disabled:cursor-not-allowed min-h-[48px] min-w-[48px]"
                        >
                            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                        </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={nextTestimonial}
                            disabled={currentIndex >= testimonials.length - visibleCount}
                            className="rounded-full bg-gradient-premium text-white hover:opacity-90 border-0 w-12 h-12 sm:w-14 sm:h-14 shadow-glow hover:shadow-glow-lg transition-all disabled:opacity-40 disabled:cursor-not-allowed min-h-[48px] min-w-[48px]"
                        >
                            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
