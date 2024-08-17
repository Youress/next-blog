import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Container, Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import NavBar from "./NavBar";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
      <body className={inter.className}>
        <Theme>
          <Container> 
            <NavBar/>
            {children}</Container>
        </Theme>
      </body>
    </html>
  );
}
