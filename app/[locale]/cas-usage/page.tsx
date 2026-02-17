import { getTranslations } from 'next-intl/server';
import Header from '@/components/Header';
import UseCases from '@/components/UseCases';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });
  return {
    title: t('useCases.title'),
    description: t('useCases.description'),
  };
}

export default async function CasUsagePage() {
  const t = await getTranslations('pageCasUsage');

  return (
    <>
      <Header />
      <main>
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 gradient-bg">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-happi-green/10 text-happi-green rounded-full text-sm font-medium mb-4">
              {t('badge')}
            </span>
            <h1 className="text-5xl font-bold text-happi-dark mb-6">
              {t.rich('title', {
                highlight: (chunks) => <span className="gradient-text">{chunks}</span>,
              })}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              {t('subtitle')}
            </p>
          </div>
        </section>

        <UseCases />

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* CX Column */}
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-happi-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-happi-dark">
                    {t('cxTitle')}
                  </h2>
                </div>
                <p className="text-gray-600 leading-relaxed mb-8">
                  {t('cxDescription')}
                </p>
                <div className="space-y-6">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className="bg-happi-gray rounded-xl p-6">
                      <h3 className="font-bold text-happi-dark mb-2">{t(`cxItems.${i}.title`)}</h3>
                      <p className="text-gray-600 text-sm">{t(`cxItems.${i}.description`)}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Supply Chain Column */}
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-happi-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H18.75m-7.5-3.75h.008v.008h-.008V10.5zm4.5 0h.008v.008h-.008V10.5zm-4.5 4.5h.008v.008h-.008V15zm4.5 0h.008v.008h-.008V15z" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-happi-dark">
                    {t('supplyTitle')}
                  </h2>
                </div>
                <p className="text-gray-600 leading-relaxed mb-8">
                  {t('supplyDescription')}
                </p>
                <div className="space-y-6">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className="bg-happi-gray rounded-xl p-6">
                      <h3 className="font-bold text-happi-dark mb-2">{t(`supplyItems.${i}.title`)}</h3>
                      <p className="text-gray-600 text-sm">{t(`supplyItems.${i}.description`)}</p>
                    </div>
                  ))}
                </div>
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
