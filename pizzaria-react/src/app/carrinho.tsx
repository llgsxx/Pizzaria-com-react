'use client'

import React from 'react'
import { useCart } from '../CartContext'
import Link from 'next/link'

export default function Carrinho() {
  const { items, removeFromCart } = useCart()

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Seu Carrinho</h1>
      {items.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {items.map((item) => (
              <li key={item.id} className="flex justify-between items-center border-b pb-2">
                <div>
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                  <p className="text-gray-600">Quantidade: {item.quantity}</p>
                  <p className="text-gray-600">Preço: R$ {(item.price * item.quantity).toFixed(2)}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-600 hover:text-red-800"
                >
                  Remover
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <p className="text-xl font-bold">Total: R$ {total.toFixed(2)}</p>
            <Link href="/pagamento" className="mt-4 inline-block bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition-colors">
              Finalizar Pedido
            </Link>
          </div>
        </>
      )}
    </div>
  )
}