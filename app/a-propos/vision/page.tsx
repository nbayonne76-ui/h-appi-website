import Header from '@/components/Header';
import SubNav from '@/components/about/SubNav';
import VisionSection from '@/components/about/VisionSection';
import MissionPillars from '@/components/about/MissionPillars';
import ObjectivesSection from '@/components/about/ObjectivesSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export const metadata = {
  title: "Vision & Mission - H'appi",
  description:
    "Découvrez la vision de H'appi : démocratiser le digital sur-mesure et transformer vos applications en plateformes d'intelligence métier.",
};

export default function VisionPage() {
  return (
    <>
      <Header />
      <SubNav />
      <main>
        <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 gradient-bg">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-happi-dark mb-4">
              Notre Vision &{' '}
              <span className="gradient-text">Notre Mission</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Pourquoi nous existons, où nous allons, et les 5 piliers
              sur lesquels nous construisons l'avenir du digital sur-mesure.
            </p>
          </div>
        </section>

        <VisionSection />
        <MissionPillars />
        <ObjectivesSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
