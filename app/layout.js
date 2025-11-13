import { Open_Sans } from 'next/font/google'
import './globals.css'

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
})

export const metadata = {
  title: 'Terms and Conditions',
  description: 'Terms and Conditions and Agreement pages',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={openSans.variable}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}

