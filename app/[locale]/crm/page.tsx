import { getTranslations } from 'next-intl/server';
import CrmContent from './CrmContent';
import { JsonLd } from '@/components/ui/JsonLd';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });
  return {
    title: t('crm.title'),
    description: t('crm.description'),
  };
}

export default async function CrmPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const fr = locale !== 'en';

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Happi CRM',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    description: fr
      ? "CRM IA tout-en-un pour équipes commerciales : pipeline, leads notés par IA, devis, emails, support client."
      : 'All-in-one AI CRM for sales teams: pipeline, AI-scored leads, quotes, emails, customer support.',
    brand: { '@type': 'Brand', name: "H'appi" },
  };

  return (
    <>
      <JsonLd data={schema} />
      <CrmContent />
    </>
  );
}
