import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Container, Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import NavBar from "./NavBar";
import { Providers } from "./provider";
import { ThemeProvider } from "next-themes";

const inter = Roboto({
  weight:'400',
   subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog",
  description: "Travel Blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.className}>
      <body className="bg-gray-50 dark:bg-slate-800" >
        <ThemeProvider attribute="class">
          <Theme >
            <Container>
              <NavBar />
              {children}
            </Container>
          </Theme>
        </ThemeProvider>
      </body>
    </html>
  );
}
