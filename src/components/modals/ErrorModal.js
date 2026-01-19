"use client"

import { motion, AnimatePresence } from "framer-motion"
import { XCircle, X } from "lucide-react"

export default function ErrorModal({ isOpen, onClose, message = "Произошла ошибка. Повторите попытку позже." }) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-[60] p-3 sm:p-4 md:p-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={(e) => e.target === e.currentTarget && onClose()}
                >
                    <motion.div
                        className="bg-gradient-to-br from-[#0a0a0f] via-[#1a1a2e] to-[#0a0a0f] border border-white/20 shadow-2xl rounded-2xl w-full max-w-md p-5 sm:p-6 md:p-8 relative"
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-3 right-3 sm:top-4 sm:right-4 text-white cursor-pointer w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full hover:bg-white/20 transition-all min-h-[44px] min-w-[44px] z-10"
                            aria-label="Close"
                        >
                            <X className="h-5 w-5 sm:h-6 sm:w-6" />
                        </button>

                        <div className="text-center">
                            <div className="flex justify-center mb-4 sm:mb-5">
                                <XCircle className="h-16 w-16 sm:h-20 sm:w-20 text-red-500" />
                            </div>
                            <h3 className="text-xl sm:text-2xl md:text-3xl text-white font-bold mb-3 sm:mb-4">
                                Ошибка
                            </h3>
                            <p className="text-base sm:text-lg text-white/90 leading-relaxed">
                                {message}
                            </p>
                            <button
                                onClick={onClose}
                                className="mt-6 sm:mt-8 px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-white font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all min-h-[48px]"
                                style={{ backgroundColor: 'oklch(0.546 0.245 262.881)' }}
                            >
                                Закрыть
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
