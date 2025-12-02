import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Artashes Kocharyan | Professional Portfolio",
  description:
    "The professional portfolio of Artashes Kocharyan, showcasing a journey in QA and software engineering.",
  openGraph: {
    title: "Artashes Kocharyan | Professional Portfolio",
    description:
      "The professional portfolio of Artashes Kocharyan, showcasing a journey in QA and software engineering.",
    url: "https://artasheskocharyan.com", // Replace with your domain
    siteName: "Artashes Kocharyan",
    images: [
      {
        url: "https://artasheskocharyan.com/og-image.jpg", // Replace with a high-quality image URL
        width: 1200,
        height: 630,
        alt: "Artashes Kocharyan Professional Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Artashes Kocharyan | Professional Portfolio",
    description:
      "The professional portfolio of Artashes Kocharyan, showcasing a journey in QA and software engineering.",
    creator: "@yourtwitterhandle", // Replace with your Twitter handle
    images: ["https://artasheskocharyan.com/twitter-image.jpg"], // Replace with a high-quality image URL
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
