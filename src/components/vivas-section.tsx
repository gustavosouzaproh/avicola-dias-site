import { Bird, Drumstick } from "lucide-react"

export function VivasSection() {
  return (
    <section id="vivas-e-abatidas" aria-labelledby="vivas-title" className="scroll-mt-20 bg-white py-16 text-background sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-2 md:items-center lg:px-8">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-amber-600">Você escolhe</p>
          <h2 id="vivas-title" className="mt-3 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Vivas e <span className="italic text-amber-600">abatidas</span>
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
          <div className="rounded-2xl border border-black/10 bg-neutral-50 p-6">
            <Bird aria-hidden="true" className="text-amber-600" />
            <h3 className="mt-5 text-xl font-black">Leve a ave viva</h3>
            <p className="mt-2 leading-7 text-black/65">Escolha a ave e leve viva, conforme a disponibilidade da unidade.</p>
          </div>
          <div className="rounded-2xl border border-black/10 bg-neutral-50 p-6">
            <Drumstick aria-hidden="true" className="text-amber-600" />
            <h3 className="mt-5 text-xl font-black">Abatida na hora</h3>
            <p className="mt-2 leading-7 text-black/65">Se preferir, realizamos o abatimento na hora, depois da pesagem.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
