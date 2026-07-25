import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import { ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Features from '@/components/Features';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });
  return {
    title: t('features.title'),
    description: t('features.description'),
  };
}

export default async function FonctionnalitesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const fr = locale === 'fr';

  return (
    <>
      <Header />
      <main>
        {/* 10 capacités IA */}
        <Features />

        {/* Lien playbook */}
        <div className="text-center pb-16 px-4 bg-happi-dark">
          <Link
            href="/playbook#stack"
            className="inline-flex items-center gap-1.5 text-happi-muted hover:text-white text-sm transition-colors"
          >
            {fr ? 'Tu veux la stack complète et le comparatif détaillé ?' : 'Want the full stack and detailed comparison?'}
            <span className="text-happi-blue font-medium inline-flex items-center gap-1">
              {fr ? 'Le playbook' : 'The playbook'} <ArrowRight size={13} />
            </span>
          </Link>
        </div>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
