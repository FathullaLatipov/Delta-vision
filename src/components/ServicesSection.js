"use client"

import { ArrowRight } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import ModalForm from "@/components/modals/ModalForm"

export default function ServicesSection() {
    const [visibleItems, setVisibleItems] = useState(new Set())
    const [expandedItems, setExpandedItems] = useState(new Set([0])) // Web Design starts expanded
    const [selectedType, setSelectedType] = useState("SMM & Content Marketing") // Default selected type
    const itemRefs = useRef([])

    const toggleService = (index) => {
        setExpandedItems((prev) => {
            const newSet = new Set(prev)
            if (newSet.has(index)) {
                newSet.delete(index)
            } else {
                newSet.add(index)
            }
            return newSet
        })
    }

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
    const [selectedCase, setSelectedCase] = useState(null)

    // Data for SMM & Content Marketing
    const smmServices = [
        {
            number: "Global Education",
            title: "Global Education",
            subtitle: "Консалтинг по образованию за рубежом",
            description: (
                <>
                    Цель: Увеличить количество заявок от целевой аудитории (учащиеся, родители, молодые специалисты), повысить
                    узнаваемость бренда в сегменте «премиум-образование». - Рост подписчиков с <b>2 000</b> до <b>5 000</b> за
                    счёт Reels и таргета <br />- <b>300 заявок</b> на консультации в месяц <br />- CPL: от <b>$1,05</b> при
                    стоимости пакета услуг от <b>$200</b> <br />- Минимум <b>10 лидов</b> в день с рекламы в Google <br />-{" "}
                    <b>27 клиентов</b> оформили документы и уехали учиться за рубеж в течение <b>2-х месяцев</b>.
                </>
            ),
            hasImage: true,
            image: "/image/keys/1/img.png",
        },
        {
            number: "Maxproduct",
            title: "Maxproduct",
            subtitle: "Производство и продажа сэндвич-панелей в Узбекистане и СНГ",
            description: (
                <>
                    <b>Задача</b>
                    <ul>
                        <li>Повысить узнаваемость бренда среди застройщиков и подрядчиков.</li>
                        <li>Увеличить количество лидов через digital-каналы.</li>
                        <li>Укрепить экспертный имидж компании на рынке строительных материалов.</li>
                    </ul>
                    <b>Решение</b>
                    <ul>
                        <li>Разработка и запуск рекламных кампаний в Google Ads и Яндекс.Директ.</li>
                        <li>Создание контент-плана для соцсетей: кейсы, экспертные статьи.</li>
                        <li>Запуск LinkedIn и Telegram для B2B-аудитории.</li>
                        <li>Настройка сквозной аналитики для оценки ROI.</li>
                    </ul>
                    <b>Результаты</b>
                    <ul>
                        <li>Рост обращений на <b>+65%</b> за 4 месяца.</li>
                        <li>CPL снижен на <b>30%</b>.</li>
                        <li>Увеличение посещаемости сайта на <b>+120%</b>.</li>
                        <li><b>5 крупных контрактов</b> через digital-каналы.</li>
                    </ul>
                </>
            ),
            hasImage: true,
            image: "/image/keys/1/img_1.png",
        },
        {
            number: "Mobistore",
            title: "Mobistore",
            subtitle: "Ритейл техники Apple",
            description: (
                <>
                    <b>Задачи</b>
                    <ul>
                        <li>Увеличить узнаваемость бренда в Ташкенте и области.</li>
                        <li>Привести трафик из Instagram/Telegram в магазины.</li>
                        <li>Продвигать новинки Apple и аксессуары.</li>
                        <li>Сформировать лояльность и стимулировать повторные покупки.</li>
                    </ul>
                    <b>Стратегия</b>
                    <ul>
                        <li>Instagram как витрина: премиальный визуал.</li>
                        <li>Контент-микс: обзоры, лайфхаки, акции.</li>
                        <li>Telegram: быстрые ответы, скидки, предзаказы.</li>
                        <li>Таргет: локальная аудитория, Lookalike, ретаргетинг.</li>
                    </ul>
                    <b>Результаты</b>
                    <ul>
                        <li><b>+22%</b> рост офлайн-продаж.</li>
                        <li>CPL: от <b>$0,85</b> при среднем чеке <b>8 500 000 сум</b>.</li>
                        <li>ER в Stories: <b>11,7%</b>.</li>
                        <li><b>+18%</b> рост среднего чека.</li>
                    </ul>
                </>
            ),
            hasImage: true,
            image: "/image/keys/1/img_2.png",
        },
        {
            number: "Jalousie Brand",
            title: "Jalousie Brand",
            subtitle: "Производство и продажа жалюзи",
            description: (
                <>
                    <b>Задачи</b>
                    <ul>
                        <li>Повысить узнаваемость бренда (B2C и B2B).</li>
                        <li>Увеличить заявки через соцсети и сайт.</li>
                        <li>Продвигать ассортимент жалюзи.</li>
                        <li>Снизить стоимость лида.</li>
                    </ul>
                    <b>Решение</b>
                    <ul>
                        <li>SMM-стратегия: эксперт по интерьерным решениям.</li>
                        <li>Контент-план: визуализация, советы, обзоры, видео.</li>
                        <li>Таргет: сегментация на частных клиентов и компании.</li>
                        <li>Оптимизация посадочных страниц.</li>
                    </ul>
                    <b>Результаты</b>
                    <ul>
                        <li>Рост подписчиков на <b>+2500</b>.</li>
                        <li>Лиды с Instagram/Facebook: <b>+60%</b>.</li>
                        <li>CPL снижен на <b>35%</b>.</li>
                        <li><b>500 заявок</b> в месяц, <b>40%</b> в заказы.</li>
                        <li>Продажи: <b>1 млрд сум</b>.</li>
                    </ul>
                </>
            ),
            hasImage: true,
            image: "/image/keys/1/img_3.png",
        },
    ]

    // Placeholder data for Contextual Advertising (replace with actual data if provided)
    const contextualServices = [
        {
            number: "Кейс 1",
            title: "Eastline Express",
            subtitle: "Международная курьерская служба",
            description: (
                <>
                    <b>Задачи</b>
                    <ul>
                        <li>Вывести сайт в ТОП-3 поисковой выдачи Google.</li>
                        <li>Увеличить количество заявок на международную доставку документов и грузов.</li>
                        <li>Снизить стоимость лида.</li>
                        <li>Повысить узнаваемость бренда в нише.</li>
                    </ul>
                    <b>Решение</b>
                    <ul>
                        <li>Настроены Google Ads и Яндекс.Директ с упором на горячие запросы.</li>
                        <li>Созданы отдельные кампании под каждую страну и направление.</li>
                        <li>Использованы расширения объявлений (телефон, быстрые ссылки, адреса).</li>
                        <li>Запущены ремаркетинг-кампании для возврата аудитории.</li>
                        <li>Настроена сквозная аналитика и отслеживание конверсий (звонки, заявки с сайта).</li>
                    </ul>
                    <b>Результаты</b>
                    <ul>
                        <li><b>+72%</b> рост заявок.</li>
                        <li>CPL от <b>$1</b> (снижение на 50%).</li>
                        <li>CPC от <b>$0,05</b>.</li>
                        <li>Среднее время отклика клиента сократилось до <b>2 минут</b>.</li>
                        <li>ТОП-позиции по ключевым запросам в Google и Яндекс.</li>
                        <li>Дополнительный рост органического трафика за счет оптимизации посадочных страниц.</li>
                    </ul>
                </>
            ),
            hasImage: true,
            image: "/image/keys/2/img.png",
        },
        {
            number: "Кейс 2",
            title: "Jalousie Brand",
            subtitle: "Продажа жалюзи",
            description: (
                <>
                    <b>Задачи</b>
                    <ul>
                        <li>Вывести в ТОП в поисковой выдаче Google.</li>
                        <li>Увеличить количество заявок на замеры и установку жалюзи.</li>
                        <li>Снизить стоимость лида и клиента.</li>
                        <li>Выделить бренд среди конкурентов.</li>
                        <li>Настроить аналитику поведения пользователей.</li>
                    </ul>
                    <b>Решение</b>
                    <ul>
                        <li>Настроены поисковые кампании в Google Ads по горячим ключам.</li>
                        <li>Использован геотаргетинг на Ташкент и область.</li>
                        <li>Протестированы расширенные объявления (доставка, установка за 1 день, гарантия 12 месяцев).</li>
                        <li>Добавлен ремаркетинг на посетителей сайта и соцсетей.</li>
                    </ul>
                    <b>Результаты</b>
                    <ul>
                        <li>CTR объявлений: <b>7,8%</b> (выше рынка на 3,2%).</li>
                        <li>CPL: <b>$2–3</b> (снижение на 45%).</li>
                        <li>Средняя цена за клик: <b>$0,50</b>.</li>
                        <li>Количество заявок: <b>+100%</b>.</li>
                        <li>Конверсия сайта выросла с <b>1,9%</b> до <b>3,5%</b>.</li>
                    </ul>
                </>
            ),
            hasImage: true,
            image: "/image/keys/2/img_1.png",
        },
        {
            number: "Кейс 3",
            title: "Citymed",
            subtitle: "Многопрофильная клиника в Ташкенте",
            description: (
                <>
                    <b>Задачи</b>
                    <ul>
                        <li>Повысить узнаваемость бренда в Ташкенте.</li>
                        <li>Увеличить количество обращений через сайт и мессенджеры.</li>
                        <li>Выделить конкурентные преимущества: оборудование, врачи, цены.</li>
                    </ul>
                    <b>Решение</b>
                    <ul>
                        <li>Настроена контекстная реклама в Google Ads по высокочастотным запросам.</li>
                        <li>Созданы кампании на услуги с высокой маржинальностью (кардиология, стоматология, диагностика).</li>
                        <li>Разработаны посадочные страницы с быстрым CTA.</li>
                        <li>Подключен ремаркетинг для возврата аудитории.</li>
                    </ul>
                    <b>Результаты</b>
                    <ul>
                        <li>CTR вырос до <b>10%</b> (рынок — 4%).</li>
                        <li>Заявки и звонки увеличились на <b>+65%</b>.</li>
                        <li>Стоимость заявки снизилась на <b>30%</b>.</li>
                        <li>Запись к врачам выросла на <b>+40%</b>.</li>
                    </ul>
                </>
            ),
            hasImage: true,
            image: "/image/keys/2/img_2.png",
        },
        {
            number: "Кейс 4",
            title: "Truck&Train",
            subtitle: "Курсы по логистике",
            description: (
                <>
                    <b>Задачи</b>
                    <ul>
                        <li>Увеличить количество регистраций на пробный урок.</li>
                        <li>Снизить CPL.</li>
                        <li>Привлечь качественные лиды, заинтересованные в профессии логиста.</li>
                    </ul>
                    <b>Решение</b>
                    <ul>
                        <li>Собрана семантика: курсы логистики, обучение логистике, международная логистика и др.</li>
                        <li>Кампании разделены на поисковые (высокое намерение) и медийные (охват, ретаргетинг).</li>
                        <li>Созданы объявления под каждый курс.</li>
                        <li>Использованы расширения: быстрые ссылки, уточнения, телефоны.</li>
                        <li>Настроен ретаргетинг + квиз для регистрации.</li>
                        <li>Применены минус-слова, A/B тесты заголовков и стратегий.</li>
                    </ul>
                    <b>Результаты</b>
                    <ul>
                        <li>От <b>5 целевых заявок</b> в день.</li>
                        <li>CPL: <b>$0,78</b> (ниже рынка на 22%).</li>
                        <li>Конверсия заявки в студента: <b>10%</b>.</li>
                        <li>Рост узнаваемости бренда: <b>+35%</b>.</li>
                    </ul>
                </>
            ),
            hasImage: true,
            image: "/image/keys/2/img_3.png",
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

                {/* Services List */}
                <div className="space-y-2">
                    <AnimatePresence mode="wait">
                        {services.map((service, index) => {
                            const isExpanded = expandedItems.has(index)

                            return (
                                <motion.div
                                    key={`${selectedType}-${service.number}`}
                                    ref={(el) => (itemRefs.current[index] = el)}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={visibleItems.has(index) ? { opacity: 1, y: 0 } : {}}
                                    exit={{ opacity: 0, y: -30 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="mb-2"
                                >
                                    <motion.div
                                        className="py-4 sm:py-5 md:py-6 lg:py-8 xl:py-12 flex items-start justify-between group glass border border-white/10 rounded-xl sm:rounded-2xl hover:border-white/20 transition-all duration-500 ease-out px-3 sm:px-4 md:px-6 cursor-pointer hover-lift"
                                        onClick={() => toggleService(index)}
                                        whileHover={{ scale: 1.01 }}
                                        layout
                                    >
                                        <div className="flex-1 min-w-0">
                                            <div className="flex flex-col md:flex-row md:items-start gap-3 sm:gap-4 md:gap-8 lg:gap-12">
                                                <motion.span 
                                                    className="text-base sm:text-lg md:text-2xl lg:text-3xl font-bold gradient-text-accent md:min-w-[60px] transition-all duration-300 flex-shrink-0"
                                                    whileHover={{ scale: 1.1 }}
                                                >
                                                    {service.number}
                                                </motion.span>
                                                <div className="flex-1 min-w-0">
                                                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold mb-1 sm:mb-2 transition-all duration-300 leading-tight text-white group-hover:text-gray-100">
                                                        {service.title}
                                                    </h3>
                                                    {service.subtitle && (
                                                        <h4 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium mb-3 sm:mb-4 md:mb-6 text-gray-400">
                                                            {service.subtitle}
                                                        </h4>
                                                    )}
                                                    <AnimatePresence>
                                                        {isExpanded && (
                                                            <motion.div
                                                                initial={{ height: 0, opacity: 0 }}
                                                                animate={{ height: "auto", opacity: 1 }}
                                                                exit={{ height: 0, opacity: 0 }}
                                                                transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                                                                className="overflow-hidden"
                                                            >
                                                                <div className="flex flex-col lg:flex-row gap-3 sm:gap-4 md:gap-6 lg:gap-12 pb-3 sm:pb-4 w-full">
                                                                    <div className="w-full lg:flex-1">
                                                                        <div className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
                                                                            {service.description}
                                                                        </div>
                                                                    </div>
                                                                    {service.hasImage && (
                                                                        <motion.div 
                                                                            className="w-full lg:w-80 h-32 sm:h-36 md:h-40 lg:h-48 rounded-lg sm:rounded-xl flex-shrink-0 overflow-hidden mt-3 sm:mt-4 lg:mt-0"
                                                                            initial={{ opacity: 0, scale: 0.9 }}
                                                                            animate={{ opacity: 1, scale: 1 }}
                                                                            transition={{ delay: 0.2 }}
                                                                        >
                                                                            <img
                                                                                src={service.image || "/placeholder.svg"}
                                                                                alt={service.title}
                                                                                className="w-full h-full object-cover rounded-lg sm:rounded-xl transition-all duration-500 group-hover:scale-110"
                                                                            />
                                                                        </motion.div>
                                                                    )}
                                                                </div>
                                                            </motion.div>
                                                        )}
                                                    </AnimatePresence>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ml-2 sm:ml-3 md:ml-4 lg:ml-8 flex flex-col sm:flex-row gap-2 flex-shrink-0">
                                            <motion.button 
                                                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-gradient-premium text-white rounded-full flex items-center justify-center shadow-glow hover:shadow-glow-lg min-h-[44px] min-w-[44px]"
                                                whileHover={{ scale: 1.1, rotate: 90 }}
                                                whileTap={{ scale: 0.9 }}
                                                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                                onClick={(e) => {
                                                    e.stopPropagation()
                                                    toggleService(index)
                                                }}
                                            >
                                                <ArrowRight
                                                    className={`w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 transition-all duration-500 ${
                                                        isExpanded ? "rotate-90" : "rotate-0"
                                                    }`}
                                                />
                                            </motion.button>
                                            <motion.button
                                                className="px-3 sm:px-4 py-2 bg-white text-black rounded-full text-xs sm:text-sm font-semibold shadow-glow hover:shadow-glow-lg transition-all duration-300 min-h-[44px] whitespace-nowrap"
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                onClick={(e) => {
                                                    e.stopPropagation()
                                                    setSelectedCase(service)
                                                    setCaseModalOpen(true)
                                                }}
                                            >
                                                Подробнее
                                            </motion.button>
                                        </div>
                                    </motion.div>
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