type AboutHeroProps = {
  title: string
  imageSrc?: string
}

export default function AboutHero({ title, imageSrc = '/image-banner-2-utv.jpg' }: AboutHeroProps) {
  return (
    <section className="relative w-full h-[40vh] md:h-[45vh] overflow-hidden rounded-xl">
      <img
        src={imageSrc}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover opacity-80"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent" />
      <div className="absolute top-0 left-0 w-full h-1 bg-[#CC0000]" />
      <div className="relative z-10 container mx-auto px-6 md:px-10 h-full flex items-center">
        <h1 className="text-white text-4xl md:text-5xl font-extrabold leading-tight">{title}</h1>
      </div>
    </section>
  )
}