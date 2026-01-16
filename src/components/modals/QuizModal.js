"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { X } from "lucide-react"
import ThankYouPage from "./ThankYouPage"
import { sendToTelegram } from "/src/components/utilis/sendToTelegram"

export default function QuizModal({ isOpen: externalIsOpen, setIsOpen: setExternalIsOpen }) {
    const [isOpen, setIsOpen] = useState(externalIsOpen || false)
    const [step, setStep] = useState(1)
    const [answers, setAnswers] = useState({
        businessFormat: "",
        expectations: [], // faqat massiv bo‘ladi
        budget: "",
        website: "",
        name: "",
        phone: "",
    })
    const [showThankYou, setShowThankYou] = useState(false)

    const totalSteps = 4
    const progress = Math.round((step / totalSteps) * 100)

    useEffect(() => {
        if (externalIsOpen !== undefined) {
            setIsOpen(externalIsOpen)
        } else {
            const timer = setTimeout(() => {
                setIsOpen(true)
            }, 60000)
            return () => clearTimeout(timer)
        }
    }, [externalIsOpen])

    useEffect(() => {
        if (setExternalIsOpen && isOpen !== externalIsOpen) {
            setExternalIsOpen(isOpen)
        }
    }, [isOpen, externalIsOpen, setExternalIsOpen])

    const handleNext = () => setStep((prev) => prev + 1)
    const handleBack = () => setStep((prev) => prev - 1)

    const handleChange = (field, value) => {
        setAnswers((prev) => ({ ...prev, [field]: value }))
    }

    const handleExpectations = (value) => {
        setAnswers((prev) => {
            const updated = prev.expectations.includes(value)
                ? prev.expectations.filter((e) => e !== value)
                : [...prev.expectations, value]
            return { ...prev, expectations: updated }
        })
    }

    const handleSubmit = async () => {
        const message = `
📩 Новая заявка с сайта:
-------------------------
🏢 Формат бизнеса: ${answers.businessFormat}
🎯 Ожидания: ${answers.expectations.length > 0 ? answers.expectations.join(", ") : "Не указано"}
💰 Бюджет: ${answers.budget}
🌐 Сайт/Соцсети: ${answers.website || "Не указано"}
👤 Имя: ${answers.name}
📞 Телефон: ${answers.phone}
`
        const success = await sendToTelegram(message)
        if (success) {
            setShowThankYou(true)
        } else {
            alert("Ошибка при отправке ❌")
        }
    }

    if (!isOpen) return null
    if (showThankYou) return <ThankYouPage onClose={() => {
        setIsOpen(false)
        if (setExternalIsOpen) setExternalIsOpen(false)
    }} />

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = ""
        }
        return () => {
            document.body.style.overflow = ""
        }
    }, [isOpen])

    return (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-50 p-3 sm:p-4 md:p-6" onClick={(e) => e.target === e.currentTarget && (setIsOpen(false), setExternalIsOpen?.(false))}>
            <Card className="w-full max-w-4xl bg-gradient-to-br from-[#0a0a0f] via-[#1a1a2e] to-[#0a0a0f] text-white rounded-2xl shadow-2xl border border-white/20 max-h-[95vh] sm:max-h-[90vh] overflow-hidden flex flex-col" onClick={(e) => e.stopPropagation()}>
                <CardHeader className="relative border-b border-white/20 bg-gradient-to-r from-[#1a1a2e] to-[#252540] p-5 sm:p-6 md:p-8 flex-shrink-0">
                    <CardTitle className="text-lg sm:text-xl md:text-2xl pr-10 text-white font-bold">Квиз: Получите бесплатный разбор</CardTitle>
                    <Button
                        variant="ghost"
                        size="sm"
                        className="absolute right-3 top-3 sm:right-4 sm:top-4 cursor-pointer w-10 h-10 sm:w-12 sm:h-12 min-h-[44px] min-w-[44px] hover:bg-white/20 rounded-full text-white transition-all"
                        onClick={() => {
                            setIsOpen(false)
                            if (setExternalIsOpen) setExternalIsOpen(false)
                        }}
                    >
                        <X className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </Button>
                </CardHeader>

                <CardContent className="space-y-5 sm:space-y-6 md:space-y-8 p-5 sm:p-6 md:p-8 overflow-y-auto flex-1 bg-[#0a0a0f] scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
                    {/* Step 1 */}
                    {step === 1 && (
                        <div className="space-y-5 sm:space-y-6">
                            <h2 className="font-bold text-base sm:text-lg md:text-xl text-white mb-4 sm:mb-5">1. Выберите формат Вашего бизнеса</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                {[
                                    "Розничная торговля",
                                    "Строительство/Недвижимость",
                                    "Услуги для бизнеса ( B2B )",
                                    "Гостиницы/Рестораны/Общепит",
                                    "Финансовый сектор",
                                    "Оптовая торговля/Дистрибьюция",
                                    "Перевозки/Логистика",
                                    "Государственная организация",
                                    "Производство",
                                ].map((opt) => (
                                    <label key={opt} className="flex items-center space-x-3 cursor-pointer p-4 rounded-xl bg-[#1a1a2e] border-2 border-white/10 hover:bg-[#252540] hover:border-blue-500/50 transition-all duration-200 group">
                                        <input
                                            type="radio"
                                            name="businessFormat"
                                            value={opt}
                                            checked={answers.businessFormat === opt}
                                            onChange={() => handleChange("businessFormat", opt)}
                                            className="hidden"
                                        />
                                        <span
                                            className={`w-5 h-5 shrink-0 rounded-full border-2 flex items-center justify-center transition-all duration-200 flex-shrink-0
                    ${
                                                answers.businessFormat === opt
                                                    ? "border-blue-500 bg-blue-500 shadow-[0_0_12px_3px_rgba(59,130,246,0.6)]"
                                                    : "border-white/40 bg-transparent group-hover:border-white/60"
                                            }`}
                                        >
                  {answers.businessFormat === opt && (
                      <span className="w-2.5 h-2.5 rounded-full bg-white"></span>
                  )}
                </span>
                                        <span className="text-sm sm:text-base break-words flex-1 leading-relaxed text-white font-medium">{opt}</span>
                                    </label>
                                ))}
                            </div>
                            <div className="flex justify-end pt-4">
                                <Button
                                    variant="select"
                                    onClick={handleNext}
                                    disabled={!answers.businessFormat}
                                    className="rounded-xl cursor-pointer min-h-[48px] px-8 sm:px-10 text-sm sm:text-base font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    Далее
                                </Button>
                            </div>
                        </div>
                    )}

                    {/* Step 2 */}
                    {step === 2 && (
                        <div className="space-y-5 sm:space-y-6">
                            <h2 className="font-bold text-base sm:text-lg md:text-xl text-white mb-4 sm:mb-5">
                                2. Что Вы ждете от SMM-продвижения или Контекстной рекламы?
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                {[
                                    "Повышение лояльности, узнаваемости и доверия",
                                    "Разработка сайта или приложения",
                                    "Проведение рекламных акций и конкурсов",
                                    "Креативный контент-маркетинг",
                                    "Нужна помощь в создании личного бренда",
                                    "Получения заявок и продаж в социальных сетях",
                                    "Получения заявок и продаж через Сайт",
                                    "Настроить воронку продаж  в социальных сетях и на сайте",
                                    "Создание воронки с помощью ботов/чат-ботов",
                                ].map((opt) => (
                                    <label key={opt} className="flex items-center space-x-3 cursor-pointer p-4 rounded-xl bg-[#1a1a2e] border-2 border-white/10 hover:bg-[#252540] hover:border-blue-500/50 transition-all duration-200 group">
                                        <input
                                            type="checkbox"
                                            name="expectations"
                                            value={opt}
                                            checked={answers.expectations.includes(opt)}
                                            onChange={() => handleExpectations(opt)}
                                            className="hidden"
                                        />
                                        <span
                                            className={`w-5 h-5 shrink-0 rounded border-2 flex items-center justify-center transition-all duration-200 flex-shrink-0
                    ${
                                                answers.expectations.includes(opt)
                                                    ? "border-blue-500 bg-blue-500 shadow-[0_0_12px_3px_rgba(59,130,246,0.6)]"
                                                    : "border-white/40 bg-transparent group-hover:border-white/60"
                                            }`}
                                        >
                  {answers.expectations.includes(opt) && (
                      <span className="w-2.5 h-2.5 bg-white"></span>
                  )}
                </span>
                                        <span className="text-sm sm:text-base break-words flex-1 leading-relaxed text-white font-medium">{opt}</span>
                                    </label>
                                ))}
                            </div>
                            <div className="flex justify-between gap-3 pt-4">
                                <Button
                                    variant="select"
                                    onClick={handleBack}
                                    className="rounded-xl cursor-pointer min-h-[48px] px-6 sm:px-8 text-sm sm:text-base font-semibold flex-1"
                                >
                                    Назад
                                </Button>
                                <Button
                                    variant="select"
                                    onClick={handleNext}
                                    disabled={answers.expectations.length === 0}
                                    className="rounded-xl cursor-pointer min-h-[48px] px-6 sm:px-8 text-sm sm:text-base font-semibold flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    Далее
                                </Button>
                            </div>
                        </div>
                    )}

                    {/* Step 3 */}
                    {step === 3 && (
                        <div className="space-y-5 sm:space-y-6">
                            <h2 className="font-bold text-base sm:text-lg md:text-xl text-white mb-4 sm:mb-5">
                                3. Какой бюджет в месяц Вы готовы инвестировать?
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                {["До $1000", "От $1000 до $2000", "От $2000 до $5000", "От $5000 и выше"].map(
                                    (opt) => (
                                        <label key={opt} className="flex items-center space-x-3 cursor-pointer p-4 rounded-xl bg-[#1a1a2e] border-2 border-white/10 hover:bg-[#252540] hover:border-blue-500/50 transition-all duration-200 group">
                                            <input
                                                type="radio"
                                                name="budget"
                                                value={opt}
                                                checked={answers.budget === opt}
                                                onChange={() => handleChange("budget", opt)}
                                                className="hidden"
                                            />
                                            <span
                                                className={`w-5 h-5 shrink-0 rounded-full border-2 flex items-center justify-center transition-all duration-200 flex-shrink-0
                      ${
                                                    answers.budget === opt
                                                        ? "border-blue-500 bg-blue-500 shadow-[0_0_12px_3px_rgba(59,130,246,0.6)]"
                                                        : "border-white/40 bg-transparent group-hover:border-white/60"
                                                }`}
                                            >
                    {answers.budget === opt && (
                        <span className="w-2.5 h-2.5 rounded-full bg-white"></span>
                    )}
                  </span>
                                            <span className="text-sm sm:text-base break-words flex-1 leading-relaxed text-white font-medium">{opt}</span>
                                        </label>
                                    )
                                )}
                            </div>
                            <div className="pt-2">
                                <label className="block text-sm sm:text-base font-medium mb-2 sm:mb-3 text-white">
                                    Ваш сайт или соцсети (необязательно)
                                </label>
                                <input
                                    type="text"
                                    value={answers.website}
                                    onChange={(e) => handleChange("website", e.target.value)}
                                    className="w-full bg-[#1a1a2e] border-2 border-white/20 rounded-xl p-3 sm:p-4 text-white text-sm sm:text-base placeholder-white/40 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 min-h-[48px] transition-all"
                                    placeholder="https://..."
                                />
                            </div>
                            <div className="flex justify-between gap-3 pt-4">
                                <Button
                                    variant="select"
                                    onClick={handleBack}
                                    className="rounded-xl cursor-pointer min-h-[48px] px-6 sm:px-8 text-sm sm:text-base font-semibold flex-1"
                                >
                                    Назад
                                </Button>
                                <Button
                                    variant="select"
                                    onClick={handleNext}
                                    disabled={!answers.budget}
                                    className="rounded-xl cursor-pointer min-h-[48px] px-6 sm:px-8 text-sm sm:text-base font-semibold flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    Далее
                                </Button>
                            </div>
                        </div>
                    )}

                    {/* Step 4 */}
                    {step === 4 && (
                        <div className="space-y-5 sm:space-y-6">
                            <h2 className="font-bold text-base sm:text-lg md:text-xl text-white mb-4 sm:mb-5">4. Оставьте ваши контакты:</h2>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm sm:text-base font-medium mb-2 sm:mb-3 text-white">Ваше имя</label>
                                    <input
                                        type="text"
                                        value={answers.name}
                                        onChange={(e) => handleChange("name", e.target.value)}
                                        className="w-full bg-[#1a1a2e] border-2 border-white/20 rounded-xl p-3 sm:p-4 text-white text-sm sm:text-base placeholder-white/40 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 min-h-[48px] transition-all"
                                        placeholder="Введите имя"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm sm:text-base font-medium mb-2 sm:mb-3 text-white">Телефон</label>
                                    <input
                                        type="tel"
                                        value={answers.phone}
                                        onChange={(e) => handleChange("phone", e.target.value)}
                                        className="w-full bg-[#1a1a2e] border-2 border-white/20 rounded-xl p-3 sm:p-4 text-white text-sm sm:text-base placeholder-white/40 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 min-h-[48px] transition-all"
                                        placeholder="+998 (___) ___-__-__"
                                    />
                                </div>
                            </div>

                            <div className="flex justify-between gap-3 pt-4">
                                <Button
                                    variant="select"
                                    onClick={handleBack}
                                    className="rounded-xl cursor-pointer min-h-[48px] px-6 sm:px-8 text-sm sm:text-base font-semibold flex-1"
                                >
                                    Назад
                                </Button>
                                <Button
                                    variant="dark"
                                    onClick={handleSubmit}
                                    disabled={!answers.name || !answers.phone}
                                    className="rounded-xl cursor-pointer min-h-[48px] px-6 sm:px-8 text-sm sm:text-base font-semibold flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    Отправить
                                </Button>
                            </div>
                        </div>
                    )}

                    {/* Progress bar */}
                    <div className="mt-6 sm:mt-8 pt-4 sm:pt-5 border-t border-white/20">
                        <div className="w-full bg-[#1a1a2e] h-2.5 sm:h-3 rounded-full overflow-hidden">
                            <div
                                className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-500 h-full transition-all duration-500 rounded-full"
                                style={{ width: `${progress}%` }}
                            ></div>
                        </div>
                        <p className="text-sm sm:text-base text-white/90 mt-3 text-right font-semibold">
                            {progress}% завершено
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
