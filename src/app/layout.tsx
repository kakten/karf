import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KARF OS",
  description: "Komuniti Affiliates Raja Fatin Operating System",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
