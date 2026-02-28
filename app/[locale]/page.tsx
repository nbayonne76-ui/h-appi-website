import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProblemSolution from '@/components/ProblemSolution';
import Testimonials from '@/components/Testimonials';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import { SolutionQuiz } from '@/components/quiz/SolutionQuiz';
import { getLocale } from 'next-intl/server';

export default async function Home() {
  const locale = await getLocale();
  const fr = locale === 'fr';

  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProblemSolution />
        <Testimonials />

        {/* Quiz */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-happi-darker">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <span className="inline-block px-3 py-1 bg-happi-blue/10 text-happi-blue rounded-full text-xs font-semibold uppercase tracking-wide mb-4 border border-happi-blue/20">
                {fr ? '🎯 Trouvez votre solution' : '🎯 Find your solution'}
              </span>
              <h2 className="text-2xl font-bold text-white tracking-tight mb-2">
                {fr ? 'Quelle solution vous correspond ?' : 'Which solution fits you?'}
              </h2>
              <p className="text-happi-muted text-sm">
                {fr ? '4 questions · 1 minute · Résultat personnalisé' : '4 questions · 1 minute · Personalised result'}
              </p>
            </div>
            <SolutionQuiz />
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
