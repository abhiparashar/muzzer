"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";
import Link from "next/link";
import { JSX, SVGProps } from "react";

function Appbar() {
  const session = useSession();
  return (
    <div>
      <header className="px-4 lg:px-6 h-14 flex items-center bg-primary dark:bg-primary text-primary-foreground">
        <Link
          href="#"
          className="flex items-center justify-center"
          prefetch={false}
        >
          <Music2Icon className="h-6 w-6" />
          <span className="sr-only">Tune In</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4 text-violet-400 dark:text-pink-400"
            prefetch={false}
          >
            Features
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4 text-violet-400 dark:text-pink-400"
            prefetch={false}
          >
            Creators
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4 text-violet-400 dark:text-pink-400"
            prefetch={false}
          >
            Pricing
          </Link>
        </nav>
      </header>
    </div>
  );
}

function Music2Icon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="18" r="4" />
      <path d="M12 18V2l7 4" />
    </svg>
  );
}

export default Appbar;
