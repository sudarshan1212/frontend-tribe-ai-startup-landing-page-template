"use client";

import { Button } from "@/components/Button";
import starBg from "@/assets/stars.png";
import gridLines from "@/assets/grid-lines.png";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import { RefObject, useEffect, useRef } from "react";
const useRelativeMouseposition = (to: RefObject<HTMLElement>) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const updateMousePosition = (event: MouseEvent) => {
    if (!to.current) return;
    const { top, left } = to.current.getBoundingClientRect();
    //   const relativeX = event.clientX - rect.left;
    //   const relativeY = event.clientY - rect.top;

    //   // Set mouseX and mouseY relative to the element
    mouseX.set(event.x - left);
    mouseY.set(event.y - top);
  };
  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return [mouseX, mouseY];
};
export const CallToAction = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const borderDivRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [-300, 300]
  );
  const [mouseX, mouseY] = useRelativeMouseposition(borderDivRef);
  const maskImage = useMotionTemplate`radial-gradient(40% 50% at ${mouseX}px ${mouseY}px,black, transparent)`;
  return (
    <section className="py-20" ref={sectionRef}>
      <div className="container">
        <motion.div
          ref={borderDivRef}
          className="border border-white/15 py-24 rounded-lg relative overflow-hidden group"
          animate={{
            backgroundPositionX: starBg.width,
          }}
          transition={{
            repeat: Infinity,
            duration: 60,
            ease: "linear",
          }}
          style={{
            backgroundPositionY,
            backgroundImage: `url(${starBg.src})`,
          }}
        >
          <div
            className="absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)] group-hover:opacity-0 transition duration-700"
            style={{ backgroundImage: `url(${gridLines.src})` }}
          ></div>
          <motion.div
            className="absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay  group-hover:opacity-100 opacity-0 transition duration-700"
            style={{ maskImage, backgroundImage: `url(${gridLines.src})` }}
          ></motion.div>
          <div className="relative">
            <h2 className="text-6xl max-w-sm mx-auto tracking-tighter text-center font-medium">
              AI-driven SEO for everyone.
            </h2>
            <p className="text-center  max-w-xs mx-auto text-lg text-white/70 px-4 mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="flex justify-center mt-8">
              <Button>Join Waitlist</Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
