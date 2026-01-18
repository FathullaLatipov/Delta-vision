
export async function sendToTelegram(message) {
    const botToken = "8329298216:AAFbRhiHqSzhhyjDjLc2w_wM3GcfyJhBr5M"
    const chatId = "-1003670905082"

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
