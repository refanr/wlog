"use client";
import Image from "next/image";
import prisma from "@/lib/prisma";
import Exercise from "./Exercise";
import SigninButton from "./components/SigninButton";

export default async function Home() {
  //const exercises = await prisma.exercise.findMany();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-3xl font-bold">Wlogger </h1>
      <SigninButton />
      <div className="container mx-auto grid gap-16 grid-cols-fluid">
        {/* {exercises.map((e) => (
          <Exercise
            key={e.exercise_id}
            id={e.exercise_id}
            name={e.name}
            description={e.description!}
          />
        ))} */}
      </div>
    </main>
  );
}
