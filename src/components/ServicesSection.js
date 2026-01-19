"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import ModalForm from "@/components/modals/ModalForm"

export default function ServicesSection() {
    const [visibleItems, setVisibleItems] = useState(new Set())
    const [selectedType, setSelectedType] = useState("SMM & Content Marketing") // Default selected type
    const itemRefs = useRef([])

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = itemRefs.current.indexOf(entry.target)
                        if (index !== -1) {
                            setVisibleItems((prev) => new Set([...prev, index]))
                        }
                    }
                })
            },
            { threshold: 0.1, rootMargin: "50px" },
        )

        itemRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref)
        })

        return () => observer.disconnect()
    }, [selectedType]) // Re-run effect when selectedType changes to observe new items

    const [caseModalOpen, setCaseModalOpen] = useState(false)

    // Data for SMM & Content Marketing
    const smmServices = [
        {
            number: "Global Education",
            title: "Global Education",
            subtitle: "Консалтинг по образованию за рубежом",
            goal: "Увеличить количество заявок от целевой аудитории (учащиеся, родители, молодые специалисты), повысить узнаваемость бренда в сегменте «премиум-образование».",
            results: [
                { label: "Рост подписчиков", value: "2 000 → 5 000", highlight: true },
                { label: "Заявок в месяц", value: "300", highlight: true },
                { label: "CPL", value: "от $1,05", highlight: true },
                { label: "Лидов в день", value: "10+", highlight: true },
                { label: "Клиентов уехали учиться", value: "27", highlight: true },
            ],
            hasImage: true,
            image: "/image/keys/1/1.png",
        },
        {
            number: "Maxproduct",
            title: "Maxproduct",
            subtitle: "Производство и продажа сэндвич-панелей в Узбекистане и СНГ",
            goal: "Повысить узнаваемость бренда среди застройщиков и подрядчиков, увеличить количество лидов через digital-каналы, укрепить экспертный имидж компании на рынке строительных материалов.",
            results: [
                { label: "Рост обращений", value: "+65%", highlight: true },
                { label: "Снижение CPL", value: "30%", highlight: true },
                { label: "Рост посещаемости", value: "+120%", highlight: true },
                { label: "Крупных контрактов", value: "5", highlight: true },
            ],
            hasImage: true,
            image: "/image/keys/1/4.png",
        },
        {
            number: "Mobistore",
            title: "Mobistore",
            subtitle: "Ритейл техники Apple",
            goal: "Увеличить узнаваемость бренда в Ташкенте и области, привести трафик из Instagram/Telegram в магазины, продвигать новинки Apple и аксессуары, сформировать лояльность и стимулировать повторные покупки.",
            results: [
                { label: "Рост офлайн-продаж", value: "+22%", highlight: true },
                { label: "CPL", value: "от $0,85", highlight: true },
                { label: "ER в Stories", value: "11,7%", highlight: true },
                { label: "Рост среднего чека", value: "+18%", highlight: true },
            ],
            hasImage: true,
            image: "/image/keys/1/2.png",
        },
        {
            number: "Jalousie Brand",
            title: "Jalousie Brand",
            subtitle: "Производство и продажа жалюзи",
            goal: "Повысить узнаваемость бренда (B2C и B2B), увеличить заявки через соцсети и сайт, продвигать ассортимент жалюзи, снизить стоимость лида.",
            results: [
                { label: "Рост подписчиков", value: "+2 500", highlight: true },
                { label: "Рост лидов", value: "+60%", highlight: true },
                { label: "Снижение CPL", value: "35%", highlight: true },
                { label: "Заявок в месяц", value: "500", highlight: true },
                { label: "Конверсия в заказы", value: "40%", highlight: true },
                { label: "Продажи", value: "1 млрд сум", highlight: true },
            ],
            hasImage: true,
            image: "/image/keys/1/3.png",
        },
    ]

    // Placeholder data for Contextual Advertising (replace with actual data if provided)
    const contextualServices = [
        {
            number: "Кейс 1",
            title: "Eastline Express",
            subtitle: "Международная курьерская служба",
            goal: "Вывести сайт в ТОП-3 поисковой выдачи Google, увеличить количество заявок на международную доставку документов и грузов, снизить стоимость лида, повысить узнаваемость бренда в нише.",
            results: [
                { label: "Рост заявок", value: "+72%", highlight: true },
                { label: "CPL", value: "от $1", highlight: true },
                { label: "CPC", value: "$0,05", highlight: true },
                { label: "Время отклика", value: "2 мин", highlight: true },
            ],
            hasImage: true,
            image: "/image/keys/2/5.png",
        },
        {
            number: "Кейс 2",
            title: "Jalousie Brand",
            subtitle: "Продажа жалюзи",
            goal: "Вывести в ТОП в поисковой выдаче Google, увеличить количество заявок на замеры и установку жалюзи, снизить стоимость лида и клиента, выделить бренд среди конкурентов.",
            results: [
                { label: "CTR объявлений", value: "7,8%", highlight: true },
                { label: "CPL", value: "$2–3", highlight: true },
                { label: "Цена за клик", value: "$0,50", highlight: true },
                { label: "Рост заявок", value: "+100%", highlight: true },
                { label: "Конверсия сайта", value: "1,9% → 3,5%", highlight: true },
            ],
            hasImage: true,
            image: "/image/keys/2/6.png",
        },
        {
            number: "Кейс 3",
            title: "Citymed",
            subtitle: "Многопрофильная клиника в Ташкенте",
            goal: "Повысить узнаваемость бренда в Ташкенте, увеличить количество обращений через сайт и мессенджеры, выделить конкурентные преимущества: оборудование, врачи, цены.",
            results: [
                { label: "CTR", value: "10%", highlight: true },
                { label: "Рост заявок и звонков", value: "+65%", highlight: true },
                { label: "Снижение стоимости заявки", value: "30%", highlight: true },
                { label: "Рост записи к врачам", value: "+40%", highlight: true },
            ],
            hasImage: true,
            image: "/image/keys/2/8.png",
        },
        {
            number: "Кейс 4",
            title: "Logist Academy",
            subtitle: "Курсы по логистике (онлайн и офлайн)",
            goal: "Привлечение новых студентов через контекстную рекламу  и увеличение числа регистраций на пробные уроки.",
            results: [
                { label: "Заявки (лиды)", value: "от 5 целевых заявок в день", highlight: true },
                { label: "CPL", value: "$0,78", highlight: true },
                { label: "Конверсия в студента", value: "10%", highlight: true },
                { label: "Рост узнаваемости", value: "+35%", highlight: true },
            ],
            hasImage: true,
            image: "/image/keys/2/7.png",
        },
    ]

    // Select data based on selectedType
    const services = selectedType === "SMM & Content Marketing" ? smmServices : contextualServices

    return (
        <section id="benefits" className="py-8 sm:py-10 md:py-12 lg:py-16 px-3 sm:px-4 md:px-6 lg:px-12 xl:px-24 relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-radial opacity-10 pointer-events-none"></div>
            
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <motion.div 
                    className="mb-6 sm:mb-8 md:mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="text-gray-400 text-xs sm:text-sm font-medium tracking-wider uppercase mb-3 sm:mb-4 md:mb-6">Кейсы</p>
                    <div className='md:flex justify-between items-start'>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight max-w-4xl mb-4 sm:mb-6 md:mb-0">
                            <span className="gradient-text">Кейсы</span> Delta Vision
                        </h2>

                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 mt-4">
                            <motion.button
                                className={`text-xs sm:text-sm md:text-base lg:text-lg font-medium px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 rounded-xl sm:rounded-2xl transition-all duration-300 cursor-pointer min-h-[44px] ${
                                    selectedType === "SMM & Content Marketing"
                                        ? "glass-strong text-white shadow-glow border border-white/20"
                                        : "glass text-gray-300 border border-white/10 hover:border-white/20"
                                }`}
                                onClick={() => setSelectedType("SMM & Content Marketing")}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span className="hidden sm:inline">SMM & Контент-маркетинг</span>
                                <span className="sm:hidden">SMM & Контент</span>
                            </motion.button>

                            <motion.button
                                className={`text-xs sm:text-sm md:text-base lg:text-lg font-medium px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 rounded-xl sm:rounded-2xl transition-all duration-300 cursor-pointer min-h-[44px] ${
                                    selectedType === "Contextual Advertising"
                                        ? "glass-strong text-white shadow-glow border border-white/20"
                                        : "glass text-gray-300 border border-white/10 hover:border-white/20"
                                }`}
                                onClick={() => setSelectedType("Contextual Advertising")}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Контекстная реклама
                            </motion.button>
                        </div>
                    </div>
                </motion.div>

                {/* Cases List */}
                <div className="space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-16">
                    <AnimatePresence mode="wait">
                        {services.map((service, index) => {
                            return (
                                <motion.div
                                    key={`${selectedType}-${service.number}`}
                                    ref={(el) => (itemRefs.current[index] = el)}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={visibleItems.has(index) ? { opacity: 1, y: 0 } : {}}
                                    exit={{ opacity: 0, y: -30 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="overflow-hidden transition-all duration-500 rounded-2xl sm:rounded-3xl"
                                    style={{
                                        boxShadow: '0 20px 60px -15px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.05)',
                                        background: 'rgba(255, 255, 255, 0.02)'
                                    }}
                                >
                                    <div className="grid lg:grid-cols-[1fr_600px] gap-6 sm:gap-8 md:gap-10 lg:gap-12 p-6 sm:p-8 md:p-10 lg:p-12">
                                        {/* Left Column - Content */}
                                        <div className="flex flex-col space-y-6 sm:space-y-8">
                                            {/* Project Number */}
                                            <div className="text-sm sm:text-base font-medium text-gray-400 uppercase tracking-wider">
                                                {service.number}
                                            </div>

                                            {/* Project Title */}
                                            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                                                {service.title}
                                            </h3>

                                            {/* Subtitle */}
                                            {service.subtitle && (
                                                <p className="text-base sm:text-lg md:text-xl text-gray-300 font-medium">
                                                    {service.subtitle}
                                                </p>
                                            )}

                                            {/* Goal Section */}
                                            {service.goal && (
                                                <div className="space-y-3">
                                                    <h4 className="text-sm sm:text-base font-semibold text-gray-400 uppercase tracking-wider">
                                                        Цель
                                                    </h4>
                                                    <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
                                                        {service.goal}
                                                    </p>
                                                </div>
                                            )}

                                            {/* Results Section */}
                                            {service.results && service.results.length > 0 && (
                                                <div className="space-y-4 sm:space-y-5">
                                                    <h4 className="text-sm sm:text-base font-semibold text-gray-400 uppercase tracking-wider">
                                                        Результаты
                                                    </h4>
                                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                                        {service.results.map((result, idx) => (
                                                            <motion.div
                                                                key={idx}
                                                                className="glass-strong border border-white/10 rounded-xl p-4 sm:p-5 hover:border-white/20 transition-all duration-300"
                                                                initial={{ opacity: 0, scale: 0.95 }}
                                                                animate={visibleItems.has(index) ? { opacity: 1, scale: 1 } : {}}
                                                                transition={{ delay: 0.3 + idx * 0.05 }}
                                                            >
                                                                <div className="text-xs sm:text-sm text-gray-400 mb-2">
                                                                    {result.label}
                                                                </div>
                                                                <div className="text-xl sm:text-2xl md:text-2xl font-bold text-white">
                                                                    {result.value}
                                                                </div>
                                                            </motion.div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}

                                            {/* Подробнее Button */}
                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={visibleItems.has(index) ? { opacity: 1, y: 0 } : {}}
                                                transition={{ delay: 0.5 }}
                                                className="pt-2"
                                            >
                                                <button
                                                    onClick={() => setCaseModalOpen(true)}
                                                    className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-white font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 min-h-[48px]"
                                                    style={{ backgroundColor: 'oklch(0.546 0.245 262.881)' }}
                                                    data-gtm-button={`details_case_${service.number}`}
                                                    data-gtm-location="services_section"
                                                    data-gtm-action="open_case_details"
                                                    data-gtm-case-title={service.title}
                                                >
                                                    Подробнее
                                                </button>
                                            </motion.div>
                                        </div>

                                        {/* Right Column - Case Study Image */}
                                        {service.hasImage && service.image && (
                                            <motion.div
                                                className="flex lg:justify-end h-full"
                                                initial={{ opacity: 0, x: 30 }}
                                                animate={visibleItems.has(index) ? { opacity: 1, x: 0 } : {}}
                                                transition={{ duration: 0.6, delay: 0.2 }}
                                            >
                                                <div className="relative w-full">
                                                    <img
                                                        src={service.image}
                                                        alt={service.title}
                                                        className="w-full h-auto object-contain"
                                                        loading="lazy"
                                                        decoding="async"
                                                    />
                                                </div>
                                            </motion.div>
                                        )}
                                    </div>
                                </motion.div>
                            )
                        })}
                    </AnimatePresence>
                </div>
            </div>
            <ModalForm isOpen={caseModalOpen} setIsOpen={setCaseModalOpen} />
        </section>
    )
}