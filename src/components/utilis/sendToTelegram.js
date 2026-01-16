
export async function sendToTelegram(message) {
    const botToken = "7979056923:AAGyTS9c7mi6S0f2XR4yoKzNBe310ZSQlrw"
    const chatId = "-1003076468133"

    try {
        await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                chat_id: chatId,
                text: message,
                parse_mode: "HTML",
            }),
        })
        return true
    } catch (error) {
        console.error("Telegram error:", error)
        return false
    }
}
