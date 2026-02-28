import Header from '@/components/Header';
import Footer from '@/components/Footer';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lang = locale === 'en' ? 'en' : 'fr';
  return {
    title: lang === 'fr' ? 'Politique de confidentialité — H\'appi' : 'Privacy Policy — H\'appi',
    description: lang === 'fr'
      ? 'Politique de confidentialité H\'appi : données collectées, finalités, durées de conservation, droits RGPD.'
      : 'H\'appi privacy policy: data collected, purposes, retention periods, GDPR rights.',
  };
}

export default async function ConfidentialitePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lang = locale === 'en' ? 'en' : 'fr';

  const sections = lang === 'fr'
    ? [
        {
          title: '1. Responsable du traitement',
          content: [
            'H\'appi — Ndiaye Bayonne',
            'Email : contact@happi-bot.com',
            'En tant que responsable du traitement, H\'appi s\'engage à protéger vos données personnelles conformément au Règlement Général sur la Protection des Données (RGPD — UE 2016/679) et à la loi Informatique et Libertés.',
          ],
        },
        {
          title: '2. Données collectées',
          content: [
            'Données de contact : nom, prénom, adresse email, numéro de téléphone (si fourni volontairement via le formulaire de contact ou par email).',
            'Données de navigation : adresse IP, type de navigateur, pages visitées, durée des visites (via des outils d\'analyse anonymisés).',
            'Données liées aux services : informations nécessaires à la fourniture de nos services de développement d\'applications sur-mesure et de chatbots.',
          ],
        },
        {
          title: '3. Finalités et bases légales',
          content: [
            'Répondre à vos demandes de contact et établir des devis — base légale : intérêt légitime.',
            'Fournir et améliorer nos services — base légale : exécution du contrat.',
            'Respecter nos obligations légales et comptables — base légale : obligation légale.',
            'Amélioration du site et analyses d\'audience anonymisées — base légale : intérêt légitime.',
          ],
        },
        {
          title: '4. Durées de conservation',
          content: [
            'Données de contact et échanges commerciaux : 3 ans à compter du dernier contact.',
            'Données contractuelles et comptables : 10 ans (obligation légale).',
            'Données de navigation anonymisées : 13 mois maximum.',
          ],
        },
        {
          title: '5. Hébergement et sécurité',
          content: [
            'Toutes vos données sont hébergées exclusivement dans l\'Union Européenne (Scaleway – France, et/ou Hetzner – Allemagne/Finlande).',
            'Nous appliquons des mesures de sécurité techniques et organisationnelles : chiffrement TLS 1.3 en transit, AES-256 au repos, accès limité par MFA, sauvegardes chiffrées quotidiennes.',
            'Aucun transfert de données n\'est effectué hors de l\'Union Européenne.',
          ],
        },
        {
          title: '6. Vos droits (Articles 15 à 22 du RGPD)',
          content: [
            'Droit d\'accès : obtenir la copie de vos données personnelles.',
            'Droit de rectification : corriger des données inexactes.',
            'Droit à l\'effacement : demander la suppression de vos données.',
            'Droit à la portabilité : recevoir vos données dans un format lisible.',
            'Droit d\'opposition : vous opposer à certains traitements.',
            'Pour exercer ces droits, contactez-nous à : contact@happi-bot.com',
            'En cas de litige non résolu, vous pouvez saisir la CNIL (www.cnil.fr).',
          ],
        },
        {
          title: '7. Cookies',
          content: [
            'Ce site utilise uniquement des cookies techniques strictement nécessaires à son fonctionnement. Aucun cookie publicitaire ou de tracking tiers n\'est utilisé.',
            'Les analyses d\'audience, si utilisées, sont réalisées de manière anonymisée sans transmission à des tiers.',
          ],
        },
        {
          title: '8. Modifications',
          content: [
            'Cette politique de confidentialité peut être mise à jour. Toute modification substantielle sera notifiée par email aux clients existants.',
            'Dernière mise à jour : février 2026.',
          ],
        },
      ]
    : [
        {
          title: '1. Data Controller',
          content: [
            'H\'appi — Ndiaye Bayonne',
            'Email: contact@happi-bot.com',
            'As data controller, H\'appi is committed to protecting your personal data in accordance with the General Data Protection Regulation (GDPR — EU 2016/679).',
          ],
        },
        {
          title: '2. Data Collected',
          content: [
            'Contact data: first name, last name, email address, phone number (if voluntarily provided via contact form or by email).',
            'Browsing data: IP address, browser type, pages visited, session duration (via anonymized analytics tools).',
            'Service-related data: information necessary to provide our custom application development and chatbot services.',
          ],
        },
        {
          title: '3. Purposes and Legal Bases',
          content: [
            'Responding to your contact requests and preparing quotes — legal basis: legitimate interest.',
            'Providing and improving our services — legal basis: contract performance.',
            'Meeting our legal and accounting obligations — legal basis: legal obligation.',
            'Site improvement and anonymized audience analytics — legal basis: legitimate interest.',
          ],
        },
        {
          title: '4. Retention Periods',
          content: [
            'Contact data and commercial exchanges: 3 years from last contact.',
            'Contractual and accounting data: 10 years (legal obligation).',
            'Anonymized browsing data: maximum 13 months.',
          ],
        },
        {
          title: '5. Hosting and Security',
          content: [
            'All your data is hosted exclusively within the European Union (Scaleway – France, and/or Hetzner – Germany/Finland).',
            'We apply technical and organizational security measures: TLS 1.3 encryption in transit, AES-256 at rest, MFA-restricted access, daily encrypted backups.',
            'No data transfers are made outside the European Union.',
          ],
        },
        {
          title: '6. Your Rights (GDPR Articles 15–22)',
          content: [
            'Right of access: obtain a copy of your personal data.',
            'Right of rectification: correct inaccurate data.',
            'Right to erasure: request deletion of your data.',
            'Right to data portability: receive your data in a readable format.',
            'Right to object: object to certain processing activities.',
            'To exercise these rights, contact us at: contact@happi-bot.com',
            'If your complaint is unresolved, you may contact your national supervisory authority (e.g. CNIL in France).',
          ],
        },
        {
          title: '7. Cookies',
          content: [
            'This site uses only strictly necessary technical cookies for its operation. No advertising or third-party tracking cookies are used.',
            'Audience analytics, if used, are performed in an anonymized manner without transmission to third parties.',
          ],
        },
        {
          title: '8. Amendments',
          content: [
            'This privacy policy may be updated. Any material changes will be notified by email to existing clients.',
            'Last updated: February 2026.',
          ],
        },
      ];

  return (
    <>
      <Header />
      <main>
        <section className="pt-32 pb-8 px-4 sm:px-6 lg:px-8 bg-happi-dark border-b border-happi-border">
          <div className="max-w-3xl mx-auto">
            <span className="inline-block px-3 py-1 bg-happi-green/10 text-happi-green rounded-full text-xs font-semibold mb-4 border border-happi-green/20 uppercase tracking-wide">
              {lang === 'fr' ? 'RGPD' : 'GDPR'}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight">
              {lang === 'fr' ? 'Politique de confidentialité' : 'Privacy Policy'}
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
                <div className="space-y-2">
                  {section.content.map((para, i) => (
                    <p key={i} className="text-sm text-happi-muted leading-relaxed">{para}</p>
                  ))}
                </div>
              </div>
            ))}

            <div className="bg-happi-blue/5 rounded-xl p-6 border border-happi-blue/20 text-center">
              <p className="text-sm text-happi-muted">
                {lang === 'fr'
                  ? 'Pour toute question relative à vos données personnelles :'
                  : 'For any questions about your personal data:'}
              </p>
              <a href="mailto:contact@happi-bot.com" className="text-happi-blue font-medium hover:underline">
                contact@happi-bot.com
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
