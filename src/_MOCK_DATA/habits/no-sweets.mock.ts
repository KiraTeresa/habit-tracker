import { HabitType } from '@/types/habit.type';

export const NO_SWEETS_MOCK: HabitType = {
  id: '4',
  title: 'No sweets',
  slug: 'no-sweets',
  goal: {
    frequency: 'weekly',
    iteration: 5,
  },
  prefDay: ['MON', 'TUE', 'WEN', 'THU', 'FRI'],
  isANotHabit: true,
  color: '###33e1ff',
  trackingStats: [
    {
      day: 'MON',
      date: 'October 7, 2024',
      count: 1,
    },
    {
      day: 'WEN',
      date: 'October 9, 2024',
      count: 1,
    },
    {
      day: 'SUN',
      date: 'October 13, 2024',
      count: 1,
    },
  ],
};
