import prisma from "../prisma";

export default async function LogExercise({ params }) {
  const exercise = await prisma.exercise.findUnique({
    where: { exercise_id: parseInt(`${params.exercise}`) },
  });

  return (
    <div>
      <h1 className="text-2xl">{exercise?.name}</h1>
      <p>{exercise?.description}</p>
    </div>
  );
}
