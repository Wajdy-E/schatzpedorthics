import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";
import { localBusinessSchema, personSchema, websiteSchema } from "@/lib/seo";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Custom Orthotics & Pedorthic Care`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.clinician }],
  creator: site.clinician,
  publisher: site.name,
  category: "Health",
  keywords: [
    "pedorthist",
    "certified pedorthist",
    "custom orthotics",
    "custom foot orthotics",
    "compression socks",
    "orthopedic footwear",
    "foot pain",
    "plantar fasciitis",
    "flat feet",
    "bunions",
    "diabetic foot care",
    "Dr. Peter Schatz",
    "Ontario pedorthics",
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      {
        url: "/favicon.png",
        type: "image/png",
      },
    ],
  },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_CA",
    url: site.url,
    title: `${site.name} | Custom Orthotics & Pedorthic Care`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Custom Orthotics & Pedorthic Care`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0f766e",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white">
        <JsonLd data={[localBusinessSchema(), websiteSchema(), personSchema()]} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
