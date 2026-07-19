// Shared types for the secretary agent engine.
// Ported from Happi-Secretary's backend/app/services/mock_service.py —
// the real rule-based fallback conversation engine used in production
// when no Claude API key is configured (is_mock_mode()).

export type Intent =
  | 'appointment' | 'cancel' | 'hours' | 'price' | 'address'
  | 'transfer' | 'complaint' | 'order' | 'emergency' | 'goodbye' | 'default';

export type Action = 'show_slots' | 'book_appointment' | 'transfer' | 'end_call' | null;

export interface ConversationState {
  askedDate?: boolean;
  dateConfirmed?: boolean;
  booked?: boolean;
  date?: string;
}

export interface AgentTurn {
  text: string;
  intent: Intent;
  action: Action;
  actionData?: Record<string, unknown>;
  state: ConversationState;
}

export type Sentiment = 'positive' | 'neutral' | 'negative' | 'urgent';
export type Outcome = 'resolved' | 'transferred';

export interface CallSummary {
  summary: string;
  intent: Intent | 'info';
  sentiment: Sentiment;
  sentimentScore: number;
  outcome: Outcome;
}

export interface ChatMessage {
  role: 'agent' | 'caller';
  text: string;
  intent?: Intent;
}
