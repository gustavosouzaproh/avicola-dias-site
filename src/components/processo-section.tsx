import { processSteps } from "@/data/site-content"

export function ProcessoSection() {
  return (
    <section id="como-funciona" aria-labelledby="processo-title" className="scroll-mt-20 bg-background py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-primary">Simples e direto</p>
        <h2 id="processo-title" className="mt-3 font-serif text-4xl leading-tight text-foreground sm:text-5xl lg:text-6xl">
          Como funciona o <span className="italic text-primary">pedido</span>
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-7 text-foreground/65 sm:text-lg">
          Um atendimento direto, com pesagem e preparo feito no momento.
        </p>

        <ol className="mt-10 grid border-y border-foreground/15 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
          {processSteps.map((step) => (
            <li key={step.number} className="min-w-0 border-b border-foreground/15 px-1 py-7 last:border-b-0 sm:border-b-0 sm:px-6 sm:[&:nth-child(odd)]:border-r lg:border-r lg:px-7 lg:last:border-r-0">
              <span className="font-serif text-3xl italic text-primary">{step.number}</span>
              <h3 className="mt-5 text-lg font-black text-foreground">{step.title}</h3>
              <p className="mt-3 leading-7 text-foreground/60">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
