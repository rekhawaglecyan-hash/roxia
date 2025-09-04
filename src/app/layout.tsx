import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Roxia — Local Guides in Chitwan",
    template: "%s • Roxia",
  },
  description:
    "Roxia is a tourism technology platform connecting travelers with trusted local guides in Chitwan for jungle safaris, tours, and yoga & spiritual activities.",
  metadataBase: new URL("https://roxia.example.com"),
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    type: "website",
    url: "https://roxia.example.com",
    title: "Roxia — Book Local Guides in Chitwan",
    description:
      "Discover Chitwan with local experts. Book jungle safaris, guided tours, and yoga experiences.",
    images: [
      {
        url: "https://dummyimage.com/1200x630/0e7490/ffffff&text=Roxia+—+Chitwan+Guides",
        width: 1200,
        height: 630,
        alt: "Roxia — Chitwan Local Guides",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Roxia — Book Local Guides in Chitwan",
    description:
      "Discover Chitwan with local experts. Book jungle safaris, guided tours, and yoga experiences.",
    images: [
      "https://dummyimage.com/1200x630/0e7490/ffffff&text=Roxia+—+Chitwan+Guides",
    ],
  },
  themeColor: "#0e7490",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <header className="w-full border-b border-black/10 dark:border-white/10">
          <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
            <Link href="/" className="text-xl font-semibold tracking-tight">
              Roxia
            </Link>
            <nav className="hidden sm:flex gap-6 text-sm">
              <Link href="#offerings" className="hover:underline">Offerings</Link>
              <Link href="#features" className="hover:underline">Why Roxia</Link>
              <Link href="#contact" className="hover:underline">Contact</Link>
            </nav>
            <Link
              href="#cta"
              className="rounded-full bg-[#0e7490] text-white px-4 py-2 text-sm font-medium hover:opacity-90"
            >
              Book a Guide
            </Link>
          </div>
        </header>
        <main>{children}</main>
        <footer id="contact" className="w-full border-t border-black/10 dark:border-white/10 mt-16">
          <div className="mx-auto max-w-6xl px-6 py-10 grid gap-4 sm:grid-cols-3 text-sm">
            <div>
              <div className="text-base font-semibold">Roxia</div>
              <p className="opacity-80 mt-1">
                Explore Chitwan with local experts.
              </p>
            </div>
            <div>
              <div className="font-medium">Company</div>
              <ul className="mt-2 space-y-1 opacity-90">
                <li><Link href="#features" className="hover:underline">Why Roxia</Link></li>
                <li><Link href="#offerings" className="hover:underline">Offerings</Link></li>
              </ul>
            </div>
            <div>
              <div className="font-medium">Contact</div>
              <ul className="mt-2 space-y-1 opacity-90">
                <li><a href="mailto:hello@roxia.example.com" className="hover:underline">hello@roxia.example.com</a></li>
              </ul>
            </div>
          </div>
          <div className="mx-auto max-w-6xl px-6 pb-10 text-xs opacity-70">
            © {new Date().getFullYear()} Roxia. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
