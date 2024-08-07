import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "./components/Layout";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Banner",
  description: "Edit your custom banner",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body><Layout> {children}</Layout></body>
    </html>
  );
}
