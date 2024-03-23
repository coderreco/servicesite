"use client"

import CalFloatingButton from "@/components/CalEmbed";
// import { getCalApi } from "@calcom/embed-react";
// import { useEffect } from "react";

export default function Providers({ children }: { children: React.ReactNode }) {

  CalFloatingButton();
  return (
    <>
      {children}
    </>
  );
}