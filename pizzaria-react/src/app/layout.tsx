import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { CartProvider } from './CartContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pizzaria Online',
  description: 'Peça suas pizzas favoritas online',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <CartProvider>
          <header className="bg-red-600 text-white p-4">
            <nav className="container mx-auto flex justify-between items-center">
              <Link href="/" className="text-2xl font-bold">Pizzaria Online</Link>
              <ul className="flex space-x-4">
                <li><Link href="/">Cardápio</Link></li>
                <li><Link href="/carrinho">Carrinho</Link></li>
                <li><Link href="/status">Status do Pedido</Link></li>
              </ul>
            </nav>
          </header>
          <main className="container mx-auto p-4">
            {children}
          </main>
          <footer className="bg-gray-200 p-4 text-center">
            <p>&copy; 2023 Pizzaria Online. Todos os direitos reservados.</p>
          </footer>
        </CartProvider>
      </body>
    </html>
  )
}