'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Combien de temps faut-il pour déployer H\'appi ?',
    answer:
      'Le déploiement de base prend entre 3 et 7 jours selon la complexité de vos besoins. Notre équipe vous accompagne à chaque étape, de la configuration à la mise en ligne. Le plan Gratuit peut être activé en quelques minutes.',
  },
  {
    question: 'H\'appi remplace-t-il mes agents de support ?',
    answer:
      'Non, et c\'est notre philosophie fondamentale. H\'appi augmente vos équipes en gérant les demandes répétitives (jusqu\'à 80% du volume). Vos agents se concentrent sur les cas complexes et à forte valeur ajoutée. 51% des entreprises cherchent à concilier humain et technologie, et c\'est exactement notre approche.',
  },
  {
    question: 'Mes données sont-elles sécurisées ?',
    answer:
      'Absolument. Toutes les données sont hébergées en France, dans des datacenters certifiés. Nous sommes 100% conformes au RGPD. Aucune donnée n\'est partagée avec des tiers. Pour les plans Enterprise, un déploiement on-premise est possible.',
  },
  {
    question: 'Quelles intégrations sont disponibles ?',
    answer:
      'H\'appi s\'intègre nativement avec les principaux CRM (Salesforce, HubSpot), ERP (SAP, Oracle), outils de messaging (WhatsApp, Messenger, Teams) et plateformes e-commerce (Shopify, WooCommerce). Des API ouvertes permettent des intégrations personnalisées.',
  },
  {
    question: 'Comment fonctionne l\'IA de H\'appi ?',
    answer:
      'Nos chatbots utilisent l\'IA générative et le traitement du langage naturel (NLP) pour comprendre les intentions de vos clients. Le système apprend continuellement de chaque interaction pour améliorer ses réponses. Des templates sectoriels (CX, Supply Chain) sont disponibles dès la configuration.',
  },
  {
    question: 'Puis-je tester avant de m\'engager ?',
    answer:
      'Oui ! Notre plan Gratuit vous permet de tester H\'appi avec 100 conversations par mois, sans engagement et sans carte bancaire. Les plans Starter et Professional offrent un essai gratuit de 14 jours avec toutes les fonctionnalités.',
  },
  {
    question: 'Quel est le taux de résolution moyen ?',
    answer:
      'Nos clients observent en moyenne un taux de résolution automatique de 85 à 94% sur les demandes de niveau 1. Ce taux s\'améliore continuellement grâce à l\'apprentissage de l\'IA. Le temps de réponse moyen est inférieur à 2 secondes.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-happi-gray">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-happi-blue/10 text-happi-blue rounded-full text-sm font-medium mb-4">
            FAQ
          </span>
          <h2 className="text-4xl font-bold text-happi-dark mb-4">
            Questions fréquentes
          </h2>
          <p className="text-xl text-gray-600">
            Tout ce que vous devez savoir sur H'appi
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-happi-dark pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`text-happi-blue flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  size={20}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
