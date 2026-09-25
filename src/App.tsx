import { AssadosSection } from "@/components/assados-section"
import { AvaliacoesSection } from "@/components/avaliacoes-section"
import { AvesSection } from "@/components/aves-section"
import { LojasSection } from "@/components/lojas-section"
import { PagamentosSection } from "@/components/pagamentos-section"
import { ProcessoSection } from "@/components/processo-section"
import ResponsiveHeroBanner from "@/components/ui/responsive-hero-banner"
import { VivasSection } from "@/components/vivas-section"
import { navLinks } from "@/data/site-content"

export default function App() {
  return (
    <>
      <a
        href="#conteudo"
        className="fixed left-4 top-4 z-[60] -translate-y-24 rounded-full bg-primary px-4 py-2 font-bold text-background transition-transform focus:translate-y-0"
      >
        Pular para o conteúdo
      </a>

      <main id="conteudo">
        <ResponsiveHeroBanner
          logoUrl="/assets/logo-dias.png"
          backgroundImageUrl="/assets/hero.jpg"
          navLinks={navLinks}
          badgeLabel="Avícola Dias"
          badgeText="Jandira e Itapevi"
          title="Aves vivas e abatidas"
          titleLine2="do seu jeito"
          description="Galinha caipira, frango branco, frango carijó, galinha matriz e galo. Escolha a ave, consulte a disponibilidade e fale diretamente com a loja mais próxima."
          primaryButtonText="Falar com uma loja"
          primaryButtonHref="#lojas"
          secondaryButtonText="Conhecer nossas aves"
          secondaryButtonHref="#aves"
          ctaButtonText="Fazer pedido"
          ctaButtonHref="#lojas"
          partners={[]}
        />
        <AvesSection />
        <AssadosSection />
        <VivasSection />
        <ProcessoSection />
        <PagamentosSection />
        <AvaliacoesSection />
        <LojasSection />
      </main>

      <footer className="border-t border-foreground/10 bg-background py-8 text-foreground">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 text-center sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:text-left lg:px-8">
          <strong>© 2026 Avícola Dias</strong>
          <span className="text-sm text-foreground/55">Todos os direitos reservados.</span>
        </div>
      </footer>
    </>
  )
}
