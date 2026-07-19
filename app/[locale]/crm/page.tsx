import { getTranslations } from 'next-intl/server';
import CrmContent from './CrmContent';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });
  return {
    title: t('crm.title'),
    description: t('crm.description'),
  };
}

export default function CrmPage() {
  return <CrmContent />;
}
