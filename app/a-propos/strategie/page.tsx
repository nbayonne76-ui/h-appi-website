import Header from '@/components/Header';
import SubNav from '@/components/about/SubNav';
import PricingStrategy from '@/components/about/PricingStrategy';
import UpsellModel from '@/components/about/UpsellModel';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export const metadata = {
  title: "Stratégie & Prix - H'appi",
  description:
    "Comment H'appi offre des solutions 50 à 70% moins chères que le marché grâce aux infrastructures cloud nouvelle génération et à son modèle d'upsell intelligent.",
};

export default function StrategiePage() {
  return (
    <>
      <Header />
      <SubNav />
      <main>
        <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 gradient-bg">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-happi-dark mb-4">
              Stratégie Tarifaire &{' '}
              <span className="gradient-text">Modèle d'Upsell</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comment nous cassons les prix du marché IT sans compromis
              sur la qualité, et comment vos applications deviennent des
              plateformes d'intelligence métier.
            </p>
          </div>
        </section>

        <PricingStrategy />
        <UpsellModel />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
