import { Building2, Code2, Users, Mail, Globe, MessageCircle, CalendarDays } from 'lucide-react';

export default function JoinSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-happi-gray">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-happi-dark mb-4">
            Rejoignez l'Aventure{' '}
            <span className="gradient-text">H'appi</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {/* Entreprise */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all">
            <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
              <Building2 className="text-happi-blue" size={28} />
            </div>
            <h3 className="text-xl font-bold text-happi-dark mb-4">
              Vous êtes une Entreprise ?
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Vous en avez assez des solutions standardisées, des devis
              exorbitants, des prestataires qui disparaissent et des
              infrastructures cloud qui explosent votre budget ?
            </p>
            <p className="text-gray-600 text-sm mb-6">
              Parlons de votre projet. Solution sur-mesure, tarif
              révolutionnaire, accompagnement long terme.
            </p>
            <div className="space-y-2">
              <a
                href="#contact"
                className="block w-full text-center bg-happi-blue text-white py-3 rounded-lg hover:bg-opacity-90 transition-all font-medium text-sm"
              >
                Demandez un devis gratuit
              </a>
              <p className="text-xs text-gray-400 text-center">
                Réponse sous 48h avec estimation transparente
              </p>
            </div>
          </div>

          {/* Talent */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all">
            <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center mb-6">
              <Code2 className="text-happi-green" size={28} />
            </div>
            <h3 className="text-xl font-bold text-happi-dark mb-4">
              Vous êtes un Talent Tech ?
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Nous recherchons des passionnés qui partagent nos valeurs de
              sur-mesure, de prix justes et d'innovation technique.
            </p>
            <div className="space-y-2 text-sm text-gray-600 mb-6">
              <p className="font-medium text-happi-dark">Postes ouverts :</p>
              <ul className="space-y-1">
                <li>- Développeurs Full-Stack (Node.js, React, Python)</li>
                <li>- Développeurs Mobile (React Native, Flutter)</li>
                <li>- Designers UX/UI</li>
                <li>- Data Scientists (CX & Supply Chain)</li>
                <li>- Growth Marketers</li>
              </ul>
            </div>
            <div className="bg-happi-gray rounded-lg p-3 text-xs text-gray-500">
              Projets variés, stack moderne, autonomie, remote possible,
              rémunération compétitive + intéressement.
            </div>
          </div>

          {/* Partenaire */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all">
            <div className="w-14 h-14 bg-yellow-50 rounded-xl flex items-center justify-center mb-6">
              <Users className="text-happi-yellow" size={28} />
            </div>
            <h3 className="text-xl font-bold text-happi-dark mb-4">
              Vous êtes un Partenaire ?
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Agence digitale, startup cloud, consultant indépendant ou
              investisseur : construisons ensemble.
            </p>
            <div className="space-y-2 text-sm text-gray-600 mb-6">
              <p className="font-medium text-happi-dark">
                Partenariats possibles :
              </p>
              <ul className="space-y-1">
                <li>- Apport d'affaires</li>
                <li>- Co-développement</li>
                <li>- Intégration technologique</li>
                <li>- Investissement</li>
              </ul>
            </div>
            <a
              href="#contact"
              className="block w-full text-center border-2 border-happi-blue text-happi-blue py-3 rounded-lg hover:bg-happi-blue hover:text-white transition-all font-medium text-sm"
            >
              Parlons partenariat
            </a>
          </div>
        </div>

        {/* Histoire */}
        <div className="bg-white rounded-2xl p-8 md:p-12 border border-gray-100 mb-20">
          <h3 className="text-2xl font-bold text-happi-dark mb-6">
            Notre Histoire (En Bref)
          </h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            H'appi est née d'une frustration simple mais profonde :{' '}
            <strong className="text-happi-dark">
              pourquoi le digital sur-mesure coûte-t-il si cher alors que les
              technologies sont de plus en plus accessibles ?
            </strong>
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Fondée en 2026 par une équipe d'ingénieurs passionnés et
            d'entrepreneurs pragmatiques, H'appi s'est donnée pour mission de
            révolutionner les prix du marché sans compromis sur la qualité, en
            s'appuyant sur :
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {[
              'Infrastructures cloud nouvelle génération (40-60% moins cher)',
              'Stack open-source moderne (zéro coûts de licences)',
              'Organisation lean (équipe réduite et efficace)',
              'Modèle upsell intelligent (revenus récurrents sur la valeur)',
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start space-x-3 bg-happi-gray rounded-lg p-4"
              >
                <svg
                  className="w-5 h-5 text-happi-green mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm text-gray-600">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-happi-dark font-semibold">
            L'aventure ne fait que commencer. Et vous pouvez en faire partie.
          </p>
        </div>

        {/* Contact */}
        <div
          id="contact"
          className="bg-gradient-to-r from-happi-blue to-happi-green rounded-2xl p-8 md:p-12 text-white text-center"
        >
          <h3 className="text-3xl font-bold mb-4">
            Parlons de Votre Projet
          </h3>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Prêt à créer l'application, le chatbot ou le site web qui va
            propulser votre entreprise ? Nous répondons rapidement, avec
            transparence, par des humains qui connaissent vraiment le sujet.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
              <Mail className="mx-auto mb-2" size={24} />
              <p className="text-sm font-medium">Email</p>
              <p className="text-xs text-white/80">contact@happi.ai</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
              <Globe className="mx-auto mb-2" size={24} />
              <p className="text-sm font-medium">Site web</p>
              <p className="text-xs text-white/80">www.happi.ai</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
              <MessageCircle className="mx-auto mb-2" size={24} />
              <p className="text-sm font-medium">Chat en direct</p>
              <p className="text-xs text-white/80">Discutez avec notre équipe</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
              <CalendarDays className="mx-auto mb-2" size={24} />
              <p className="text-sm font-medium">RDV découverte</p>
              <p className="text-xs text-white/80">30 min gratuites</p>
            </div>
          </div>

          <p className="text-lg font-semibold text-white/90 leading-relaxed max-w-2xl mx-auto">
            Ensemble, créons des solutions qui vous ressemblent.<br />
            Ensemble, révolutionnons les prix du marché.<br />
            Ensemble, transformons vos données en intelligence métier.<br />
            <span className="text-happi-yellow font-bold">
              Ensemble, faisons grandir H'appi.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
