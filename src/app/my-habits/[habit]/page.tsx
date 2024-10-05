export default function HabitPage({ params }: { params: { habit: string } }) {
  return (
    <div>
      I might see this page to show more information about how you did on a
      specific habit, e.g. {params.habit}
    </div>
  );
}
