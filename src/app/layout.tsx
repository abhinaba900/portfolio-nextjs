import type React from "react";
import "@/src/styles/globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/src/components/theme-provider";
import Navbar from "@/src/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Abhinaba Jana| Full Stack Developer",
  description:
    "Portfolio of John Doe, a full stack web developer specializing in React, Node.js, and modern web technologies.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
