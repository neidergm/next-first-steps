import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center p-24">
      <h1 className="text-4xl font-bold">Hello, World!</h1>

      <Link href="/about" className="mt-40">Go to About page</Link>
    </main>
  );
}
