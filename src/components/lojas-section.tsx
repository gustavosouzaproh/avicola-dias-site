import { ArrowUpRight, MapPin, MessageCircle, Phone } from "lucide-react"
import { stores } from "@/data/site-content"

export function LojasSection() {
  return (
    <section id="lojas" aria-labelledby="lojas-title" className="scroll-mt-20 bg-white py-16 text-background sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-amber-600">Jandira e Itapevi</p>
          <h2 id="lojas-title" className="mt-3 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Visite uma de nossas <span className="italic text-amber-600">lojas</span>
          </h2>
          <p className="mt-5 text-base leading-7 text-black/62 sm:text-lg">
            Para consultar disponibilidade e fazer seu pedido, fale por WhatsApp ou telefone.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:mt-14">
          {stores.map((store) => (
            <article key={store.city} className="min-w-0 overflow-hidden rounded-3xl border border-black/10 bg-neutral-50 shadow-[0_20px_50px_rgba(0,0,0,.08)]">
              <div className="aspect-[16/10] overflow-hidden bg-neutral-200">
                <img src={store.image} alt={store.imageAlt} loading="lazy" className="size-full object-cover transition-transform duration-500 hover:scale-[1.02]" />
              </div>
              <div className="p-5 sm:p-7">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-amber-600">Unidade {store.city}</p>
                <h3 className="mt-3 text-2xl font-black">{store.name}</h3>
                <address className="mt-5 flex gap-3 not-italic text-black/65">
                  <MapPin aria-hidden="true" className="mt-1 shrink-0 text-amber-600" />
                  <span className="min-w-0 break-words leading-7">
                    {store.addressLines.map((line) => <span key={line} className="block">{line}</span>)}
                  </span>
                </address>
                <a
                  href={store.phoneHref}
                  aria-label={`Ligar para a unidade de ${store.city} no número ${store.phoneDisplay}`}
                  className="mt-5 inline-flex items-center gap-2 font-black text-background hover:text-amber-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
                >
                  <Phone aria-hidden="true" />
                  {store.phoneDisplay}
                </a>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <a
                    href={store.whatsappHref}
                    aria-label={`WhatsApp da unidade de ${store.city}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#128C7E] px-5 py-3 text-center text-sm font-black text-white transition-colors hover:bg-[#075E54] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#128C7E]"
                  >
                    <MessageCircle aria-hidden="true" />
                    Chamar no WhatsApp
                  </a>
                  <a
                    href={store.mapHref}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-black/15 px-5 py-3 text-center text-sm font-black hover:border-amber-600 hover:text-amber-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
                  >
                    Ver no mapa
                    <ArrowUpRight aria-hidden="true" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
