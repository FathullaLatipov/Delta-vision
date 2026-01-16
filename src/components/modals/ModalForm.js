"use client";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function ModalForm({ isOpen, setIsOpen }) {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        telegram: "",
        website: "",
        comment: "",
    });

    // Body scrollni bloklash
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }, [isOpen]);

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const botToken = "7979056923:AAGyTS9c7mi6S0f2XR4yoKzNBe310ZSQlrw";
        const chatId = "-1003076468133";

        const textMessage = `
📩 *Новая заявка:*  
👤 Имя: ${formData.name}  
📞 Телефон: ${formData.phone}  
💬 Telegram: ${formData.telegram || "-"}  
🌍 Сайт: ${formData.website || "-"}  
📝 Комментарий: ${formData.comment || "-"}
    `;

        try {
            await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: textMessage,
                    parse_mode: "Markdown",
                }),
            });

            alert("✅ Заявка успешно отправлена!");
            setFormData({ name: "", phone: "", telegram: "", website: "", comment: "" });
            setIsOpen(false);
        } catch (error) {
            console.error("Error sending message:", error);
            alert("❌ Ошибка при отправке. Попробуйте снова.");
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-50 p-3 sm:p-4 md:p-6 pt-20 sm:pt-24 md:pt-28 pb-4 sm:pb-6 md:pb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={(e) => e.target === e.currentTarget && setIsOpen(false)}
                >
                    {/* Modal */}
                    <motion.div
                        className="bg-gradient-to-br from-[#0a0a0f] via-[#1a1a2e] to-[#0a0a0f] p-5 sm:p-6 md:p-8 rounded-2xl w-full max-w-md relative border border-white/20 shadow-2xl max-h-[calc(100vh-120px)] sm:max-h-[calc(100vh-140px)] md:max-h-[calc(100vh-160px)] overflow-y-auto flex flex-col scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent"
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close button */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-3 right-3 sm:top-4 sm:right-4 text-white text-xl sm:text-2xl cursor-pointer w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full hover:bg-white/20 transition-all min-h-[44px] min-w-[44px] z-10"
                            aria-label="Close"
                        >
                            ✕
                        </button>

                        <div className="text-center mb-5 sm:mb-6 md:mb-8 pr-8 sm:pr-10">
                            <h1 className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 leading-tight">
                                ИЗ-ЗА УСЛОВИЙ NDA МЫ НЕ МОЖЕМ РАЗГЛАШАТЬ ВСЕ ДЕТАЛИ
                            </h1>
                            <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                                Если вас заинтересовал данный кейс, оставьте свои данные. Наш
                                специалист перезвонит Вам в{" "}
                                <span className="text-blue-400 font-semibold underline">течение 1 рабочего дня</span> и проконсультирует по всем вопросам.
                            </p>
                        </div>

                        {/* Forma */}
                        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 flex-1">
                            <div>
                                <label className="block text-sm sm:text-base font-medium mb-2 text-white">Имя <span className="text-red-400">*</span></label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Введите ваше имя"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 sm:py-4 bg-[#1a1a2e] border-2 border-white/20 rounded-xl text-white text-sm sm:text-base placeholder-white/40 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 min-h-[48px] transition-all"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm sm:text-base font-medium mb-2 text-white">Телефон <span className="text-red-400">*</span></label>
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="+998 (___) ___-__-__"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 sm:py-4 bg-[#1a1a2e] border-2 border-white/20 rounded-xl text-white text-sm sm:text-base placeholder-white/40 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 min-h-[48px] transition-all"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm sm:text-base font-medium mb-2 text-white">Ваш телеграм</label>
                                <input
                                    type="text"
                                    name="telegram"
                                    placeholder="@username"
                                    value={formData.telegram}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 sm:py-4 bg-[#1a1a2e] border-2 border-white/20 rounded-xl text-white text-sm sm:text-base placeholder-white/40 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 min-h-[48px] transition-all"
                                />
                            </div>

                            <div>
                                <label className="block text-sm sm:text-base font-medium mb-2 text-white">Ссылка на Ваш сайт или социальные сети</label>
                                <input
                                    type="url"
                                    name="website"
                                    placeholder="https://example.com"
                                    value={formData.website}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 sm:py-4 bg-[#1a1a2e] border-2 border-white/20 rounded-xl text-white text-sm sm:text-base placeholder-white/40 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 min-h-[48px] transition-all"
                                />
                            </div>

                            <div>
                                <label className="block text-sm sm:text-base font-medium mb-2 text-white">Комментарий</label>
                                <textarea
                                    name="comment"
                                    placeholder="Ваш комментарий..."
                                    value={formData.comment}
                                    onChange={handleInputChange}
                                    rows={4}
                                    className="w-full px-4 py-3 sm:py-4 bg-[#1a1a2e] border-2 border-white/20 rounded-xl text-white text-sm sm:text-base placeholder-white/40 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 resize-none min-h-[100px] transition-all"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold py-3 sm:py-4 rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all min-h-[48px] text-sm sm:text-base shadow-lg hover:shadow-xl"
                            >
                                ОСТАВИТЬ ЗАЯВКУ
                            </button>
                        </form>

                        <p className="text-white/60 text-xs sm:text-sm mt-4 sm:mt-5 leading-relaxed text-center">
                            Заполняя форму, вы соглашаетесь с обработкой своих персональных данных в
                            соответствии с{" "}
                            <span className="text-blue-400 underline cursor-pointer hover:text-blue-300">
                                политикой конфиденциальности
                            </span>
                            .
                        </p>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
