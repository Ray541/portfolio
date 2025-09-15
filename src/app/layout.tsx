import type { Metadata } from "next";
import { Rokkitt } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme.provide";
import CustomCursor from "@/components/CustomCursor";

const rokkitt = Rokkitt({
  variable: "--font-rokkitt",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
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
          <CustomCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
