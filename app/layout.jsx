import './globals.css'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'
export const metadata = {
  title: 'Ghumakkar Masti Holidays - Leading Holiday Deal Provider in Delhi',
  description: 'Ghumakkar Masti is one of the leading Holiday Deal provider company in Delhi India. We provide all kind of Travel packages like Kashmir packages, Leh and Ladakh packages, Port Blair holiday packages, North East tour packages, Shimla Manali packages, Wildlife packages, South India packages, Religious tour packages, Chardham yatra, Mata Vaishno Devi yatra, Indian cultural tours, Discover Kerala tours and many more.',
  keywords: 'Ghumakkar Masti, Holiday packages, Tour packages, Kashmir tour, Leh Ladakh, Port Blair, North East tour, Shimla Manali, Wildlife packages, South India packages, Religious tours, Chardham yatra, Vaishno Devi yatra, Cultural tours, Kerala tours, Delhi travel agency',
}

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/image/swiftopay fabicon.png" type="image/png" sizes="16x16" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
      </head>
      <body className="bg-white">
        <Hero />
        {children}
        <Footer />
      </body>
    </html>
  )
}
