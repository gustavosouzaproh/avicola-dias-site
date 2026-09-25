import { Banknote, CreditCard, Landmark, MessageCircle } from "lucide-react"
import { paymentMethods } from "@/data/site-content"

const paymentIcons = {
  cash: Banknote,
  pix: Landmark,
  credit: CreditCard,
  debit: CreditCard,
} as const

export function PagamentosSection() {
  return (
    <section id="pagamentos" aria-labelledby="pagamentos-title" className="scroll-mt-20 bg-primary py-16 text-background sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-background/65">Comodidade</p>
        <h2 id="pagamentos-title" className="mt-3 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
          Formas de <span className="italic">pagamento</span>
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-background/72 sm:text-lg">
          Escolha a forma mais conveniente para pagar sua compra.
        </p>

        <div className="mt-9 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {paymentMethods.map((method) => {
            const Icon = paymentIcons[method.icon]
            return (
              <div key={method.name} className="min-w-0 rounded-2xl border border-background/15 bg-background p-5 text-foreground shadow-[0_16px_40px_rgba(0,0,0,.16)] sm:p-6">
                <Icon aria-hidden="true" className="text-primary" />
                <strong className="mt-5 block break-words text-base sm:text-lg">{method.name}</strong>
              </div>
            )
          })}
        </div>

        <div className="mt-6 flex flex-col gap-5 rounded-2xl border border-background/20 bg-background/10 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-xl font-black">Vale-alimentação ou refeição</h3>
            <p className="mt-2 leading-7 text-background/70">Consulte a aceitação diretamente pelo WhatsApp da unidade de sua preferência.</p>
          </div>
          <a href="#lojas" className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-black text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-background">
            <MessageCircle aria-hidden="true" />
            Consultar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
