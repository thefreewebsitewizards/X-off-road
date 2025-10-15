import AboutHero from '../components/about/AboutHero'
import SectionTitle from '../components/SectionTitle'
import TeamCard from '../components/about/TeamCard'
import ValueCard from '../components/about/ValueCard'
import { ShieldCheck, BadgeCheck, Headphones, Truck } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function AboutPage() {
  return (
    <div className="px-4 md:px-10 lg:px-20 py-5">
      <div className="flex flex-col max-w-[1280px] mx-auto flex-1">
        {/* Hero */}
        <AboutHero title="Who We Are" imageSrc="/image-banner-2-utv.jpg" />

        {/* About / Mission */}
        <section className="py-16 scroll-mt-24">
          <SectionTitle title="About Us" subtitle="Our journey, mission, and promise to riders everywhere." />
          <div className="mt-8 max-w-3xl mx-auto bg-white dark:bg-gray-800/50 rounded-xl shadow-sm p-8 leading-relaxed text-secondary-text-light dark:text-secondary-text-dark">
            <p>
              Welcome to X-Offroad, your trusted online destination for high-quality ATVs, Pit Bikes, Scooters, Buggies, and replacement parts since 2007.
              Based in Nevada, we are proud to serve motorsports enthusiasts across the country with a wide range of reliable products.
            </p>
            <p className="mt-4">
              At X-Offroad, we are committed to delivering exceptional customer service and competitive pricing. We work closely with our trusted suppliers to bring you the best deals,
              ensuring every product on our site is both affordable and dependable. If it’s listed on our website, you can trust that it has been rigorously tested and approved for quality and performance.
            </p>
            <p className="mt-4">
              Our mission, "Quality Customer Service," drives everything we do. From safeguarding your privacy to providing secure transactions and personalized support,
              we’re here to make your online shopping experience seamless and enjoyable.
            </p>
          </div>
        </section>

        {/* Team */}
        <section className="py-16 scroll-mt-24 bg-gray-50 dark:bg-gray-900/50 rounded-xl">
          <SectionTitle title="Meet the Team" subtitle="The people behind the passion." />
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <TeamCard
              name="Alex Rivera"
              role="Founder & CEO"
              description="Leads vision and strategy with a focus on rider experience and product reliability."
            />
            <TeamCard
              name="Sam Lee"
              role="Head of Operations"
              description="Keeps logistics running smoothly and ensures products meet our quality standards."
            />
            <TeamCard
              name="Jordan Nguyen"
              role="Customer Support Lead"
              description="Champion of fast, friendly support — helping riders get back on track."
            />
            <TeamCard
              name="Taylor Brooks"
              role="Product Specialist"
              description="Works with suppliers to continuously curate dependable, high‑value parts and vehicles."
            />
          </div>
        </section>

        {/* Values / Why Choose Us */}
        <section className="py-16 scroll-mt-24">
          <SectionTitle title="Why Choose Us" subtitle="Four reasons riders trust X‑Offroad." />
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ValueCard icon={ShieldCheck} title="Quality Assured" description="Every product is tested and approved for performance and durability." />
            <ValueCard icon={BadgeCheck} title="Trusted Since 2007" description="Serving the motorsports community for nearly two decades." />
            <ValueCard icon={Headphones} title="Dedicated Support" description="Friendly, responsive help with privacy and security front‑of‑mind." />
            <ValueCard icon={Truck} title="Reliable Shipping" description="Nationwide shipping with dependable turnaround times." />
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 scroll-mt-24 bg-gray-50 dark:bg-gray-900/50 rounded-xl">
          <div className="text-center">
            <SectionTitle title="Ready to Ride?" subtitle="Explore products, contact our team, or subscribe for updates." />
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 rounded-full bg-[#CC0000] text-white px-6 py-3 font-semibold shadow-lg hover:bg-red-700"
              >
                Explore Products
              </Link>
              <a
                href="mailto:sales@x-offroad.com"
                className="inline-flex items-center gap-2 rounded-full bg-white dark:bg-gray-800 text-text-light dark:text-text-dark px-6 py-3 font-semibold shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>

        {/* Contact & Hours */}
        <section className="py-16 scroll-mt-24">
          <SectionTitle title="Contact & Hours" />
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 text-secondary-text-light dark:text-secondary-text-dark">
            <div className="bg-white dark:bg-gray-800/50 rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold">Email</h3>
              <p className="mt-2"><a className="text-[#CC0000] hover:underline" href="mailto:sales@x-offroad.com">sales@x-offroad.com</a></p>
            </div>
            <div className="bg-white dark:bg-gray-800/50 rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold">Hours of Operation</h3>
              <ul className="mt-2 text-sm">
                <li>Monday to Thursday: 12:00 pm — 10:00 pm PST</li>
                <li>Friday to Sunday: 9:00 am — 12:30 pm PST</li>
              </ul>
            </div>
          </div>
          <p className="mt-8 text-center text-sm text-secondary-text-light dark:text-secondary-text-dark">
            Thank you for choosing X-Offroad.com — let’s get you back on track with the bikes and parts you need!
          </p>
        </section>
      </div>
    </div>
  )
}