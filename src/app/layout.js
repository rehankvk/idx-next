import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/toaster";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default:"%s | Jarot Shop"
  },
  description: "Jarot Shop is a simple E-Commerce Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
