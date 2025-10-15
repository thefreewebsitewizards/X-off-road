import SectionTitle from '../components/SectionTitle'
import AboutHero from '../components/about/AboutHero'

export default function CheckoutPage() {
  return (
    <div className="px-4 md:px-10 lg:px-20 py-5">
      <div className="flex flex-col max-w-[1280px] mx-auto flex-1">
        <AboutHero title="Checkout" />
        <section className="py-16 max-w-2xl">
          <SectionTitle title="Checkout Flow" subtitle="We’ll implement payment and address steps next." />
          <p className="mt-6 text-sm text-secondary-text-light">This is a placeholder route to validate navigation from the cart.</p>
        </section>
      </div>
    </div>
  )
}