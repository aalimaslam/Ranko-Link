"use client";
import Link from "next/link";
export default function TrafficCTASection() {
  const handleBookCall = () => {
    alert("Booking functionality would be integrated here!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-5">
      <div className="bg-white rounded-3xl w-full p-10 md:p-16 text-center min-w-[300px] ">
        <h1 className="text-4xl md:text-8xl font-bold text-black mb-6 leading-tight">
          <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent before: line-clamp-4">
            Let's Double
          </span>{" "}
          Your Search Traffic
        </h1>

        <p className="text-gray-600 mb-3 text-base md:text-2xl ">
          We love talking B2B Marketing. Let us know about your project and
          we'll send you a free proposal.
        </p>
        <p className="text-gray-600 text-base mb-8"></p>

        <div className="flex items-center justify-center gap-3 my-10">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-xl font-semibold">
            👤
          </div>
          <span className="text-gray-800 font-medium">Let's talk links.</span>
        </div>

        <div className="flex items-center justify-center md:w-[30%] w-full m-auto gap-5 flex-wrap p-5 rounded-full bg-gray-100">
          <div className="hidden md:flex gap-2 items-center">
            <div className="w-10 h-16 bg-blue-500 rounded-lg transform -skew-x-12"></div>
            <div className="w-10 h-16 bg-blue-400 rounded-lg transform -skew-x-12"></div>
            <div className="w-10 h-16 bg-blue-300 rounded-lg transform -skew-x-12"></div>
            <div className="w-10 h-16 bg-blue-200 rounded-lg transform -skew-x-12"></div>
            <div className="w-10 h-16 bg-blue-100 rounded-lg transform -skew-x-12"></div>
          </div>

          <Link
            href="https://calendly.com/"
            target="_blank"
            className="bg-black text-white px-10 py-4 rounded-full text-base font-semibold transition-all duration-300 hover:bg-gray-800 hover:-translate-y-1 hover:shadow-xl active:translate-y-0"
          >
            Book a call
          </Link>
        </div>
      </div>
    </div>
  );
}
