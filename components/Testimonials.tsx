'use client';

import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Marie Dubois',
    role: 'Directrice CX',
    company: 'RetailPlus',
    content:
      'H\'appi a transformé notre service client. En 3 mois, notre taux de résolution au premier contact est passé de 45% à 87%. Nos équipes se concentrent enfin sur les cas vraiment complexes.',
    rating: 5,
    avatar: 'MD',
  },
  {
    name: 'Thomas Laurent',
    role: 'Responsable Supply Chain',
    company: 'LogiTrans',
    content:
      'Le chatbot Supply Chain de H\'appi gère 80% des demandes de suivi de nos clients. Le temps de réponse est passé de 4 heures à moins de 2 secondes. Un gain énorme !',
    rating: 5,
    avatar: 'TL',
  },
  {
    name: 'Sophie Martin',
    role: 'CEO',
    company: 'E-ShopFR',
    content:
      'En tant que PME, nous n\'avions pas les ressources pour un service client 24/7. H\'appi nous a permis d\'offrir cette disponibilité sans recruter. Le ROI est impressionnant.',
    rating: 5,
    avatar: 'SM',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-happi-green/10 text-happi-green rounded-full text-sm font-medium mb-4">
            Témoignages
          </span>
          <h2 className="text-4xl font-bold text-happi-dark mb-4">
            Ils nous font <span className="gradient-text">confiance</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez comment des entreprises françaises transforment leur
            expérience client et leur supply chain avec H'appi.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-happi-gray rounded-2xl p-8 relative hover:shadow-md transition-all"
            >
              <Quote
                className="text-happi-blue/10 absolute top-6 right-6"
                size={48}
              />

              {/* Rating */}
              <div className="flex space-x-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="text-happi-yellow fill-happi-yellow"
                    size={18}
                  />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed mb-6 relative z-10">
                "{testimonial.content}"
              </p>

              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-happi-blue to-happi-green rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-happi-dark">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
