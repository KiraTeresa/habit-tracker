import { HabitType } from '@/types/habit.type';

export const READ_A_BOOK_MOCK: HabitType = {
  id: '3',
  title: 'Read a book',
  slug: 'read-a-book',
  goal: {
    frequency: 'weekly',
    iteration: 3,
  },
  isANotHabit: false,
  color: '##ff337b',
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
