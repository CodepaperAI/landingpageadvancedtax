import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  title: "AdvancedTax | Small Business Accounting Support",
  description:
    "Accounting, BAS, bookkeeping, payroll, and tax support for Australian small businesses.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-AU">
      <body className={`${fraunces.variable} ${manrope.variable}`}>{children}</body>
    </html>
  );
}
