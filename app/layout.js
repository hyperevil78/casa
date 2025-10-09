import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import SmoothScrollProvider from "@/components/scroll/SmoothScrollProvider";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Casa Lumière",
  description: "Nestled along the sparkling coast of Nice, Casa Lumière is a sanctuary of elegance and tranquility. Blending French sophistication with timeless charm, our hotel offers breathtaking sea views, world-class dining, and personalized service designed to illuminate every moment of your stay.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>

        <SmoothScrollProvider>
          <Navbar />
          {children}
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}