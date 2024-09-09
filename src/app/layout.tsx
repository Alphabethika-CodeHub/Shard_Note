import type { Metadata } from "next";

import ClerkLayoutProvider from "@/providers/ClerkProvider";
import { inter } from "@/constant/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shard Note",
  description: "Effortless Note-Taking Across All Your Devices",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkLayoutProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkLayoutProvider>
  );
}
