import { HabitType } from '@/types/habit.type';

export const EAT_FIVE_VEGGIES_MOCK: HabitType = {
  id: '2',
  title: 'Eat 5 veggies',
  slug: 'eat-5-veggies',
  goal: {
    frequency: 'daily',
    iteration: 5,
  },
  reminder: [
    {
      days: ['MON', 'TUE', 'WEN', 'THU', 'FRI', 'SAT', 'SUN'],
      time: '8am',
    },
    {
      days: ['MON', 'TUE', 'WEN', 'THU', 'FRI', 'SAT', 'SUN'],
      time: '2pm',
    },
    {
      days: ['MON', 'TUE', 'WEN', 'THU', 'FRI', 'SAT', 'SUN'],
      time: '4pm',
    },
  ],
  isANotHabit: false,
  color: '##00ffa5',
  trackingStats: [
    {
      day: 'MON',
      date: 'October 7, 2024',
      count: 4,
    },
    {
      day: 'TUE',
      date: 'October 8, 2024',
      count: 5,
    },
    {
      day: 'WEN',
      date: 'October 9, 2024',
      count: 1,
    },
  ],
};
