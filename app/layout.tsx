import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const siteUrl = "https://sharonmaihr.com";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  display: "swap",
  variable: "--font-inter",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "SharonMaiHR | Practical HR Knowledge & Workplace Insights",
    template: "%s | SharonMaiHR",
  },

  description:
    "Practical HR knowledge, labor law guidance, workplace insights, and people management strategies for HR professionals, managers, and business leaders.",

  keywords: [
    "HR",
    "Human Resources",
    "Labor Law",
    "Workplace",
    "Employee Relations",
    "Performance Management",
    "Recruitment",
    "HR Knowledge",
    "People Management",
    "SharonMaiHR",
  ],

  authors: [
    {
      name: "SharonMaiHR",
    },
  ],

  creator: "SharonMaiHR",
  publisher: "SharonMaiHR",

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "SharonMaiHR",
    title: "SharonMaiHR | Practical HR Knowledge & Workplace Insights",
    description:
      "Practical HR knowledge, labor law guidance, workplace insights, and people management strategies.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SharonMaiHR",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "SharonMaiHR",
    description:
      "Practical HR knowledge, labor law guidance, workplace insights, and people management strategies.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className={`${inter.className} min-h-full flex flex-col`}>
        {children}
      </body>
    </html>
  );
}