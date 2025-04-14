"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedGradientBorder from "./animated-gradient-border";
import GlitchText from "./glitch-text";

export default function Hero() {
  const [text, setText] = useState("");
  const fullText = "Developer. AI Prompter. Problem Solver.";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-20 md:py-32 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-teal-300">
            Ned Boudeli
          </h1>

          <div className="h-12 mb-8">
            <h2 className="text-xl md:text-3xl font-medium text-foreground/80">
              {text}
              <span className="animate-pulse">|</span>
            </h2>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Crafting exceptional digital experiences through code and AI-powered
            solutions. Turning complex problems into elegant, efficient
            solutions.
          </p>

          <AnimatedGradientBorder className="inline-block p-[2px] mx-auto">
            <div className="flex flex-col sm:flex-row gap-4 justify-center bg-background rounded-lg p-2">
              <Button size="lg" className="group">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="group">
                Contact Me
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </AnimatedGradientBorder>
        </motion.div>
      </div>

      <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-full max-w-7xl h-32 bg-gradient-to-r from-primary/10 via-teal-300/10 to-primary/10 blur-3xl rounded-full" />
    </section>
  );
}
