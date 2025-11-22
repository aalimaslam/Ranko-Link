// components/FounderSection.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

/**
 * FounderSection - Combination Globe + Nodes background, founder image effects,
 * premium typography, responsive & optimized.
 *
 * NOTE: the founder image src uses the uploaded path as requested:
 * "/mnt/data/adnan.jpg"
 *
 * If using plain React (not next/image), replace <Image .../> with <img src="/mnt/data/adnan.jpg" ... />
 */

export default function FounderSection() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const [mounted, setMounted] = useState(false);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (prefersReduced) return; // don't run fancy animations when reduced motion requested

    const canvas = canvasRef.current!;
    if (!canvas) return;

    let ctx = canvas.getContext("2d")!;
    let w = 0,
      h = 0;
    let DPR = Math.max(1, window.devicePixelRatio || 1);

    // Performance params (scaled for device)
    const NODE_COUNT = Math.min(120, Math.round(80 * (DPR > 1 ? 1.3 : 1))); // nodes in the network
    const GLOBE_SEGMENTS = 28; // wireframe segments
    const ROTATION_SPEED = 0.0006 * (DPR > 1 ? 1.1 : 1); // globe rotation

    // Datastructs
    let nodes: { x: number; y: number; z: number; vx: number; vy: number }[] =
      [];
    let angle = 0;

    function resize() {
      const rect = canvas.getBoundingClientRect();
      w = Math.max(300, Math.floor(rect.width));
      h = Math.max(300, Math.floor(rect.height));
      canvas.width = Math.floor(w * DPR);
      canvas.height = Math.floor(h * DPR);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx = canvas.getContext("2d")!;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    }

    function initNodes() {
      nodes = [];
      const r = Math.min(w, h) * 0.42;
      for (let i = 0; i < NODE_COUNT; i++) {
        // random spherical coordinates on a hemisphere-ish distribution
        const theta = Math.acos(2 * Math.random() - 1);
        const phi = Math.random() * Math.PI * 2;
        const x = r * Math.sin(theta) * Math.cos(phi);
        const y = r * Math.sin(theta) * Math.sin(phi);
        const z = r * Math.cos(theta);
        nodes.push({
          x,
          y,
          z,
          vx: (Math.random() - 0.5) * 0.12,
          vy: (Math.random() - 0.5) * 0.12,
        });
      }
    }

    function project(p: { x: number; y: number; z: number }, rot: number) {
      // rotate around Y axis
      const cos = Math.cos(rot);
      const sin = Math.sin(rot);
      const rx = p.x * cos + p.z * sin;
      const rz = -p.x * sin + p.z * cos;
      // perspective
      const distance = Math.min(w, h) * 1.6;
      const scale = distance / (distance - rz);
      const screenX = rx * scale + w / 2;
      const screenY = p.y * scale + h / 2;
      return { x: screenX, y: screenY, z: rz, s: scale };
    }

    function draw(timestamp: number) {
      ctx.clearRect(0, 0, w, h);

      // subtle vignette + matte overlay (done in CSS too, but keep safe)
      ctx.save();
      // draw globe wireframe
      ctx.globalCompositeOperation = "lighter";

      // Draw wireframe globe (latitude + longitude)
      const centerX = w / 2;
      const centerY = h / 2;
      const globeR = Math.min(w, h) * 0.42;

      // Draw circular outer rim softly
      ctx.beginPath();
      ctx.strokeStyle = "rgba(70, 100, 160, 0.06)";
      ctx.lineWidth = 1;
      ctx.arc(centerX, centerY, globeR + 1, 0, Math.PI * 2);
      ctx.stroke();

      // longitudes
      for (let i = 0; i < GLOBE_SEGMENTS; i++) {
        const t = (i / GLOBE_SEGMENTS) * Math.PI * 2;
        ctx.beginPath();
        for (let j = 0; j <= 64; j++) {
          const u = (j / 64) * Math.PI - Math.PI / 2;
          const x = globeR * Math.cos(u) * Math.cos(t);
          const y = globeR * Math.cos(u) * Math.sin(t);
          const z = globeR * Math.sin(u);
          const pr = project({ x, y, z }, angle);
          if (j === 0) ctx.moveTo(pr.x, pr.y);
          else ctx.lineTo(pr.x, pr.y);
        }
        ctx.strokeStyle = "rgba(100, 150, 255, 0.035)";
        ctx.lineWidth = 0.8;
        ctx.stroke();
      }

      // latitudes
      for (let i = -6; i <= 6; i++) {
        const lat = (i / 6) * (Math.PI / 2);
        ctx.beginPath();
        for (let j = 0; j <= 64; j++) {
          const lon = (j / 64) * Math.PI * 2;
          const x = globeR * Math.cos(lat) * Math.cos(lon);
          const y = globeR * Math.cos(lat) * Math.sin(lon);
          const z = globeR * Math.sin(lat);
          const pr = project({ x, y, z }, angle);
          if (j === 0) ctx.moveTo(pr.x, pr.y);
          else ctx.lineTo(pr.x, pr.y);
        }
        ctx.strokeStyle = "rgba(100, 150, 255, 0.03)";
        ctx.lineWidth = 0.6;
        ctx.stroke();
      }

      // Node network (connected graph)
      // move nodes slightly for organic motion
      for (const n of nodes) {
        n.x += n.vx * 0.6;
        n.y += n.vy * 0.6;
        // small wrap-around to keep them on sphere surface
        const r = Math.sqrt(n.x * n.x + n.y * n.y + n.z * n.z);
        const target = Math.min(w, h) * 0.42;
        const factor = target / r;
        n.x *= factor;
        n.y *= factor;
        n.z *= factor;
      }

      // project nodes and draw connections
      const projNodes = nodes.map((n) => project(n, angle));
      // Draw light lines between nodes if close in screen space
      ctx.lineWidth = 0.6;
      for (let i = 0; i < projNodes.length; i++) {
        const a = projNodes[i];
        // small glow (circle)
        ctx.beginPath();
        ctx.fillStyle = `rgba(120,180,255,${0.9 * (0.6 + (a.s - 0.6))})`;
        ctx.arc(a.x, a.y, Math.max(0.6, 1.6 * (a.s - 0.6)), 0, Math.PI * 2);
        ctx.fill();
        // connect to nearby nodes
        for (let j = i + 1; j < projNodes.length; j++) {
          const b = projNodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < Math.min(w, h) * 0.16) {
            const alpha = Math.max(0, 0.6 - dist / (Math.min(w, h) * 0.18));
            ctx.beginPath();
            ctx.strokeStyle = `rgba(130, 180, 255, ${alpha * 0.55})`;
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      ctx.restore();

      // slight rotation
      angle += ROTATION_SPEED;
      rafRef.current = requestAnimationFrame(draw);
    }

    function start() {
      resize();
      initNodes();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(draw);
    }

    const handleResize = () => {
      resize();
      initNodes();
    };

    const ro = new ResizeObserver(handleResize);
    ro.observe(canvas);
    start();

    // cleanup
    return () => {
      ro.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mounted, prefersReduced]);

  // Reduced motion fallback: keep canvas static
  const canvasMarkup = (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 w-full h-full"
    />
  );

  return (
    <section
      className="relative overflow-hidden min-h-[600px] md:min-h-[660px] lg:min-h-[700px] bg-[#f5f7fa]"
      role="region"
      aria-label="founder section"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-20">
        {/* ===================== HEADER ===================== */}
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl
          bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-500"
          >
            Founder’s Story
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-base text-blue-700/70 max-w-3xl mx-auto mt-3"
          >
            The vision and mission behind RankoLink’s growth.
          </motion.p>
        </div>

        {/* ===================== GRID ===================== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-center">
          {/* LEFT SIDE — FOUNDER PHOTO */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Clean founder image */}
              <Image
                src="Adnan.png"
                alt="Co-Founder Adnan"
                width={420} // Clean, balanced size
                height={420}
                className="rounded-2xl "
                style={{ width: "420px", height: "auto" }}
              />
            </motion.div>
          </div>

          {/* RIGHT SIDE — TEXT */}
          <div className="space-y-6 lg:pr-10">
            <motion.h3
              initial={{ opacity: 0, x: 14 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-4xl font-extrabold tracking-tight text-blue-800"
            >
              Mr. Adnan
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="text-blue-700/80 leading-relaxed text-base"
            >
              Adnan began his journey as an independent SEO strategist, helping
              brands improve authority through clean, premium link-building. His
              dedication and expertise shaped RankoLink — now a trusted name in
              the SEO and backlink industry.
            </motion.p>

            {/* Quote Box */}
            <div className="bg-white border border-blue-100 shadow-md rounded-xl p-5">
              <blockquote className="text-blue-800 font-medium leading-relaxed flex items-start gap-4">
                <svg
                  className="w-8 h-8 text-blue-500 shrink-0"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M7.2 10.7a3.8 3.8 0 013.8-3.8v3.8H7.2zM1 7.1A6.1 6.1 0 017.1 1v6.1H1z" />
                </svg>
                “If you're seeking transparent, ethical and result-driven SEO —
                you're at the right place.”
              </blockquote>
            </div>

            <p className="text-blue-700/80 leading-relaxed">
              Guided by his belief that{" "}
              <span className="font-semibold text-blue-900">
                “A client's success is our greatest achievement”
              </span>
              , RankoLink continues to deliver real SEO improvements worldwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// components/FounderSection.tsx
// "use client";

// import React, { useEffect, useRef, useState } from "react";
// import Image from "next/image";
// import { motion, useReducedMotion } from "framer-motion";

// export default function FounderSection() {
//   const canvasRef = useRef<HTMLCanvasElement | null>(null);
//   const rafRef = useRef<number | null>(null);
//   const [mounted, setMounted] = useState(false);
//   const prefersReduced = useReducedMotion();

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   useEffect(() => {
//     if (prefersReduced) return; // don't run fancy animations when reduced motion requested

//     const canvas = canvasRef.current!;
//     if (!canvas) return;

//     let ctx = canvas.getContext("2d")!;
//     let w = 0,
//       h = 0;
//     let DPR = Math.max(1, window.devicePixelRatio || 1);

//     // Performance params (scaled for device)
//     const NODE_COUNT = Math.min(120, Math.round(80 * (DPR > 1 ? 1.3 : 1))); // nodes in the network
//     const GLOBE_SEGMENTS = 28; // wireframe segments
//     const ROTATION_SPEED = 0.0006 * (DPR > 1 ? 1.1 : 1); // globe rotation

//     // Datastructs
//     let nodes: { x: number; y: number; z: number; vx: number; vy: number }[] =
//       [];
//     let angle = 0;

//     function resize() {
//       const rect = canvas.getBoundingClientRect();
//       w = Math.max(300, Math.floor(rect.width));
//       h = Math.max(300, Math.floor(rect.height));
//       canvas.width = Math.floor(w * DPR);
//       canvas.height = Math.floor(h * DPR);
//       canvas.style.width = `${w}px`;
//       canvas.style.height = `${h}px`;
//       ctx = canvas.getContext("2d")!;
//       ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
//     }

//     function initNodes() {
//       nodes = [];
//       const r = Math.min(w, h) * 0.42;
//       for (let i = 0; i < NODE_COUNT; i++) {
//         // random spherical coordinates on a hemisphere-ish distribution
//         const theta = Math.acos(2 * Math.random() - 1);
//         const phi = Math.random() * Math.PI * 2;
//         const x = r * Math.sin(theta) * Math.cos(phi);
//         const y = r * Math.sin(theta) * Math.sin(phi);
//         const z = r * Math.cos(theta);
//         nodes.push({
//           x,
//           y,
//           z,
//           vx: (Math.random() - 0.5) * 0.12,
//           vy: (Math.random() - 0.5) * 0.12,
//         });
//       }
//     }

//     function project(p: { x: number; y: number; z: number }, rot: number) {
//       // rotate around Y axis
//       const cos = Math.cos(rot);
//       const sin = Math.sin(rot);
//       const rx = p.x * cos + p.z * sin;
//       const rz = -p.x * sin + p.z * cos;
//       // perspective
//       const distance = Math.min(w, h) * 1.6;
//       const scale = distance / (distance - rz);
//       const screenX = rx * scale + w / 2;
//       const screenY = p.y * scale + h / 2;
//       return { x: screenX, y: screenY, z: rz, s: scale };
//     }

//     function draw(timestamp: number) {
//       ctx.clearRect(0, 0, w, h);

//       // subtle vignette + matte overlay (done in CSS too, but keep safe)
//       ctx.save();
//       // draw globe wireframe
//       ctx.globalCompositeOperation = "lighter";

//       // Draw wireframe globe (latitude + longitude)
//       const centerX = w / 2;
//       const centerY = h / 2;
//       const globeR = Math.min(w, h) * 0.42;

//       // Draw circular outer rim softly
//       ctx.beginPath();
//       ctx.strokeStyle = "rgba(70, 100, 160, 0.06)";
//       ctx.lineWidth = 1;
//       ctx.arc(centerX, centerY, globeR + 1, 0, Math.PI * 2);
//       ctx.stroke();

//       // longitudes
//       for (let i = 0; i < GLOBE_SEGMENTS; i++) {
//         const t = (i / GLOBE_SEGMENTS) * Math.PI * 2;
//         ctx.beginPath();
//         for (let j = 0; j <= 64; j++) {
//           const u = (j / 64) * Math.PI - Math.PI / 2;
//           const x = globeR * Math.cos(u) * Math.cos(t);
//           const y = globeR * Math.cos(u) * Math.sin(t);
//           const z = globeR * Math.sin(u);
//           const pr = project({ x, y, z }, angle);
//           if (j === 0) ctx.moveTo(pr.x, pr.y);
//           else ctx.lineTo(pr.x, pr.y);
//         }
//         ctx.strokeStyle = "rgba(100, 150, 255, 0.035)";
//         ctx.lineWidth = 0.8;
//         ctx.stroke();
//       }

//       // latitudes
//       for (let i = -6; i <= 6; i++) {
//         const lat = (i / 6) * (Math.PI / 2);
//         ctx.beginPath();
//         for (let j = 0; j <= 64; j++) {
//           const lon = (j / 64) * Math.PI * 2;
//           const x = globeR * Math.cos(lat) * Math.cos(lon);
//           const y = globeR * Math.cos(lat) * Math.sin(lon);
//           const z = globeR * Math.sin(lat);
//           const pr = project({ x, y, z }, angle);
//           if (j === 0) ctx.moveTo(pr.x, pr.y);
//           else ctx.lineTo(pr.x, pr.y);
//         }
//         ctx.strokeStyle = "rgba(100, 150, 255, 0.03)";
//         ctx.lineWidth = 0.6;
//         ctx.stroke();
//       }

//       // Node network (connected graph)
//       // move nodes slightly for organic motion
//       for (const n of nodes) {
//         n.x += n.vx * 0.6;
//         n.y += n.vy * 0.6;
//         // small wrap-around to keep them on sphere surface
//         const r = Math.sqrt(n.x * n.x + n.y * n.y + n.z * n.z);
//         const target = Math.min(w, h) * 0.42;
//         const factor = target / r;
//         n.x *= factor;
//         n.y *= factor;
//         n.z *= factor;
//       }

//       // project nodes and draw connections
//       const projNodes = nodes.map((n) => project(n, angle));
//       // Draw light lines between nodes if close in screen space
//       ctx.lineWidth = 0.6;
//       for (let i = 0; i < projNodes.length; i++) {
//         const a = projNodes[i];
//         // small glow (circle)
//         ctx.beginPath();
//         ctx.fillStyle = `rgba(120,180,255,${0.9 * (0.6 + (a.s - 0.6))})`;
//         ctx.arc(a.x, a.y, Math.max(0.6, 1.6 * (a.s - 0.6)), 0, Math.PI * 2);
//         ctx.fill();
//         // connect to nearby nodes
//         for (let j = i + 1; j < projNodes.length; j++) {
//           const b = projNodes[j];
//           const dx = a.x - b.x;
//           const dy = a.y - b.y;
//           const dist = Math.sqrt(dx * dx + dy * dy);
//           if (dist < Math.min(w, h) * 0.16) {
//             const alpha = Math.max(0, 0.6 - dist / (Math.min(w, h) * 0.18));
//             ctx.beginPath();
//             ctx.strokeStyle = `rgba(130, 180, 255, ${alpha * 0.55})`;
//             ctx.moveTo(a.x, a.y);
//             ctx.lineTo(b.x, b.y);
//             ctx.stroke();
//           }
//         }
//       }

//       ctx.restore();

//       // slight rotation
//       angle += ROTATION_SPEED;
//       rafRef.current = requestAnimationFrame(draw);
//     }

//     function start() {
//       resize();
//       initNodes();
//       if (rafRef.current) cancelAnimationFrame(rafRef.current);
//       rafRef.current = requestAnimationFrame(draw);
//     }

//     const handleResize = () => {
//       resize();
//       initNodes();
//     };

//     const ro = new ResizeObserver(handleResize);
//     ro.observe(canvas);
//     start();

//     // cleanup
//     return () => {
//       ro.disconnect();
//       if (rafRef.current) cancelAnimationFrame(rafRef.current);
//     };
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [mounted, prefersReduced]);

//   // Reduced motion fallback: keep canvas static
//   const canvasMarkup = (
//     <canvas
//       ref={canvasRef}
//       aria-hidden
//       className="pointer-events-none absolute inset-0 w-full h-full"
//     />
//   );

//   return (
//     <section
//       className="relative overflow-hidden min-h-[680px] md:min-h-[720px] lg:min-h-[760px]"
//       role="region"
//       aria-label="Co-founder section"
//     >
//       {/* Matte navy background with grain & spotlight */}
//       <div
//         aria-hidden
//         className="absolute inset-0 bg-gradient-to-b from-[#071029] via-[#071833] to-[#07112a] -z-20"
//       />
//       {/* subtle grain overlay */}
//       <div
//         aria-hidden
//         className="absolute inset-0 mix-blend-overlay opacity-5 bg-[url('/_static/noise.png')] -z-10"
//       />

//       {/* canvas globe layer */}
//       <div className="absolute inset-0 -z-5">{canvasMarkup}</div>

//       <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-20">
//         <div className="text-center mb-14">
//           <motion.h2
//             initial={{ opacity: 0, y: 6 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.45 }}
//             className="font-sans font-extrabold text-3xl sm:text-4xl lg:text-5xl text-transparent bg-clip-text
//               bg-gradient-to-r from-[#8AB6FF] via-[#CDE1FF] to-[#9CD1FF]"
//           >
//             Co-Founder’s Story
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0, y: 6 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5, delay: 0.05 }}
//             className="text-sm sm:text-base text-blue-200/80 max-w-3xl mx-auto mt-3"
//           >
//             The vision and mission behind RankoLink’s growth.
//           </motion.p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           {/* IMAGE SIDE */}
//           <div className="flex justify-center">
//             <motion.div
//               initial={{ opacity: 0, y: 8, scale: 0.98 }}
//               whileInView={{ opacity: 1, y: 0, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//               className="relative"
//             >
//               {/* Spotlight behind the image */}
//               <div
//                 className="absolute left-1/2 -translate-x-1/2 top-3 w-[420px] h-[420px] rounded-full blur-[60px] opacity-30"
//                 style={{
//                   background:
//                     "radial-gradient(circle at 50% 40%, rgba(120,160,255,0.12), rgba(10,20,40,0.0) 40%)",
//                 }}
//               />

//               {/* Depth ring (subtle) */}
//               <div className="absolute -inset-1.5 rounded-3xl -z-10 transform-gpu">
//                 <div className="w-full h-full rounded-3xl bg-gradient-to-r from-transparent to-transparent opacity-80 shadow-[0_20px_60px_rgba(6,18,40,0.6)]" />
//               </div>

//               {/* Founder image with glass-border + shadow + subtle reflection */}
//               <div
//                 className="relative rounded-3xl overflow-hidden transform-gpu"
//                 style={{ width: 380 }}
//               >
//                 {/* soft glow border */}
//                 <div
//                   className="absolute -inset-1 rounded-3xl pointer-events-none"
//                   style={{
//                     boxShadow:
//                       "0 6px 30px rgba(28,64,120,0.45), 0 2px 8px rgba(20,30,60,0.5)",
//                     WebkitBackdropFilter: "blur(4px)",
//                     backdropFilter: "blur(4px)",
//                   }}
//                 />

//                 <motion.div
//                   animate={{
//                     y: [0, -6, 0],
//                     rotate: [0.2, -0.2, 0.2],
//                   }}
//                   transition={{
//                     duration: 6,
//                     repeat: Infinity,
//                     ease: "easeInOut",
//                   }}
//                 >
//                   {/* Use local path as src per instructions */}
//                   <Image
//                     src="Adnan.png"
//                     alt="Co-founder Adnan"
//                     width={760}
//                     height={1000}
//                     style={{
//                       width: "100%",
//                       height: "auto",
//                       objectFit: "cover",
//                     }}
//                     className="block rounded-2xl"
//                     priority
//                   />
//                 </motion.div>

//                 {/* subtle highlight reflection */}
//                 <div
//                   aria-hidden
//                   className="pointer-events-none absolute left-0 top-0 w-full h-full rounded-2xl"
//                   style={{
//                     background:
//                       "linear-gradient(120deg, rgba(255,255,255,0.02), rgba(255,255,255,0.00) 35%)",
//                     mixBlendMode: "overlay",
//                   }}
//                 />
//               </div>

//               {/* small caption / role */}
//               <div className="mt-6 text-center">
//                 <p className="text-sm text-blue-200/80">
//                   Co-Founder & SEO Lead
//                 </p>
//               </div>
//             </motion.div>
//           </div>

//           {/* TEXT SIDE */}
//           <div className="space-y-6">
//             <motion.h3
//               initial={{ opacity: 0, x: 14 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5 }}
//               className="text-3xl sm:text-4xl font-extrabold tracking-tight"
//             >
//               {/* Fancy name with bold effect */}
//               <span
//                 className="bg-clip-text text-transparent bg-gradient-to-r from-[#EAF2FF] via-[#BFE0FF] to-[#9CCBFF]"
//                 style={{
//                   textShadow:
//                     "0 6px 18px rgba(10,20,40,0.45), 0 2px 6px rgba(24,40,80,0.35)",
//                 }}
//               >
//                 Mr. Adnan
//               </span>
//               <span className="ml-2 inline-block align-middle">
//                 <span className="inline-block px-3 py-1 text-xs rounded-full bg-gradient-to-r from-[#1E3A8A]/30 to-[#0F172A]/10 text-blue-100 font-semibold">
//                   Founder
//                 </span>
//               </span>
//             </motion.h3>

//             <motion.p
//               initial={{ opacity: 0, x: 12 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: 0.05 }}
//               className="text-blue-200/80 leading-relaxed text-base"
//             >
//               Adnan started as an independent SEO strategist, helping brands
//               grow through premium link-building. His hands-on expertise and
//               dedication to results shaped RankoLink — now one of the most
//               trusted authorities in SEO & backlinks.
//             </motion.p>

//             {/* translucent quote card */}
//             <div className="bg-white/6 border border-white/6 backdrop-blur-md rounded-xl p-5 shadow-sm">
//               <div className="flex gap-4 items-start">
//                 <svg
//                   className="w-8 h-8 text-blue-300 shrink-0"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   aria-hidden
//                 >
//                   <path
//                     d="M7.2 10.7a3.8 3.8 0 013.8-3.8v3.8H7.2zM1 7.1A6.1 6.1 0 017.1 1v6.1H1z"
//                     fill="currentColor"
//                     opacity="0.9"
//                   />
//                 </svg>
//                 <blockquote className="text-blue-100/90 font-medium leading-relaxed">
//                   “If you're seeking transparent, reliable and results-driven
//                   SEO — you're at the right place. We focus on quality, ethics,
//                   and measurable success.”
//                 </blockquote>
//               </div>
//             </div>

//             <motion.p
//               initial={{ opacity: 0, x: 12 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: 0.08 }}
//               className="text-blue-200/80"
//             >
//               Guided by his philosophy that{" "}
//               <strong className="text-blue-100">
//                 “A client's success is our greatest achievement,”
//               </strong>{" "}
//               RankoLink continues to deliver real ranking improvements for
//               brands worldwide.
//             </motion.p>
//           </div>
//         </div>
//       </div>

//       {/* micro CSS for grain if your project can't provide a noise image */}
//     </section>
//   );
// }
