"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import QuizModal from "@/components/modals/QuizModal"

export default function QuizBlock() {
    const [isQuizOpen, setIsQuizOpen] = useState(false)

    return (
        <>
            {/* <section className="py-8 sm:py-10 md:py-12 px-4 sm:px-6 relative overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        className="glass-strong border border-white/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 sm:mb-6 gradient-text leading-tight px-2">
                            УЗНАЙТЕ СТОИМОСТЬ SMM-ПРОДВИЖЕНИЯ ДЛЯ ВАШЕЙ КОМПАНИИ
                        </h2>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <Button
                                variant="dark"
                                size="lg"
                                className="rounded-full py-4 sm:py-5 md:py-6 px-6 sm:px-8 text-sm sm:text-base md:text-lg font-semibold shadow-glow hover:shadow-glow-lg transition-all duration-300 hover-lift w-full sm:w-auto min-h-[48px]"
                                onClick={() => setIsQuizOpen(true)}
                            >
                                Пройти квиз
                            </Button>
                        </motion.div>
                    </motion.div>
                </div>
            </section> */}
            {/* {isQuizOpen && <QuizModal isOpen={isQuizOpen} setIsOpen={setIsQuizOpen} />} */}
        </>
    )
}
