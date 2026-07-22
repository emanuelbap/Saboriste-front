import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://saboriste.vercel.app'),
  title: {
    default: 'Saboriste | Doceria artesanal no Rio de Janeiro',
    template: '%s | Saboriste',
  },
  description:
    'Conheça a Saboriste, doceria artesanal no Rio de Janeiro especializada em brigadeiros gourmet, trufas e doces feitos com ingredientes selecionados.',
  applicationName: 'Saboriste',
  authors: [{ name: 'Saboriste' }],
  creator: 'Saboriste',
  publisher: 'Saboriste',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: '/',
    siteName: 'Saboriste',
    title: 'Saboriste | Doceria artesanal no Rio de Janeiro',
    description:
      'Brigadeiros gourmet, trufas e doces artesanais feitos com carinho e ingredientes selecionados.',
    images: [
      {
        url: '/imagens/tela_home_saboriste.jpeg',
        width: 1200,
        height: 630,
        alt: 'Doces artesanais da Saboriste',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Saboriste | Doceria artesanal no Rio de Janeiro',
    description:
      'Brigadeiros gourmet, trufas e doces artesanais feitos com carinho e ingredientes selecionados.',
    images: ['/imagens/tela_home_saboriste.jpeg'],
  },
  icons: {
    icon: '/imagens/logo_saboriste.png',
    apple: '/imagens/logo_saboriste.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
