'use client';

import { useState } from 'react';
import { useLocale } from 'next-intl';
import {
  ChevronDown,
  MessageSquare,
  Smartphone,
  Sparkles,
  LayoutDashboard,
  QrCode,
  MapPin,
  Link2,
  TrendingUp,
  Zap,
  Bell,
  BarChart3,
  Users,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Shield,
} from 'lucide-react';

// ─── Data ───────────────────────────────────────────────────────────────────

const steps = (fr: boolean) => [
  {
    id: 'sav',
    number: '01',
    color: 'happi-blue',
    colorClass: 'text-happi-blue',
    bgClass: 'bg-happi-blue/10',
    borderClass: 'border-happi-blue/30',
    activeBorderClass: 'border-happi-blue/50',
    dotClass: 'bg-happi-blue',
    icon: MessageSquare,
    badge: fr ? 'Bot SAV · Terminé' : 'SAV Bot · Complete',
    title: fr ? 'Fini les appels au service après-vente' : 'No more after-sales phone calls',
    teaser: fr
      ? '50 % des appels SAV sont liés au suivi de commande, représentant un coût moyen de 5 € par appel.'
      : '50% of SAV calls are order-tracking related, costing an average of €5 each.',
    teaserSource: 'Narvar',
    content: {
      problem: {
        label: fr ? 'Le problème' : 'The problem',
        text: fr
          ? 'Un client reçoit un meuble endommagé ou une pièce manquante. Il appelle le service après-vente. Un agent note manuellement le numéro de commande, le nom, le problème. L\'info se perd, les équipes cherchent dans leurs emails, les délais s\'allongent. La frustration monte des deux côtés.'
          : 'A client receives damaged furniture or a missing part. They call after-sales. An agent manually notes the order number, name, problem. The info gets lost, teams search through emails, delays grow. Frustration builds on both sides.',
      },
      solution: {
        label: fr ? 'Comment ça marche' : 'How it works',
        flow: [
          {
            icon: Users,
            label: fr ? 'Le client' : 'The client',
            sub: fr ? 'Signale un problème sur le bot' : 'Reports an issue via bot',
          },
          {
            icon: MessageSquare,
            label: fr ? 'Interface bot' : 'Bot interface',
            sub: fr ? 'N° ticket · Nom · Problème exact' : 'Ticket # · Name · Exact issue',
            accent: true,
          },
          {
            icon: CheckCircle2,
            label: fr ? 'Dossier créé' : 'Case created',
            sub: fr ? 'Automatiquement structuré' : 'Automatically structured',
          },
          {
            icon: LayoutDashboard,
            label: fr ? 'Dashboard technique' : 'Tech dashboard',
            sub: fr ? 'Équipe prend en charge' : 'Team handles it',
          },
        ],
      },
      miniStats: [
        {
          value: '−65 %',
          label: fr ? "d'appels entrants grâce à l'automatisation" : 'fewer incoming calls with automation',
          source: 'Narvar / Gorgias',
        },
        {
          value: '85 %',
          label: fr ? 'des demandes traitées sans intervention humaine' : 'of requests handled without human intervention',
          source: 'Gorgias / Zendesk',
        },
        {
          value: '2,5 j → 4 h',
          label: fr ? 'de délai de traitement SAV avec automatisation' : 'SAV processing time with automation',
          source: 'Salesforce',
        },
        {
          value: '+38 pts',
          label: fr ? 'NPS après 3 mois d\'utilisation du bot SAV' : 'NPS after 3 months of SAV bot',
          source: 'Intercom / Gorgias',
        },
      ],
      result: {
        label: fr ? 'Ce que ça change' : 'What changes',
        items: fr
          ? [
            'Toutes les demandes SAV arrivent structurées et priorisées dans le tableau de bord',
            'L\'équipe technique voit : le client, le meuble, le problème exact, la date de livraison',
            'Zéro saisie manuelle, zéro information perdue, zéro appel pour un statut simple',
          ]
          : [
            'All SAV requests arrive structured and prioritized in the dashboard',
            'The technical team sees: the client, the furniture, the exact issue, the delivery date',
            'Zero manual entry, zero lost information, zero calls for a simple status update',
          ],
      },
    },
  },
  {
    id: 'app',
    number: '02',
    color: 'happi-green',
    colorClass: 'text-happi-green',
    bgClass: 'bg-happi-green/10',
    borderClass: 'border-happi-green/30',
    activeBorderClass: 'border-happi-green/50',
    dotClass: 'bg-happi-green',
    icon: Smartphone,
    badge: fr ? 'App Traçabilité · Déployé en même temps' : 'Traceability App · Deployed simultaneously',
    title: fr ? 'Visibilité totale sur le parcours du meuble' : 'Total visibility over furniture journeys',
    teaser: fr
      ? '7,6 % des meubles arrivent endommagés, générant un coût moyen de 45 € par retour. Sans preuve numérique, le litige est presque toujours perdu.'
      : '7.6% of furniture arrives damaged, generating an average cost of €45 per return. Without digital proof, disputes are almost always lost.',
    teaserSource: 'DispatchTrack / Furniture Retail 2025',
    content: {
      actors: [
        {
          icon: QrCode,
          colorClass: 'text-happi-blue',
          bgClass: 'bg-happi-blue/10',
          borderClass: 'border-happi-blue/20',
          title: fr ? 'Fournisseur' : 'Supplier',
          items: fr
            ? ['Crée la fiche produit meuble', 'Génère le QR code unique', 'Tableau de bord des expéditions', 'Historique complet horodaté']
            : ['Creates the furniture product sheet', 'Generates unique QR code', 'Shipments dashboard', 'Full timestamped history'],
        },
        {
          icon: Smartphone,
          colorClass: 'text-happi-green',
          bgClass: 'bg-happi-green/10',
          borderClass: 'border-happi-green/20',
          title: fr ? 'Livreur' : 'Driver',
          items: fr
            ? ['Scan QR code en 2 secondes', 'Photos géolocalisées horodatées', 'Suivi GPS en temps réel', 'Signature électronique du client']
            : ['QR scan in 2 seconds', 'Geolocated timestamped photos', 'Real-time GPS tracking', 'Client electronic signature'],
        },
        {
          icon: MapPin,
          colorClass: 'text-white',
          bgClass: 'bg-white/5',
          borderClass: 'border-white/10',
          title: fr ? 'Client final' : 'End client',
          items: fr
            ? ['Suivi en temps réel sur carte', 'Notifications push automatiques', 'Photos + signature consultables', 'Preuve de livraison accessible']
            : ['Real-time map tracking', 'Automatic push notifications', 'Photos + signature on demand', 'Accessible delivery proof'],
        },
      ],
      miniStats: [
        {
          value: '−80 %',
          label: fr ? 'de litiges grâce à la preuve numérique (photo + signature + GPS)' : 'fewer disputes with digital proof (photo + signature + GPS)',
          source: 'DispatchTrack',
        },
        {
          value: '+60 %',
          label: fr ? 'de satisfaction client avec preuve de livraison transparente' : 'client satisfaction with transparent delivery proof',
          source: 'DispatchTrack / Zendesk',
        },
        {
          value: '+42 %',
          label: fr ? 'de livraisons réussies au 1er passage grâce aux notifications' : 'successful first-pass deliveries thanks to notifications',
          source: 'DispatchTrack',
        },
        {
          value: '82 %',
          label: fr ? 'des clients veulent un suivi temps réel → +35 % de rétention' : 'of clients want real-time tracking → +35% retention',
          source: 'Inbound Logistics / Salesforce',
        },
      ],
      interconnect: {
        title: fr ? 'La connexion qui fait tout' : 'The connection that makes it all work',
        text: fr
          ? 'Le dossier client créé par l\'app (meuble livré, photos, signature, date) est automatiquement accessible dans le bot SAV. Quand un client ouvre un ticket de réclamation, l\'équipe technique voit immédiatement l\'historique complet. Zéro double saisie. Zéro recherche manuelle.'
          : 'The client file created by the app (furniture delivered, photos, signature, date) is automatically accessible in the SAV bot. When a client opens a claim ticket, the technical team immediately sees the full history. Zero double entry. Zero manual search.',
      },
    },
  },
  {
    id: 'saas',
    number: '03',
    color: 'purple-400',
    colorClass: 'text-purple-400',
    bgClass: 'bg-purple-400/10',
    borderClass: 'border-purple-400/30',
    activeBorderClass: 'border-purple-400/50',
    dotClass: 'bg-purple-400',
    icon: Sparkles,
    badge: fr ? 'Plateforme SaaS · Activation progressive' : 'SaaS Platform · Progressive activation',
    title: fr ? 'Après 2-3 mois, la plateforme s\'éveille' : 'After 2-3 months, the platform awakens',
    teaser: fr
      ? '53 % du coût de livraison est lié au dernier kilomètre. L\'optimisation des tournées par IA permet de réduire ce poste jusqu\'à 20 %.'
      : '53% of delivery cost comes from the last mile. AI-driven route optimization can cut this by up to 20%.',
    teaserSource: 'Capgemini / MIT Sloan / McKinsey',
    content: {
      intro: fr
        ? 'Une fois que l\'assistant a appris vos processus, vos patterns clients, et vos contraintes métier, des modules s\'activent automatiquement. Sans migration ni projet supplémentaire.'
        : 'Once the assistant has learned your processes, client patterns, and business constraints, modules activate automatically. No migration, no extra project.',
      modules: [
        {
          icon: TrendingUp,
          colorClass: 'text-happi-blue',
          bgClass: 'bg-happi-blue/10',
          borderClass: 'border-happi-blue/20',
          title: fr ? 'Optimisation des tournées' : 'Route optimization',
          desc: fr
            ? 'Les données GPS accumulées calculent les meilleurs itinéraires et anticipent les délais par zone.'
            : 'Accumulated GPS data calculates optimal routes and anticipates delays by area.',
        },
        {
          icon: Bell,
          colorClass: 'text-happi-green',
          bgClass: 'bg-happi-green/10',
          borderClass: 'border-happi-green/20',
          title: fr ? 'Prédiction des absences client' : 'Client absence prediction',
          desc: fr
            ? 'Analyse historique pour anticiper les créneaux à risque et proposer automatiquement des alternatives.'
            : 'Historical analysis to anticipate high-risk delivery slots and automatically suggest alternatives.',
        },
        {
          icon: Zap,
          colorClass: 'text-yellow-400',
          bgClass: 'bg-yellow-400/10',
          borderClass: 'border-yellow-400/20',
          title: fr ? 'Détection d\'anomalies' : 'Anomaly detection',
          desc: fr
            ? 'Alertes automatiques en cas de retard inhabituel, d\'écart de parcours ou d\'incident récurrent.'
            : 'Automatic alerts for unusual delays, route deviations, or recurring incidents.',
        },
        {
          icon: BarChart3,
          colorClass: 'text-purple-400',
          bgClass: 'bg-purple-400/10',
          borderClass: 'border-purple-400/20',
          title: fr ? 'SAV prédictif' : 'Predictive after-sales',
          desc: fr
            ? 'Identification des modèles de meubles générant le plus de réclamations pour anticiper les retours fournisseur.'
            : 'Identification of furniture models generating the most claims to anticipate supplier returns.',
        },
      ],
    },
  },
];

// ─── Stats strip ─────────────────────────────────────────────────────────────

const globalStats = (fr: boolean) => [
  {
    value: '−65 %',
    label: fr ? "d'appels SAV après déploiement du bot" : 'fewer SAV calls after bot deployment',
    source: 'Narvar / Gorgias',
  },
  {
    value: '85 %',
    label: fr ? 'des demandes SAV automatisables sans agent humain' : 'of SAV requests automatable without a human agent',
    source: 'Gorgias / Zendesk',
  },
  {
    value: '−80 %',
    label: fr ? 'de litiges grâce à la preuve de livraison numérique' : 'fewer disputes with digital delivery proof',
    source: 'DispatchTrack',
  },
  {
    value: '+42 %',
    label: fr ? 'de livraisons réussies au 1er passage avec notifications' : 'successful 1st-pass deliveries with notifications',
    source: 'DispatchTrack',
  },
];

// ─── Component ───────────────────────────────────────────────────────────────

export default function CasUsageAccordion() {
  const locale = useLocale();
  const fr = locale === 'fr';
  const [open, setOpen] = useState<string | null>('sav');

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const stepsData = steps(fr) as any[];
  const statsData = globalStats(fr);

  return (
    <div>
      {/* Stats strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        {statsData.map(({ value, label, source }) => (
          <div key={value} className="bg-happi-surface border border-happi-border rounded-xl p-5">
            <div className="text-2xl md:text-3xl font-bold text-white mb-1">{value}</div>
            <div className="text-happi-muted text-xs leading-snug mb-2">{label}</div>
            <div className="text-[10px] text-happi-muted/50 uppercase tracking-wider">Source: {source}</div>
          </div>
        ))}
      </div>

      {/* Accordion */}
      <div className="space-y-3">
        {stepsData.map((step) => {
          const isOpen = open === step.id;
          const Icon = step.icon;

          return (
            <div
              key={step.id}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                isOpen ? `${step.activeBorderClass} bg-happi-surface` : 'border-happi-border bg-happi-dark hover:border-happi-border/80'
              }`}
            >
              {/* Header */}
              <button
                onClick={() => setOpen(isOpen ? null : step.id)}
                className="w-full flex items-start md:items-center gap-4 p-6 text-left"
              >
                {/* Number */}
                <div className={`text-xs font-bold ${step.colorClass} opacity-50 w-6 flex-shrink-0 pt-0.5 md:pt-0`}>
                  {step.number}
                </div>

                {/* Icon */}
                <div className={`w-10 h-10 ${step.bgClass} border ${step.borderClass} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <Icon size={20} className={step.colorClass} />
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <div className={`text-[11px] font-semibold uppercase tracking-wide ${step.colorClass} mb-0.5`}>
                    {step.badge}
                  </div>
                  <div className="text-white font-semibold text-base md:text-lg leading-snug">
                    {step.title}
                  </div>
                  {!isOpen && (
                    <p className="text-happi-muted text-xs mt-1.5 leading-relaxed max-w-xl">
                      {step.teaser}
                    </p>
                  )}
                </div>

                {/* Chevron */}
                <div className={`flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                  <ChevronDown size={20} className="text-happi-muted" />
                </div>
              </button>

              {/* Content */}
              {isOpen && (
                <div className="px-6 pb-8 border-t border-happi-border/50 pt-6">
                  {/* ── Step 1 content ── */}
                  {step.id === 'sav' && (
                    <div className="space-y-6">
                      {/* Teaser stat */}
                      <div className={`flex items-start gap-3 ${step.bgClass} border ${step.borderClass} rounded-xl p-4`}>
                        <AlertTriangle size={16} className={`${step.colorClass} mt-0.5 flex-shrink-0`} />
                        <p className="text-sm text-happi-muted leading-relaxed">
                          {step.teaser}
                          <span className="text-happi-muted/50 ml-1 text-xs">({step.teaserSource})</span>
                        </p>
                      </div>

                      {/* Problem */}
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                          <span className="text-xs font-semibold text-red-400 uppercase tracking-wide">
                            {step.content.problem.label}
                          </span>
                        </div>
                        <p className="text-happi-muted text-sm leading-relaxed pl-3.5">
                          {step.content.problem.text}
                        </p>
                      </div>

                      {/* Flow */}
                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <div className={`w-1.5 h-1.5 rounded-full ${step.dotClass}`} />
                          <span className={`text-xs font-semibold ${step.colorClass} uppercase tracking-wide`}>
                            {step.content.solution.label}
                          </span>
                        </div>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 justify-start flex-wrap pl-3.5">
                          {step.content.solution.flow.map((node: any, i: number) => {
                            const NodeIcon = node.icon;
                            return (
                              <div key={i} className="flex items-center gap-3">
                                <div className={`text-center ${node.accent ? `${step.bgClass} border ${step.borderClass}` : 'bg-happi-dark border border-happi-border'} rounded-xl p-3 flex items-center gap-3`}>
                                  <NodeIcon size={18} className={node.accent ? step.colorClass : 'text-happi-muted'} />
                                  <div>
                                    <div className="text-white text-xs font-medium whitespace-nowrap">{node.label}</div>
                                    <div className="text-happi-muted text-[10px] whitespace-nowrap">{node.sub}</div>
                                  </div>
                                </div>
                                {i < step.content.solution.flow.length - 1 && (
                                  <ArrowRight size={14} className="text-happi-border flex-shrink-0 hidden sm:block" />
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Mini stats grid */}
                      <div className="grid grid-cols-2 gap-3">
                        {step.content.miniStats.map((s: any) => (
                          <div key={s.value} className="bg-happi-dark border border-happi-border rounded-xl p-4">
                            <div className={`text-xl font-bold ${step.colorClass} mb-1`}>{s.value}</div>
                            <div className="text-happi-muted text-xs leading-snug mb-1">{s.label}</div>
                            <div className="text-happi-muted/40 text-[10px] uppercase tracking-wider">{s.source}</div>
                          </div>
                        ))}
                      </div>

                      {/* Result */}
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-happi-green" />
                          <span className="text-xs font-semibold text-happi-green uppercase tracking-wide">
                            {step.content.result.label}
                          </span>
                        </div>
                        <ul className="space-y-2 pl-3.5">
                          {step.content.result.items.map((item: string) => (
                            <li key={item} className="flex items-start gap-2 text-happi-muted text-sm">
                              <CheckCircle2 size={14} className="text-happi-green mt-0.5 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                    </div>
                  )}

                  {/* ── Step 2 content ── */}
                  {step.id === 'app' && (
                    <div className="space-y-6">
                      {/* Teaser stat */}
                      <div className={`flex items-start gap-3 ${step.bgClass} border ${step.borderClass} rounded-xl p-4`}>
                        <AlertTriangle size={16} className={`${step.colorClass} mt-0.5 flex-shrink-0`} />
                        <p className="text-sm text-happi-muted leading-relaxed">
                          {step.teaser}
                          <span className="text-happi-muted/50 ml-1 text-xs">({step.teaserSource})</span>
                        </p>
                      </div>

                      {/* 3 actors */}
                      <div className="grid md:grid-cols-3 gap-4">
                        {step.content.actors.map((actor: any) => {
                          const ActorIcon = actor.icon;
                          return (
                            <div key={actor.title} className={`bg-happi-darker border ${actor.borderClass} rounded-xl p-5`}>
                              <div className="flex items-center gap-2 mb-3">
                                <div className={`w-8 h-8 ${actor.bgClass} border ${actor.borderClass} rounded-lg flex items-center justify-center`}>
                                  <ActorIcon size={16} className={actor.colorClass} />
                                </div>
                                <h4 className="font-semibold text-white text-sm">{actor.title}</h4>
                              </div>
                              <ul className="space-y-1.5">
                                {actor.items.map((item: string) => (
                                  <li key={item} className="flex items-start gap-2 text-happi-muted text-xs">
                                    <CheckCircle2 size={12} className={`${actor.colorClass} mt-0.5 flex-shrink-0`} />
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          );
                        })}
                      </div>

                      {/* Mini stats grid */}
                      <div className="grid grid-cols-2 gap-3">
                        {step.content.miniStats.map((s: any) => (
                          <div key={s.value} className="bg-happi-darker border border-happi-border rounded-xl p-4">
                            <div className={`text-xl font-bold ${step.colorClass} mb-1`}>{s.value}</div>
                            <div className="text-happi-muted text-xs leading-snug mb-1">{s.label}</div>
                            <div className="text-happi-muted/40 text-[10px] uppercase tracking-wider">{s.source}</div>
                          </div>
                        ))}
                      </div>

                      {/* Interconnect */}
                      <div className="bg-gradient-to-r from-happi-blue/10 to-happi-green/10 border border-happi-blue/30 rounded-xl p-5">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-happi-blue/20 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Link2 size={16} className="text-happi-blue" />
                          </div>
                          <div>
                            <h4 className="text-white font-semibold text-sm mb-1">
                              {step.content.interconnect.title}
                            </h4>
                            <p className="text-happi-muted text-xs leading-relaxed">
                              {step.content.interconnect.text}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* ── Step 3 content ── */}
                  {step.id === 'saas' && (
                    <div className="space-y-6">
                      {/* Teaser stat */}
                      <div className={`flex items-start gap-3 ${step.bgClass} border ${step.borderClass} rounded-xl p-4`}>
                        <AlertTriangle size={16} className={`${step.colorClass} mt-0.5 flex-shrink-0`} />
                        <p className="text-sm text-happi-muted leading-relaxed">
                          {step.teaser}
                          <span className="text-happi-muted/50 ml-1 text-xs">({step.teaserSource})</span>
                        </p>
                      </div>

                      <p className="text-happi-muted text-sm leading-relaxed">
                        {step.content.intro}
                      </p>

                      {/* Modules grid */}
                      <div className="grid md:grid-cols-2 gap-4">
                        {step.content.modules.map((mod: any) => {
                          const ModIcon = mod.icon;
                          return (
                            <div key={mod.title} className={`bg-happi-darker border ${mod.borderClass} rounded-xl p-5`}>
                              <div className="flex items-start gap-3">
                                <div className={`w-8 h-8 ${mod.bgClass} border ${mod.borderClass} rounded-lg flex items-center justify-center flex-shrink-0`}>
                                  <ModIcon size={16} className={mod.colorClass} />
                                </div>
                                <div>
                                  <h4 className="font-semibold text-white text-sm mb-1">{mod.title}</h4>
                                  <p className="text-happi-muted text-xs leading-relaxed">{mod.desc}</p>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      {/* Philosophy note */}
                      <div className="flex items-start gap-3 bg-happi-darker border border-happi-border rounded-xl p-4">
                        <Shield size={16} className="text-happi-muted mt-0.5 flex-shrink-0" />
                        <p className="text-happi-muted text-xs leading-relaxed">
                          {fr
                            ? 'Ces modules s\'activent sur votre instance, avec votre branding, vos règles métier. Nous ne livrons pas un produit standard que vous adaptez. Nous construisons à votre image.'
                            : 'These modules activate on your instance, with your branding, your business rules. We don\'t deliver a standard product you adapt. We build in your image.'}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
