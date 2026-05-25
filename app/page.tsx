import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Pipeline from "@/components/Pipeline";
import Guarantees from "@/components/Guarantees";
import Audience from "@/components/Audience";
import CGPro from "@/components/CGPro";
import Cases from "@/components/Cases";
import LiveGrid from "@/components/LiveGrid";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Ticker />
      <Problem />
      <Solution />
      <Pipeline />
      <Guarantees />
      <Audience />
      <CGPro />
      <LiveGrid />
      <Cases />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
