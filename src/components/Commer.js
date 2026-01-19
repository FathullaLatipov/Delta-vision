'use client'

import { useState } from "react";
import Image from 'next/image';
import { Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ModalForm from '/src/components/modals/ModalForm';
import { motion } from 'framer-motion';



const SectionComponent = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center min-h-[80vh] sm:min-h-screen p-4 sm:p-6 relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-radial opacity-10 pointer-events-none"></div>
            
            <div className="w-full md:text-left relative z-10">
                <motion.h1 
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Поможем защитить <span className="gradient-text">маркетинговый бюджет</span> и стратегию перед руководством
                </motion.h1>
                <motion.ul 
                    className="text-left mt-4 sm:mt-5 md:mt-0 mb-6 sm:mb-8 space-y-3 sm:space-y-4"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {[
                        "Рассчитаем для вас UNIT-экономику и прибыль с продвижения",
                        "Составим план работ, сроки и прогнозы",
                        "Проконсультируем и расскажем всю стратегию вместо вас, понятным языком"
                    ].map((item, index) => (
                        <motion.li 
                            key={index}
                            className="flex items-start glass rounded-lg sm:rounded-xl p-3 sm:p-4 border border-white/10 hover:border-white/20 transition-all duration-300"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + index * 0.1 }}
                            whileHover={{ scale: 1.02, x: 5 }}
                        >
                            <span className="mr-2 sm:mr-3 text-lg sm:text-xl font-bold gradient-text-accent flex-shrink-0">{index + 1}</span>
                            <span className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">{item}</span>
                        </motion.li>
                    ))}
                </motion.ul>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                >
                    <motion.a
                        href="/image/DELTA_VISION_COMMERCIAL.pdf"
                        download="DELTA_VISION_COMMERCIAL.pdf"
                        className="w-full sm:w-auto"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        data-gtm-button="pdf_download_commer_section"
                        data-gtm-location="commer_section"
                        data-gtm-action="download_pdf"
                        data-gtm-pdf-name="DELTA_VISION_COMMERCIAL.pdf"
                    >
                        <Button
                            variant="dark"
                            className="rounded-full py-4 sm:py-5 md:py-6 px-6 sm:px-8 cursor-pointer shadow-glow hover:shadow-glow-lg transition-all duration-300 hover-lift w-full sm:w-auto text-sm sm:text-base md:text-lg min-h-[48px]"
                            style={{ backgroundColor: 'oklch(0.546 0.245 262.881)' }}
                        >
                            <Sparkles className="mr-2 h-4 w-4" />
                            <span className="hidden sm:inline">Получить коммерческое предложение</span>
                            <span className="sm:hidden">Получить Коммерческое предложение</span>
                        </Button>
                    </motion.a>
                </motion.div>
            </div>
            <motion.div 
                className="w-full md:w-1/2 mt-6 sm:mt-8 md:mt-0 md:ml-6 relative z-10"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
            >
            </motion.div>
            <ModalForm isOpen={isOpen} setIsOpen={setIsOpen} />
        </section>
    );
};

export default SectionComponent;