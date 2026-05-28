const stats = [
  ["12+", "Global Regions Served"],
  ["500K+", "Monthly Capacity"],
  ["12", "Production Lines"],
  ["AQL 1.5", "Quality Matrix"]
];

const products = [
  ["RANGE Series Hoodie", "Cotton-Spandex · 320 GSM", "Knitwear"],
  ["12 GG Corporate Crewneck", "Fine-Gauge Flat-Knit", "Sweaters"],
  ["Structured Overshirt", "Compact Cotton Twill", "Woven"],
  ["Jayqo Performance Elastic", "Reinforced Webbing", "Accessories"]
];

export default function Home() {
  return (
    <main className="min-h-screen bg-softIvory text-charcoalDark">
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-forestGreen/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <p className="font-serif text-xl font-bold tracking-widest text-white">KOEL GROUP</p>
            <p className="text-[10px] uppercase tracking-[0.25em] text-white/50">Integrated Apparel Platform</p>
          </div>
          <a href="#inquiry" className="border border-white/20 px-5 py-2 text-xs uppercase tracking-widest text-white hover:border-fuchsia258 hover:text-fuchsia258">
            Inquire Now
          </a>
        </div>
      </nav>

      <section className="relative flex min-h-screen items-center overflow-hidden bg-forestGreen px-6 pt-24 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(200,42,122,0.22),transparent_42%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="mb-5 inline-flex border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.25em] text-white/80">Design & Production House</p>
            <h1 className="font-serif text-5xl font-bold leading-tight md:text-7xl">The Physics of Premium Manufacturing.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">Koel Group operates as a vertically integrated apparel design and production ecosystem specializing in premium knitwear, fine-gauge sweaters and sustainable textile manufacturing.</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#products" className="bg-white px-8 py-4 text-xs font-semibold uppercase tracking-widest text-forestGreen hover:bg-fuchsia258 hover:text-white">Explore Products</a>
              <a href="#factory" className="border border-white/20 px-8 py-4 text-xs uppercase tracking-widest text-white hover:border-fuchsia258 hover:text-fuchsia258">View Factory</a>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl">
              <h2 className="font-serif text-2xl">Live Capability Matrix</h2>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {stats.map(([value, label]) => (
                  <div key={label} className="border border-white/10 p-5">
                    <p className="text-3xl font-bold text-fuchsia258">{value}</p>
                    <p className="mt-2 text-[11px] uppercase tracking-widest text-white/50">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="mx-auto max-w-7xl px-6 py-28">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-fuchsia258">Product Experience</p>
        <h2 className="mt-3 font-serif text-4xl text-forestGreen md:text-5xl">Premium Product Architecture</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {products.map(([title, spec, category]) => (
            <article key={title} className="border border-neutral-200 bg-white p-6 shadow-sm hover:border-fuchsia258/50">
              <div className="mb-6 flex h-40 items-center justify-center bg-neutral-100 text-xs text-neutral-400">Real product image</div>
              <p className="text-[10px] uppercase tracking-widest text-neutral-400">{category}</p>
              <h3 className="mt-2 font-serif text-xl text-forestGreen">{title}</h3>
              <p className="mt-3 text-sm text-neutral-500">{spec}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="factory" className="bg-charcoalDark px-6 py-28 text-white">
        <div className="mx-auto max-w-7xl grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-fuchsia258">Gazipur Facility</p>
            <h2 className="mt-3 font-serif text-5xl">Factory Infrastructure</h2>
            <p className="mt-6 leading-8 text-white/60">Built for structured production, inline quality control and export-grade execution across premium knitwear, sweaters, woven products and accessories.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {stats.map(([value, label]) => (
              <div key={label} className="border border-white/10 bg-white/[0.03] p-6">
                <p className="text-3xl font-bold">{value}</p>
                <p className="mt-2 text-xs uppercase tracking-widest text-white/40">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="inquiry" className="mx-auto max-w-7xl px-6 py-28">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-fuchsia258">B2B Gateway</p>
            <h2 className="mt-3 font-serif text-5xl text-forestGreen">Start a Technical Sampling Conversation</h2>
            <p className="mt-6 leading-8 text-neutral-600">Submit your tech-pack, target category and MOQ requirement. Our team will review feasibility and respond with a structured production pathway.</p>
          </div>
          <form className="space-y-4 border border-neutral-200 bg-white p-8 shadow-sm">
            <input className="w-full border border-neutral-200 px-4 py-3" placeholder="Company name" />
            <input className="w-full border border-neutral-200 px-4 py-3" placeholder="Corporate email" />
            <input className="w-full border border-neutral-200 px-4 py-3" placeholder="Product category" />
            <textarea className="h-32 w-full border border-neutral-200 px-4 py-3" placeholder="Project details" />
            <button className="w-full bg-forestGreen py-4 text-xs font-semibold uppercase tracking-widest text-white hover:bg-fuchsia258">Send Inquiry</button>
          </form>
        </div>
      </section>

      <footer className="bg-forestGreen px-6 py-10 text-center text-xs uppercase tracking-widest text-white/50">
        © 2026 Koel Group · Uttara, Dhaka · Gazipur, Bangladesh
      </footer>
    </main>
  );
}
