import AboutHero from '../components/about/AboutHero'
import SectionTitle from '../components/SectionTitle'
import ContactForm from '../components/contact/ContactForm'

export default function ContactPage() {
  return (
    <div className="px-4 md:px-10 lg:px-20 py-5">
      <div className="flex flex-col max-w-[1280px] mx-auto flex-1">
        <AboutHero title="Contact Us" imageSrc="/image-banner-3-electrics.jpg" />

        <section className="py-16">
          <SectionTitle title="We’re here to help" subtitle="Reach out with questions about products, orders, or support." />
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-white dark:bg-gray-800/50 rounded-xl p-6 shadow-sm">
              <ContactForm />
            </div>
            <aside className="bg-white dark:bg-gray-800/50 rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold">Contact Information</h3>
              <ul className="mt-3 text-sm text-secondary-text-light dark:text-secondary-text-dark space-y-2">
                <li>Address: Nevada, USA</li>
                <li>Phone: (555) 123-4567</li>
                <li>
                  Support Email: <a className="text-[#CC0000] hover:underline" href="mailto:sales@x-offroad.com">sales@x-offroad.com</a>
                </li>
              </ul>
              <div className="mt-6 rounded-xl overflow-hidden">
                <iframe
                  title="Map"
                  src="https://www.google.com/maps?q=Nevada&output=embed"
                  className="w-full h-40"
                  loading="lazy"
                />
              </div>
            </aside>
          </div>
        </section>
      </div>
    </div>
  )
}