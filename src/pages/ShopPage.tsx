export default function ShopPage() {
  return (
    <main className="container mx-auto px-6 md:px-10 py-14">
      <h1 className="text-2xl md:text-3xl font-bold">Accessories & Gear</h1>
      <p className="mt-2 text-neutral-600 dark:text-neutral-300">
        Browse helmets, pads, tools, and more. Connect to API later.
      </p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="bg-white dark:bg-gray-800/50 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
            <div className="h-36 bg-gray-100 dark:bg-gray-700" />
            <div className="p-4">
              <h3 className="font-semibold">Accessory {i + 1}</h3>
              <p className="text-sm text-secondary-text-light dark:text-secondary-text-dark mt-1">Placeholder item</p>
              <div className="mt-3 flex items-center justify-between">
                <span className="font-bold text-primary">$49.99</span>
                <button className="px-3 py-2 rounded-lg bg-primary text-white text-sm font-bold hover:bg-red-700">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}