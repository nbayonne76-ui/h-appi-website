import { getTranslations } from 'next-intl/server';
import Header from '@/components/Header';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import { Shield, Lock, Eye, Globe, CheckCircle2, AlertCircle } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'securitePage' });
  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
  };
}

const certifications = [
  { name: 'ISO 27001', desc: { fr: 'Management de la sécurité de l\'information', en: 'Information security management' }, scaleway: true, hetzner: true },
  { name: 'ISO 27017', desc: { fr: 'Sécurité du cloud computing', en: 'Cloud computing security' }, scaleway: true, hetzner: false },
  { name: 'ISO 27018', desc: { fr: 'Protection des données dans le cloud', en: 'Personal data protection in cloud' }, scaleway: true, hetzner: false },
  { name: 'ISO 27701', desc: { fr: 'Gestion de la vie privée', en: 'Privacy information management' }, scaleway: true, hetzner: false },
  { name: 'HDS', desc: { fr: 'Hébergeur de Données de Santé (France)', en: 'Health Data Hosting (France)' }, scaleway: true, hetzner: false },
  { name: 'SecNumCloud', desc: { fr: 'Qualification ANSSI (France)', en: 'ANSSI qualification (France)' }, scaleway: 'pending', hetzner: false },
  { name: 'SOC 2 Type II', desc: { fr: 'Sécurité opérationnelle', en: 'Operational security' }, scaleway: 'pending', hetzner: false },
];

const gdprCommitments = [
  { fr: 'Hébergement UE exclusif : aucun transfert de données hors Union Européenne', en: 'EU-only hosting: no data transfer outside the European Union' },
  { fr: 'Accord de sous-traitance signé avec chaque client, conforme à l\'Article 28 RGPD', en: 'Data processing agreement signed with every client, compliant with Article 28 GDPR' },
  { fr: 'Chiffrement de bout en bout : données protégées en transit et au repos', en: 'End-to-end encryption: data protected both in transit and at rest' },
  { fr: 'Contrôle d\'accès strict avec authentification multi-facteurs', en: 'Strict access control with multi-factor authentication' },
  { fr: 'Notification des incidents sous 48h en cas de violation de données', en: 'Incident notification within 48 hours in case of a data breach' },
  { fr: 'Procédures claires pour l\'accès, la rectification et l\'effacement de vos données', en: 'Clear procedures for accessing, correcting and deleting your data' },
  { fr: 'Audits de conformité disponibles sur demande', en: 'Compliance audits available on request' },
  { fr: 'Suppression certifiée de toutes les données en fin de contrat', en: 'Certified deletion of all data at end of contract' },
];

const securityLevels = [
  {
    level: '01',
    titleFr: 'Infrastructure',
    titleEn: 'Infrastructure',
    items: {
      fr: ['Datacenters haute sécurité (accès biométrique, vidéosurveillance 24/7)', 'Redondance électrique et réseau (uptime 99,9%+)', 'Protection DDoS native', 'Isolation réseau (VLANs, firewalls)'],
      en: ['High-security datacenters (biometric access, 24/7 CCTV)', 'Electrical and network redundancy (99.9%+ uptime)', 'Native DDoS protection', 'Network isolation (VLANs, firewalls)'],
    },
  },
  {
    level: '02',
    titleFr: 'Applicatif',
    titleEn: 'Application',
    items: {
      fr: ['Chiffrement TLS 1.3 pour toutes les communications', 'Chiffrement AES-256 des données au repos', 'Pare-feu applicatif (WAF)', 'Protection contre injections SQL, XSS, CSRF'],
      en: ['TLS 1.3 encryption for all communications', 'AES-256 encryption of data at rest', 'Web Application Firewall (WAF)', 'Protection against SQL injections, XSS, CSRF'],
    },
  },
  {
    level: '03',
    titleFr: 'Données',
    titleEn: 'Data',
    items: {
      fr: ['Sauvegardes automatiques quotidiennes chiffrées', 'Rétention de 30 jours minimum', 'Tests de restauration réguliers', 'Stockage géo-redondant'],
      en: ['Daily automated encrypted backups', 'Minimum 30-day retention', 'Regular restoration testing', 'Geo-redundant storage'],
    },
  },
  {
    level: '04',
    titleFr: 'Accès',
    titleEn: 'Access',
    items: {
      fr: ['Authentification multi-facteurs (MFA) obligatoire', 'Gestion des droits selon principe du moindre privilège', 'Journalisation complète des accès (logs)', 'Révocation immédiate des accès en fin de collaboration'],
      en: ['Mandatory multi-factor authentication (MFA)', 'Role-based access control (least privilege)', 'Full access logging', 'Immediate access revocation at end of engagement'],
    },
  },
];

const faqItems = [
  {
    q: { fr: 'Mes données sont-elles vraiment en sécurité ?', en: 'Is my data truly secure?' },
    a: { fr: 'Oui. Nous appliquons les mêmes standards de sécurité que Microsoft et Oracle : chiffrement, MFA, monitoring 24/7, audits réguliers, mais à des coûts optimisés grâce à nos partenaires européens.', en: 'Yes. We apply the same security standards as Microsoft and Oracle: encryption, MFA, 24/7 monitoring, and regular audits, at optimized costs thanks to our European partners.' },
  },
  {
    q: { fr: 'Que se passe-t-il si mon hébergeur a une panne ?', en: 'What happens if my hosting provider goes down?' },
    a: { fr: 'Nos infrastructures incluent des sauvegardes géo-redondantes et des plans de reprise d\'activité (PRA). En cas de panne majeure, vos données sont restaurées depuis les sauvegardes chiffrées avec un objectif de reprise en moins de 4h.', en: 'Our infrastructures include geo-redundant backups and business continuity plans. In case of major outage, your data is restored from encrypted backups with a recovery objective of under 4 hours.' },
  },
  {
    q: { fr: 'Puis-je changer d\'hébergeur après le déploiement ?', en: 'Can I switch hosting providers after deployment?' },
    a: { fr: 'Oui, absolument. Vous êtes propriétaire à 100% de votre code et de vos données. Nous pouvons migrer vers tout hébergeur européen de votre choix, sans aucun engagement de notre côté.', en: 'Yes, absolutely. You own 100% of your code and data. We can migrate to any European hosting provider of your choice, with no lock-in whatsoever.' },
  },
  {
    q: { fr: 'Que se passe-t-il avec mes données en fin de contrat ?', en: 'What happens to my data at end of contract?' },
    a: { fr: 'Vous choisissez : restitution complète dans un format lisible (CSV, JSON, SQL) ou suppression sécurisée certifiée. Nous fournissons une attestation écrite dans les deux cas.', en: 'Your choice: full restitution in a readable format (CSV, JSON, SQL) or certified secure deletion. We provide written attestation in both cases.' },
  },
  {
    q: { fr: 'Mes données de santé sont-elles protégées ?', en: 'Are my health data protected?' },
    a: { fr: 'Si vous traitez des données de santé, nous utilisons Scaleway certifié HDS (Hébergeur de Données de Santé), seule infrastructure autorisée en France pour ce type de données sensibles.', en: 'If you process health data, we use Scaleway certified HDS (Health Data Hosting), the only infrastructure authorized in France for this type of sensitive data.' },
  },
];

const summaryItems = [
  { fr: 'Hébergement 100% Union Européenne (France, Allemagne, Pays-Bas, Finlande)', en: '100% European Union hosting (France, Germany, Netherlands, Finland)' },
  { fr: 'Conformité RGPD totale avec DPA signé à chaque projet', en: 'Full GDPR compliance with DPA signed for every project' },
  { fr: 'Certifications internationales (ISO 27001, HDS, SecNumCloud en cours)', en: 'International certifications (ISO 27001, HDS, SecNumCloud in progress)' },
  { fr: 'Chiffrement de bout en bout (TLS 1.3 + AES-256)', en: 'End-to-end encryption (TLS 1.3 + AES-256)' },
  { fr: 'Sauvegardes automatiques chiffrées quotidiennes', en: 'Daily automated encrypted backups' },
  { fr: 'Monitoring 24/7 et détection d\'intrusion (IDS/IPS)', en: '24/7 monitoring and intrusion detection (IDS/IPS)' },
  { fr: 'Transparence totale : audits possibles, rapports disponibles sur demande', en: 'Total transparency: audits possible, reports available on request' },
  { fr: 'Propriété de vos données : 100% à vous, toujours, sans vendor lock-in', en: 'Your data ownership: 100% yours, always, no vendor lock-in' },
  { fr: 'Expertise Microsoft/Oracle appliquée à des prix révolutionnaires', en: 'Microsoft/Oracle expertise applied at revolutionary prices' },
];

export default async function SecuritePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'securitePage' });
  const lang = locale === 'en' ? 'en' : 'fr';

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 gradient-bg">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-happi-green/10 text-happi-green rounded-full text-sm font-medium mb-4 border border-happi-green/20">
              {t('badge')}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              {t.rich('title', {
                highlight: (chunks) => <span className="gradient-text">{chunks}</span>,
              })}
            </h1>
            <p className="text-xl text-happi-muted leading-relaxed max-w-3xl mx-auto">
              {t('subtitle')}
            </p>
          </div>
        </section>

        {/* Intro / Microsoft & Oracle credibility */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-happi-darker border-b border-happi-border">
          <div className="max-w-4xl mx-auto">
            <div className="bg-happi-surface rounded-2xl p-8 border border-happi-border">
              <p className="text-lg text-happi-muted leading-relaxed mb-4">
                {t('introP1')}
              </p>
              <p className="text-lg text-white font-medium">
                {t('introP2')}
              </p>
            </div>
          </div>
        </section>

        {/* EU Hosting */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-happi-dark">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-happi-blue/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Globe className="text-happi-blue" size={20} />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">{t('hostingTitle')}</h2>
            </div>
            <p className="text-happi-muted mb-10 ml-13">{t('hostingSubtitle')}</p>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Scaleway */}
              <div className="bg-happi-surface rounded-2xl p-6 border border-happi-border">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-white">Scaleway</h3>
                    <p className="text-sm text-happi-green">{lang === 'fr' ? '🇫🇷 France' : '🇫🇷 France'}</p>
                  </div>
                  <span className="px-3 py-1 bg-happi-green/10 text-happi-green rounded-full text-xs font-semibold border border-happi-green/20">
                    {lang === 'fr' ? 'Recommandé secteurs sensibles' : 'Recommended for sensitive sectors'}
                  </span>
                </div>
                <p className="text-happi-muted text-sm mb-4">
                  {lang === 'fr'
                    ? 'Filiale du groupe Iliad (Free), Scaleway est l\'un des cloud providers européens les plus certifiés. Datacenters à Paris, Amsterdam et Varsovie.'
                    : 'Subsidiary of the Iliad Group (Free), Scaleway is one of Europe\'s most certified cloud providers. Datacenters in Paris, Amsterdam and Warsaw.'}
                </p>
                <div className="space-y-1">
                  {['ISO 27001', 'ISO 27017', 'ISO 27018', 'HDS'].map((c) => (
                    <div key={c} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="text-happi-green flex-shrink-0" size={14} />
                      <span className="text-white">{c}</span>
                    </div>
                  ))}
                  {['SecNumCloud', 'SOC 2 Type II'].map((c) => (
                    <div key={c} className="flex items-center gap-2 text-sm">
                      <AlertCircle className="text-happi-yellow flex-shrink-0" size={14} />
                      <span className="text-happi-yellow">{c} — {lang === 'fr' ? 'En cours' : 'In progress'}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hetzner */}
              <div className="bg-happi-surface rounded-2xl p-6 border border-happi-border">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-white">Hetzner</h3>
                    <p className="text-sm text-happi-muted">{lang === 'fr' ? '🇩🇪 Allemagne / 🇫🇮 Finlande' : '🇩🇪 Germany / 🇫🇮 Finland'}</p>
                  </div>
                  <span className="px-3 py-1 bg-happi-blue/10 text-happi-blue rounded-full text-xs font-semibold border border-happi-blue/20">
                    {lang === 'fr' ? 'Optimal coût/performance' : 'Best cost/performance'}
                  </span>
                </div>
                <p className="text-happi-muted text-sm mb-4">
                  {lang === 'fr'
                    ? 'Hébergeur européen indépendant fondé en 1997, Hetzner est reconnu pour ses performances et son rapport qualité-prix. Datacenters à Nuremberg, Falkenstein et Helsinki.'
                    : 'Independent European hosting provider founded in 1997, Hetzner is known for performance and value. Datacenters in Nuremberg, Falkenstein and Helsinki.'}
                </p>
                <div className="space-y-1">
                  {['ISO 27001', 'GDPR / RGPD'].map((c) => (
                    <div key={c} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="text-happi-green flex-shrink-0" size={14} />
                      <span className="text-white">{c}</span>
                    </div>
                  ))}
                  <p className="text-xs text-happi-muted mt-3 italic">
                    {lang === 'fr'
                      ? '✦ Pour les secteurs santé, finance ou public, nous recommandons Scaleway.'
                      : '✦ For health, finance or public sectors, we recommend Scaleway.'}
                  </p>
                </div>
              </div>
            </div>

            <p className="text-sm text-happi-muted text-center mt-6 italic">
              {lang === 'fr'
                ? '🇪🇺 Garantie H\'appi : Quelle que soit l\'infrastructure choisie, vos données restent à 100% dans l\'Union Européenne.'
                : '🇪🇺 H\'appi guarantee: Regardless of the infrastructure chosen, your data remains 100% within the European Union.'}
            </p>
          </div>
        </section>

        {/* RGPD Compliance */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-happi-darker">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-happi-green/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Shield className="text-happi-green" size={20} />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">{t('rgpdTitle')}</h2>
            </div>
            <p className="text-happi-muted mb-8">{t('rgpdSubtitle')}</p>
            <div className="grid md:grid-cols-2 gap-3">
              {gdprCommitments.map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-happi-surface rounded-xl p-4 border border-happi-green/10">
                  <CheckCircle2 className="text-happi-green flex-shrink-0 mt-0.5" size={16} />
                  <p className="text-sm text-happi-muted">{item[lang]}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security certifications table */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-happi-dark">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-happi-yellow/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Lock className="text-happi-yellow" size={20} />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">{t('certsTitle')}</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-happi-border">
                    <th className="text-left py-3 pr-4 text-happi-muted font-medium">{lang === 'fr' ? 'Certification' : 'Certification'}</th>
                    <th className="text-left py-3 pr-4 text-happi-muted font-medium">{lang === 'fr' ? 'Description' : 'Description'}</th>
                    <th className="text-center py-3 px-4 text-happi-muted font-medium">Scaleway</th>
                    <th className="text-center py-3 px-4 text-happi-muted font-medium">Hetzner</th>
                  </tr>
                </thead>
                <tbody>
                  {certifications.map((cert) => (
                    <tr key={cert.name} className="border-b border-happi-border/50">
                      <td className="py-3 pr-4 font-semibold text-white">{cert.name}</td>
                      <td className="py-3 pr-4 text-happi-muted">{cert.desc[lang]}</td>
                      <td className="py-3 px-4 text-center">
                        {cert.scaleway === true ? (
                          <span className="text-happi-green">✓</span>
                        ) : cert.scaleway === 'pending' ? (
                          <span className="text-happi-yellow text-xs">{lang === 'fr' ? 'En cours' : 'In progress'}</span>
                        ) : (
                          <span className="text-happi-muted/40">—</span>
                        )}
                      </td>
                      <td className="py-3 px-4 text-center">
                        {cert.hetzner ? (
                          <span className="text-happi-green">✓</span>
                        ) : (
                          <span className="text-happi-muted/40">—</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Multi-layer security */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-happi-darker">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-happi-blue/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Eye className="text-happi-blue" size={20} />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">{t('securityTitle')}</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {securityLevels.map((level) => {
                return (
                  <div key={level.level} className="bg-happi-surface rounded-2xl p-6 border border-happi-border">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs font-bold text-happi-muted">{level.level}</span>
                      <h3 className="font-bold text-white">
                        {lang === 'fr' ? `Niveau ${level.level} : ${level.titleFr}` : `Level ${level.level}: ${level.titleEn}`}
                      </h3>
                    </div>
                    <ul className="space-y-2">
                      {level.items[lang].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-happi-muted">
                          <CheckCircle2 className="text-happi-green flex-shrink-0 mt-0.5" size={13} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Digital Sovereignty */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-happi-dark">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-happi-green/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Globe className="text-happi-green" size={20} />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">{t('sovereigntyTitle')}</h2>
            </div>
            <p className="text-happi-muted mb-6">{t('sovereigntySubtitle')}</p>
            <div className="bg-happi-surface rounded-2xl p-6 border border-happi-border">
              <p className="text-sm text-happi-muted mb-4">
                {lang === 'fr'
                  ? 'Contrairement aux géants américains (AWS, Azure, Google Cloud), nos partenaires européens :'
                  : 'Unlike American giants (AWS, Azure, Google Cloud), our European partners:'}
              </p>
              <ul className="space-y-2">
                {(lang === 'fr'
                  ? [
                    'Ne sont pas soumis au CLOUD Act (loi américaine autorisant l\'accès aux données hébergées hors USA)',
                    'Appliquent strictement le RGPD sans exception ni dérogation',
                    'Publient des rapports de transparence sur les demandes gouvernementales',
                    'Soutiennent activement la souveraineté numérique européenne',
                  ]
                  : [
                    'Are not subject to the CLOUD Act (US law allowing access to data hosted outside the US)',
                    'Strictly apply GDPR without exception or derogation',
                    'Publish transparency reports on government requests',
                    'Actively support European digital sovereignty',
                  ]
                ).map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-happi-muted">
                    <CheckCircle2 className="text-happi-green flex-shrink-0 mt-0.5" size={13} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-happi-darker">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">{t('faqTitle')}</h2>
            <div className="space-y-4">
              {faqItems.map((item, i) => (
                <div key={i} className="bg-happi-surface rounded-xl p-6 border border-happi-border">
                  <h3 className="font-semibold text-white mb-2">{item.q[lang]}</h3>
                  <p className="text-sm text-happi-muted leading-relaxed">{item.a[lang]}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Summary */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-happi-dark">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 text-center">{t('summaryTitle')}</h2>
            <p className="text-happi-muted text-center mb-8">{t('summarySubtitle')}</p>
            <div className="grid md:grid-cols-2 gap-3">
              {summaryItems.map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-happi-surface rounded-xl p-4 border border-happi-green/10">
                  <CheckCircle2 className="text-happi-green flex-shrink-0 mt-0.5" size={16} />
                  <p className="text-sm text-happi-muted">{item[lang]}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-white font-semibold mt-8 text-lg">{t('summaryConclusion')}</p>
          </div>
        </section>

        <CTASection hidePricing />
      </main>
      <Footer />
    </>
  );
}
