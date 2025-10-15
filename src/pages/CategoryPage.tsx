import { useParams } from 'react-router-dom'

export default function CategoryPage() {
  const { slug } = useParams()
  return (
    <main className="container mx-auto px-6 md:px-10 py-14">
      <h1 className="text-2xl md:text-3xl font-bold capitalize">{slug} Bikes</h1>
      <p className="mt-2 text-neutral-600">Category page placeholder. Integrate with backend data later.</p>
    </main>
  )
}