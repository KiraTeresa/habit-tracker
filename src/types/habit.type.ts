type DayType = 'MON' | 'TUE' | 'WEN' | 'THU' | 'FRI' | 'SAT' | 'SUN';
type FrequencyType = 'weekly' | 'daily';

type GoalType = {
  frequency: FrequencyType;
  iteration: number;
};

type ReminderType = {
  days: DayType[];
  time: string;
};

type HabitVariantType = {
  title: string;
};

type TrackingStatsType = {
  day: DayType;
  count: number;
};

export interface HabitType {
  id: string;
  title: string;
  slug: string;
  goal: GoalType;
  prefDay?: DayType[];
  reminder?: ReminderType[];
  variants?: HabitVariantType[];
  isANotHabit: boolean;
  color: string;
  trackingStats: TrackingStatsType[];
}
