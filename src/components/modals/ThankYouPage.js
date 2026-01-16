"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, MessageCircle, Phone, X } from "lucide-react"

export default function ThankYouPage({ onClose }) {
    const handleTelegramClick = () => {
        // 🔗 Sizning haqiqiy Telegram username yoki guruh linkini qo'ying
        window.open("https://t.me/yourusername", "_blank")
    }

    const handleCallClick = () => {
        window.open("tel:+79991234567", "_self")
    }

    return (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-50 p-3 sm:p-4 md:p-6">
            <Card className="w-full max-w-lg bg-gradient-to-br from-[#0a0a0f] via-[#1a1a2e] to-[#0a0a0f] border border-white/20 shadow-2xl rounded-2xl">
                <CardHeader className="relative text-center p-5 sm:p-6 md:p-8 border-b border-white/20 bg-gradient-to-r from-[#1a1a2e] to-[#252540]">
                    <Button
                        variant="ghost"
                        size="sm"
                        className="absolute right-3 top-3 sm:right-4 sm:top-4 w-10 h-10 sm:w-12 sm:h-12 min-h-[44px] min-w-[44px] hover:bg-white/20 rounded-full text-white"
                        onClick={onClose}
                    >
                        <X className="h-5 w-5 sm:h-6 sm:w-6 text-white cursor-pointer" />
                    </Button>
                    <div className="flex justify-center mb-4 sm:mb-5">
                        <CheckCircle className="h-16 w-16 sm:h-20 sm:w-20 text-green-500" />
                    </div>
                    <CardTitle className="text-xl sm:text-2xl md:text-3xl text-white font-bold">Спасибо за заявку!</CardTitle>
                </CardHeader>

                <CardContent className="text-center space-y-5 sm:space-y-6 p-5 sm:p-6 md:p-8">
                    <div>
                        <p className="text-base sm:text-lg md:text-xl mb-3 sm:mb-4 text-white/90 leading-relaxed">
                            Ваша заявка успешно отправлена 🎉<br />
                            Наш специалист свяжется с вами в ближайшее время для проведения бесплатной консультации.
                        </p>
                        <p className="text-sm sm:text-base text-white/70">Обычно мы отвечаем в течение 15 минут в рабочее время.</p>
                    </div>

                    <div className="space-y-3 sm:space-y-4 pt-2">
                        <p className="font-semibold text-sm sm:text-base text-white/80">Или свяжитесь с нами прямо сейчас:</p>

                        <Button
                            onClick={handleTelegramClick}
                            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white flex items-center justify-center rounded-xl py-3 sm:py-4 min-h-[48px] font-semibold shadow-lg hover:shadow-xl transition-all"
                        >
                            <MessageCircle className="h-5 w-5 mr-2" />
                            Написать в Телеграм
                        </Button>

                        <Button
                            onClick={handleCallClick}
                            variant="select"
                            className="w-full rounded-xl py-3 sm:py-4 min-h-[48px] font-semibold"
                        >
                            <Phone className="h-5 w-5 mr-2" />
                            Позвонить
                        </Button>
                    </div>

                    <div className="text-xs sm:text-sm text-white/60 pt-4 sm:pt-5 border-t border-white/20 space-y-1">
                        <p>Рабочие часы: Пн-Пт 9:00-18:00 (МСК)</p>
                        <p>Выходные: Сб-Вс 10:00-16:00 (МСК)</p>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
