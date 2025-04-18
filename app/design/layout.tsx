import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function DesignLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      <Link
        href="/#projects"
        className="fixed top-4 left-4 z-50 bg-background/80 backdrop-blur-sm p-2 rounded-full shadow-md hover:bg-background/90 transition-colors"
        aria-label="Back to projects"
      >
        <ArrowLeft className="h-5 w-5" />
      </Link>
      {children}
    </div>
  );
}
