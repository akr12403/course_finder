import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

import { ClerkProvider } from "@clerk/nextjs";


const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Course Quest - Home",
  description:
    "Welcome to Course Quest AI an AI tool to help user create easy healthy meal prepping recipes using AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body
          className={cn(
            "min-h-screen font-sans antialiased",
            fontSans.variable
          )}> {children} 
        </body>
      </html>
    </ClerkProvider>
  );
}
