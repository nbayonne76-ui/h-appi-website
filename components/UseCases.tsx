'use client';

import { useState } from 'react';
import {
  Headphones,
  Truck,
  MessageSquare,
  Package,
  UserCheck,
  Clock,
  MapPin,
  ClipboardList,
  Bell,
  BarChart,
} from 'lucide-react';

const tabs = [
  { id: 'cx', label: 'Expérience Client (CX)', icon: Headphones },
  { id: 'supply', label: 'Supply Chain', icon: Truck },
] as const;

const useCases = {
  cx: [
    {
      icon: MessageSquare,
      title: 'Support client automatisé 24/7',
      description:
        'Répondez instantanément aux demandes les plus fréquentes : suivi de commande, FAQ, assistance produit. Vos clients sont satisfaits, vos équipes sont libérées.',
    },
    {
      icon: UserCheck,
      title: 'Qualification et routage intelligent',
      description:
        'Pré-qualifiez les demandes avant de les router vers le bon service. Optimisez l\'efficacité de vos conseillers en leur transmettant uniquement les cas complexes.',
    },
    {
      icon: Clock,
      title: 'Onboarding clients automatisé',
      description:
        'Guidez vos nouveaux clients à travers vos services avec un assistant conversationnel personnalisé qui s\'adapte à leur profil.',
    },
    {
      icon: BarChart,
      title: 'Recommandations personnalisées',
      description:
        'En s\'intégrant à votre CRM, le chatbot reconnaît vos clients et leur propose des recommandations hyper-personnalisées basées sur leur historique.',
    },
  ],
  supply: [
    {
      icon: MapPin,
      title: 'Suivi et traçabilité en temps réel',
      description:
        'Vos clients et partenaires interrogent le bot sur la localisation d\'un colis, les délais estimés, sans mobiliser un agent humain.',
    },
    {
      icon: Package,
      title: 'Gestion d\'inventaire et stock',
      description:
        'Intégration avec vos systèmes WMS pour fournir des informations en temps réel sur les stocks, emplacements et délais de réapprovisionnement.',
    },
    {
      icon: Bell,
      title: 'Notifications proactives',
      description:
        'Alertes automatiques en cas de retard, exception logistique ou changement de statut. Anticipez les problèmes avant qu\'ils n\'impactent vos clients.',
    },
    {
      icon: ClipboardList,
      title: 'Coordination des livraisons',
      description:
        'Planification intelligente des créneaux de livraison, gestion des reprogrammations et optimisation des tournées en temps réel.',
    },
  ],
};

export default function UseCases() {
  const [activeTab, setActiveTab] = useState<'cx' | 'supply'>('cx');

  return (
    <section id="use-cases" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-happi-green/10 text-happi-green rounded-full text-sm font-medium mb-4">
            Cas d'usage
          </span>
          <h2 className="text-4xl font-bold text-happi-dark mb-4">
            Deux expertises, une seule{' '}
            <span className="gradient-text">plateforme</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            H'appi se spécialise dans deux domaines clés où les chatbots créent
            le plus de valeur pour votre entreprise.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-happi-gray rounded-xl p-1.5">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${
                    activeTab === tab.id
                      ? 'bg-white text-happi-blue shadow-sm'
                      : 'text-gray-600 hover:text-happi-dark'
                  }`}
                >
                  <Icon size={20} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Use Cases Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {useCases[activeTab].map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <div
                key={index}
                className="bg-happi-gray rounded-2xl p-8 hover:shadow-md transition-all group"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow flex-shrink-0">
                    <Icon className="text-happi-blue" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-happi-dark mb-2">
                      {useCase.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {useCase.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 bg-gradient-to-r from-happi-blue to-happi-green rounded-2xl p-8 text-white">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">85%</div>
              <div className="text-white/80">
                d'interactions automatisées
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">13</div>
              <div className="text-white/80">
                cas d'usage Supply Chain
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">31%</div>
              <div className="text-white/80">
                de PME utilisent déjà l'IA
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">53%</div>
              <div className="text-white/80">
                CX = priorité n°1
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
