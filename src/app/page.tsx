
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

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <Link href="/about">
            <Button className="m-4 p-5 w-44 rounded-xl text-xl">
              About Us
            </Button>
          </Link>
          <Link href="/classes">
            <Button className="m-4 p-5 w-44 rounded-xl text-xl">
              Classes
            </Button>
          </Link>
          <Link href="/pricing">
            <Button className="m-4 p-5 w-44 rounded-xl text-xl">
              Pricing
            </Button>
          </Link>
          <Link href="/blog">
            <Button className="m-4 p-5 w-44 rounded-xl text-xl">
              Blog
            </Button>
          </Link>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <p>
          Created by Firebase Studio
        </p>
      </footer>
    </div>
  );
}
