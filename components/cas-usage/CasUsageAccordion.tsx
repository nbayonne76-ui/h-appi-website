'use client';

import { useState, useEffect, useRef } from 'react';
import { useLocale } from 'next-intl';
import { motion, useInView, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import TiltCard from '@/components/ui/TiltCard';
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
  Building2,
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
    badge: fr ? 'Bot SAV · Terminé' : 'After-Sales Bot · Complete',
    title: fr ? 'Fini les appels au service après-vente' : 'No more after-sales phone calls',
    teaser: fr
      ? '50 % des appels SAV sont liés au suivi de commande, représentant un coût moyen de 5 € par appel.'
      : '50% of after-sales calls are order-tracking related, costing an average of €5 each.',
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
          value: '65 %',
          label: fr ? "d'appels en moins grâce à l'automatisation" : 'fewer incoming calls thanks to automation',
          source: '',
        },
        {
          value: '85 %',
          label: fr ? 'des demandes résolues sans qu\'un humain intervienne' : 'of requests resolved without human involvement',
          source: '',
        },
        {
          value: '2,5 j → 4 h',
          label: fr ? 'le délai de traitement passe de 2,5 jours à 4 heures' : 'processing time drops from 2.5 days to 4 hours',
          source: '',
        },
        {
          value: '+38 pts',
          label: fr ? 'de satisfaction client en plus après 3 mois d\'utilisation' : 'more customer satisfaction after 3 months of use',
          source: '',
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
            'All after-sales requests arrive structured and prioritized in the dashboard',
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
    teaserSource: '',
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
          value: '80 %',
          label: fr ? 'de litiges en moins grâce aux photos et signatures numériques' : 'fewer disputes thanks to photos and digital signatures',
          source: '',
        },
        {
          value: '+60 %',
          label: fr ? 'de clients satisfaits quand la livraison est transparente et tracée' : 'more satisfied customers with transparent tracked deliveries',
          source: '',
        },
        {
          value: '+42 %',
          label: fr ? 'de livraisons réussies du premier coup grâce aux alertes automatiques' : 'more first-attempt successful deliveries with automatic alerts',
          source: '',
        },
        {
          value: '82 %',
          label: fr ? 'des clients veulent savoir en temps réel où est leur colis' : 'of customers want to know in real time where their order is',
          source: '',
        },
      ],
      interconnect: {
        title: fr ? 'La connexion qui fait tout' : 'The connection that makes it all work',
        text: fr
          ? 'Le dossier client créé par l\'app (meuble livré, photos, signature, date) est automatiquement accessible dans le bot SAV. Quand un client ouvre un ticket de réclamation, l\'équipe technique voit immédiatement l\'historique complet. Zéro double saisie. Zéro recherche manuelle.'
          : 'The client file created by the app (furniture delivered, photos, signature, date) is automatically accessible in the after-sales bot. When a client opens a claim ticket, the technical team immediately sees the full history. Zero double entry. Zero manual search.',
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

type StatDef = {
  numeric: number;       // animated counter end value
  prefix?: string;
  suffix?: string;
  display?: string;      // if set, skip counter and show this string directly
  label: string;
  sublabel: string;      // "before" context shown below value
  color: string;         // accent hex
  source: string;
};

const globalStats = (fr: boolean): StatDef[] => [
  {
    numeric: 300,
    suffix: fr ? '/mois' : '/mo',
    label: fr ? 'clients aidés automatiquement chaque mois, sans décrocher' : 'customers helped automatically every month',
    sublabel: fr ? 'Avant : l\'équipe était submergée dès 200 appels' : 'Before: the team was overwhelmed at 200 calls',
    color: '#3B82F6',
    source: '',
  },
  {
    numeric: 14400,
    prefix: '€',
    label: fr ? 'économisés chaque année sur le service client' : 'saved every year on customer service',
    sublabel: fr ? 'Avant : 1 200 €/mois en appels manuels non automatisés' : 'Before: €1,200/month in manual unautomated calls',
    color: '#10B981',
    source: '',
  },
  {
    numeric: 0,
    display: fr ? '0 litige\nperdu' : '0 dispute\nlost',
    label: fr ? 'depuis le lancement : chaque problème est documenté et résolu' : 'since launch: every issue is documented and resolved',
    sublabel: fr ? 'Avant : 1 dossier sur 4 n\'avait aucune preuve écrite' : 'Before: 1 in 4 cases had no written proof',
    color: '#A78BFA',
    source: '',
  },
  {
    numeric: 14,
    suffix: fr ? ' jours' : ' days',
    label: fr ? 'pour être opérationnel, de la signature à la mise en ligne' : 'from signing to going live',
    sublabel: fr ? 'Avant : 3 à 6 mois avec un prestataire classique' : 'Before: 3–6 months with a traditional vendor',
    color: '#F59E0B',
    source: '',
  },
];

// ─── Animated counter ────────────────────────────────────────────────────────

function AnimatedStat({ stat }: { stat: StatDef }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const raw = useMotionValue(0);
  const spring = useSpring(raw, { stiffness: 55, damping: 18 });
  const display = useTransform(spring, (v) => {
    const n = Math.round(v);
    const formatted = n >= 1000
      ? n.toLocaleString('fr-FR').replace(/\s/g, '\u202F')
      : String(n);
    return `${stat.prefix ?? ''}${formatted}${stat.suffix ?? ''}`;
  });
  const [text, setText] = useState(`${stat.prefix ?? ''}0${stat.suffix ?? ''}`);

  useEffect(() => display.on('change', (v) => setText(v)), [display]);
  useEffect(() => { if (inView) raw.set(stat.numeric); }, [inView, stat.numeric, raw]);

  return (
    <div ref={ref}>
      {stat.display ? (
        <div className="text-2xl md:text-3xl font-extrabold leading-tight whitespace-pre-line"
          style={{ color: stat.color }}>
          {stat.display}
        </div>
      ) : (
        <motion.div
          className="text-2xl md:text-3xl font-extrabold leading-tight"
          style={{ color: stat.color }}
        >
          {text}
        </motion.div>
      )}
    </div>
  );
}

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
      {/* ── Stats strip ── */}
      <div className="mb-6">
        {/* Attribution */}
        <div className="flex items-center gap-2 mb-5 justify-center">
          <Building2 size={13} className="text-happi-muted/50" />
          <span className="text-[11px] text-happi-muted/50 font-medium">
            {fr
              ? 'Résultats mesurés · Mobilier de France · Déployé 2024'
              : 'Measured results · Mobilier de France · Deployed 2024'}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-happi-green animate-pulse" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {statsData.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.09, ease: 'easeOut' }}
            >
              <TiltCard intensity={4}>
                <div
                  className="glass-card rounded-xl p-5 h-full flex flex-col"
                  style={{ borderLeft: `3px solid ${stat.color}50` }}
                >
                  {/* Animated value */}
                  <AnimatedStat stat={stat} />

                  {/* Label */}
                  <div className="text-happi-muted text-xs leading-snug mt-2 mb-1 flex-1">
                    {stat.label}
                  </div>

                  {/* Before context */}
                  <div
                    className="text-[10px] leading-snug mt-2 pt-2 border-t"
                    style={{ color: `${stat.color}80`, borderColor: `${stat.color}20` }}
                  >
                    {stat.sublabel}
                  </div>

                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Accordion */}
      <div className="space-y-3">
        {stepsData.map((step, stepIdx) => {
          const isOpen = open === step.id;
          const Icon = step.icon;

          return (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: stepIdx * 0.1, ease: 'easeOut' }}
              animate={{
                borderColor: isOpen ? step.activeBorderClass : 'transparent',
              }}
              className={`rounded-2xl border overflow-hidden ${
                isOpen ? `${step.activeBorderClass} bg-happi-surface` : 'border-happi-border bg-happi-dark'
              }`}
            >
              {/* ── Header button ── */}
              <motion.button
                onClick={() => setOpen(isOpen ? null : step.id)}
                whileHover={{ backgroundColor: isOpen ? undefined : 'rgba(255,255,255,0.02)' }}
                whileTap={{ scale: 0.995 }}
                className="w-full flex items-start md:items-center gap-4 p-6 text-left"
              >
                {/* Step number — pulses on open */}
                <motion.div
                  animate={isOpen ? { scale: [1, 1.15, 1] } : { scale: 1 }}
                  transition={{ duration: 0.35 }}
                  className={`text-xs font-bold ${step.colorClass} opacity-50 w-6 flex-shrink-0 pt-0.5 md:pt-0`}
                >
                  {step.number}
                </motion.div>

                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                  className={`w-10 h-10 ${step.bgClass} border ${step.borderClass} rounded-xl flex items-center justify-center flex-shrink-0`}
                >
                  <Icon size={20} className={step.colorClass} />
                </motion.div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <div className={`text-[11px] font-semibold uppercase tracking-wide ${step.colorClass} mb-0.5`}>
                    {step.badge}
                  </div>
                  <div className="text-white font-semibold text-base md:text-lg leading-snug">
                    {step.title}
                  </div>
                  <AnimatePresence initial={false}>
                    {!isOpen && (
                      <motion.p
                        key="teaser"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="text-happi-muted text-xs mt-1.5 leading-relaxed max-w-xl overflow-hidden"
                      >
                        {step.teaser}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                {/* Chevron — spring rotation */}
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown size={20} className="text-happi-muted" />
                </motion.div>
              </motion.button>

              {/* ── Animated content panel ── */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.32, ease: [0.33, 1, 0.68, 1] }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div className="px-6 pb-8 border-t border-happi-border/50 pt-6">

                      {/* ── Step 1: After-Sales Bot ── */}
                      {step.id === 'sav' && (
                        <div className="space-y-6">
                          {/* Teaser stat */}
                          <motion.div
                            initial={{ opacity: 0, x: -12 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.05, duration: 0.28 }}
                            className={`flex items-start gap-3 ${step.bgClass} border ${step.borderClass} rounded-xl p-4`}
                          >
                            <AlertTriangle size={16} className={`${step.colorClass} mt-0.5 flex-shrink-0`} />
                            <p className="text-sm text-happi-muted leading-relaxed">
                              {step.teaser}
                              <span className="text-happi-muted/50 ml-1 text-xs">({step.teaserSource})</span>
                            </p>
                          </motion.div>

                          {/* Problem */}
                          <motion.div
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 0.28 }}
                          >
                            <div className="flex items-center gap-2 mb-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                              <span className="text-xs font-semibold text-red-400 uppercase tracking-wide">
                                {step.content.problem.label}
                              </span>
                            </div>
                            <p className="text-happi-muted text-sm leading-relaxed pl-3.5">
                              {step.content.problem.text}
                            </p>
                          </motion.div>

                          {/* Flow diagram — nodes stagger in */}
                          <motion.div
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.15, duration: 0.28 }}
                          >
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
                                  <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.18 + i * 0.07, duration: 0.25 }}
                                    className="flex items-center gap-3"
                                  >
                                    <motion.div
                                      whileHover={{ scale: 1.05, y: -2 }}
                                      transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                                      className={`${node.accent ? `${step.bgClass} border ${step.borderClass}` : 'bg-happi-dark border border-happi-border'} rounded-xl p-3 flex items-center gap-3`}
                                    >
                                      <NodeIcon size={18} className={node.accent ? step.colorClass : 'text-happi-muted'} />
                                      <div>
                                        <div className="text-white text-xs font-medium whitespace-nowrap">{node.label}</div>
                                        <div className="text-happi-muted text-[10px] whitespace-nowrap">{node.sub}</div>
                                      </div>
                                    </motion.div>
                                    {i < step.content.solution.flow.length - 1 && (
                                      <ArrowRight size={14} className="text-happi-border flex-shrink-0 hidden sm:block" />
                                    )}
                                  </motion.div>
                                );
                              })}
                            </div>
                          </motion.div>

                          {/* Mini stats — TiltCard */}
                          <div className="grid grid-cols-2 gap-3">
                            {step.content.miniStats.map((s: any, i: number) => (
                              <motion.div
                                key={s.value}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.22 + i * 0.07, duration: 0.28 }}
                              >
                                <TiltCard intensity={3}>
                                  <div className="bg-happi-dark border border-happi-border rounded-xl p-4 h-full">
                                    <div className={`text-xl font-bold ${step.colorClass} mb-1`}>{s.value}</div>
                                    <div className="text-happi-muted text-xs leading-snug mb-1">{s.label}</div>
                                  </div>
                                </TiltCard>
                              </motion.div>
                            ))}
                          </div>

                          {/* Result checklist */}
                          <motion.div
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.38, duration: 0.28 }}
                          >
                            <div className="flex items-center gap-2 mb-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-happi-green" />
                              <span className="text-xs font-semibold text-happi-green uppercase tracking-wide">
                                {step.content.result.label}
                              </span>
                            </div>
                            <ul className="space-y-2 pl-3.5">
                              {step.content.result.items.map((item: string, i: number) => (
                                <motion.li
                                  key={item}
                                  initial={{ opacity: 0, x: -8 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: 0.42 + i * 0.07, duration: 0.25 }}
                                  className="flex items-start gap-2 text-happi-muted text-sm"
                                >
                                  <CheckCircle2 size={14} className="text-happi-green mt-0.5 flex-shrink-0" />
                                  {item}
                                </motion.li>
                              ))}
                            </ul>
                          </motion.div>
                        </div>
                      )}

                      {/* ── Step 2: Traceability App ── */}
                      {step.id === 'app' && (
                        <div className="space-y-6">
                          {/* Teaser stat */}
                          <motion.div
                            initial={{ opacity: 0, x: -12 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.05, duration: 0.28 }}
                            className={`flex items-start gap-3 ${step.bgClass} border ${step.borderClass} rounded-xl p-4`}
                          >
                            <AlertTriangle size={16} className={`${step.colorClass} mt-0.5 flex-shrink-0`} />
                            <p className="text-sm text-happi-muted leading-relaxed">
                              {step.teaser}
                              <span className="text-happi-muted/50 ml-1 text-xs">({step.teaserSource})</span>
                            </p>
                          </motion.div>

                          {/* 3 actor cards — TiltCard + stagger */}
                          <div className="grid md:grid-cols-3 gap-4">
                            {step.content.actors.map((actor: any, i: number) => {
                              const ActorIcon = actor.icon;
                              return (
                                <motion.div
                                  key={actor.title}
                                  initial={{ opacity: 0, y: 14 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: 0.1 + i * 0.1, duration: 0.3 }}
                                >
                                  <TiltCard intensity={3}>
                                    <div className={`bg-happi-darker border ${actor.borderClass} rounded-xl p-5 h-full`}>
                                      <div className="flex items-center gap-2 mb-3">
                                        <div className={`w-8 h-8 ${actor.bgClass} border ${actor.borderClass} rounded-lg flex items-center justify-center`}>
                                          <ActorIcon size={16} className={actor.colorClass} />
                                        </div>
                                        <h4 className="font-semibold text-white text-sm">{actor.title}</h4>
                                      </div>
                                      <ul className="space-y-1.5">
                                        {actor.items.map((item: string, j: number) => (
                                          <motion.li
                                            key={item}
                                            initial={{ opacity: 0, x: -6 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.18 + i * 0.1 + j * 0.06, duration: 0.22 }}
                                            className="flex items-start gap-2 text-happi-muted text-xs"
                                          >
                                            <CheckCircle2 size={12} className={`${actor.colorClass} mt-0.5 flex-shrink-0`} />
                                            {item}
                                          </motion.li>
                                        ))}
                                      </ul>
                                    </div>
                                  </TiltCard>
                                </motion.div>
                              );
                            })}
                          </div>

                          {/* Mini stats — TiltCard */}
                          <div className="grid grid-cols-2 gap-3">
                            {step.content.miniStats.map((s: any, i: number) => (
                              <motion.div
                                key={s.value}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.32 + i * 0.07, duration: 0.28 }}
                              >
                                <TiltCard intensity={3}>
                                  <div className="bg-happi-darker border border-happi-border rounded-xl p-4 h-full">
                                    <div className={`text-xl font-bold ${step.colorClass} mb-1`}>{s.value}</div>
                                    <div className="text-happi-muted text-xs leading-snug mb-1">{s.label}</div>
                                  </div>
                                </TiltCard>
                              </motion.div>
                            ))}
                          </div>

                          {/* Interconnect banner */}
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.48, duration: 0.28 }}
                            className="relative rounded-xl p-px overflow-hidden"
                            style={{ background: 'linear-gradient(135deg, rgba(59,130,246,0.5), rgba(16,185,129,0.3))' }}
                          >
                            <div className="bg-happi-darker rounded-xl p-5">
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
                          </motion.div>
                        </div>
                      )}

                      {/* ── Step 3: SaaS Platform ── */}
                      {step.id === 'saas' && (
                        <div className="space-y-6">
                          {/* Teaser stat */}
                          <motion.div
                            initial={{ opacity: 0, x: -12 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.05, duration: 0.28 }}
                            className={`flex items-start gap-3 ${step.bgClass} border ${step.borderClass} rounded-xl p-4`}
                          >
                            <AlertTriangle size={16} className={`${step.colorClass} mt-0.5 flex-shrink-0`} />
                            <p className="text-sm text-happi-muted leading-relaxed">
                              {step.teaser}
                              <span className="text-happi-muted/50 ml-1 text-xs">({step.teaserSource})</span>
                            </p>
                          </motion.div>

                          <motion.p
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 0.28 }}
                            className="text-happi-muted text-sm leading-relaxed"
                          >
                            {step.content.intro}
                          </motion.p>

                          {/* Modules grid — stagger + hover lift */}
                          <div className="grid md:grid-cols-2 gap-4">
                            {step.content.modules.map((mod: any, i: number) => {
                              const ModIcon = mod.icon;
                              return (
                                <motion.div
                                  key={mod.title}
                                  initial={{ opacity: 0, y: 14 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: 0.14 + i * 0.09, duration: 0.3 }}
                                  whileHover={{ y: -3, boxShadow: '0 8px 24px rgba(0,0,0,0.25)' }}
                                  className={`bg-happi-darker border ${mod.borderClass} rounded-xl p-5 cursor-default`}
                                >
                                  <div className="flex items-start gap-3">
                                    <motion.div
                                      whileHover={{ rotate: 8, scale: 1.1 }}
                                      transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                                      className={`w-8 h-8 ${mod.bgClass} border ${mod.borderClass} rounded-lg flex items-center justify-center flex-shrink-0`}
                                    >
                                      <ModIcon size={16} className={mod.colorClass} />
                                    </motion.div>
                                    <div>
                                      <h4 className="font-semibold text-white text-sm mb-1">{mod.title}</h4>
                                      <p className="text-happi-muted text-xs leading-relaxed">{mod.desc}</p>
                                    </div>
                                  </div>
                                </motion.div>
                              );
                            })}
                          </div>

                          {/* Philosophy note */}
                          <motion.div
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.28 }}
                            className="flex items-start gap-3 bg-happi-darker border border-happi-border rounded-xl p-4"
                          >
                            <Shield size={16} className="text-happi-muted mt-0.5 flex-shrink-0" />
                            <p className="text-happi-muted text-xs leading-relaxed">
                              {fr
                                ? 'Ces modules s\'activent sur votre instance, avec votre branding, vos règles métier. Nous ne livrons pas un produit standard que vous adaptez. Nous construisons à votre image.'
                                : 'These modules activate on your instance, with your branding, your business rules. We don\'t deliver a standard product you adapt. We build in your image.'}
                            </p>
                          </motion.div>
                        </div>
                      )}

                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
