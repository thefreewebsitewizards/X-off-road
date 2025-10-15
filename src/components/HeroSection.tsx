import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const slides = [
  {
    id: 1,
    title: 'HDK Pit Bikes Lineup',
    desc: 'Built for power and control on every track.',
    image: '/image-banner-hdk-pit-bikes.jpg',
  },
  {
    id: 2,
    title: 'Electric Evolution',
    desc: 'Effortless acceleration with next‑gen e‑bikes.',
    image: '/image-banner-3-electrics.jpg',
  },
  {
    id: 3,
    title: 'SX125 Blue Edition',
    desc: 'Precision handling meets bold styling.',
    image: '/sx125-blue.jpeg',
  },
]

export default function HeroSection() {
  const navigate = useNavigate()
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(id)
  }, [])

  const current = slides[index]

  return (
    <section id="hero" className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden bg-neutral-950 rounded-xl scroll-mt-24">
      <AnimatePresence mode="wait">
        <motion.img
          key={current.id}
          src={current.image}
          alt={current.title}
          className="absolute inset-0 w-full h-full object-cover opacity-80"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 0.9, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          loading="lazy"
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent" />

      <div className="relative z-10 container mx-auto px-6 md:px-10 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <motion.h1
            key={`title-${current.id}`}
            className="text-4xl md:text-6xl font-extrabold leading-tight"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {current.title}
          </motion.h1>

          <motion.p
            key={`desc-${current.id}`}
            className="mt-4 text-lg md:text-xl text-neutral-200"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {current.desc}
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate('/shop')}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#CC0000] text-white px-6 py-3 font-semibold shadow-lg hover:bg-red-700 focus-visible:outline-none"
          >
            Shop Now <ArrowRight className="w-5 h-5" />
          </motion.button>

          <div className="mt-6 flex items-center gap-2">
            {slides.map((s, i) => (
              <button
                key={s.id}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all ${
                  i === index ? 'w-8 bg-white' : 'w-4 bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}