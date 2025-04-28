
import { Button } from "@/components/ui/button";
import { Dancing_Script } from "next/font/google";
import Link from "next/link";

const dancingScript = Dancing_Script({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className={`text-6xl font-bold ${dancingScript.className}`}>
          Welcome to DanceWebsite!
        </h1>

        <p className="mt-3 text-2xl">
          Learn to dance with us!
        </p>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <p>
          
        </p>
      </footer>
    </div>
  );
}


