import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dukaan | Dashboard",
  description:
    "The Powerful, Affordable Shopify Alternative for Indian Entrepreneurs",
  keywords: ["Dukaan", "Dashboard", "Payments", "Transactions"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="w-full h-[1555px] flex">{children}</main>
      </body>
    </html>
  );
}
