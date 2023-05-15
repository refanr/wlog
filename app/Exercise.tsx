import Link from "next/link";

export default function Exercise({
  id,
  name,
  description,
}: {
  id: number;
  name: string;
  description: string;
}) {
  return (
    <div className="container max-w-screen-sm rounded-md">
      <h2 className="text-xl">{name}</h2>
      <p className="text-sm">{description}</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        <Link href={`/${id}`}>Select Exercise</Link>
      </button>
    </div>
  );
}
