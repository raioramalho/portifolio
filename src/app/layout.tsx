import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Configuração otimizada das fontes para melhor performance
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // Melhora o CLS (Cumulative Layout Shift)
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

// Metadata aprimorada para SEO
export const metadata: Metadata = {
  title: {
    default: "Alan Ramalho | Arquiteto de Soluções",
    template: "%s | Alan Ramalho",
  },
  description: "Arquiteto de Soluções especializado em DevOps, desenvolvimento backend e arquitetura de sistemas distribuídos",
  keywords: ["DevOps", "Arquitetura de Soluções", "Backend", "Cloud", "Alan Ramalho"],
  authors: [{ name: "Alan Ramalho" }],
  creator: "Alan Ramalho",
  publisher: "Alan Ramalho",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://cloud.raiosystems.tech",
  },
  openGraph: {
    type: "website",
    url: "https://cloud.raiosystems.tech",
    title: "Alan Ramalho | Arquiteto de Soluções",
    description: "Arquiteto de Soluções especializado em DevOps, desenvolvimento backend e arquitetura de sistemas distribuídos",
    siteName: "Alan Ramalho",
    images: [
      {
        url: "/og-image.png", // Crie esta imagem (1200x630) para compartilhamento em redes sociais
        width: 1200,
        height: 630,
        alt: "Alan Ramalho - Arquiteto de Soluções",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alan Ramalho | Arquiteto de Soluções",
    description: "Arquiteto de Soluções especializado em DevOps, desenvolvimento backend e arquitetura de sistemas distribuídos",
    images: ["/og-image.png"],
  },
};

// Configurações de viewport para dispositivos móveis
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#111111" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="pt-BR" 
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="antialiased">
        {children}
        {/* <Analytics />
        <SpeedInsights /> */}
      </body>
    </html>
  );
}