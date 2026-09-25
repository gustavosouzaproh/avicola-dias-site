import { Quote, Star } from "lucide-react"
import { testimonials } from "@/data/site-content"

export function AvaliacoesSection() {
  return (
    <section id="avaliacoes" aria-labelledby="avaliacoes-title" className="scroll-mt-20 bg-background py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-primary">Quem compra, recomenda</p>
          <h2 id="avaliacoes-title" className="mt-3 font-serif text-4xl leading-tight text-foreground sm:text-5xl lg:text-6xl">
            O que nossos <span className="italic text-primary">clientes</span> dizem
          </h2>
          <p className="mt-5 text-base leading-7 text-foreground/65 sm:text-lg">Avaliações compartilhadas por clientes da Avícola Dias.</p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3 lg:mt-14">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="relative min-w-0 overflow-hidden rounded-2xl border border-foreground/10 bg-bg-100 p-6 sm:p-7">
              <Quote aria-hidden="true" className="absolute right-5 top-5 text-primary/20" />
              <p className="flex gap-0.5 text-primary" aria-label="5 de 5 estrelas">
                <span className="sr-only">★★★★★</span>
                {[0, 1, 2, 3, 4].map((star) => <Star key={star} aria-hidden="true" fill="currentColor" />)}
              </p>
              <blockquote className="mt-6 min-h-24 text-lg leading-8 text-foreground">“{testimonial.quote}”</blockquote>
              <div className="mt-7 flex items-center gap-3 border-t border-foreground/10 pt-5">
                <span className="inline-flex size-11 items-center justify-center rounded-full bg-primary font-black text-background">{testimonial.initials}</span>
                <div className="min-w-0">
                  <strong className="block truncate text-foreground">{testimonial.name}</strong>
                  <span className="text-sm text-foreground/55">Cliente da Avícola Dias</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}


