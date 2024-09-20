"use client";
import { Button } from "@/components/Button";
import starbg from "@/assets/stars.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
export const Hero = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [-2000, 2000]
  );
  return (
    <motion.section
      ref={sectionRef}
      className="h-[492px] md:h-[700px] flex items-center overflow-hidden relative [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] "
      style={{
        background: `url(${starbg.src})`,
        backgroundPositionY, 
      }}
      animate={{
        backgroundPositionX: starbg.width,
      }}
      transition={{
        repeat: Infinity,
        ease: "linear",
        duration: 50,
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center,rgb(140,68,255,.5)_15%,rgb(14,0,36,.5)_78%,transparent)] "></div>
      <div className="absolute h-64 w-64 bg-purple-500 rounded-full border-white/30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,60))] shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(140,69,255)]"></div>
      <div className="container relative">
        <h1 className="text-8xl md:text-[168px] font-semibold text-center tracking-tighter bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,2,138,.5))] bg-white text-transparent bg-clip-text">
          AI SEO
        </h1>
        <p className="text-lg md:text-xl text-white/70 mt-5 text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad,
          voluptates quaerat, consequuntur fuga numquam est ab aliquid suscipit
          qui pariatur libero quo fugiat odit esse!
        </p>
        <div className="flex justify-center mt-5">
          <Button>Join Waitlist</Button>
        </div>
      </div>
    </motion.section>
  );
};
