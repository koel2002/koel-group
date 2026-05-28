import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Koel Group | Premium Apparel Design & Production Ecosystem",
  description: "Premium knitwear, fine-gauge sweaters and sustainable textile manufacturing from Bangladesh.",
  openGraph: {
    title: "Koel Group | High-End Apparel Production Infrastructure",
    description: "A B2B apparel design and production ecosystem based in Bangladesh.",
    url: "https://koelgroupbd.com",
    siteName: "Koel Group",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
