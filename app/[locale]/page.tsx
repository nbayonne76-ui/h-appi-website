import Header from '@/components/Header';
import Hero from '@/components/Hero';
import { Ticker } from '@/components/ui/Ticker';
import ProblemSolution from '@/components/ProblemSolution';
import Testimonials from '@/components/Testimonials';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Ticker />
        <ProblemSolution />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
