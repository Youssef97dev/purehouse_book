import localFont from "next/font/local";
import "./globals.css";

export const metadata = {
  title: "Le Salama",
  description: "Moroccan soul food",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
