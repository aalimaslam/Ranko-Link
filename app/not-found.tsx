import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <div className="relative w-[700px] h-[400px] mb-8">
        <Image 
          src="/404.png" 
          alt="404 Page Not Found" 
          fill
          className="object-contain"
          priority
        />
      </div>
      {/* <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
      <h2 className="text-2xl text-gray-800 font-semibold mb-2">Page Not Found</h2> */}
      <p className="text-gray-600 mb-8 text-center max-w-md">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link 
        href="/" 
        className="px-6 py-3 bg-black text-white transition-colors duration-200 font-medium"
      >
        Go back to Home
      </Link>
    </div>
  );
}
