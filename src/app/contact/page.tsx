import { Constituency } from "@/components/sections/Constituency";
import { Contact } from "@/components/sections/Contact";
import { ProblemForm } from "@/components/sections/ProblemForm";
import { Footer } from "@/components/shared/Footer";
import { Header } from "@/components/shared/Header";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <section className="bg-primary py-32 text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <span className="bengali mb-4 block text-sm font-bold uppercase tracking-[0.3em] opacity-70 italic">
            — সরাসরি যোগাযোগ
          </span>
          <h1 className="bengali text-6xl font-black leading-tight tracking-tighter md:text-8xl">
            আপনার প্রয়োজনে <br />
            আমরা আছি
          </h1>
        </div>
      </section>

      <div className="border-b border-black">
        <Contact />
      </div>

      <div className="border-b border-black">
        <ProblemForm />
      </div>

      <Constituency />

      <Footer />
    </main>
  );
}
