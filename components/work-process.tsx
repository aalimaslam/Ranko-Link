"use client";
import { useRef, useEffect, useState } from "react";

const Heading = ({ colored, black, description }: any) => (
  <div className="text-center mb-16 px-4">
    <h2 className="text-4xl md:text-6xl font-bold mb-4">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
        {colored}
      </span>{" "}
      <span className="text-gray-900">{black}</span>
    </h2>
    <p className="text-gray-600 max-w-3xl mx-auto text-lg">{description}</p>
  </div>
);

const AccordionItem = ({
  number,
  title,
  description,
  isActive,
  onClick,
}: any) => {
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const hoverIn = () => {
      if (window.innerWidth >= 768) {
        el.style.transform = "scale(1.01)";
      }
    };

    const hoverOut = () => {
      if (window.innerWidth >= 768) {
        el.style.transform = "scale(1)";
      }
    };

    el.addEventListener("mouseenter", hoverIn);
    el.addEventListener("mouseleave", hoverOut);

    return () => {
      el.removeEventListener("mouseenter", hoverIn);
      el.removeEventListener("mouseleave", hoverOut);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      onClick={onClick}
      className={`
        relative rounded-[32px] cursor-pointer overflow-hidden
        transition-all duration-700 ease-in-out
        ${isActive ? "flex-[8]" : "flex-[1]"}
        min-h-[500px]
      `}
      style={{
        background: isActive
          ? "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)"
          : "#f8f8f8",
        boxShadow: isActive
          ? "0 25px 70px rgba(0, 0, 0, 0.35)"
          : "0 4px 15px rgba(0,0,0,0.06)",
      }}
    >
      {/* Collapsed State - Show only number */}
      <div
        className={`
          absolute inset-0 p-10 flex items-start justify-start
          transition-opacity duration-400
          ${isActive ? "opacity-0 pointer-events-none" : "opacity-100"}
        `}
      >
        <div
          className="text-[120px] font-bold leading-none"
          style={{
            background: "linear-gradient(to right, #3b82f6, #a855f7)", // blue → purple
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {number}
        </div>
      </div>

      {/* Expanded State - Show all content */}
      <div
        className={`
          absolute inset-0 px-12 py-10 flex flex-col justify-between
          transition-opacity duration-500
          ${isActive ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
      >
        {/* Top Section - Number and Title */}
        <div>
          <div className="text-[100px] font-bold leading-none mb-6 text-white">
            {number}
          </div>
          <h3 className="text-[42px] font-bold text-white leading-tight">
            {title}
          </h3>
        </div>

        {/* Bottom Section - Description */}
        <div>
          <p className="text-[17px] text-gray-200 leading-[1.8] max-w-[90%]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

// Mobile Scroll Accordion
const MobileScrollAccordion = ({ accordionData }: any) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = sectionRefs.current.findIndex(
            (ref) => ref === entry.target
          );
          if (index !== -1) {
            setActiveIndex(index);
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="space-y-8 py-8">
      {accordionData.map((item: any, index: number) => (
        <div
          key={index}
          ref={(idx) => {
            sectionRefs.current[index] = idx;
          }}
          className="min-h-screen flex items-center justify-center px-6"
        >
          <div
            className={`
              w-full max-w-[420px] rounded-[28px] p-10 transition-all duration-700 ease-out
              ${
                activeIndex === index
                  ? "bg-gradient-to-br from-gray-900 via-gray-800 to-black shadow-2xl scale-100"
                  : "bg-gray-100 shadow-md scale-95"
              }
            `}
          >
            <div
              className={`
                text-8xl font-bold mb-6 transition-all duration-700
                ${activeIndex === index ? "text-white" : "text-gray-400"}
              `}
            >
              {item.number}
            </div>
            <h3
              className={`
                text-3xl font-bold mb-4 transition-all duration-700 leading-tight
                ${activeIndex === index ? "text-white" : "text-gray-900"}
              `}
            >
              {item.title}
            </h3>
            <div
              className={`
                transition-all duration-700 overflow-hidden
                ${
                  activeIndex === index
                    ? "max-h-96 opacity-100 mt-6"
                    : "max-h-0 opacity-0 mt-0"
                }
              `}
            >
              <p className="text-base text-gray-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// Desktop Horizontal Accordion
function HorizontalAccordion({ accordionData }: any) {
  const [activeIndex, setActiveIndex] = useState(3);

  return (
    <div className="flex items-center justify-center px-10">
      <div className="flex flex-row gap-4 w-full max-w-[1400px] h-[500px]">
        {accordionData.map((item: any, index: number) => (
          <AccordionItem
            key={index}
            number={item.number}
            title={item.title}
            description={item.description}
            isActive={activeIndex === index}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default function WorkProcess() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const accordionData = [
    {
      number: "1",
      title: "Analysis and Findings",
      description:
        "We dive deep into understanding your business, target audience, and market landscape. Through comprehensive research and analysis, we uncover opportunities and insights that shape our strategic approach.",
    },
    {
      number: "2",
      title: "Smart Planning and Strategy",
      description:
        "We make a custom plan for you that prioritizes quality, relevance, and maximum impact on your website's organic visibility. We analyze your existing content and identify the most relevant publications in your vertical.",
    },
    {
      number: "3",
      title: "Content Creation",
      description:
        "Our team creates compelling, high-quality content that resonates with your audience and aligns with your brand voice. We focus on content that drives engagement, builds authority, and achieves your objectives.",
    },
    {
      number: "4",
      title: "Monitoring and Optimization",
      description:
        "Link building doesn't stop once the links are live. We regularly track and evaluate performance, measure the impact on your rankings, and continuously fine-tune our strategy. This ongoing process helps us maximize results, maintain high-quality backlinks, and support long-term SEO growth.",
    },
  ];

  return (
    <section className="bg-white py-20">
      <Heading
        colored="Our"
        black="Work Process"
        description="Our work process is designed to ensure that we deliver the best results for our clients. From discovery and research to optimization and growth, we follow a structured approach that prioritizes quality, relevance, and impact."
      />

      {isMobile ? (
        <MobileScrollAccordion accordionData={accordionData} />
      ) : (
        <HorizontalAccordion accordionData={accordionData} />
      )}
    </section>
  );
}
