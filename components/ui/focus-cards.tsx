"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export function FocusCards({ cards }: { cards: any[] }) {
  return (
    <div className="flex flex-col gap-10">
      {cards.map((card, index) => (
        <motion.div
          key={card.number}
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: index * 0.15,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
          className={cn(
            "relative overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl p-8 lg:p-12 transition-all duration-300 group cursor-pointer border border-gray-100"
          )}
        >
          {/* Left badge */}
          <div
            className={cn(
              "absolute -left-8 top-8 h-20 w-20 flex items-center justify-center text-white text-3xl font-bold rounded-full shadow-lg",
              card.color
            )}
            data-number-badge
          >
            {card.number}
          </div>

          {/* Content */}
          <div className="ml-16 lg:ml-24 space-y-4">
            <div className="flex items-center gap-3">
              <card.icon className="h-8 w-8 text-blue-700 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-semibold text-gray-900">
                {card.title}
              </h3>
            </div>
            <p className="text-gray-600 text-base leading-relaxed">
              {card.description}
            </p>
          </div>

          {/* Gradient overlay hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-r from-blue-500 to-cyan-400 transition-opacity duration-500"></div>
        </motion.div>
      ))}
    </div>
  )
}
