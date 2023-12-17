export interface EventInterface {
  id: number;
  title: string;
  content: string;
  eventDate: string;
  eventType: 'public' | 'custom';
  createdAt: string;
}
