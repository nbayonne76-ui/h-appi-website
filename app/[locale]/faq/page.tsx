import { getTranslations } from 'next-intl/server';
import Header from '@/components/Header';
import FAQ from '@/components/FAQ';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });
  return {
    title: t('faq.title'),
    description: t('faq.description'),
  };
}

export default async function FAQPage() {
  const t = await getTranslations('pageFaq');

  return (
    <>
      <Header />
      <main>
        <FAQ />

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-happi-dark">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              {t('resourcesTitle')}
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="bg-happi-darker rounded-2xl p-8 text-center hover:shadow-md transition-all">
                  <div className={`w-14 h-14 ${
                    i === 0 ? 'bg-happi-blue/10' : i === 1 ? 'bg-happi-green/10' : 'bg-happi-yellow/10'
                  } rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    {i === 0 && (
                      <svg className="w-7 h-7 text-happi-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.331 0 4.512.89 6.148 2.354M18 3.75a8.967 8.967 0 00-6 2.292m0 14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512V3.75" />
                      </svg>
                    )}
                    {i === 1 && (
                      <svg className="w-7 h-7 text-happi-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                      </svg>
                    )}
                    {i === 2 && (
                      <svg className="w-7 h-7 text-happi-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.671 1.09-.085 2.17-.207 3.238-.364 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                      </svg>
                    )}
                  </div>
                  <h3 className="font-bold text-white mb-2">{t(`resources.${i}.title`)}</h3>
                  <p className="text-happi-muted text-sm">{t(`resources.${i}.description`)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection hidePricing />
      </main>
      <Footer />
    </>
  );
}
