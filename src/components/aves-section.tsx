import { birds } from "@/data/site-content"

export function AvesSection() {
  return (
    <section id="aves" aria-labelledby="aves-title" className="scroll-mt-20 bg-background py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-primary">Vivas ou abatidas</p>
          <h2 id="aves-title" className="font-serif text-4xl leading-tight text-foreground sm:text-5xl lg:text-6xl">
            Nossas <span className="text-primary italic">aves</span>
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-foreground/65 sm:text-lg">
            Na Avícola Dias, você encontra aves vivas ou abatidas na hora, conforme a sua preferência.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 min-[360px]:grid-cols-2 sm:gap-5 lg:mt-14 lg:grid-cols-5">
          {birds.map((bird, index) => (
            <article
              key={bird.name}
              className={`group min-w-0 overflow-hidden rounded-2xl border border-foreground/10 bg-bg-100 shadow-[0_18px_45px_rgba(0,0,0,.18)] transition-transform duration-300 hover:-translate-y-1 ${
                index === birds.length - 1 ? "min-[360px]:col-span-2 min-[360px]:w-1/2 min-[360px]:justify-self-center lg:col-span-1 lg:w-auto" : ""
              }`}
            >
              <div className="aspect-square overflow-hidden bg-white">
                <img
                  src={bird.image}
                  alt={bird.alt}
                  loading="lazy"
                  className="size-full object-contain transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <h3 className="break-words border-t border-foreground/10 px-4 py-4 text-base font-black text-foreground sm:text-lg">
                {bird.name}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
