import Link from "next/link";
import { SVGProps } from "react";

export default function Home() {
  return (
    <main className="px-4 max-w-3xl mx-auto py-12">
      <div>
        <h1 className="font-bold text-xl">Your next favorite thing 👇</h1>
      </div>

      <div className="flex flex-col gap-4 mt-4">
        <div className="flex items-start gap-4">
          <Link href={"/posts/slug"}>
            <div className="bg-gray-200/20 w-16 aspect-square" />
          </Link>
          <div className="flex flex-col gap-1 flex-1 items-start">
            <Link href={"/posts/slug"}>
              <h1 className="font-medium text-sm">Title</h1>
            </Link>
            <h2 className="text-xs flex-1 line-clamp-2">
              Description this is a large description
            </h2>
          </div>
          <button className="flex flex-col items-center border-l border-gray-200/30 px-4">
            <ArrowDropUpIcon />
            <span className="text-sm font-medium">32</span>
          </button>
        </div>
      </div>
    </main>
  );
}

function ArrowDropUpIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="w-10 h-10"
      {...props}
    >
      <path fill="currentColor" d="m7 14l5-5l5 5z"></path>
    </svg>
  );
}
