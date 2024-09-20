"use client";
import calesticalLogo from "@/assets/logo-celestial.png";
import echoLogo from "@/assets/logo-echo.png";
import acmeLogo from "@/assets/logo-acme.png";
import quantumLogo from "@/assets/logo-quantum.png";
import apexLogo from "@/assets/logo-apex.png";
import pulseLogo from "@/assets/logo-pulse.png";
import Image from "next/image";
import { motion } from "framer-motion";

export const LogoTicker = () => {
  return (
    <section>
      <div className="container py-20">
        <div className="flex">
          <div className="flex-1 md:flex-none items-center gap-20">
            <h2>Tursted by top innovative teams</h2>
          </div>
          <div className="flex-1 flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <motion.div
              initial={{ translateX: "-50%" }}
              animate={{ translateX: "0" }}
              transition={{
                repeat: Infinity,
                duration: 30,
                ease: "linear",
              }}
              className="flex flex-none gap-14 -translate-x-1/2 pr-14 "
            >
              {[
                calesticalLogo,
                echoLogo,
                acmeLogo,
                quantumLogo,
                apexLogo,
                pulseLogo,
                calesticalLogo,
                echoLogo,
                acmeLogo,
                quantumLogo,
                apexLogo,
                pulseLogo,
             
              ].map((item, index) => (
                <Image
                  src={item}
                  alt={`Logo ${index}`}
                  key={item.src}
                  className="h-6 w-auto"
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
