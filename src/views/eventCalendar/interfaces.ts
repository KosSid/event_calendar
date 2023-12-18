export interface EventInterface {
  id: number;
  title: string;
  content: string;
  eventDate: string;
  eventType: 'public' | 'custom';
  createdAt: string;
}

export interface EventDayTypeInterface {
  custom: boolean;
  public: boolean;
}

export interface EventTypeAggregateInterface {
  [key: string]: EventDayTypeInterface;
}
