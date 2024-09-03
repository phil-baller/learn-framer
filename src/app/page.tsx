"use client"
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start  gap-28 p-24">
      <Button>Toogle State</Button>

      <Card className="w-96 bg-gray-950 flex flex-col justify-start">
        <div className="flex flex-col justify-start p-8">
          <h1 className="text-2xl font-bold text-white">Framer Motion</h1>
          <p className="text-sm text-white/50 leading-6">
            Framer Motion is a production-ready motion library for React that
            is designed to make it easy to build rich, interactive animations
            that work across devices and platforms.
          </p>
          <Button className="mt-4 w-full">Learn More</Button>
        </div>
      </Card>
    </main>
  );
}
