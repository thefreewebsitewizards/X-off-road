import HeroSection from '../components/HeroSection'

export default function LandingPage() {
  return (
    <div className="px-4 md:px-10 lg:px-20 py-5">
      <div className="layout-content-container flex flex-col max-w-[1280px] mx-auto flex-1">
        <HeroSection />

        <section id="categories" className="py-16 scroll-mt-24">
          <h2 className="text-2xl font-bold leading-tight tracking-tight px-4 pb-6 text-center md:text-3xl">Explore Our Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
            <div
              className="group relative bg-cover bg-center flex flex-col rounded-lg justify-end p-4 aspect-square overflow-hidden"
              data-alt="A mountain bike on a dirt path in a forest."
              style={{ backgroundImage: 'url("/image-banner-hdk-pit-bikes.jpg")' }}
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300"></div>
              <div className="relative z-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white text-lg font-bold leading-tight">Mountain Bikes</p>
                <a className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300" href="#">
                  View <span className="material-symbols-outlined text-xs align-middle">arrow_forward</span>
                </a>
              </div>
            </div>

            <div
              className="group relative bg-cover bg-center flex flex-col rounded-lg justify-end p-4 aspect-square overflow-hidden"
              data-alt="A sleek road bike on an empty paved road."
              style={{ backgroundImage: 'url("/image-banner-2-utv.jpg")' }}
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300"></div>
              <div className="relative z-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white text-lg font-bold leading-tight">Road Bikes</p>
                <a className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300" href="#">
                  View <span className="material-symbols-outlined text-xs align-middle">arrow_forward</span>
                </a>
              </div>
            </div>

            <div
              className="group relative bg-cover bg-center flex flex-col rounded-lg justify-end p-4 aspect-square overflow-hidden"
              data-alt="An electric bike parked in a modern city street."
              style={{ backgroundImage: 'url("/image-banner-3-electrics.jpg")' }}
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300"></div>
              <div className="relative z-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white text-lg font-bold leading-tight">Electric Bikes</p>
                <a className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300" href="#">
                  View <span className="material-symbols-outlined text-xs align-middle">arrow_forward</span>
                </a>
              </div>
            </div>

            <div
              className="group relative bg-cover bg-center flex flex-col rounded-lg justify-end p-4 aspect-square overflow-hidden"
              data-alt="A colourful kid's bike with training wheels on a sidewalk."
              style={{ backgroundImage: 'url("/sx125-blue.jpeg")' }}
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300"></div>
              <div className="relative z-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white text-lg font-bold leading-tight">Kids Bikes</p>
                <a className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300" href="#">
                  View <span className="material-symbols-outlined text-xs align-middle">arrow_forward</span>
                </a>
              </div>
            </div>
            {/* Additional categories */}
            <div
              className="group relative bg-cover bg-center flex flex-col rounded-lg justify-end p-4 aspect-square overflow-hidden"
              data-alt="A gravel bike on a rugged path."
              style={{ backgroundImage: 'url("/image-banner-2-utv.jpg")' }}
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300"></div>
              <div className="relative z-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white text-lg font-bold leading-tight">Gravel Bikes</p>
                <a className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300" href="#">
                  View <span className="material-symbols-outlined text-xs align-middle">arrow_forward</span>
                </a>
              </div>
            </div>
            <div
              className="group relative bg-cover bg-center flex flex-col rounded-lg justify-end p-4 aspect-square overflow-hidden"
              data-alt="A hybrid bike in an urban setting."
              style={{ backgroundImage: 'url("/image-banner-3-electrics.jpg")' }}
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300"></div>
              <div className="relative z-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white text-lg font-bold leading-tight">Hybrid Bikes</p>
                <a className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300" href="#">
                  View <span className="material-symbols-outlined text-xs align-middle">arrow_forward</span>
                </a>
              </div>
            </div>
            <div
              className="group relative bg-cover bg-center flex flex-col rounded-lg justify-end p-4 aspect-square overflow-hidden"
              data-alt="A BMX bike in a skate park."
              style={{ backgroundImage: 'url("/image-banner-hdk-pit-bikes.jpg")' }}
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300"></div>
              <div className="relative z-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white text-lg font-bold leading-tight">BMX</p>
                <a className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300" href="#">
                  View <span className="material-symbols-outlined text-xs align-middle">arrow_forward</span>
                </a>
              </div>
            </div>
            <div
              className="group relative bg-cover bg-center flex flex-col rounded-lg justify-end p-4 aspect-square overflow-hidden"
              data-alt="A compact folding bike."
              style={{ backgroundImage: 'url("/sx125-blue.jpeg")' }}
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300"></div>
              <div className="relative z-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white text-lg font-bold leading-tight">Folding Bikes</p>
                <a className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300" href="#">
                  View <span className="material-symbols-outlined text-xs align-middle">arrow_forward</span>
                </a>
              </div>
            </div>
            <div
              className="group relative bg-cover bg-center flex flex-col rounded-lg justify-end p-4 aspect-square overflow-hidden"
              data-alt="A fat tire bike on snow."
              style={{ backgroundImage: 'url("/image-banner-2-utv.jpg")' }}
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300"></div>
              <div className="relative z-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white text-lg font-bold leading-tight">Fat Tire Bikes</p>
                <a className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300" href="#">
                  View <span className="material-symbols-outlined text-xs align-middle">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* New Arrivals Section */}
        <section id="new-arrivals" className="py-16 scroll-mt-24">
          <h2 className="text-2xl font-bold leading-tight tracking-tight px-4 pb-6 text-center md:text-3xl">New Arrivals</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              { name: 'AeroLite 300', price: '$1,299', img: '/image-banner-2-utv.jpg' },
              { name: 'TrailMaster S', price: '$2,799', img: '/sx125-blue.jpeg' },
              { name: 'CityCruise 2', price: '$899', img: '/image-banner-3-electrics.jpg' },
              { name: 'KidX Spark', price: '$249', img: '/image-banner-hdk-pit-bikes.jpg' },
            ].map((p) => (
              <div key={p.name} className="bg-white dark:bg-gray-800/50 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group">
                <div className="relative">
                  <img className="w-full h-56 object-cover" src={p.img} alt={p.name} />
                  <div className="absolute top-2 right-2">
                    <button className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm p-2 rounded-full text-secondary-text-light dark:text-secondary-text-dark hover:text-primary transition-colors">
                      <span className="material-symbols-outlined text-xl">favorite_border</span>
                    </button>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg">{p.name}</h3>
                  <p className="text-secondary-text-light dark:text-secondary-text-dark text-sm mt-1">Freshly added to our lineup</p>
                  <div className="flex justify-between items-center mt-4">
                    <p className="font-bold text-xl text-primary">{p.price}</p>
                    <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-red-700 transition-colors">Add to Cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Accessories Section */}
        <section id="accessories" className="py-16 scroll-mt-24">
          <div className="max-w-6xl mx-auto px-4">
            <div className="border-b border-gray-200 uppercase font-semibold tracking-wider py-4 mb-8">Accessories</div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { title: 'Helmets', img: '/image-banner-hdk-pit-bikes.jpg' },
                { title: 'Lights', img: '/image-banner-3-electrics.jpg' },
                { title: 'Locks', img: '/image-banner-2-utv.jpg' },
                { title: 'Repair Kits', img: '/sx125-blue.jpeg' },
              ].map((item) => (
                <div key={item.title} className="group relative bg-cover bg-center flex flex-col rounded-lg justify-end p-4 aspect-square overflow-hidden" style={{ backgroundImage: `url('${item.img}')` }}>
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300"></div>
                  <div className="relative z-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white text-lg font-bold leading-tight">{item.title}</p>
                    <a className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300" href="#">
                      View <span className="material-symbols-outlined text-xs align-middle">arrow_forward</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <h2 className="text-2xl font-bold leading-tight tracking-tight px-4 pb-6 text-center md:text-3xl">Our Best Sellers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-white dark:bg-gray-800/50 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative">
                <img className="w-full h-56 object-cover" data-alt="A modern black and red road bike" src="/image-banner-2-utv.jpg" />
                <div className="absolute top-2 right-2">
                  <button className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm p-2 rounded-full text-secondary-text-light dark:text-secondary-text-dark hover:text-primary transition-colors">
                    <span className="material-symbols-outlined text-xl">favorite_border</span>
                  </button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg">AeroBlaze 5000</h3>
                <p className="text-secondary-text-light dark:text-secondary-text-dark text-sm mt-1">The ultimate speed machine</p>
                <div className="flex items-center mt-2">
                  <span className="material-symbols-outlined text-yellow-500 text-base">star</span>
                  <span className="material-symbols-outlined text-yellow-500 text-base">star</span>
                  <span className="material-symbols-outlined text-yellow-500 text-base">star</span>
                  <span className="material-symbols-outlined text-yellow-500 text-base">star</span>
                  <span className="material-symbols-outlined text-gray-400 text-base">star_half</span>
                  <span className="text-xs text-secondary-text-light dark:text-secondary-text-dark ml-1">(124)</span>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <p className="font-bold text-xl text-primary">$2,499</p>
                  <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-red-700 transition-colors">Add to Cart</button>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white dark:bg-gray-800/50 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative">
                <img className="w-full h-56 object-cover" data-alt="A sturdy mountain bike with thick tires" src="/sx125-blue.jpeg" />
                <div className="absolute top-2 right-2">
                  <button className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm p-2 rounded-full text-secondary-text-light dark:text-secondary-text-dark hover:text-primary transition-colors">
                    <span className="material-symbols-outlined text-xl">favorite_border</span>
                  </button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg">TrailRipper Pro</h3>
                <p className="text-secondary-text-light dark:text-secondary-text-dark text-sm mt-1">Conquer any terrain</p>
                <div className="flex items-center mt-2">
                  <span className="material-symbols-outlined text-yellow-500 text-base">star</span>
                  <span className="material-symbols-outlined text-yellow-500 text-base">star</span>
                  <span className="material-symbols-outlined text-yellow-500 text-base">star</span>
                  <span className="material-symbols-outlined text-yellow-500 text-base">star</span>
                  <span className="material-symbols-outlined text-yellow-500 text-base">star</span>
                  <span className="text-xs text-secondary-text-light dark:text-secondary-text-dark ml-1">(98)</span>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <p className="font-bold text-xl text-primary">$3,199</p>
                  <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-red-700 transition-colors">Add to Cart</button>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white dark:bg-gray-800/50 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative">
                <img className="w-full h-56 object-cover" data-alt="A sleek electric bike for commuting" src="/image-banner-3-electrics.jpg" />
                <div className="absolute top-2 right-2">
                  <button className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm p-2 rounded-full text-secondary-text-light dark:text-secondary-text-dark hover:text-primary transition-colors">
                    <span className="material-symbols-outlined text-xl">favorite_border</span>
                  </button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg">VoltCruise X</h3>
                <p className="text-secondary-text-light dark:text-secondary-text-dark text-sm mt-1">Effortless urban mobility</p>
                <div className="flex items-center mt-2">
                  <span className="material-symbols-outlined text-yellow-500 text-base">star</span>
                  <span className="material-symbols-outlined text-yellow-500 text-base">star</span>
                  <span className="material-symbols-outlined text-yellow-500 text-base">star</span>
                  <span className="material-symbols-outlined text-yellow-500 text-base">star</span>
                  <span className="material-symbols-outlined text-gray-400 text-base">star_outline</span>
                  <span className="text-xs text-secondary-text-light dark:text-secondary-text-dark ml-1">(203)</span>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <p className="font-bold text-xl text-primary">$1,999</p>
                  <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-red-700 transition-colors">Add to Cart</button>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white dark:bg-gray-800/50 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative">
                <img className="w-full h-56 object-cover" data-alt="A child's bike in bright blue" src="/image-banner-hdk-pit-bikes.jpg" />
                <div className="absolute top-2 right-2">
                  <button className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm p-2 rounded-full text-secondary-text-light dark:text-secondary-text-dark hover:text-primary transition-colors">
                    <span className="material-symbols-outlined text-xl">favorite_border</span>
                  </button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg">Sparkle Rider</h3>
                <p className="text-secondary-text-light dark:text-secondary-text-dark text-sm mt-1">First adventures, made safe</p>
                <div className="flex items-center mt-2">
                  <span className="material-symbols-outlined text-yellow-500 text-base">star</span>
                  <span className="material-symbols-outlined text-yellow-500 text-base">star</span>
                  <span className="material-symbols-outlined text-yellow-500 text-base">star</span>
                  <span className="material-symbols-outlined text-yellow-500 text-base">star</span>
                  <span className="material-symbols-outlined text-yellow-500 text-base">star</span>
                  <span className="text-xs text-secondary-text-light dark:text-secondary-text-dark ml-1">(55)</span>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <p className="font-bold text-xl text-primary">$299</p>
                  <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-red-700 transition-colors">Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50 dark:bg-gray-900/50 rounded-xl">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl">Get Exclusive Offers &amp; News</h2>
            <p className="mt-2 text-secondary-text-light dark:text-secondary-text-dark max-w-xl mx-auto">
              Subscribe to our newsletter and be the first to know about new arrivals, special promotions, and cycling tips.
            </p>
            <form className="mt-8 max-w-md mx-auto flex flex-col sm:flex-row gap-4">
              <input
                className="form-input w-full flex-grow resize-none overflow-hidden rounded-lg text-text-light dark:text-text-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-700 bg-background-light dark:bg-gray-800 h-12 placeholder:text-secondary-text-light dark:placeholder:text-secondary-text-dark px-4 text-base font-normal leading-normal"
                placeholder="Enter your email"
                type="email"
              />
              <button className="flex-shrink-0 w-full sm:w-auto flex items-center justify-center rounded-lg h-12 px-6 bg-primary text-white text-base font-bold hover:bg-red-700 transition-colors" type="submit">
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  )
}