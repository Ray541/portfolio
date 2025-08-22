import type { Metadata } from "next";
import { Rokkitt } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme.provide";
import { ModeToggle } from "@/components/ui/mode-toggle";
import ScrollToTop from "@/components/ui/scroll-to-top";

const rokkitt = Rokkitt({
  variable: "--font-rokkitt",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Pranav's | Portfolio",
  description:
    "A minimal portfolio showcasing my skills, projects and work experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${rokkitt.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <ModeToggle className="fixed bottom-3 right-7 active:scale-90 z-5 cursor-pointer" />
          <ScrollToTop className="fixed bottom-14 right-7 active:scale-90 z-5 cursor-pointer" />
        </ThemeProvider>
      </body>
    </html>
  );
}
