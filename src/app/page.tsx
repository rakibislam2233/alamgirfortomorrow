"use client";

import { About } from "@/components/sections/About";
import { Achievements } from "@/components/sections/Achievements";
import { Commitments } from "@/components/sections/Commitments";
import { Constituency } from "@/components/sections/Constituency";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { ProblemForm } from "@/components/sections/ProblemForm";
import { QuoteSection } from "@/components/sections/QuoteSection";
import { FloatingProblemButton } from "@/components/shared/FloatingProblemButton";

import { Footer } from "@/components/shared/Footer";
import { Header } from "@/components/shared/Header";
import { motion } from "framer-motion";

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section className="w-full pt-20">
        <Hero />
        <QuoteSection />
        <motion.div {...fadeIn}>
          <About />
        </motion.div>
        <motion.div {...fadeIn}>
          <Commitments />
        </motion.div>
        <motion.div {...fadeIn}>
          <Constituency />
        </motion.div>
        <motion.div {...fadeIn}>
          <Achievements />
        </motion.div>
        <motion.div {...fadeIn}>
          <ProblemForm />
        </motion.div>
        <motion.div {...fadeIn}>
          <Contact />
        </motion.div>

        <Footer />
        <FloatingProblemButton />
      </section>
    </main>
  );
}
