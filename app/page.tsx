import { Button } from "@/components/ui/button";
import { auth } from "@clerk/nextjs/server";
import { Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function Home() {
  // const { userId } = auth();
  // if (userId) redirect("/courses");
  return (
    <main className='flex flex-col h-screen items-center justify-center gap-5 bg-amber-200 dark:bg-background'>
      <div className='flex items-center gap-4'>
        {/* <Image src={logo} alt='PumpUp Logo' width={100} height={100} /> */}
        <span className='font-extrabold tracking-tight text-4xl lg:text-5xl'>
          Course Quest
        </span>
      </div>
      <p className='max-w-prose text-center '>
        An smart meal planning tool to help you create healthy meal prepping
        recipes
      </p>
      <Button size='lg' asChild>
        <Link href='/courses'>Get Started</Link>
      </Button>
      <Link href='https://github.com/akr12403/course_finder'>
        <Github />
      </Link>
    </main>
  );
}
