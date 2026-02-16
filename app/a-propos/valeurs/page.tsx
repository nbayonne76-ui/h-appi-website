import Header from '@/components/Header';
import SubNav from '@/components/about/SubNav';
import ValuesSection from '@/components/about/ValuesSection';
import PromiseSection from '@/components/about/PromiseSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export const metadata = {
  title: "Nos Valeurs - H'appi",
  description:
    "8 valeurs fondamentales qui guident H'appi : sur-mesure radical, prix justes, transparence, agilité, partenariat long terme et sécurité sans compromis.",
};

export default function ValeursPage() {
  return (
    <>
      <Header />
      <SubNav />
      <main>
        <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 gradient-bg">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-happi-dark mb-4">
              Nos Valeurs{' '}
              <span className="gradient-text">Fondamentales</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              8 principes non négociables qui guident chaque décision,
              chaque ligne de code et chaque interaction avec nos clients.
            </p>
          </div>
        </section>

        <ValuesSection />
        <PromiseSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
