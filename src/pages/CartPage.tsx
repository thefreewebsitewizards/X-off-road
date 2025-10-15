import React, { useMemo, useState } from 'react'
import SectionTitle from '../components/SectionTitle'
import AboutHero from '../components/about/AboutHero'
import { Link, useNavigate } from 'react-router-dom'

type CartItem = {
  id: string
  name: string
  price: number
  qty: number
  image?: string
}

export default function CartPage() {
  const navigate = useNavigate()
  const [items, setItems] = useState<CartItem[]>([
    {
      id: 'orion-e16x',
      name: 'ORION e16x | 350W Electric Balance Bike',
      price: 999.0,
      qty: 1,
      image: '/sx125-blue.jpeg',
    },
  ])
  const [discountCode, setDiscountCode] = useState('')

  const subtotal = useMemo(() => items.reduce((sum, it) => sum + it.price * it.qty, 0), [items])
  const shipping = 0
  const discount = useMemo(() => {
    if (discountCode.trim().toUpperCase() === 'OFF10') {
      return subtotal * 0.1
    }
    return 0
  }, [discountCode, subtotal])
  const total = Math.max(0, subtotal + shipping - discount)

  const updateQty = (id: string, qty: number) => {
    setItems((prev) => prev.map((it) => (it.id === id ? { ...it, qty: Math.max(1, qty) } : it)))
  }
  const removeItem = (id: string) => setItems((prev) => prev.filter((it) => it.id !== id))

  return (
    <div className="px-4 md:px-10 lg:px-20 py-5">
      <div className="flex flex-col max-w-[1280px] mx-auto flex-1">
        <AboutHero title="Shopping Cart" />
        <section className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-white dark:bg-gray-800/50 rounded-xl p-6 shadow-sm">
              <SectionTitle title="Items" subtitle="Review your selected products" />
              <div className="mt-6 divide-y">
                {items.length === 0 && <p className="text-sm text-secondary-text-light">Your cart is empty.</p>}
                {items.map((it) => (
                  <div key={it.id} className="py-4 flex items-center gap-4">
                    {it.image && <img src={it.image} alt={it.name} className="w-20 h-20 rounded-lg object-cover" />}
                    <div className="flex-1">
                      <p className="font-medium">{it.name}</p>
                      <p className="text-sm text-secondary-text-light">${it.price.toFixed(2)}</p>
                      <div className="mt-2 flex items-center gap-3 text-sm">
                        <label className="text-sm">Qty</label>
                        <input
                          type="number"
                          min={1}
                          value={it.qty}
                          onChange={(e) => updateQty(it.id, Number(e.target.value))}
                          className="w-16 h-9 rounded-lg border border-gray-300 px-2"
                        />
                        <span className="ml-auto font-semibold">Subtotal: ${(it.price * it.qty).toFixed(2)}</span>
                      </div>
                      <div className="mt-2 text-sm">
                        <button className="text-[#CC0000] hover:underline mr-3" onClick={() => navigate(`/product/${it.id}`)}>Edit</button>
                        <button className="text-[#CC0000] hover:underline" onClick={() => removeItem(it.id)}>Remove Item</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <aside className="bg-white dark:bg-gray-800/50 rounded-xl p-6 shadow-sm">
              <SectionTitle title="Summary" subtitle="Estimate Shipping and Tax" />
              <div className="mt-6 space-y-3 text-sm">
                <div className="flex justify-between"><span>Subtotal:</span><span>${subtotal.toFixed(2)}</span></div>
                <div className="flex justify-between"><span>Shipping (Flat Rate):</span><span>${shipping.toFixed(2)}</span></div>
                {discount > 0 && (
                  <div className="flex justify-between text-green-700"><span>Discount:</span><span>- ${discount.toFixed(2)}</span></div>
                )}
                <div className="flex justify-between font-semibold text-base"><span>Order Total:</span><span>${total.toFixed(2)}</span></div>
              </div>
              <div className="mt-6">
                <label className="block text-sm font-medium">Apply Discount Code</label>
                <input
                  className="mt-1 w-full rounded-lg border border-gray-300 h-12 px-4"
                  placeholder="e.g., OFF10"
                  value={discountCode}
                  onChange={(e) => setDiscountCode(e.target.value)}
                />
              </div>
              <button
                className="mt-6 w-full rounded-full bg-[#CC0000] text-white px-6 py-3 font-semibold hover:bg-red-700"
                onClick={() => navigate('/checkout')}
              >
                Proceed to Checkout
              </button>
              <p className="mt-2 text-xs text-secondary-text-light">Discount code example: OFF10</p>
            </aside>
          </div>
          <div className="mt-10 text-sm">
            <Link to="/" className="text-[#CC0000] hover:underline">Continue Shopping</Link>
          </div>
        </section>
      </div>
    </div>
  )
}