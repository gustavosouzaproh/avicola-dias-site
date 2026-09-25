import { ArrowRight } from "lucide-react"
import { roastItems } from "@/data/site-content"

export function AssadosSection() {
  return (
    <section id="assados" aria-labelledby="assados-title" className="scroll-mt-20 bg-background px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-3xl border border-foreground/10 bg-bg-100 shadow-[0_30px_80px_rgba(0,0,0,.28)] lg:grid-cols-[.88fr_1.12fr]">
        <div className="relative min-h-[360px] lg:min-h-[620px]">
          <img
            src="/assets/assados-domingo.webp"
            alt="Frangos, carnes e linguiças assando na churrasqueira da Avícola Dias"
            loading="lazy"
            className="absolute inset-0 size-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/55 via-transparent to-transparent" />
          <p className="absolute left-5 top-5 rounded-full bg-primary px-4 py-2 text-xs font-black uppercase tracking-wider text-background">
            Somente aos domingos
          </p>
        </div>

        <div className="flex min-w-0 flex-col justify-center px-5 py-10 sm:px-10 lg:px-14 lg:py-16">
          <h2 id="assados-title" className="break-words font-serif text-4xl leading-[1.05] text-foreground sm:text-5xl lg:text-6xl">
            Trabalhamos com <span className="text-primary italic">assados</span> aos domingos
          </h2>
          <p className="mt-6 text-base leading-7 text-foreground/68 sm:text-lg sm:leading-8">
            Preparamos uma seleção de carnes assadas para o almoço de domingo. Faça seu pedido diretamente com uma de nossas unidades e consulte a disponibilidade.
          </p>
          <ul className="mt-7 grid grid-cols-1 gap-x-6 gap-y-3 min-[420px]:grid-cols-2" aria-label="Opções de assados">
            {roastItems.map((item) => (
              <li key={item.name} className="flex items-center gap-3 font-bold text-foreground">
                <span className="size-2 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                {item.name}
              </li>
            ))}
          </ul>
          <a
            href="#lojas"
            className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-center text-sm font-black text-background transition-transform hover:-translate-y-0.5 hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Consultar assados de domingo
            <ArrowRight aria-hidden="true" />
          </a>
          <p className="mt-4 text-sm text-foreground/55">Opções sujeitas à disponibilidade de cada unidade.</p>
        </div>
      </div>
    </section>
  )
}
