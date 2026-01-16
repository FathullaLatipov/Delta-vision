"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import QuizModal from "@/components/modals/QuizModal"

export default function QuizBlock() {
    const [isQuizOpen, setIsQuizOpen] = useState(false)

    return (
        <>
            <section className="py-12 px-6 relative overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        className="glass-strong border border-white/20 rounded-3xl p-8 md:p-12 text-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-2xl md:text-4xl font-bold mb-6 gradient-text">
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
                                className="rounded-full py-6 px-8 text-lg font-semibold shadow-glow hover:shadow-glow-lg transition-all duration-300 hover-lift"
                                onClick={() => setIsQuizOpen(true)}
                            >
                                Пройти квиз
                            </Button>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
            {isQuizOpen && <QuizModal isOpen={isQuizOpen} setIsOpen={setIsQuizOpen} />}
        </>
    )
}
