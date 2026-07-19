import { getTranslations } from 'next-intl/server';
import BlogContent from './BlogContent';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });
  return {
    title: t('blog.title'),
    description: t('blog.description'),
  };
}

export default function BlogPage() {
  return <BlogContent />;
}
