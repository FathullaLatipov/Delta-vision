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

    return (
        <div className="fixed inset-0 bg-white/5 backdrop-blur-md flex items-center justify-center z-50 p-2 sm:p-4">
            <Card className="w-full max-w-lg bg-black text-white rounded-xl sm:rounded-2xl shadow-lg max-h-[95vh] sm:max-h-[90vh] overflow-hidden flex flex-col">
                <CardHeader className="relative border-b border-gray-700 p-4 sm:p-6 flex-shrink-0">
                    <CardTitle className="text-base sm:text-lg md:text-xl pr-8">Квиз: Получите бесплатный разбор</CardTitle>
                    <Button
                        variant="ghost"
                        size="sm"
                        className="absolute right-2 top-2 cursor-pointer w-8 h-8 sm:w-10 sm:h-10 min-h-[44px] min-w-[44px]"
                        onClick={() => {
                            setIsOpen(false)
                            if (setExternalIsOpen) setExternalIsOpen(false)
                        }}
                    >
                        <X className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                    </Button>
                </CardHeader>

                <CardContent className="space-y-4 sm:space-y-5 md:space-y-6 mt-3 sm:mt-4 md:mt-5 p-4 sm:p-6 overflow-y-auto flex-1">
                    {/* Step 1 */}
                    {step === 1 && (
                        <div className="space-y-3 sm:space-y-4">
                            <p className="font-semibold text-sm sm:text-base">1. Выберите формат Вашего бизнеса</p>
                            <div className="grid gap-2 sm:gap-3 grid-cols-1">
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
                                    <label key={opt} className="flex items-start space-x-2 sm:space-x-3 cursor-pointer p-2 sm:p-2.5 rounded-lg hover:bg-white/5 transition-colors min-h-[48px]">
                                        <input
                                            type="radio"
                                            name="businessFormat"
                                            value={opt}
                                            checked={answers.businessFormat === opt}
                                            onChange={() => handleChange("businessFormat", opt)}
                                            className="hidden"
                                        />
                                        <span
                                            className={`w-5 h-5 sm:w-6 sm:h-6 shrink-0 rounded-full border-2 flex items-center justify-center transition mt-0.5 min-h-[44px] min-w-[44px]
                    ${
                                                answers.businessFormat === opt
                                                    ? "border-white shadow-[0_0_8px_2px_rgba(255,255,255,0.8)] bg-white"
                                                    : "border-gray-400"
                                            }`}
                                        >
                  {answers.businessFormat === opt && (
                      <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-black"></span>
                  )}
                </span>
                                        <span className="text-xs sm:text-sm break-words flex-1 leading-relaxed">{opt}</span>
                                    </label>
                                ))}
                            </div>
                            <div className="flex justify-end pt-2">
                                <Button
                                    variant="select"
                                    onClick={handleNext}
                                    disabled={!answers.businessFormat}
                                    className="rounded-xl sm:rounded-2xl cursor-pointer min-h-[48px] px-6 sm:px-8 text-sm sm:text-base"
                                >
                                    Далее
                                </Button>
                            </div>
                        </div>
                    )}

                    {/* Step 2 */}
                    {step === 2 && (
                        <div className="space-y-3 sm:space-y-4">
                            <p className="font-semibold text-sm sm:text-base">
                                2. Что Вы ждете от SMM-продвижения или Контекстной рекламы?
                            </p>
                            <div className="grid gap-2 sm:gap-3 grid-cols-1">
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
                                    <label key={opt} className="flex items-start space-x-2 sm:space-x-3 cursor-pointer p-2 sm:p-2.5 rounded-lg hover:bg-white/5 transition-colors min-h-[48px]">
                                        <input
                                            type="checkbox"
                                            name="expectations"
                                            value={opt}
                                            checked={answers.expectations.includes(opt)}
                                            onChange={() => handleExpectations(opt)}
                                            className="hidden"
                                        />
                                        <span
                                            className={`w-5 h-5 sm:w-6 sm:h-6 shrink-0 rounded-full border-2 flex items-center justify-center transition mt-0.5 min-h-[44px] min-w-[44px]
                    ${
                                                answers.expectations.includes(opt)
                                                    ? "border-white shadow-[0_0_8px_2px_rgba(255,255,255,0.8)] bg-white"
                                                    : "border-gray-400"
                                            }`}
                                        >
                  {answers.expectations.includes(opt) && (
                      <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-black"></span>
                  )}
                </span>
                                        <span className="text-xs sm:text-sm break-words flex-1 leading-relaxed">{opt}</span>
                                    </label>
                                ))}
                            </div>
                            <div className="flex justify-between gap-2 pt-2">
                                <Button
                                    variant="select"
                                    onClick={handleBack}
                                    className="rounded-xl sm:rounded-2xl cursor-pointer min-h-[48px] px-4 sm:px-6 text-sm sm:text-base flex-1"
                                >
                                    Назад
                                </Button>
                                <Button
                                    variant="select"
                                    onClick={handleNext}
                                    disabled={answers.expectations.length === 0}
                                    className="rounded-xl sm:rounded-2xl cursor-pointer min-h-[48px] px-4 sm:px-6 text-sm sm:text-base flex-1"
                                >
                                    Далее
                                </Button>
                            </div>
                        </div>
                    )}

                    {/* Step 3 */}
                    {step === 3 && (
                        <div className="space-y-3 sm:space-y-4">
                            <p className="font-semibold text-sm sm:text-base">
                                3. Какой бюджет в месяц Вы готовы инвестировать?
                            </p>
                            <div className="grid gap-2 sm:gap-3 grid-cols-1">
                                {["До $1000", "От $1000 до $2000", "От $2000 до $5000", "От $5000 и выше"].map(
                                    (opt) => (
                                        <label key={opt} className="flex items-start space-x-2 sm:space-x-3 cursor-pointer p-2 sm:p-2.5 rounded-lg hover:bg-white/5 transition-colors min-h-[48px]">
                                            <input
                                                type="radio"
                                                name="budget"
                                                value={opt}
                                                checked={answers.budget === opt}
                                                onChange={() => handleChange("budget", opt)}
                                                className="hidden"
                                            />
                                            <span
                                                className={`w-5 h-5 sm:w-6 sm:h-6 shrink-0 rounded-full border-2 flex items-center justify-center transition mt-0.5 min-h-[44px] min-w-[44px]
                      ${
                                                    answers.budget === opt
                                                        ? "border-white shadow-[0_0_8px_2px_rgba(255,255,255,0.8)] bg-white"
                                                        : "border-gray-400"
                                                }`}
                                            >
                    {answers.budget === opt && (
                        <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-black"></span>
                    )}
                  </span>
                                            <span className="text-xs sm:text-sm break-words flex-1 leading-relaxed">{opt}</span>
                                        </label>
                                    )
                                )}
                            </div>
                            <div>
                                <label className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
                                    Ваш сайт или соцсети (необязательно)
                                </label>
                                <input
                                    type="text"
                                    value={answers.website}
                                    onChange={(e) => handleChange("website", e.target.value)}
                                    className="w-full bg-transparent border border-white/50 rounded-md p-2.5 sm:p-3 text-white text-sm sm:text-base placeholder-white/50 min-h-[44px]"
                                    placeholder="https://..."
                                />
                            </div>
                            <div className="flex justify-between gap-2 pt-2">
                                <Button
                                    variant="select"
                                    onClick={handleBack}
                                    className="rounded-xl sm:rounded-2xl cursor-pointer min-h-[48px] px-4 sm:px-6 text-sm sm:text-base flex-1"
                                >
                                    Назад
                                </Button>
                                <Button
                                    variant="select"
                                    onClick={handleNext}
                                    disabled={!answers.budget}
                                    className="rounded-xl sm:rounded-2xl cursor-pointer min-h-[48px] px-4 sm:px-6 text-sm sm:text-base flex-1"
                                >
                                    Далее
                                </Button>
                            </div>
                        </div>
                    )}

                    {/* Step 4 */}
                    {step === 4 && (
                        <div className="space-y-3 sm:space-y-4">
                            <p className="font-semibold text-sm sm:text-base">4. Оставьте ваши контакты:</p>

                            <div>
                                <label className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">Ваше имя</label>
                                <input
                                    type="text"
                                    value={answers.name}
                                    onChange={(e) => handleChange("name", e.target.value)}
                                    className="w-full bg-transparent border border-white/50 rounded-md p-2.5 sm:p-3 text-white text-sm sm:text-base placeholder-white/50 min-h-[44px]"
                                    placeholder="Введите имя"
                                />
                            </div>

                            <div>
                                <label className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">Телефон</label>
                                <input
                                    type="tel"
                                    value={answers.phone}
                                    onChange={(e) => handleChange("phone", e.target.value)}
                                    className="w-full bg-transparent border border-white/50 rounded-md p-2.5 sm:p-3 text-white text-sm sm:text-base placeholder-white/50 min-h-[44px]"
                                    placeholder="+998 (___) ___-__-__"
                                />
                            </div>

                            <div className="flex justify-between gap-2 pt-2">
                                <Button
                                    variant="select"
                                    onClick={handleBack}
                                    className="rounded-xl sm:rounded-2xl cursor-pointer min-h-[48px] px-4 sm:px-6 text-sm sm:text-base flex-1"
                                >
                                    Назад
                                </Button>
                                <Button
                                    variant="dark"
                                    onClick={handleSubmit}
                                    disabled={!answers.name || !answers.phone}
                                    className="rounded-xl sm:rounded-2xl cursor-pointer min-h-[48px] px-4 sm:px-6 text-sm sm:text-base flex-1"
                                >
                                    Отправить
                                </Button>
                            </div>
                        </div>
                    )}

                    {/* Progress bar */}
                    <div className="mt-4 sm:mt-5 md:mt-6 pt-3 sm:pt-4 border-t border-gray-700">
                        <div className="w-full bg-gray-700 h-1.5 sm:h-2 rounded-full overflow-hidden">
                            <div
                                className="neon-progress"
                                style={{ width: `${progress}%` }}
                            ></div>
                        </div>
                        <p className="text-xs sm:text-sm text-gray-400 mt-1.5 sm:mt-2 text-right">
                            {progress}% завершено
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
