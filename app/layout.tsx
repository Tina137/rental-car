import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";
import Header from "@/components/Header/Header";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "RentalCar",
  description: "Find your perfect car!",
  openGraph: {
    title: "RentalCar",
    description: "Find your perfect car!",
    url: "https://rentalcar.com",
    images: [
      {
        url: "/app/favicon.ico",
        alt: "RentalCar",
        width: 1200,
        height: 630,
      },
    ],
  },
  icons: {
    icon: "/app/favicon.ico",
  },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={manrope.variable}>
        <TanStackProvider>
          <Header />
          <main>{children}</main>
          <div id="loader-root"></div>
        </TanStackProvider>
      </body>
    </html>
  );
}
