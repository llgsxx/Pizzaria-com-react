'use client'

import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

export default function Status() {
  const searchParams = useSearchParams()
  const orderId = searchParams.get('orderId')
  const [status, setStatus] = useState('Processando')

  useEffect(() => {
    // Simular uma atualização de status após 5 segundos
    const timer = setTimeout(() => {
      setStatus('Em preparação')
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  if (!orderId) {
    return <p>Número do pedido não encontrado.</p>
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Status do Pedido</h1>
      <p className="text-xl mb-4">Número do Pedido: {orderId}</p>
      <p className="text-lg">Status: <span className="font-bold">{status}</span></p>
    </div>
  )
}