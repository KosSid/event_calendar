export type EventTypeType = 'public' | 'custom';

export interface EventInterface {
  id?: number;
  title: string;
  content: string;
  eventDate: string;
  eventType: EventTypeType;
  createdAt?: string;
}

export interface EventDayTypeInterface {
  custom: boolean;
  public: boolean;
}

export interface EventTypeAggregateInterface {
  [key: string]: EventDayTypeInterface;
}

export interface EventCalendarProps {
  currentDate: Date;
  setCurrentDate: React.Dispatch<React.SetStateAction<Date>>;
}

export interface CurrentDateProps {
  currentDate: Date;
}

export interface EventDataFormInterface {
  title: string;
  content: string;
  eventDate: string;
  eventType: 'public' | 'custom';
}

export enum ButtonVariant {
  Secondary = 'secondary',
  Delete = 'delete',
  CalendarYearSwitcher = 'calendarYearSwitcher',
  Today = 'today',
  AddEvent = 'addEvent',
}
