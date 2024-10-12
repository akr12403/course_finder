import { Metadata } from "next";



export const metadata: Metadata = {
  title: "Course Quest - Coures",
  description:
    "Welcome to Course Quest AI an AI tool to help user create easy healthy meal prepping recipes using AI. This is the home page where all generated recipes are displayed. ",
};
export default function CourseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className='p-4 max-w-7xl m-auto '>{children}</main> 
    </>
  );
}