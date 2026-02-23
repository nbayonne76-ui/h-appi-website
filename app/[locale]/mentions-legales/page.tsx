import { getTranslations } from 'next-intl/server';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lang = locale === 'en' ? 'en' : 'fr';
  return {
    title: lang === 'fr' ? 'Mentions légales — H\'appi' : 'Legal Notice — H\'appi',
    description: lang === 'fr'
      ? 'Mentions légales du site H\'appi : éditeur, hébergement, propriété intellectuelle, responsabilité.'
      : 'Legal notice for the H\'appi website: publisher, hosting, intellectual property, liability.',
  };
}

export default async function MentionsLegalesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lang = locale === 'en' ? 'en' : 'fr';

  const sections = lang === 'fr'
    ? [
        {
          title: '1. Éditeur du site',
          content: [
            'Le site H\'appi (happi.ai) est édité par H\'appi, entreprise individuelle en cours d\'immatriculation.',
            'Responsable de publication : Ndiaye Bayonne',
            'Contact : nbayonne76@gmail.com',
          ],
        },
        {
          title: '2. Hébergement',
          content: [
            'Ce site est hébergé par Vercel Inc., 340 Pine Street, Suite 700, San Francisco, CA 94104, USA.',
            'Les données applicatives et bases de données sont hébergées exclusivement dans l\'Union Européenne (Scaleway et/ou Hetzner), conformément au RGPD.',
          ],
        },
        {
          title: '3. Propriété intellectuelle',
          content: [
            'L\'ensemble des contenus présents sur ce site (textes, images, graphismes, logo, icônes, code source) sont la propriété exclusive de H\'appi ou de ses partenaires et sont protégés par les lois françaises et internationales relatives à la propriété intellectuelle.',
            'Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans autorisation écrite préalable de H\'appi.',
          ],
        },
        {
          title: '4. Limitation de responsabilité',
          content: [
            'H\'appi s\'efforce d\'assurer au mieux de ses possibilités l\'exactitude et la mise à jour des informations diffusées sur ce site.',
            'H\'appi décline toute responsabilité pour les dommages directs ou indirects résultant de l\'accès ou de l\'utilisation de ce site, y compris en cas d\'inaccessibilité, de perte de données ou d\'inexactitude des informations.',
            'Les liens hypertextes présents sur ce site vers d\'autres sites internet ne sauraient engager la responsabilité de H\'appi quant aux contenus de ces sites tiers.',
          ],
        },
        {
          title: '5. Droit applicable',
          content: [
            'Le présent site et les présentes mentions légales sont soumis au droit français.',
            'En cas de litige, les tribunaux français seront seuls compétents.',
          ],
        },
        {
          title: '6. Contact',
          content: [
            'Pour toute question relative aux présentes mentions légales, contactez-nous à : nbayonne76@gmail.com',
          ],
        },
      ]
    : [
        {
          title: '1. Publisher',
          content: [
            'The H\'appi website (happi.ai) is published by H\'appi, sole proprietorship in process of registration.',
            'Publication manager: Ndiaye Bayonne',
            'Contact: nbayonne76@gmail.com',
          ],
        },
        {
          title: '2. Hosting',
          content: [
            'This website is hosted by Vercel Inc., 340 Pine Street, Suite 700, San Francisco, CA 94104, USA.',
            'Application data and databases are hosted exclusively within the European Union (Scaleway and/or Hetzner), in compliance with the GDPR.',
          ],
        },
        {
          title: '3. Intellectual Property',
          content: [
            'All content on this site (texts, images, graphics, logo, icons, source code) is the exclusive property of H\'appi or its partners and is protected by French and international laws on intellectual property.',
            'Any reproduction, representation, modification, publication or adaptation of any part of the site\'s content, by any means or process, is prohibited without prior written authorization from H\'appi.',
          ],
        },
        {
          title: '4. Limitation of Liability',
          content: [
            'H\'appi strives to ensure the accuracy and currency of the information published on this site.',
            'H\'appi disclaims all liability for direct or indirect damages resulting from access to or use of this site, including inaccessibility, data loss or inaccurate information.',
            'Hyperlinks on this site to external websites do not constitute H\'appi\'s endorsement of or responsibility for the content of those third-party sites.',
          ],
        },
        {
          title: '5. Applicable Law',
          content: [
            'This site and these legal notices are governed by French law.',
            'In case of dispute, French courts shall have sole jurisdiction.',
          ],
        },
        {
          title: '6. Contact',
          content: [
            'For any questions regarding these legal notices, contact us at: nbayonne76@gmail.com',
          ],
        },
      ];

  return (
    <>
      <Header />
      <main>
        <section className="pt-32 pb-8 px-4 sm:px-6 lg:px-8 bg-happi-dark border-b border-happi-border">
          <div className="max-w-3xl mx-auto">
            <span className="inline-block px-3 py-1 bg-happi-blue/10 text-happi-blue rounded-full text-xs font-semibold mb-4 border border-happi-blue/20 uppercase tracking-wide">
              {lang === 'fr' ? 'Légal' : 'Legal'}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight">
              {lang === 'fr' ? 'Mentions légales' : 'Legal Notice'}
            </h1>
            <p className="text-happi-muted text-sm">
              {lang === 'fr' ? 'Dernière mise à jour : février 2026' : 'Last updated: February 2026'}
            </p>
          </div>
        </section>

        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-happi-darker">
          <div className="max-w-3xl mx-auto space-y-8">
            {sections.map((section) => (
              <div key={section.title} className="bg-happi-surface rounded-xl p-6 border border-happi-border">
                <h2 className="text-lg font-semibold text-white mb-4">{section.title}</h2>
                <div className="space-y-3">
                  {section.content.map((para, i) => (
                    <p key={i} className="text-sm text-happi-muted leading-relaxed">{para}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
