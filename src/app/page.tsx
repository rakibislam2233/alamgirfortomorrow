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
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "হোম | Alamgir For Tomorrow",
  description:
    "মির্জা ফখরুল ইসলাম আলমগীর - বাংলাদেশের মুক্তির পথে যাত্রা: ঠাকুরগাঁওয়ে নতুন যুগ। জনতাই শক্তি।",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section className="w-full pt-20">
        <Hero />
        <QuoteSection />
        <div>
          <About />
        </div>
        <div>
          <Commitments />
        </div>
        <div>
          <Constituency />
        </div>
        <div>
          <Achievements />
        </div>
        <div>
          <ProblemForm />
        </div>
        <div>
          <Contact />
        </div>

        <Footer />
        <FloatingProblemButton />
      </section>
    </main>
  );
}
