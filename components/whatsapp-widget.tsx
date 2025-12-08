"use client";

import { IconBrandWhatsapp } from "@tabler/icons-react";
import Link from "next/link";

export default function WhatsAppWidget() {
  const phoneNumber = "916006351087"; // User provided number
  const message = "Hello! I would like to know more about your services.";

  return (
    <Link
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
      aria-label="Chat on WhatsApp"
    >
      <IconBrandWhatsapp size={32} stroke={2} />
    </Link>
  );
}
