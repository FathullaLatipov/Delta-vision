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
                    className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-2 sm:p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={(e) => e.target === e.currentTarget && setIsOpen(false)}
                >
                    {/* Modal */}
                    <motion.div
                        className="bg-black p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl w-full max-w-md relative border-2 border-white m-0 sm:m-2 md:m-4 max-h-[95vh] sm:max-h-[90vh] overflow-y-auto"
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close button */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-2 right-2 sm:top-3 sm:right-3 text-white text-xl sm:text-2xl cursor-pointer w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors min-h-[44px] min-w-[44px]"
                            aria-label="Close"
                        >
                            ✕
                        </button>

                        <div className="text-center mb-4 sm:mb-5 md:mb-6 pr-6 sm:pr-8">
                            <h1 className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 leading-tight">
                                ИЗ-ЗА УСЛОВИЙ NDA МЫ НЕ МОЖЕМ РАЗГЛАШАТЬ ВСЕ ДЕТАЛИ
                            </h1>
                            <p className="text-white text-xs sm:text-sm leading-relaxed">
                                Если вас заинтересовал данный кейс, оставьте свои данные. Наш
                                специалист перезвонит Вам в{" "}
                                <span className="underline">течение 1 рабочего дня</span> и проконсультирует по всем вопросам.
                            </p>
                        </div>

                        {/* Forma */}
                        <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                            <input
                                type="text"
                                name="name"
                                placeholder="Имя"
                                value={formData.name}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 sm:py-3.5 bg-transparent border-2 border-white/30 rounded-lg text-white text-sm sm:text-base placeholder-white/70 focus:border-white focus:outline-none min-h-[44px]"
                                required
                            />

                            <input
                                type="tel"
                                name="phone"
                                placeholder="+7 (999) 999-99-99"
                                value={formData.phone}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 sm:py-3.5 bg-transparent border-2 border-white/30 rounded-lg text-white text-sm sm:text-base placeholder-white/70 focus:border-white focus:outline-none min-h-[44px]"
                                required
                            />

                            <input
                                type="text"
                                name="telegram"
                                placeholder="Ваш телеграм"
                                value={formData.telegram}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 sm:py-3.5 bg-transparent border-2 border-white/30 rounded-lg text-white text-sm sm:text-base placeholder-white/70 focus:border-white focus:outline-none min-h-[44px]"
                            />

                            <input
                                type="url"
                                name="website"
                                placeholder="Ссылка на Ваш сайт или социальные сети"
                                value={formData.website}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 sm:py-3.5 bg-transparent border-2 border-white/30 rounded-lg text-white text-sm sm:text-base placeholder-white/70 focus:border-white focus:outline-none min-h-[44px]"
                            />

                            <textarea
                                name="comment"
                                placeholder="Комментарий"
                                value={formData.comment}
                                onChange={handleInputChange}
                                rows={3}
                                className="w-full px-4 py-3 bg-transparent border-2 border-white/30 rounded-lg text-white text-sm sm:text-base placeholder-white/70 focus:border-white focus:outline-none resize-none min-h-[80px]"
                            />

                            <button
                                type="submit"
                                className="w-full bg-white text-black font-bold py-3 sm:py-3.5 rounded-lg hover:bg-gray-100 transition min-h-[48px] text-sm sm:text-base"
                            >
                                ОСТАВИТЬ ЗАЯВКУ
                            </button>
                        </form>

                        <p className="text-white/70 text-[10px] sm:text-xs mt-3 sm:mt-4 leading-relaxed">
                            Заполняя форму, вы соглашаетесь с обработкой своих персональных данных в
                            соответствии с{" "}
                            <span className="underline cursor-pointer">
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
