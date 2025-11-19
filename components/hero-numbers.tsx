import { useEffect, useState } from "react";
import { TrendingUp, Users, Target } from "lucide-react";

const statsData = [
  { icon: TrendingUp, number: 500, suffix: "+", label: "Campaigns", gradient: "from-blue-500 to-blue-600" },
  { icon: Users, number: 200, suffix: "+", label: "Happy Clients", gradient: "from-indigo-500 to-indigo-600" },
  { icon: Target, number: 95, suffix: "%", label: "Success Rate", gradient: "from-purple-500 to-purple-600" },
];

function AnimatedNumber({ value, suffix } : {value: number, suffix: string}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const step = 16;
    const increment = value / (duration / step);

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        clearInterval(timer);
        setCount(value);
      } else {
        setCount(Math.floor(start));
      }
    }, step);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span className="font-bold text-3xl sm:text-4xl lg:text-5xl bg-gradient-to-br from-blue-600 to-purple-600 bg-clip-text text-transparent">
      {count}
      {suffix}
    </span>
  );
}

export default function StatsSection({ isVisible } : { isVisible: boolean }) {
  return (
    <div
      className={`grid grid-cols-3 max-sm:grid-cols-1 gap-4 sm:gap-6 mt-8 justify-center transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: "0.3s" }}
    >
      {statsData.map((stat, index) => (
        <div
          key={index}
          className="group flex flex-col items-center justify-center text-center p-4 sm:p-6 rounded-2xl bg-white/70 backdrop-blur-md  transition-all duration-300 hover:scale-[1.03]"
          style={{ transitionDelay: `${index * 0.1}s` }}
        >
          <div
            className={`p-3 mb-3 rounded-xl bg-gradient-to-br ${stat.gradient} text-white group-hover:scale-110 transition-transform`}
          >
            <stat.icon className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <AnimatedNumber value={stat.number} suffix={stat.suffix} />
          <span className="text-gray-600 text-sm sm:text-base font-medium mt-1">
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  );
}

export { StatsSection };
