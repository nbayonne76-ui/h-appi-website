import Header from '@/components/Header';
import FAQ from '@/components/FAQ';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export const metadata = {
  title: "FAQ - H'appi | Questions fréquentes",
  description: "Toutes les réponses à vos questions sur H'appi : déploiement, sécurité, intégrations, IA, tarifs et plus encore.",
};

export default function FAQPage() {
  return (
    <>
      <Header />
      <main>
        {/* Page Header */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 gradient-bg">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-happi-blue/10 text-happi-blue rounded-full text-sm font-medium mb-4">
              FAQ
            </span>
            <h1 className="text-5xl font-bold text-happi-dark mb-6">
              Questions fréquentes
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Tout ce que vous devez savoir sur H'appi. Vous ne trouvez pas
              votre réponse ? Contactez-nous directement.
            </p>
          </div>
        </section>

        <FAQ />

        {/* Additional info sections */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-happi-dark mb-12 text-center">
              Ressources complémentaires
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-happi-gray rounded-2xl p-8 text-center hover:shadow-md transition-all">
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-happi-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.331 0 4.512.89 6.148 2.354M18 3.75a8.967 8.967 0 00-6 2.292m0 14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512V3.75" />
                  </svg>
                </div>
                <h3 className="font-bold text-happi-dark mb-2">Documentation</h3>
                <p className="text-gray-600 text-sm">
                  Guides complets, tutoriels et documentation technique pour
                  tirer le meilleur parti de H'appi.
                </p>
              </div>

              <div className="bg-happi-gray rounded-2xl p-8 text-center hover:shadow-md transition-all">
                <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-happi-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                </div>
                <h3 className="font-bold text-happi-dark mb-2">Webinaires</h3>
                <p className="text-gray-600 text-sm">
                  Sessions en direct avec nos experts pour découvrir les
                  meilleures pratiques en IA conversationnelle.
                </p>
              </div>

              <div className="bg-happi-gray rounded-2xl p-8 text-center hover:shadow-md transition-all">
                <div className="w-14 h-14 bg-yellow-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-happi-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.671 1.09-.085 2.17-.207 3.238-.364 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                  </svg>
                </div>
                <h3 className="font-bold text-happi-dark mb-2">Support</h3>
                <p className="text-gray-600 text-sm">
                  Notre équipe est disponible pour répondre à toutes vos
                  questions. Contact email, chat ou téléphone.
                </p>
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
