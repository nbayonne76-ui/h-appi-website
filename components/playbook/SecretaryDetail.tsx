import { Check, Phone, Calendar, MessageSquare, Mic, Clock, Zap, X } from 'lucide-react';

const features = {
  fr: [
    { icon: Phone, color: '#3B82F6', title: 'Gestion des appels', desc: 'Identifie l\'appelant, route vers la bonne personne ou prend le message.' },
    { icon: Calendar, color: '#22C55E', title: 'Prise de rendez-vous', desc: 'Planification automatique selon votre calendrier. Zéro conflit, zéro oubli.' },
    { icon: MessageSquare, color: '#8B5CF6', title: 'Messages intelligents', desc: 'Messages vocaux transcrits, résumés et priorisés automatiquement.' },
    { icon: Mic, color: '#F97316', title: 'Répondeur professionnel', desc: 'Voix naturelle, ton adapté à votre secteur. Indétectable.' },
    { icon: Clock, color: '#06B6D4', title: 'Disponibilité 24h/24', desc: 'Jamais de pause, jamais de congé. 7j/7, 365 jours par an.' },
    { icon: Zap, color: '#D4AF37', title: 'Intégration en 48h', desc: 'Google Calendar, Outlook, votre CRM. Opérationnel en 2 jours.' },
  ],
  en: [
    { icon: Phone, color: '#3B82F6', title: 'Call management', desc: 'Identifies the caller, routes to the right person, or takes the message.' },
    { icon: Calendar, color: '#22C55E', title: 'Appointment booking', desc: 'Automatic scheduling from your real-time calendar. Zero conflicts, zero misses.' },
    { icon: MessageSquare, color: '#8B5CF6', title: 'Smart messages', desc: 'Voice messages transcribed, summarized and prioritized automatically.' },
    { icon: Mic, color: '#F97316', title: 'Professional voicebot', desc: 'Natural voice, tone matched to your industry. Undetectable.' },
    { icon: Clock, color: '#06B6D4', title: '24/7 availability', desc: 'No breaks, no holidays. 7 days a week, 365 days a year.' },
    { icon: Zap, color: '#D4AF37', title: 'Live in 48h', desc: 'Google Calendar, Outlook, your CRM. Operational in 2 days.' },
  ],
};

const useCases = {
  fr: [
    { icon: '🏥', title: 'Cabinets médicaux & dentaires', desc: 'Gérez rendez-vous et rappels automatiquement. Réduisez les absences de 40%.' },
    { icon: '🏢', title: 'PME & petites entreprises', desc: 'Un service client professionnel sans ressources humaines dédiées.' },
    { icon: '⚖️', title: 'Cabinets juridiques', desc: 'Triez les appels, prenez RDV et enregistrez les demandes prioritaires.' },
    { icon: '🏨', title: 'Hôtels & restaurants', desc: 'Répondez aux réservations 24h/24 sans mobiliser votre personnel.' },
    { icon: '🎓', title: 'Écoles & universités', desc: 'Secrétariat virtuel pour demandes d\'info et inscriptions en ligne.' },
    { icon: '📞', title: 'Centres d\'appels', desc: 'Traitez plus d\'appels entrants sans augmenter vos effectifs.' },
  ],
  en: [
    { icon: '🏥', title: 'Medical & dental offices', desc: 'Manage appointments and reminders automatically. Reduce no-shows by 40%.' },
    { icon: '🏢', title: 'SMEs & small businesses', desc: 'Professional customer service without dedicated HR resources.' },
    { icon: '⚖️', title: 'Law firms', desc: 'Screen calls, book appointments and record priority client requests.' },
    { icon: '🏨', title: 'Hotels & restaurants', desc: 'Handle reservations 24/7 without tying up your staff.' },
    { icon: '🎓', title: 'Schools & universities', desc: 'Virtual secretary for information requests and online enrolments.' },
    { icon: '📞', title: 'Call centres', desc: 'Handle more inbound calls without growing your headcount.' },
  ],
};

const before = {
  fr: ['Appels manqués', 'Messages oubliés', 'Rendez-vous en double', 'Personnel interrompu', 'Service limité aux heures de bureau', 'Coûts administratifs élevés'],
  en: ['Missed calls', 'Forgotten messages', 'Double-booked appointments', 'Interrupted staff', 'Service limited to office hours', 'High admin costs'],
};
const after = {
  fr: ['100% des appels traités', 'Tous les messages enregistrés', 'Planification sans erreurs', 'Équipe focalisée sur l\'essentiel', 'Service client 24h/24, 7j/7', 'Économies significatives'],
  en: ['100% of calls handled', 'All messages recorded', 'Error-free scheduling', 'Team focused on what matters', 'Customer service 24/7', 'Significant cost savings'],
};

const faqs = {
  fr: [
    { q: 'Les clients sauront-ils que c\'est une IA ?', a: 'Non. Happi-Secretary utilise une voix naturelle et des conversations fluides. La distinction est imperceptible.' },
    { q: 'Comment ça s\'intègre à mon calendrier ?', a: 'Synchronisation automatique avec Google Calendar, Outlook et iCal. Disponibilité vérifiée en temps réel à chaque appel.' },
    { q: 'Mes données sont-elles sécurisées ?', a: 'Oui. Sécurité niveau bancaire, chiffrement bout en bout, hébergement en France et en Europe. Conforme RGPD.' },
    { q: 'Combien ça coûte ?', a: 'Les tarifs dépendent de votre volume d\'appels. Contactez-nous pour un devis personnalisé et gratuit.' },
    { q: 'Combien de temps pour la mise en place ?', a: '24 à 48 heures. Notre équipe technique s\'occupe de tout, de l\'intégration à la configuration.' },
  ],
  en: [
    { q: 'Will clients know it\'s an AI?', a: 'No. Happi-Secretary uses a natural voice and fluid conversation. The difference is imperceptible.' },
    { q: 'How does it integrate with my calendar?', a: 'Automatic sync with Google Calendar, Outlook and iCal. Availability checked in real time on every call.' },
    { q: 'Is my data secure?', a: 'Yes. Bank-level security, end-to-end encryption, servers hosted in France and Europe. Fully GDPR compliant.' },
    { q: 'How much does it cost?', a: 'Pricing depends on your call volume. Contact us for a free, personalised quote.' },
    { q: 'How long to get set up?', a: '24 to 48 hours. Our tech team handles everything, from integration to configuration.' },
  ],
};

export default function SecretaryDetail({ fr }: { fr: boolean }) {
  const L = fr ? 'fr' : 'en';

  return (
    <>
      {/* Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-happi-darker">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-white mb-3">
              {fr ? 'Ses superpouvoirs 💪' : 'Superpowers 💪'}
            </h3>
            <p className="text-happi-muted max-w-xl mx-auto text-sm">
              {fr ? 'Tout ce dont vous avez besoin pour ne plus jamais manquer un appel ou un rendez-vous.' : 'Everything you need to never miss a call or appointment again.'}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features[L].map(({ icon: Icon, color, title, desc }) => (
              <div key={title} className="bg-happi-surface border border-happi-border rounded-2xl p-6 hover:border-happi-blue/30 transition-all group">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110" style={{ background: `${color}15` }}>
                  <Icon className="w-5 h-5" style={{ color }} />
                </div>
                <h4 className="text-sm font-bold text-white mb-2">{title}</h4>
                <p className="text-xs text-happi-muted leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before / After */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-happi-dark">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-white mb-3">
              {fr ? "L'impact sur votre entreprise" : 'The impact on your business'}
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-happi-surface border border-red-500/20 rounded-2xl p-7">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-xl bg-red-500/15 flex items-center justify-center">
                  <X className="w-4 h-4 text-red-400" />
                </div>
                <h4 className="font-bold text-white">{fr ? 'Sans Happi-Secretary' : 'Without Happi-Secretary'}</h4>
              </div>
              <ul className="space-y-3">
                {before[L].map((t) => (
                  <li key={t} className="flex items-center gap-3 text-sm text-happi-muted">
                    <X className="w-3.5 h-3.5 text-red-400 flex-shrink-0" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-happi-surface border border-happi-green/30 rounded-2xl p-7">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-xl bg-happi-green/15 flex items-center justify-center">
                  <Check className="w-4 h-4 text-happi-green" />
                </div>
                <h4 className="font-bold text-white">{fr ? 'Avec Happi-Secretary' : 'With Happi-Secretary'}</h4>
              </div>
              <ul className="space-y-3">
                {after[L].map((t) => (
                  <li key={t} className="flex items-center gap-3 text-sm text-happi-muted">
                    <Check className="w-3.5 h-3.5 text-happi-green flex-shrink-0" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-happi-darker">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-white mb-3">
              {fr ? 'Qui peut en bénéficier ?' : 'Who can benefit?'}
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {useCases[L].map(({ icon, title, desc }) => (
              <div key={title} className="bg-happi-surface border border-happi-border rounded-2xl p-6 hover:border-happi-blue/30 transition-colors">
                <div className="text-2xl mb-3">{icon}</div>
                <h4 className="text-sm font-bold text-white mb-2">{title}</h4>
                <p className="text-xs text-happi-muted leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-happi-dark">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            {fr ? 'Questions fréquentes' : 'Frequently asked questions'}
          </h3>
          <div className="flex flex-col gap-4">
            {faqs[L].map(({ q, a }) => (
              <div key={q} className="bg-happi-surface border border-happi-border rounded-2xl p-6 hover:border-happi-blue/30 transition-colors">
                <h4 className="text-sm font-bold text-white mb-2">{q}</h4>
                <p className="text-sm text-happi-muted leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
