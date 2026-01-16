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
        <div className="fixed inset-0 bg-white/5 backdrop-blur-md flex items-center justify-center z-50 p-4">
            <Card className="w-full max-w-lg bg-black">
                <CardHeader className="relative text-center">
                    <Button
                        variant="ghost"
                        size="sm"
                        className="absolute right-2 top-2"
                        onClick={onClose}
                    >
                        <X className="h-4 w-4 text-white cursor-pointer" />
                    </Button>
                    <div className="flex justify-center mb-4">
                        <CheckCircle className="h-16 w-16 text-green-500" />
                    </div>
                    <CardTitle className="text-xl lg:text-2xl">Спасибо за заявку!</CardTitle>
                </CardHeader>

                <CardContent className="text-center space-y-6">
                    <div>
                        <p className="lg:text-xl mb-4">
                            Ваша заявка успешно отправлена 🎉<br />
                            Наш специалист свяжется с вами в ближайшее время для проведения бесплатной консультации.
                        </p>
                        <p className="text-sm lg:text-lg text-gray-500">Обычно мы отвечаем в течение 15 минут в рабочее время.</p>
                    </div>

                    <div className="space-y-3">
                        <p className="font-semibold text-white/50">Или свяжитесь с нами прямо сейчас:</p>

                        <Button
                            onClick={handleTelegramClick}
                            className="w-full bg-blue-500 hover:bg-blue-600 text-white flex items-center justify-center rounded-xl"
                        >
                            <MessageCircle className="h-4 w-4 mr-2" />
                            Написать в Телеграм
                        </Button>

                        <Button
                            onClick={handleCallClick}
                            variant="select"
                            className="w-full rounded-2xl"
                        >
                            <Phone className="h-4 w-4 mr-2" />
                            Позвонить
                        </Button>
                    </div>

                    <div className="text-xs lg:text-lg text-gray-500 pt-4 border-t">
                        <p>Рабочие часы: Пн-Пт 9:00-18:00 (МСК)</p>
                        <p>Выходные: Сб-Вс 10:00-16:00 (МСК)</p>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
