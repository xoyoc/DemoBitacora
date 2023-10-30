import NavBar from '@/components/ui/NavBar'
import Footer from '@/components/ui/Fotter'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Bitacora",
  description: "Sistema de bitacora de referencias",
  authors: [{ name: 'Xoyoc' }, { name: 'Antonio Xoyoc', url: 'https://xoyoc.net' }],
}

export default function RootLayout({ children }) {
  return (
    <html lang="es-mx">
      <body className={inter.className}>
        <div className='container mx-auto'>  
          <NavBar />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
