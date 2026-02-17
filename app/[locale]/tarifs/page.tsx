import { getTranslations } from 'next-intl/server';
import Header from '@/components/Header';
import Pricing from '@/components/Pricing';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });
  return {
    title: t('pricing.title'),
    description: t('pricing.description'),
  };
}

const ROWS_COUNT = 11;

export default async function TarifsPage() {
  const t = await getTranslations('pageTarifs');

  return (
    <>
      <Header />
      <main>
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 gradient-bg">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-happi-yellow/20 text-happi-dark rounded-full text-sm font-medium mb-4">
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

        <Pricing />

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-happi-dark mb-12 text-center">
              {t('comparisonTitle')}
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <th
                        key={i}
                        className={`${i === 0 ? 'text-left' : 'text-center'} py-4 px-4 ${
                          i === 3 ? 'text-happi-blue font-bold' : 'text-happi-dark'
                        }`}
                      >
                        {t(`comparisonHeaders.${i}`)}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {Array.from({ length: ROWS_COUNT }).map((_, rowIdx) => (
                    <tr key={rowIdx} className="border-b border-gray-100 hover:bg-happi-gray/50">
                      {Array.from({ length: 5 }).map((_, colIdx) => (
                        <td
                          key={colIdx}
                          className={`py-3 px-4 ${
                            colIdx === 0
                              ? 'text-happi-dark font-medium'
                              : colIdx === 3
                              ? 'text-center text-happi-blue font-medium bg-happi-blue/5'
                              : 'text-center text-gray-600'
                          }`}
                        >
                          {t(`comparisonRows.${rowIdx}.${colIdx}`)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-16 bg-happi-gray rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-happi-dark mb-4">
                {t('whyTitle')}
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={i}>
                    <h4 className="font-semibold text-happi-dark mb-2">{t(`whyItems.${i}.title`)}</h4>
                    <p className="text-gray-600 text-sm">{t(`whyItems.${i}.description`)}</p>
                  </div>
                ))}
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
