import Header from '@/components/Header';
import SubNav from '@/components/about/SubNav';
import JoinSection from '@/components/about/JoinSection';
import Footer from '@/components/Footer';

export const metadata = {
  title: "Rejoindre H'appi - Entreprises, Talents et Partenaires",
  description:
    "Entreprise cherchant un partenaire tech, talent développeur ou designer, partenaire potentiel : découvrez comment rejoindre l'aventure H'appi.",
};

export default function RejoindrePage() {
  return (
    <>
      <Header />
      <SubNav />
      <main>
        <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 gradient-bg">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-happi-dark mb-4">
              Rejoignez l'Aventure{' '}
              <span className="gradient-text">H'appi</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Que vous soyez une entreprise, un talent tech ou un partenaire
              potentiel, il y a une place pour vous dans l'histoire H'appi.
            </p>
          </div>
        </section>

        <JoinSection />
      </main>
      <Footer />
    </>
  );
}
