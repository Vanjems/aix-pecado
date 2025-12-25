import { Sparkles } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="flex flex-col items-center gap-4">
        <Sparkles className="h-16 w-16 text-blue-500" />
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
          Welcome to Aix Pecado
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Next.js 15 • React 19 • TypeScript • Tailwind CSS v4 • Lucide Icons
        </p>
      </div>
    </main>
  );
}

