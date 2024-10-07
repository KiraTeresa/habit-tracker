import { HabitType } from '@/types/habit.type';

export const RUN_REGULARLY_MOCK: HabitType = {
  id: '1',
  title: 'Run regularly',
  slug: 'run-regularly',
  goal: {
    frequency: 'weekly',
    iteration: 2,
  },
  prefDay: ['MON', 'WEN'],
  reminder: [
    {
      days: ['SUN', 'TUE'],
      time: '7pm',
    },
  ],
  variants: [
    { title: '<5km' },
    { title: '5-10km' },
    { title: '>10km' },
    { title: '>15km' },
  ],
  isANotHabit: false,
  color: '#ffa500',
  trackingStats: [],
};
