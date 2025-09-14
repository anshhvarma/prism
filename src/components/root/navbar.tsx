"use client";

import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/constants";
import { cn } from "@/lib";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { MenuIcon, XIcon } from "lucide-react";
import Link from "next/link";
import { RefObject, useRef, useState } from "react";
import AnimationContainer from "../global/animation-container";
import Wrapper from "../global/wrapper";
import Icons from "../global/icons";
import { useClickOutside } from "@/hooks/use-outside";

const Navbar = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState<boolean>(false);

  const mobileMenuRef = useClickOutside(() => {
    if (open) setOpen(false);
  });

  const { scrollY } = useScroll({
    target: ref as RefObject<HTMLDivElement>,
    offset: ["start start", "end start"],
  });

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <header className="fixed w-full top-0 inset-x-0 z-50">
      {/* Desktop */}
      <motion.div
        animate={{
          width: visible ? "40%" : "100%",
          y: visible ? 20 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 40,
        }}
        style={{
          minWidth: "800px",
        }}
        className={cn(
          "hidden lg:flex bg-transparent self-start items-center justify-between py-4 rounded-full relative z-[50] mx-auto w-full backdrop-blur",
          visible &&
            "bg-background/60 py-2 border border-t-foreground/20 border-b-foreground/10 border-x-foreground/15 w-full"
        )}
      >
        <Wrapper className="flex items-center justify-between lg:px-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Link href="/" className="flex gap-2 items-center">
              <Icons.icon />
              <p className="text-xl font-bold">Prism OS</p>
            </Link>
          </motion.div>

          <div className="hidden lg:flex flex-row flex-1 absolute inset-0 items-center justify-center w-max mx-auto gap-x-2 text-sm text-muted-foreground font-medium">
            <AnimatePresence>
              {NAV_LINKS.map((link, idx) => (
                <AnimationContainer
                  key={idx}
                  animation="fadeDown"
                  delay={0.1 * idx}
                >
                  <Link
                    href={link.href}
                    className="hover:text-foreground transition-all duration-500 hover:bg-accent rounded-md px-4 py-2"
                  >
                    {link.name}
                  </Link>
                </AnimationContainer>
              ))}
            </AnimatePresence>
          </div>

          <AnimationContainer animation="fadeLeft" delay={0.1}>
            <div className="flex items-center gap-x-4">
              <Link href="/dashboard">
                <Button>Dashboard</Button>
              </Link>{" "}
            </div>
          </AnimationContainer>
        </Wrapper>
      </motion.div>

      {/* Mobile */}
      {/* Mobile */}
      <motion.div
        animate={{
          y: visible ? 20 : 0,
          borderTopLeftRadius: open ? "0.75rem" : "2rem",
          borderTopRightRadius: open ? "0.75rem" : "2rem",
          borderBottomLeftRadius: open ? "0" : "2rem",
          borderBottomRightRadius: open ? "0" : "2rem",
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 50,
        }}
        className={cn(
          "flex relative flex-col lg:hidden w-full justify-between items-center mx-auto py-4 z-50",
          visible &&
            "bg-neutral-950 w-11/12 border border-t-foreground/20 border-b-foreground/10 border-x-foreground/15",
          open && "border-transparent"
        )}
      >
        <Wrapper className="flex items-center justify-between lg:px-4">
          <div className="flex items-center justify-between gap-x-4 w-full">
            <AnimationContainer animation="fadeRight" delay={0.1}>
              <Link href="/" className="flex items-center">
                <Icons.icon className="w-max h-6" />
              </Link>
            </AnimationContainer>

            <AnimationContainer animation="fadeLeft" delay={0.1}>
              <div className="flex items-center justify-center gap-x-4">
                <Link href="/signup">
                  <Button size="sm" variant="outline">
                    Get Started
                  </Button>
                </Link>

                <button
                  className="p-2 rounded-md hover:bg-neutral-800"
                  aria-label="Toggle Menu"
                  onClick={() => setOpen(!open)}
                >
                  {open ? (
                    <XIcon className="w-6 h-6 text-white" />
                  ) : (
                    <MenuIcon className="w-6 h-6 text-white" />
                  )}
                </button>
              </div>
            </AnimationContainer>
          </div>
        </Wrapper>

        <AnimatePresence>
          {open && (
            <motion.div
              ref={mobileMenuRef}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-16 bg-neutral-950 inset-x-0 z-50 flex flex-col items-stretch gap-3 w-full px-6 py-6 rounded-b-xl shadow-xl"
            >
              {NAV_LINKS.map((navItem: any, idx: number) => (
                <AnimationContainer
                  key={`link=${idx}`}
                  animation="fadeRight"
                  delay={0.1 * (idx + 1)}
                  className="w-full"
                >
                  <Link
                    href={navItem.href}
                    onClick={() => setOpen(false)}
                    className="block text-neutral-300 hover:text-white bg-neutral-800 hover:bg-neutral-700 rounded-lg px-4 py-3 text-lg font-medium transition"
                  >
                    {navItem.name}
                  </Link>
                </AnimationContainer>
              ))}

              <AnimationContainer animation="fadeUp" delay={0.5}>
                <Link href="/dashboard" className="w-full">
                  <Button
                    onClick={() => setOpen(false)}
                    variant="default"
                    className="w-full"
                  >
                    Dashboard
                  </Button>
                </Link>

                <Link href="/signup" className="w-full mt-2">
                  <Button
                    onClick={() => setOpen(false)}
                    variant="secondary"
                    className="w-full"
                  >
                    Start for Free
                  </Button>
                </Link>
              </AnimationContainer>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  );
};

export default Navbar;
