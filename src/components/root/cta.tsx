"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Container from "../global/container";
import { Button } from "../ui/button";
import Particles from "../ui/particles";

const CTA = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full py-20">
      <Container className="py-20 max-w-6xl mx-auto">
        <div className="relative flex flex-col items-center justify-center py-12 lg:py-20 px-6 lg:px-12 rounded-2xl lg:rounded-3xl bg-background/20 text-center border border-foreground/20 overflow-hidden">
          {/* Particles */}
          <Particles
            refresh
            ease={80}
            quantity={80}
            color="#d4d4d4"
            className="hidden lg:block absolute inset-0 z-0"
          />
          <Particles
            refresh
            ease={80}
            quantity={35}
            color="#d4d4d4"
            className="block lg:hidden absolute inset-0 z-0"
          />

          {/* Animated Glow */}
          <motion.div
            className="absolute -bottom-1/8 left-1/3 -translate-x-1/2 w-44 h-32 lg:h-52 lg:w-1/3 rounded-full blur-[5rem] lg:blur-[10rem] -z-10"
            style={{
              background:
                "conic-gradient(from 0deg at 50% 50%, #a855f7 0deg, #3b82f6 180deg, #06b6d4 360deg)",
            }}
            animate={{ rotate: 360 }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Heading + Subtext */}
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-3xl md:text-5xl lg:text-6xl font-heading font-medium !leading-snug"
          >
            Automate your <br />{" "}
            <span className="font-subheading italic">freelancer workflows</span>
          </motion.h2>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-sm md:text-lg text-center text-accent-foreground/80 max-w-2xl mx-auto mt-4"
          >
            Prism OS helps freelancers and small agencies streamline client
            onboarding, agreements, payments, and project tracking — saving you
            hours of admin work and letting you focus on delivering great work.
          </motion.p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link href="#pricing">
              <Button size="lg">Get Started</Button>
            </Link>
            <Link href="/demo">
              <Button size="lg" variant="outline">
                Book a Demo
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CTA;
