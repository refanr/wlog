import Image from "next/image";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function Home() {
  const exercises = await prisma.exercise.findMany();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-3xl font-bold underline">Wlogger</h1>
      <ul>
        {exercises.map((e) => {
          return (
            <li key={e.exercise_id}>
              {e.name} - {e.description}
            </li>
          );
        })}
      </ul>
    </main>
  );
}
