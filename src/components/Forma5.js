"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {Button} from "@/components/ui/button";


export default function AuditFormBlock() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        telegram: "",
        website: "",
    })

    const [loading, setLoading] = useState(false)
    const [sent, setSent] = useState(false)

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setSent(false)

        const botToken = "7979056923:AAGyTS9c7mi6S0f2XR4yoKzNBe310ZSQlrw"
        const chatId = "-1003076468133"

        const textMessage = `
🧩 *Заявка на аудит (Блок 5)*
👤 Имя: ${formData.name}
📞 Телефон: ${formData.phone}
💬 Telegram: ${formData.telegram || "-"}
🔗 Сайт/соцсети: ${formData.website || "-"}
    `.trim()

        try {
            const res = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: textMessage,
                    parse_mode: "Markdown",
                }),
            })
            if (!res.ok) throw new Error("Telegram API error")

            setSent(true)
            setFormData({ name: "", phone: "", telegram: "", website: "" })
        } catch (err) {
            console.error(err)
            alert("❌ Произошла ошибка. Повторите попытку позже.")
        } finally {
            setLoading(false)
        }
    }

    return (
        <section id='contact' className="scroll-mt-20 relative py-10 sm:py-14 md:py-16 lg:py-20 overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-radial opacity-20 pointer-events-none"></div>

            <div className="mx-auto max-w-7xl px-3 sm:px-4 md:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                    className="mx-auto"
                >
                    {/* Card with background color */}
                    <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-blue-900/30 via-blue-800/20 to-indigo-900/30 border border-blue-500/30 shadow-glow-lg backdrop-blur-xl overflow-hidden">
                        {/* Pitch */}
                        <div className="p-4 sm:p-6 md:p-8 lg:p-12 space-y-4 sm:space-y-5 md:space-y-6">
                            <motion.p 
                                className="text-white text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                ВКЛАДЫВАЕТЕ ДЕНЬГИ В САЙТ, НО У ВАС НЕТ ПРОДАЖ?
                            </motion.p>
                            <motion.p 
                                className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                            >
                                Проведём <span className="font-bold text-white gradient-text-accent">БЕСПЛАТНЫЙ</span> аудит сайта и выявим проблемы на всех этапах формирования спроса у потребителя.
                            </motion.p>

                            {/* Form */}
                            <motion.form 
                                onSubmit={handleSubmit} 
                                className="mt-4 sm:mt-6 space-y-3 sm:space-y-4 md:space-y-5"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                            >
                                {/* Имя */}
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5 }}
                                >
                                    <label className="block text-white text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">Имя <span className="text-red-400">*</span></label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 sm:px-5 py-3 sm:py-3.5 md:py-4 rounded-lg sm:rounded-xl glass border border-white/20 text-white text-sm sm:text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 min-h-[44px]"
                                        placeholder="Ваше имя"
                                    />
                                </motion.div>

                                {/* Телефон с выбором страны */}
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.6 }}
                                >
                                    <label className="block text-white text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">Номер телефона <span className="text-red-400">*</span></label>
                                    <div className="flex gap-2">
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 sm:px-5 py-3 sm:py-3.5 md:py-4 rounded-lg sm:rounded-xl glass border border-white/20 text-white text-sm sm:text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 min-h-[44px]"
                                            placeholder="(99) 123-45-67"
                                        />
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.65 }}
                                >
                                    <label className="block text-white text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">Ваш телеграм</label>
                                    <input
                                        type="text"
                                        name="telegram"
                                        value={formData.telegram}
                                        onChange={handleInputChange}
                                        className="w-full px-4 sm:px-5 py-3 sm:py-3.5 md:py-4 rounded-lg sm:rounded-xl glass border border-white/20 text-white text-sm sm:text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 min-h-[44px]"
                                        placeholder="@username"
                                    />
                                </motion.div>

                                {/* Ссылка на сайт/соцсети */}
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.7 }}
                                >
                                    <label className="block text-white text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
                                        Ссылка на Ваш сайт или социальные сети
                                    </label>
                                    <input
                                        type="url"
                                        name="website"
                                        value={formData.website}
                                        onChange={handleInputChange}
                                        className="w-full px-4 sm:px-5 py-3 sm:py-3.5 md:py-4 rounded-lg sm:rounded-xl glass border border-white/20 text-white text-sm sm:text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 min-h-[44px]"
                                        placeholder="https://example.com или @username"
                                    />
                                </motion.div>

                                {/* Submit */}
                                <motion.div 
                                    className="pt-1 sm:pt-2"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.8 }}
                                >
                                    <Button
                                        type="submit"
                                        variant="dark"
                                        disabled={loading}
                                        className="w-full rounded-lg sm:rounded-xl py-4 sm:py-5 md:py-6 text-sm sm:text-base md:text-lg font-semibold shadow-glow hover:shadow-glow-lg transition-all duration-300 hover-lift min-h-[48px]"
                                        style={{ backgroundColor: 'oklch(0.546 0.245 262.881)' }}
                                    >
                                        {loading ? "Отправка..." : "ЗАКАЗАТЬ АУДИТ"}
                                    </Button>
                                </motion.div>

                                {/* Success note */}
                                <AnimatePresence>
                                    {sent && (
                                        <motion.p
                                            initial={{ opacity: 0, y: 6 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -6 }}
                                            className="text-emerald-400 text-sm font-medium flex items-center gap-2"
                                        >
                                            <span className="text-xl">✅</span>
                                            Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.
                                        </motion.p>
                                    )}
                                </AnimatePresence>
                            </motion.form>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
