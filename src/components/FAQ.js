"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import {Button} from "@/components/ui/button";
import ConsultationForm from "@/components/modals/ModalForm";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
    {
        question: "Start UP и малый бизнес",
        answer: "Выйти на рынок, классические работы, охватные стратегии, устойчивая лидогенерация с 1-го месяца",
    },
    {
        question: "SMB, или малый и средний бизнес",
        answer: "Реанимация соцсетей, масштабирование соцсетей, перепозиционирование, лидогенерация со 1-го месяца",
    },
    {
        question: "Крупный бизнес",
        answer: (
            <>
                <p><b>Реанимация соцсетей, перевод стратегии из пассивной в активную, лидогенерация и глубокая маркетинговая аналитика</b></p>

                <p><b>Команда проекта:</b></p>
                <ul className="list-disc ml-6 text-gray-400">
                    <li>Специалисты контента с опытом от 5 лет</li>
                    <li>Специалисты креатива и дизайна с опытом от 5 лет</li>
                    <li>Специалисты по таргетированной рекламе с опытом от 6 лет и управлением бюджетами до $100 000</li>
                </ul>

                <p className="mt-4"><b>Сроки и условия:</b></p>
                <ul className="list-disc ml-6 text-gray-400">
                    <li>Срок реализации полной стратегии — от 1 месяца</li>
                    <li>Работаем в любой социальной сети и на любой платформе</li>
                </ul>

                <p className="mt-4"><b>Состав работ:</b></p>
                <ul className="list-disc ml-6 text-gray-400 space-y-1">
                    <li>Подготовка «Стратегии продвижения» с погружением в бизнес</li>
                    <li>Стратегия работы по таргетированной рекламе — индивидуальный подход</li>
                    <li>Написание, редактирование и размещение постов</li>
                    <li>Видеосъёмка роликов формата Reels/Shorts/TikTok</li>
                    <li>Съёмки больших видео на YouTube</li>
                    <li>Создание и размещение stories</li>
                    <li>Посевы в тематических рекламных сообществах (TG, сайты-агрегаторы)</li>
                    <li>Проведение конкурсов</li>
                    <li>Создание рекламных кампаний в таргете</li>
                    <li>Работа специалиста-криэйтора</li>
                    <li>Изготовление и размещение анимированных постов</li>
                    <li>Сторителлинг</li>
                    <li>Фотосъёмка локации, товара</li>
                    <li>Автоворонка (настройка и оптимизация в течение месяца)</li>
                    <li>Расширенный экспертный отчёт</li>
                    <li>Telegram Ads</li>
                    <li>Базовая настройка Я.Метрики и Google Analytics</li>
                    <li>E-commerce: воронки продаж, UTM-метки, цели, пиксели</li>
                    <li>Работа с OLX/UZUM/Яндекс Маркет</li>
                </ul>
            </>
        ),
    },
    {
        question: "Комплекс услуг: Оптимизация поискового пространства",
        answer: (
            <>
                <p>Привлекаем качественных лидов и продажи со всего интернет-пространства, используя все рекламные возможности:</p>
                <ul className="list-disc ml-6 text-gray-400 space-y-1">
                    <li>SEO-продвижение</li>
                    <li>Контекстная реклама</li>
                    <li>Разработка и доработка сайтов</li>
                    <li>Использование карт, справочников и сервисов</li>
                    <li>Работа с сайтами-агрегаторами</li>
                    <li>Размещение на специальных нишевых площадках</li>
                </ul>

                <p className="mt-4"><b>Контекстная реклама (PPC)</b></p>
                <p>
                    Комплекс работ с сайтом, получение ТОП-3 позиций в поисковых системах Google и Яндекс
                    по всем целевым ключевым запросам. Профессиональная работа с Google Ads и Яндекс.Директ.
                </p>

                <p className="mt-4"><b>Таргетированная реклама</b></p>
                <p>
                    Источник новых клиентов для вашего бизнеса. Разработаем стратегию продвижения,
                    которая гарантирует попадание в целевую аудиторию и максимальный результат.
                </p>

                <p className="mt-2">
                    Ведём трафик на любые площадки: интернет-магазин, маркетплейс, сайт компании,
                    соцсети, лид-формы, квизы, мессенджеры, мобильные приложения и др.
                </p>

                <ConsultationForm />
            </>
        ),
    },
]

export default function FAQ() {
    const [openItems, setOpenItems] = useState(new Set([0])) // first item open

    const toggleItem = (index) => {
        const newOpen = new Set(openItems)
        newOpen.has(index) ? newOpen.delete(index) : newOpen.add(index)
        setOpenItems(newOpen)
    }

    return (
        <section id="services" className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-radial opacity-10 pointer-events-none"></div>
            
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-start">
                    {/* Left Column */}
                    <motion.div 
                        className="lg:sticky lg:top-16"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 sm:mb-6 md:mb-8">
                            <span className="gradient-text">Услуги</span>
                            <br />
                            Delta Vision
                        </h1>
                        <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed mb-3 sm:mb-4">
                            <b className="text-white">Контент-маркетинг (SMM)</b> — решаем бизнес-задачи клиентов через диалог с аудиторией.
                            Комплексные стратегии, дизайн, лидогенерация. <b className="text-white">Прогноз фиксируем в договоре.</b>
                        </p>
                        <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
                            <b className="text-white">SMM-ПРОДВИЖЕНИЕ ПОД КЛЮЧ</b> — собственная методология digital-агентства Delta Vision позволяет спрогнозировать
                            количество лидов и заявок. При заказе продвижения, прогноз результата строится исходя из отрасли, региона, объема работ и рекламного бюджета.
                        </p>
                        <motion.div
                            className="mt-4 sm:mt-6"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            <Button
                                variant="dark"
                                className="rounded-full py-4 sm:py-5 cursor-pointer shadow-glow hover:shadow-glow-lg transition-all duration-300 w-full sm:w-auto text-sm sm:text-base min-h-[48px]"
                                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                            >
                                Оставить заявку на консультацию
                            </Button>
                        </motion.div>
                    </motion.div>

                    {/* Right Column */}
                    <motion.div 
                        className="space-y-3"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {faqData.map((item, index) => {
                            const isOpen = openItems.has(index)
                            return (
                                <motion.div 
                                    key={index} 
                                    className="glass border border-white/10 rounded-xl sm:rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ scale: 1.01 }}
                                >
                                    <motion.button
                                        onClick={() => toggleItem(index)}
                                        className="w-full py-4 sm:py-5 md:py-6 px-4 sm:px-5 md:px-6 flex items-center justify-between text-left transition-all duration-300 cursor-pointer group min-h-[56px]"
                                        whileHover={{ x: 5 }}
                                    >
                                        <span className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold pr-3 sm:pr-4 flex-1 text-white group-hover:text-gray-100 leading-tight">
                                            {item.question}
                                        </span>
                                        <motion.div 
                                            className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full glass border border-white/20 flex items-center justify-center min-h-[44px] min-w-[44px]"
                                            animate={{ rotate: isOpen ? 180 : 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            {isOpen ? (
                                                <Minus className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                                            ) : (
                                                <Plus className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                                            )}
                                        </motion.div>
                                    </motion.button>

                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                                                className="overflow-hidden"
                                            >
                                                <div className="px-4 sm:px-5 md:px-6 pb-4 sm:pb-5 md:pb-6 text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed">
                                                    {item.answer}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            )
                        })}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
