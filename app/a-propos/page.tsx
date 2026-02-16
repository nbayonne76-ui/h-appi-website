import Link from 'next/link';
import Header from '@/components/Header';
import SubNav from '@/components/about/SubNav';
import Footer from '@/components/Footer';
import {
  Eye,
  Heart,
  Coins,
  Users,
  ArrowRight,
  Target,
  Sparkles,
  ShieldCheck,
} from 'lucide-react';

export const metadata = {
  title: "À propos - H'appi | Vision, Mission et Valeurs",
  description:
    "Découvrez la vision de H'appi : démocratiser le digital sur-mesure, révolutionner les prix du marché IT et transformer vos applications en plateformes d'intelligence métier.",
};

const sections = [
  {
    icon: Eye,
    title: 'Vision & Mission',
    description:
      'Pourquoi H\'appi existe, où nous allons, et comment nous comptons changer les règles du jeu du digital sur-mesure.',
    href: '/a-propos/vision',
    color: 'bg-blue-50 text-happi-blue',
    borderColor: 'hover:border-happi-blue/30',
  },
  {
    icon: Heart,
    title: 'Nos 8 Valeurs',
    description:
      'Sur-mesure radical, prix justes, transparence totale, agilité... Les principes qui guident chacune de nos décisions.',
    href: '/a-propos/valeurs',
    color: 'bg-green-50 text-happi-green',
    borderColor: 'hover:border-happi-green/30',
  },
  {
    icon: Coins,
    title: 'Stratégie & Prix',
    description:
      'Comment nous offrons des solutions 50 à 70% moins chères que le marché, et notre modèle d\'upsell intelligent en 4 phases.',
    href: '/a-propos/strategie',
    color: 'bg-yellow-50 text-happi-yellow',
    borderColor: 'hover:border-happi-yellow/30',
  },
  {
    icon: Users,
    title: 'Rejoindre H\'appi',
    description:
      'Entreprise, talent tech ou partenaire : découvrez comment faire partie de l\'aventure H\'appi.',
    href: '/a-propos/rejoindre',
    color: 'bg-blue-50 text-happi-blue',
    borderColor: 'hover:border-happi-blue/30',
  },
];

const keyNumbers = [
  { value: '50-70%', label: 'Moins cher que le marché' },
  { value: '1 000', label: 'Entreprises visées d\'ici 2030' },
  { value: '2026', label: 'Fondée par des passionnés' },
  { value: '100%', label: 'Code propriétaire pour vous' },
];

export default function AProposPage() {
  return (
    <>
      <Header />
      <SubNav />
      <main>
        {/* Hero */}
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 gradient-bg">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-happi-blue/10 text-happi-blue rounded-full text-sm font-medium mb-6">
              À propos de H'appi
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-happi-dark mb-6 leading-tight">
              Applications sur-mesure.<br />
              Intelligence évolutive.<br />
              <span className="gradient-text">Prix révolutionnaires.</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              H'appi est née d'une conviction simple : le digital sur-mesure ne
              devrait pas coûter une fortune. Nous créons des solutions qui vous
              ressemblent et qui évoluent pour devenir votre avantage
              compétitif.
            </p>
          </div>
        </section>

        {/* Key Numbers */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-100">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {keyNumbers.map((item, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl font-bold gradient-text mb-1">
                    {item.value}
                  </div>
                  <div className="text-sm text-gray-500">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Promise Banner */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="text-xl md:text-2xl font-semibold text-happi-dark leading-relaxed mb-8">
              &laquo; Chez H'appi, nous croyons que l'IA doit augmenter
              l'humain, pas le remplacer. Nos solutions personnalisées
              apprennent votre métier pour offrir une expérience exceptionnelle
              tout en libérant vos équipes. &raquo;
            </blockquote>

            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-happi-gray rounded-full px-4 py-2">
                <Target className="text-happi-blue" size={16} />
                <span className="text-sm text-happi-dark font-medium">
                  Sur-mesure radical
                </span>
              </div>
              <div className="flex items-center space-x-2 bg-happi-gray rounded-full px-4 py-2">
                <Sparkles className="text-happi-green" size={16} />
                <span className="text-sm text-happi-dark font-medium">
                  Intelligence évolutive
                </span>
              </div>
              <div className="flex items-center space-x-2 bg-happi-gray rounded-full px-4 py-2">
                <Coins className="text-happi-yellow" size={16} />
                <span className="text-sm text-happi-dark font-medium">
                  Prix disruptifs
                </span>
              </div>
              <div className="flex items-center space-x-2 bg-happi-gray rounded-full px-4 py-2">
                <ShieldCheck className="text-happi-blue" size={16} />
                <span className="text-sm text-happi-dark font-medium">
                  RGPD & Made in France
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Section Cards */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-happi-gray">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-happi-dark mb-2 text-center">
              Explorez notre histoire
            </h2>
            <p className="text-gray-500 text-center mb-10">
              Cliquez sur une section pour en savoir plus
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {sections.map((section) => {
                const Icon = section.icon;
                return (
                  <Link
                    key={section.href}
                    href={section.href}
                    className={`group bg-white rounded-2xl p-8 border border-gray-100 ${section.borderColor} hover:shadow-lg transition-all`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className={`w-14 h-14 rounded-xl flex items-center justify-center ${section.color}`}
                      >
                        <Icon size={28} />
                      </div>
                      <ArrowRight
                        className="text-gray-300 group-hover:text-happi-blue group-hover:translate-x-1 transition-all"
                        size={20}
                      />
                    </div>
                    <h3 className="text-xl font-bold text-happi-dark mb-2">
                      {section.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {section.description}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Quick History */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-happi-dark mb-6">
              En bref
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Fondée en 2026 par une équipe d'ingénieurs passionnés, H'appi
              révolutionne les prix du digital sur-mesure grâce à des
              infrastructures cloud nouvelle génération, une stack open-source
              moderne et une organisation lean.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Aujourd'hui, nous accompagnons des entreprises dans leur
              transformation digitale avec une promesse simple :{' '}
              <strong className="text-happi-dark">
                sur-mesure, accessible, évolutif.
              </strong>
            </p>
            <Link
              href="/a-propos/vision"
              className="inline-flex items-center px-8 py-3 bg-happi-blue text-white rounded-lg hover:bg-opacity-90 transition-all hover:shadow-lg font-medium"
            >
              Découvrir notre vision
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
