// Rule-based conversation engine — ported 1:1 from Happi-Secretary's
// MockConversationEngine (backend/app/services/mock_service.py). Same intent
// keywords, same booking state machine, same call-summary classification.
// Keywords are bilingual (FR+EN) so the agent understands input in either
// language, matching the real product's auto FR/EN/ES detection.

import type { Action, AgentTurn, CallSummary, ConversationState, Intent, Sentiment } from './types';

const INTENT_KEYWORDS: Record<Exclude<Intent, 'default'>, string[]> = {
  appointment: ['rendez-vous', 'rdv', 'réserver', 'disponible', 'appointment', 'book', 'schedule', 'créneau'],
  cancel: ['annuler', 'annulation', 'cancel', 'supprimer'],
  hours: ['horaire', 'heure', 'ouvert', 'fermé', 'hours', 'open', 'closed'],
  price: ['prix', 'tarif', 'coût', 'combien', 'price', 'cost', 'rate'],
  address: ['adresse', 'où', 'situé', 'location', 'address', 'where'],
  transfer: ['directeur', 'responsable', 'manager', 'parler à', 'transfer', 'speak to'],
  complaint: ['problème', 'plainte', 'mécontent', 'complaint', 'issue', 'problem'],
  order: ['commander', 'commande', 'order'],
  emergency: ['urgent', 'urgence', 'emergency', 'immédiat'],
  goodbye: ['au revoir', 'merci', 'bye', 'goodbye', 'bonne journée', 'ciao', 'thanks'],
};

const RESPONSES: Record<'fr' | 'en', Record<Intent, string[]>> = {
  fr: {
    appointment: [
      'Bien sûr, je peux vous aider à prendre un rendez-vous. Quelle date vous conviendrait ?',
      'Parfait. Avez-vous une préférence pour la date et l\'heure ?',
    ],
    cancel: [
      'Je comprends. Pouvez-vous me donner votre nom et la date de votre rendez-vous pour que je l\'annule ?',
    ],
    hours: [
      'Nous sommes ouverts du lundi au vendredi de 9h à 18h, et le samedi de 10h à 13h.',
    ],
    price: [
      'Pour les informations tarifaires, je vais prendre vos coordonnées et un responsable vous rappellera dans les plus brefs délais.',
    ],
    address: [
      'Vous trouverez nos coordonnées sur notre site internet. Souhaitez-vous que je vous envoie l\'adresse par SMS ?',
    ],
    transfer: [
      'Je vous mets en relation avec un responsable. Un instant s\'il vous plaît.',
    ],
    complaint: [
      'Je suis désolé d\'apprendre cela. Je comprends votre frustration. Pouvez-vous me décrire le problème en détail ?',
    ],
    order: [
      'Je prends votre commande. Que souhaitez-vous commander ?',
    ],
    emergency: [
      'Je comprends l\'urgence. Je vous transfère immédiatement vers notre équipe disponible.',
    ],
    goodbye: [
      'Merci pour votre appel. Bonne journée !',
    ],
    default: [
      'Bien sûr, je note votre demande. Pouvez-vous me donner plus de détails ?',
      'Je comprends. Puis-je avoir votre nom et numéro de téléphone pour le suivi ?',
    ],
  },
  en: {
    appointment: [
      'Of course, I can help you book an appointment. What date would suit you?',
      'Perfect. Do you have a preferred date and time?',
    ],
    cancel: [
      'I understand. Could you give me your name and the appointment date so I can cancel it?',
    ],
    hours: [
      'We\'re open Monday to Friday 9am–6pm, and Saturday 10am–1pm.',
    ],
    price: [
      'For pricing details, I\'ll take your contact info and a manager will call you back shortly.',
    ],
    address: [
      'You\'ll find our details on our website. Would you like me to text you the address?',
    ],
    transfer: [
      'I\'m connecting you with a manager. One moment please.',
    ],
    complaint: [
      'I\'m sorry to hear that. I understand your frustration. Could you describe the issue in detail?',
    ],
    order: [
      'I\'ll take your order. What would you like to order?',
    ],
    emergency: [
      'I understand this is urgent. Transferring you immediately to our available team.',
    ],
    goodbye: [
      'Thank you for calling. Have a great day!',
    ],
    default: [
      'Of course, I\'m noting your request. Could you give me a bit more detail?',
      'I understand. Could I get your name and phone number for follow-up?',
    ],
  },
};

const SLOT_CONFIRMATION = {
  fr: (date: string) => `Parfait ! J'ai des créneaux disponibles le ${date} à 9h00, 10h30 et 14h00. Lequel vous convient ?`,
  en: (date: string) => `Great! I have slots available on ${date} at 9:00, 10:30 and 2:00pm. Which works for you?`,
};

const BOOKING_CONFIRMATION = {
  fr: (date: string, time: string) => `Excellent ! Votre rendez-vous est confirmé le ${date} à ${time}. Vous recevrez une confirmation par email.`,
  en: (date: string, time: string) => `Excellent! Your appointment is confirmed for ${date} at ${time}. You'll receive an email confirmation.`,
};

export function getGreeting(fr: boolean, clientName: string, assistantName: string, isVip: boolean): string {
  if (fr) {
    return isVip
      ? `Bonjour ! Bienvenue chez ${clientName}, je suis ${assistantName} votre assistante. Je vois que vous êtes un de nos clients privilégiés. Comment puis-je vous aider aujourd'hui ?`
      : `Bonjour, vous êtes bien chez ${clientName}, je suis ${assistantName} votre assistante IA. Comment puis-je vous aider ?`;
  }
  return isVip
    ? `Hello! Welcome to ${clientName}, I'm ${assistantName}, your assistant. I see you're one of our valued clients. How can I help you today?`
    : `Hello, you've reached ${clientName}, I'm ${assistantName}, your AI assistant. How can I help you?`;
}

export function detectIntent(text: string): Intent {
  const lower = text.toLowerCase();
  for (const [intent, keywords] of Object.entries(INTENT_KEYWORDS) as [Exclude<Intent, 'default'>, string[]][]) {
    if (keywords.some((kw) => lower.includes(kw))) return intent;
  }
  return 'default';
}

function pick<T>(arr: T[], seed: number): T {
  return arr[seed % arr.length];
}

export function getResponse(
  callerText: string,
  state: ConversationState,
  fr: boolean,
  turnSeed: number
): AgentTurn {
  const lang = fr ? 'fr' : 'en';
  const detected = detectIntent(callerText);

  // Urgent interrupts always take priority, even mid-flow.
  if (detected === 'transfer' || detected === 'emergency') {
    return {
      text: pick(RESPONSES[lang][detected], turnSeed),
      intent: detected,
      action: 'transfer',
      actionData: { department: 'management', urgency: detected === 'emergency' },
      state,
    };
  }
  if (detected === 'goodbye') {
    return { text: pick(RESPONSES[lang].goodbye, turnSeed), intent: 'goodbye', action: 'end_call', state };
  }

  // Conversation memory: once a booking is underway, keep following it even
  // if the caller's reply ("demain ça marche") doesn't repeat a booking
  // keyword — a real caller wouldn't re-say "appointment" every turn.
  const inAppointmentFlow = Boolean(state.askedDate) && !state.booked;
  const intent: Intent = inAppointmentFlow ? 'appointment' : detected;

  if (intent === 'appointment') {
    if (!state.askedDate) {
      return {
        text: pick(RESPONSES[lang].appointment, turnSeed),
        intent: 'appointment',
        action: null,
        state: { ...state, askedDate: true },
      };
    }
    if (!state.dateConfirmed) {
      const tomorrow = new Intl.DateTimeFormat(fr ? 'fr-FR' : 'en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' })
        .format(new Date(Date.now() + 86400000));
      return {
        text: SLOT_CONFIRMATION[lang](tomorrow),
        intent: 'appointment',
        action: 'show_slots',
        actionData: { date: tomorrow, slots: ['09:00', '10:30', '14:00'] },
        state: { ...state, dateConfirmed: true, date: tomorrow },
      };
    }
    const date = state.date ?? new Intl.DateTimeFormat(fr ? 'fr-FR' : 'en-GB').format(new Date());
    return {
      text: BOOKING_CONFIRMATION[lang](date, '10:00'),
      intent: 'appointment',
      action: 'book_appointment',
      actionData: { date, time: '10:00', confirmed: true },
      state: { ...state, booked: true },
    };
  }

  return {
    text: pick(RESPONSES[lang][intent], turnSeed),
    intent,
    action: null,
    state,
  };
}

const INTENT_SUMMARIES: Record<'fr' | 'en', Record<string, string>> = {
  fr: {
    appointment: 'Le client a pris un rendez-vous. La demande a été traitée avec succès.',
    cancel: "Le client a demandé l'annulation d'un rendez-vous.",
    complaint: 'Le client a exprimé une réclamation. Le dossier a été transmis à l\'équipe.',
    transfer: 'L\'appel a été transféré à un responsable suite à la demande du client.',
    order: 'Une commande a été enregistrée et confirmée au client.',
    price: 'Le client a demandé des informations tarifaires. Un suivi par email prévu.',
    emergency: 'Appel urgent — transfert immédiat effectué vers l\'équipe disponible.',
    info: 'Le client a demandé des informations générales. Demande traitée.',
  },
  en: {
    appointment: 'The caller booked an appointment. The request was handled successfully.',
    cancel: 'The caller requested to cancel an appointment.',
    complaint: 'The caller raised a complaint. The case was escalated to the team.',
    transfer: 'The call was transferred to a manager at the caller\'s request.',
    order: 'An order was recorded and confirmed to the caller.',
    price: 'The caller requested pricing information. Email follow-up scheduled.',
    emergency: 'Urgent call — immediate transfer to the available team.',
    info: 'The caller requested general information. Request handled.',
  },
};

const SENTIMENT_MAP: Record<string, Sentiment> = {
  complaint: 'negative',
  emergency: 'urgent',
  appointment: 'positive',
  order: 'positive',
};

export function generateSummary(messages: { role: 'caller' | 'agent'; text: string }[], fr: boolean): CallSummary {
  const lang = fr ? 'fr' : 'en';
  const intentsFound = new Set<Intent>();
  for (const msg of messages) {
    if (msg.role === 'caller') intentsFound.add(detectIntent(msg.text));
  }
  intentsFound.delete('default');
  intentsFound.delete('goodbye');
  const primaryIntent = intentsFound.values().next().value ?? 'info';

  return {
    summary: INTENT_SUMMARIES[lang][primaryIntent] ?? (fr ? 'Appel traité avec succès.' : 'Call handled successfully.'),
    intent: primaryIntent as Intent | 'info',
    sentiment: SENTIMENT_MAP[primaryIntent] ?? 'neutral',
    sentimentScore: 0.7,
    outcome: primaryIntent === 'transfer' || primaryIntent === 'emergency' ? 'transferred' : 'resolved',
  };
}
