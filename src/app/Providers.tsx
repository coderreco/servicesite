"use client"

import CalFloatingButton from "@/components/CalEmbed";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
// import { getCalApi } from "@calcom/embed-react";
// import { useEffect } from "react";

export default function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  // Listen for 'S' key to redirect to the mockup page
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 's') {
        router.push('/mockup')
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <>
      {children}
    </>
  );
}

export function ScopedProviders({ children }: { children: React.ReactNode }) {
  CalFloatingButton();
  return (
    <>
      {children}
    </>
  );
}