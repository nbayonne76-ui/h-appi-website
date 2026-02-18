import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import Header from '@/components/Header';
import SubNav from '@/components/about/SubNav';
import Footer from '@/components/Footer';
import {
  Eye,
  Heart,
  Coins,
  Users,
  ArrowRight,
  Target,
  Sparkles,
  ShieldCheck,
} from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });
  return {
    title: t('about.title'),
    description: t('about.description'),
  };
}

const sectionIcons = [Eye, Heart, Coins, Users];
const sectionColors = [
  { color: 'bg-happi-blue/10 text-happi-blue', border: 'hover:border-happi-blue/30' },
  { color: 'bg-happi-green/10 text-happi-green', border: 'hover:border-happi-green/30' },
  { color: 'bg-happi-yellow/10 text-happi-yellow', border: 'hover:border-happi-yellow/30' },
  { color: 'bg-happi-blue/10 text-happi-blue', border: 'hover:border-happi-blue/30' },
];
const sectionHrefs = ['/a-propos/vision', '/a-propos/valeurs', '/a-propos/strategie', '/a-propos/rejoindre'];
const tagIcons = [Target, Sparkles, Coins, ShieldCheck];
const tagColors = ['text-happi-blue', 'text-happi-green', 'text-happi-yellow', 'text-happi-blue'];

export default async function AProposPage() {
  const t = await getTranslations('pageAbout');

  return (
    <>
      <Header />
      <SubNav />
      <main>
        {/* Hero */}
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 gradient-bg">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-happi-blue/10 text-happi-blue rounded-full text-sm font-medium mb-6">
              {t('badge')}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {t('titleLine1')}<br />
              {t('titleLine2')}<br />
              {t.rich('titleLine3', {
                highlight: (chunks) => <span className="gradient-text">{chunks}</span>,
              })}
            </h1>
            <p className="text-lg text-happi-muted leading-relaxed max-w-2xl mx-auto">
              {t('subtitle')}
            </p>
          </div>
        </section>

        {/* Key Numbers */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-happi-dark border-b border-happi-border/50">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl font-bold gradient-text mb-1">
                    {t(`keyNumbers.${i}.value`)}
                  </div>
                  <div className="text-sm text-happi-muted">{t(`keyNumbers.${i}.label`)}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Promise Banner */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-happi-dark">
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="text-xl md:text-2xl font-semibold text-white leading-relaxed mb-8">
              &laquo; {t('quote')} &raquo;
            </blockquote>

            <div className="flex flex-wrap justify-center gap-4">
              {tagIcons.map((Icon, i) => (
                <div key={i} className="flex items-center space-x-2 bg-happi-darker rounded-full px-4 py-2">
                  <Icon className={tagColors[i]} size={16} />
                  <span className="text-sm text-white font-medium">
                    {t(`tags.${i}`)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section Cards */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-happi-darker">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-2 text-center">
              {t('exploreTitle')}
            </h2>
            <p className="text-happi-muted text-center mb-10">
              {t('exploreSubtitle')}
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {sectionIcons.map((Icon, i) => (
                <Link
                  key={i}
                  href={sectionHrefs[i]}
                  className={`group bg-happi-surface rounded-2xl p-8 border border-happi-border ${sectionColors[i].border} hover:shadow-lg transition-all`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${sectionColors[i].color}`}>
                      <Icon size={28} />
                    </div>
                    <ArrowRight
                      className="text-happi-muted group-hover:text-happi-blue group-hover:translate-x-1 transition-all"
                      size={20}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {t(`sections.${i}.title`)}
                  </h3>
                  <p className="text-happi-muted leading-relaxed">
                    {t(`sections.${i}.description`)}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Quick History */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-happi-dark">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-white mb-6">
              {t('historyTitle')}
            </h2>
            <p className="text-happi-muted leading-relaxed mb-6">
              {t('historyP1')}
            </p>
            <p className="text-happi-muted leading-relaxed mb-8">
              {t.rich('historyP2', {
                strong: (chunks) => <strong className="text-white">{chunks}</strong>,
              })}
            </p>
            <Link
              href="/a-propos/vision"
              className="inline-flex items-center px-8 py-3 bg-happi-blue text-white rounded-lg hover:bg-opacity-90 transition-all hover:shadow-lg font-medium"
            >
              {t('historyCta')}
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
