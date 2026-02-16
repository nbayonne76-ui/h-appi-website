'use client';

import { useState } from 'react';
import { Check, Star } from 'lucide-react';

const plans = [
  {
    name: 'Gratuit',
    description: 'Idéal pour découvrir H\'appi',
    monthlyPrice: 0,
    yearlyPrice: 0,
    features: [
      '100 conversations / mois',
      '1 canal (site web)',
      'Chatbot de base',
      'Support communautaire',
      'Branding H\'appi visible',
    ],
    cta: 'Commencer gratuitement',
    popular: false,
  },
  {
    name: 'Starter',
    description: 'Pour les PME en croissance',
    monthlyPrice: 49,
    yearlyPrice: 470,
    features: [
      '1 000 conversations / mois',
      '3 canaux (web, WhatsApp, Messenger)',
      'Personnalisation basique',
      'Support email',
      'Analytics de base',
    ],
    cta: 'Essai gratuit 14 jours',
    popular: false,
  },
  {
    name: 'Professional',
    description: 'La solution complète pour scaler',
    monthlyPrice: 149,
    yearlyPrice: 1430,
    features: [
      '10 000 conversations / mois',
      'Tous canaux illimités',
      'Workflows CX & Supply Chain',
      'Intégration CRM / ERP',
      'Support prioritaire',
      'Analytics avancés + Insights IA',
    ],
    cta: 'Essai gratuit 14 jours',
    popular: true,
  },
  {
    name: 'Enterprise',
    description: 'Sur-mesure pour les grandes entreprises',
    monthlyPrice: null,
    yearlyPrice: null,
    features: [
      'Conversations illimitées',
      'Chatbots multiples',
      'Développement sur-mesure',
      'Déploiement on-premise possible',
      'Account manager dédié',
      'SLA garantis',
    ],
    cta: 'Contacter l\'équipe',
    popular: false,
  },
];

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-happi-gray">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-happi-yellow/20 text-happi-dark rounded-full text-sm font-medium mb-4">
            Tarifs
          </span>
          <h2 className="text-4xl font-bold text-happi-dark mb-4">
            Un plan adapté à{' '}
            <span className="gradient-text">chaque entreprise</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Commencez gratuitement, évoluez à votre rythme. Aucun engagement,
            annulable à tout moment.
          </p>
        </div>

        {/* Toggle Annual/Monthly */}
        <div className="flex justify-center items-center space-x-4 mb-12">
          <span
            className={`font-medium ${!isYearly ? 'text-happi-dark' : 'text-gray-400'}`}
          >
            Mensuel
          </span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className={`relative w-14 h-7 rounded-full transition-colors ${
              isYearly ? 'bg-happi-green' : 'bg-gray-300'
            }`}
          >
            <div
              className={`absolute top-0.5 w-6 h-6 bg-white rounded-full shadow-md transition-transform ${
                isYearly ? 'translate-x-7' : 'translate-x-0.5'
              }`}
            />
          </button>
          <span
            className={`font-medium ${isYearly ? 'text-happi-dark' : 'text-gray-400'}`}
          >
            Annuel
          </span>
          {isYearly && (
            <span className="bg-happi-green/10 text-happi-green text-sm font-medium px-3 py-1 rounded-full">
              -20%
            </span>
          )}
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-2xl p-8 transition-all hover:shadow-lg ${
                plan.popular
                  ? 'border-2 border-happi-blue shadow-lg scale-105'
                  : 'border border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-happi-blue text-white px-4 py-1.5 rounded-full text-sm font-medium flex items-center">
                  <Star size={14} className="mr-1" />
                  Populaire
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold text-happi-dark">{plan.name}</h3>
                <p className="text-gray-500 text-sm mt-1">{plan.description}</p>
              </div>

              <div className="mb-6">
                {plan.monthlyPrice !== null ? (
                  <>
                    <span className="text-4xl font-bold text-happi-dark">
                      {isYearly
                        ? Math.round(plan.yearlyPrice! / 12)
                        : plan.monthlyPrice}
                      €
                    </span>
                    <span className="text-gray-500"> / mois</span>
                    {isYearly && plan.yearlyPrice! > 0 && (
                      <div className="text-sm text-happi-green mt-1">
                        Facturé {plan.yearlyPrice}€ / an
                      </div>
                    )}
                  </>
                ) : (
                  <span className="text-4xl font-bold text-happi-dark">
                    Sur devis
                  </span>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <Check
                      className="text-happi-green mt-0.5 flex-shrink-0"
                      size={18}
                    />
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#demo"
                className={`block w-full text-center py-3 rounded-lg font-medium transition-all ${
                  plan.popular
                    ? 'bg-happi-blue text-white hover:bg-opacity-90 hover:shadow-lg'
                    : 'border-2 border-happi-blue text-happi-blue hover:bg-happi-blue hover:text-white'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-500 text-sm mt-8">
          Tous les prix sont en euros HT. TVA applicable selon votre pays.
        </p>
      </div>
    </section>
  );
}
