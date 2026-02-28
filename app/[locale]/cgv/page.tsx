import Header from '@/components/Header';
import Footer from '@/components/Footer';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lang = locale === 'en' ? 'en' : 'fr';
  return {
    title: lang === 'fr' ? 'CGV — Conditions Générales de Vente — H\'appi' : 'Terms of Service — H\'appi',
    description: lang === 'fr'
      ? 'Conditions générales de vente H\'appi : services, tarification, paiement, propriété intellectuelle, garanties.'
      : 'H\'appi terms of service: services, pricing, payment, intellectual property, warranties.',
  };
}

export default async function CgvPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lang = locale === 'en' ? 'en' : 'fr';

  const sections = lang === 'fr'
    ? [
        {
          title: '1. Objet',
          content: [
            'Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre H\'appi (ci-après "le Prestataire") et tout client professionnel ou particulier (ci-après "le Client") ayant recours à ses services.',
            'Tout devis accepté ou toute commande passée implique l\'acceptation pleine et entière des présentes CGV.',
          ],
        },
        {
          title: '2. Services proposés',
          content: [
            'H\'appi propose des services de développement d\'applications web et mobile sur-mesure, de déploiement de chatbots IA, d\'intégration d\'APIs, de conseil en transformation digitale et de maintenance applicative.',
            'Chaque projet fait l\'objet d\'un devis détaillé précisant la nature des prestations, les délais et le prix.',
          ],
        },
        {
          title: '3. Devis et commandes',
          content: [
            'Tout devis est valable 30 jours à compter de sa date d\'émission.',
            'La commande est ferme et définitive à réception du devis signé ou d\'un bon de commande accompagné du règlement de l\'acompte.',
            'Toute modification du périmètre en cours de projet fera l\'objet d\'un avenant tarifaire.',
          ],
        },
        {
          title: '4. Tarifs et paiement',
          content: [
            'Les prix sont exprimés en euros HT. La TVA applicable est ajoutée selon le taux en vigueur.',
            'Sauf mention contraire au devis : 30% d\'acompte à la commande, 40% à la livraison de la version bêta, 30% à la livraison finale.',
            'Les factures sont payables par virement bancaire sous 30 jours.',
            'Tout retard de paiement entraîne des pénalités de retard au taux légal en vigueur, ainsi qu\'une indemnité forfaitaire de recouvrement de 40€.',
          ],
        },
        {
          title: '5. Délais de livraison',
          content: [
            'Les délais indiqués au devis sont donnés à titre indicatif. Ils courent à compter de la réception de l\'acompte et des éléments nécessaires fournis par le Client.',
            'H\'appi ne saurait être tenu responsable des retards liés à des défauts de fourniture d\'informations ou de validation par le Client.',
          ],
        },
        {
          title: '6. Propriété intellectuelle',
          content: [
            'Le code source, les designs et les contenus développés pour le Client lui sont cédés en pleine propriété à compter du paiement intégral du projet.',
            'H\'appi conserve le droit de mentionner le projet à titre de référence commerciale, sauf refus explicite du Client.',
            'Les outils, frameworks et bibliothèques open-source utilisés restent soumis à leurs licences respectives.',
          ],
        },
        {
          title: '7. Confidentialité',
          content: [
            'H\'appi s\'engage à ne divulguer aucune information confidentielle relative au Client ou à son activité à des tiers, sauf accord express ou obligation légale.',
            'Un accord de confidentialité (NDA) peut être signé à la demande du Client.',
          ],
        },
        {
          title: '8. Garanties et responsabilité',
          content: [
            'H\'appi garantit que les livrables sont conformes aux spécifications définies dans le devis.',
            'Une garantie de correction des bugs est incluse pendant 30 jours après la livraison finale, couvrant les anomalies non conformes aux spécifications.',
            'La responsabilité de H\'appi est limitée au montant HT de la prestation concernée. H\'appi ne peut être tenu responsable des dommages indirects (perte d\'exploitation, manque à gagner).',
          ],
        },
        {
          title: '9. Résiliation',
          content: [
            'En cas de résiliation à l\'initiative du Client, l\'acompte versé est conservé. Les travaux déjà réalisés sont facturés au prorata.',
            'En cas de résiliation pour faute grave d\'H\'appi, le Client est remboursé des sommes payées pour les livrables non fournis.',
          ],
        },
        {
          title: '10. Droit applicable et litiges',
          content: [
            'Les présentes CGV sont soumises au droit français.',
            'En cas de litige, les parties s\'engagent à rechercher une solution amiable dans un délai de 30 jours.',
            'À défaut d\'accord amiable, le litige sera soumis aux tribunaux compétents du ressort de Paris.',
          ],
        },
      ]
    : [
        {
          title: '1. Purpose',
          content: [
            'These Terms of Service govern the contractual relationship between H\'appi (hereinafter "the Provider") and any professional or individual client (hereinafter "the Client") using its services.',
            'Any accepted quote or placed order implies full acceptance of these Terms.',
          ],
        },
        {
          title: '2. Services Offered',
          content: [
            'H\'appi offers custom web and mobile application development, AI chatbot deployment, API integration, digital transformation consulting, and application maintenance services.',
            'Each project is subject to a detailed quote specifying the nature of services, timelines and price.',
          ],
        },
        {
          title: '3. Quotes and Orders',
          content: [
            'Quotes are valid for 30 days from the date of issue.',
            'An order is firm upon receipt of a signed quote or purchase order accompanied by the deposit payment.',
            'Any scope changes during a project will be subject to a supplementary price amendment.',
          ],
        },
        {
          title: '4. Pricing and Payment',
          content: [
            'Prices are quoted in euros excluding tax. Applicable VAT is added at the current rate.',
            'Unless otherwise stated in the quote: 30% deposit on order, 40% on beta delivery, 30% on final delivery.',
            'Invoices are payable by bank transfer within 30 days.',
            'Late payments incur statutory late payment interest plus a fixed recovery fee of €40.',
          ],
        },
        {
          title: '5. Delivery Timelines',
          content: [
            'Timelines stated in the quote are indicative and begin upon receipt of the deposit and required materials from the Client.',
            'H\'appi cannot be held liable for delays caused by the Client\'s failure to supply information or approve deliverables.',
          ],
        },
        {
          title: '6. Intellectual Property',
          content: [
            'Source code, designs and content developed for the Client are transferred to full ownership upon final payment.',
            'H\'appi reserves the right to reference the project as a commercial case study unless the Client explicitly objects.',
            'Open-source tools, frameworks and libraries used remain subject to their respective licenses.',
          ],
        },
        {
          title: '7. Confidentiality',
          content: [
            'H\'appi commits to not disclosing any confidential information relating to the Client or its business to third parties, unless expressly agreed or legally required.',
            'A Non-Disclosure Agreement (NDA) can be signed at the Client\'s request.',
          ],
        },
        {
          title: '8. Warranties and Liability',
          content: [
            'H\'appi warrants that deliverables conform to the specifications defined in the quote.',
            'A 30-day bug-fix warranty is included after final delivery, covering non-conformities with the specifications.',
            'H\'appi\'s liability is limited to the pre-tax amount of the relevant service. H\'appi cannot be held liable for indirect damages (loss of business, lost profits).',
          ],
        },
        {
          title: '9. Termination',
          content: [
            'If terminated by the Client, the deposit paid is non-refundable. Work already completed is invoiced on a pro-rata basis.',
            'If terminated due to serious breach by H\'appi, the Client is refunded for amounts paid for undelivered items.',
          ],
        },
        {
          title: '10. Applicable Law and Disputes',
          content: [
            'These Terms are governed by French law.',
            'In the event of a dispute, the parties agree to seek an amicable resolution within 30 days.',
            'Failing amicable agreement, the dispute shall be referred to the competent courts of Paris.',
          ],
        },
      ];

  return (
    <>
      <Header />
      <main>
        <section className="pt-32 pb-8 px-4 sm:px-6 lg:px-8 bg-happi-dark border-b border-happi-border">
          <div className="max-w-3xl mx-auto">
            <span className="inline-block px-3 py-1 bg-happi-yellow/10 text-happi-yellow rounded-full text-xs font-semibold mb-4 border border-happi-yellow/20 uppercase tracking-wide">
              {lang === 'fr' ? 'Contractuel' : 'Contract'}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight">
              {lang === 'fr' ? 'Conditions Générales de Vente' : 'Terms of Service'}
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

            <div className="bg-happi-surface rounded-xl p-6 border border-happi-border text-center">
              <p className="text-sm text-happi-muted mb-2">
                {lang === 'fr'
                  ? 'Pour toute question sur ces conditions, contactez-nous :'
                  : 'For any questions about these terms, contact us:'}
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
