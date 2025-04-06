import type { Metadata } from "next";
import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import CodeStreamBackground from "@/components/code-stream-background";
import { ThemeToggle } from "@/components/theme-toggle";

export const metadata: Metadata = {
  title: "DevPrompt | AI Developer Portfolio",
  description: "Portfolio showcasing coding and AI prompting expertise",
};

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-background to-background/90">
      <CodeStreamBackground />
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
