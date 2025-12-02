import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import Link from "next/link";

export default function BlogCTA() {
  return (
    <div className="hidden lg:block sticky top-24">
      <div className="bg-green-400 rounded-2xl p-8 text-blue-950 shadow-lg">
        <h3 className="font-heading font-bold text-2xl mb-4 leading-tight">
          Want backlinks on autopilot?
        </h3>
        <Button
          asChild
          className="w-full bg-black hover:bg-gray-900 text-white rounded-full py-6 text-lg font-medium transition-transform hover:scale-105"
        >
          <Link href="/contact" className="flex items-center justify-center gap-2">
            <Phone className="w-5 h-5 text-pink-500" />
            Book a Call
          </Link>
        </Button>
      </div>
    </div>
  );
}
