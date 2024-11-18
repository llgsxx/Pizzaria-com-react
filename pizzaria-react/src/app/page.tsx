'use client'

import React from 'react'
import { useCart } from './CartContext'

const products = [
  { id: 1, name: 'Pizza Margherita', description: 'Molho de tomate, mussarela e manjericão', price: 35 },
  { id: 2, name: 'Pizza Pepperoni', description: 'Molho de tomate, mussarela e pepperoni', price: 40 },
  { id: 3, name: 'Pizza Quatro Queijos', description: 'Molho de tomate, mussarela, gorgonzola, parmesão e provolone', price: 45 },
]

export default function Home() {
  const { addToCart } = useCart()

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Nosso Cardápio</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg p-4 shadow-md">
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <p className="text-lg font-bold mb-4">R$ {product.price.toFixed(2)}</p>
            <button
              onClick={() => addToCart(product)}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
            >
              Adicionar ao Carrinho
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}