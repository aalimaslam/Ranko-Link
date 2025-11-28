"use client";
import { useState } from "react";
import { X, Mail } from "lucide-react";

export default function EmailWidget() {
  const [isVisible, setIsVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  // Replace with your actual email address
  const emailAddress = "support@yourcompany.com";
  const subject = "Inquiry about your services";
  const body = "Hi, I have a question about your services!";

  const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 right-8 z-50 animate-slideIn">
      <div className="relative">
        {/* Close button - Premium style */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute -top-2 -right-2 bg-gradient-to-br from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white rounded-full w-6 h-6 flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110 z-10 border border-gray-700/50"
          aria-label="Close Email widget"
        >
          <X className="w-3.5 h-3.5" />
        </button>

        {/* Email Button - Premium Design */}
        <a
          href={mailtoUrl}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative flex items-center gap-3 overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 hover:scale-105 group"
          style={{
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          }}
        >
          {/* Glossy overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-50 transition-opacity duration-300 group-hover:opacity-70" />

          {/* Animated shine effect */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
              transform: isHovered ? "translateX(100%)" : "translateX(-100%)",
              transition: "transform 0.7s ease-in-out",
            }}
          />

          {/* Content */}
          <div className="relative flex items-center gap-3 px-5 py-3.5">
            {/* Icon container with glow */}
            <div className="relative">
              <div className="absolute inset-0 bg-white/30 rounded-lg blur-md" />
              <div className="relative bg-white/20 backdrop-blur-sm p-2 rounded-lg border border-white/30 transition-all duration-300 group-hover:bg-white/30 group-hover:scale-110">
                <Mail className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
            </div>

            {/* Text */}
            <div className="flex flex-col gap-0.5">
              <span className="text-[13px] font-semibold text-white/90 uppercase tracking-wide leading-none">
                Have Questions?
              </span>
              <span className="text-[15px] font-bold text-white leading-none">
                Let's Talk
              </span>
            </div>

            {/* Arrow indicator */}
            <div className="ml-1 transition-transform duration-300 group-hover:translate-x-1">
              <svg
                className="w-4 h-4 text-white/80"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        </a>

        {/* Floating particles effect */}
        <div className="absolute -inset-4 -z-10">
          <div className="absolute top-0 left-0 w-3 h-3 bg-purple-400/30 rounded-full blur-sm animate-float" />
          <div className="absolute bottom-0 right-0 w-2 h-2 bg-blue-400/30 rounded-full blur-sm animate-float-delay" />
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-10px) translateX(5px);
          }
        }

        @keyframes floatDelay {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-8px) translateX(-5px);
          }
        }

        .animate-slideIn {
          animation: slideIn 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-float-delay {
          animation: floatDelay 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
