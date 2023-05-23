import Link from "next/link";
import prisma from "../prisma";

export default async function LogExercise({
  params,
}: {
  params: { exercise: string };
}) {
  const exercise = await prisma.exercise.findUnique({
    where: { exercise_id: parseInt(`${params.exercise}`) },
  });

  return (
    <div>
      <h1 className="text-2xl">{exercise?.name}</h1>
      <p>{exercise?.description}</p>

      <label
        htmlFor="price"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        Price
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <input
          type="text"
          name="price"
          id="price"
          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="0"
        />
        <div className="absolute inset-y-0 right-0 flex items-center">
          <label htmlFor="currency" className="sr-only">
            Currency
          </label>
          <select
            id="currency"
            name="currency"
            className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
          >
            <option>KG</option>
            <option>LBS</option>
          </select>
        </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <Link href={`/b`}>Log Set</Link>
          </button>
      </div>
    </div>
  );
}
