"use client"
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const variants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    closed: {
      opacity: 0,
      y: 100,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      }
    },
    tap: {
      scale: 1.2,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      }
    }
  };

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-start  gap-28 p-24">
      <Button onClick={toggle}>Toogle State</Button>

      <motion.div
        animate={isOpen ? "open" : isHovered ? "hover" : "closed"}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onClick={toggle}
        variants={variants}
        className="flex flex-col justify-start"
        whileHover={{
          scale: 1.1,
          transition: {
            duration: 0.5,
            ease: "easeInOut",
          }
        }}
      >
        <Card className="w-96 bg-gray-950 flex flex-col justify-start">
          <div className="flex flex-col justify-start p-8">
            <h1 className="text-2xl font-bold text-white">Framer Motion</h1>
            <p className="text-sm text-white/50 leading-6">
              Framer Motion is a production-ready motion library for React that
              is designed to make it easy to build rich, interactive animations
              that work across devices and platforms.
            </p>
            <Button className="mt-4 w-full">Learn More</Button>
          </div>
        </Card>
      </motion.div>
    </main>
  );
}
