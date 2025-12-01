import { ClerkProvider } from '@clerk/nextjs'
import { Open_Sans } from 'next/font/google'
import './globals.css'
import AuthHeader from './components/AuthHeader'

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
})

export const metadata = {
  title: 'Party Time Texas - Legal Documents',
  description: 'Terms and Conditions and Agreement pages',
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" className={openSans.variable}>
        <body className="font-sans antialiased">
          <AuthHeader />
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}

