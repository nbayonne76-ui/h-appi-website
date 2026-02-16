'use client';

import { MessageCircle, ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section id="demo" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-br from-happi-blue to-happi-green rounded-3xl p-12 md:p-16 text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full" />
            <div className="absolute bottom-10 right-10 w-48 h-48 border-2 border-white rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-white rounded-full" />
          </div>

          <div className="relative z-10">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <MessageCircle className="text-white" size={32} />
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Prêt à transformer votre
              <br />
              expérience client ?
            </h2>

            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Rejoignez les entreprises qui font confiance à H'appi pour
              automatiser leur service client et leur supply chain. Démarrez
              gratuitement, sans engagement.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-happi-blue rounded-lg hover:shadow-xl transition-all font-medium text-lg"
              >
                <MessageCircle className="mr-2" size={20} />
                Demander une démo gratuite
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-all font-medium text-lg"
              >
                Commencer gratuitement
                <ArrowRight className="ml-2" size={20} />
              </a>
            </div>

            <p className="text-white/70 text-sm mt-6">
              Pas de carte bancaire requise. Essai gratuit de 14 jours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
