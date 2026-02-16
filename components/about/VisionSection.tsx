import { Sparkles, Eye, Target } from 'lucide-react';

export default function VisionSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Vision */}
        <div className="mb-20">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-happi-yellow/20 rounded-xl flex items-center justify-center">
              <Eye className="text-happi-yellow" size={24} />
            </div>
            <h2 className="text-3xl font-bold text-happi-dark">Notre Vision</h2>
          </div>

          <p className="text-xl font-semibold text-happi-blue mb-6">
            Démocratiser l'accès aux solutions digitales sur-mesure et à
            l'intelligence d'affaires pour toutes les entreprises.
          </p>

          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Chez H'appi, nous imaginons un monde où chaque entreprise, quelle
              que soit sa taille, peut s'offrir des applications, chatbots et
              sites web personnalisés sans exploser son budget ni dépendre des
              géants de la tech. Notre vision est de{' '}
              <strong className="text-happi-dark">
                briser le monopole des solutions standardisées et des prix
                prohibitifs
              </strong>{' '}
              imposés par les multinationales IT.
            </p>
            <p>
              Nous croyons que le digital sur-mesure ne doit plus être un luxe
              réservé aux grands groupes. Avec H'appi, une PME peut avoir une
              application aussi performante qu'une multinationale, un site web
              aussi beau qu'une licorne de la Silicon Valley, et un chatbot
              aussi intelligent que celui des leaders du marché...{' '}
              <strong className="text-happi-dark">
                pour une fraction du prix habituel.
              </strong>
            </p>
            <p>
              Mais notre ambition va plus loin. Nous voulons que vos solutions
              digitales deviennent des{' '}
              <strong className="text-happi-dark">
                moteurs de croissance intelligente
              </strong>
              . Grâce aux données d'interaction collectées par vos bots et
              applications, nous transformons votre investissement initial en un
              écosystème SaaS évolutif qui génère des insights métier concrets
              dans les domaines de l'expérience client (CX) et de la supply
              chain.
            </p>
          </div>

          <div className="mt-8 bg-gradient-to-r from-happi-blue to-happi-green rounded-2xl p-8 text-white">
            <div className="flex items-start space-x-4">
              <Target className="flex-shrink-0 mt-1" size={28} />
              <div>
                <h3 className="text-xl font-bold mb-2">Objectif 2030</h3>
                <p className="text-white/90 leading-relaxed">
                  Permettre à{' '}
                  <span className="font-bold text-white">
                    1 000 entreprises
                  </span>{' '}
                  de s'émanciper des solutions standardisées et des prix
                  exorbitants, tout en transformant leurs applications en
                  véritables centres d'intelligence métier.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission */}
        <div>
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-happi-blue/10 rounded-xl flex items-center justify-center">
              <Sparkles className="text-happi-blue" size={24} />
            </div>
            <h2 className="text-3xl font-bold text-happi-dark">
              Notre Mission
            </h2>
          </div>

          <p className="text-xl font-semibold text-happi-blue mb-6">
            Créer des applications, chatbots et sites web sur-mesure qui
            évoluent en plateformes d'intelligence métier.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Concrètement, chez H'appi, nous agissons sur 5 piliers
            fondamentaux pour transformer la manière dont les entreprises
            accèdent au digital sur-mesure.
          </p>
        </div>
      </div>
    </section>
  );
}
