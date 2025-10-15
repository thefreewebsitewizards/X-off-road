import SectionTitle from '../components/SectionTitle'
import AboutHero from '../components/about/AboutHero'

export default function ForgotPasswordPage() {
  return (
    <div className="px-4 md:px-10 lg:px-20 py-5">
      <div className="flex flex-col max-w-[1280px] mx-auto flex-1">
        <AboutHero title="Password Recovery" />
        <section className="py-16 max-w-xl">
          <SectionTitle title="Coming Soon" subtitle="We’re preparing a secure password recovery flow." />
          <p className="mt-6 text-sm text-secondary-text-light">For now, please contact support at <span className="text-[#CC0000]">sales@x-offroad.com</span>.</p>
        </section>
      </div>
    </div>
  )
}