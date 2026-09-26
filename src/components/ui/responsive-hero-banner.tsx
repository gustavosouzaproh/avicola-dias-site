"use client"

import { useState } from "react"
import { ArrowRight, ArrowUpRight, Menu, X } from "lucide-react"
import type { NavLink } from "@/data/site-content"
import { cn } from "@/lib/utils"

interface Partner {
  logoUrl: string
  href: string
  alt: string
}

export interface ResponsiveHeroBannerProps {
  logoUrl?: string
  backgroundImageUrl?: string
  navLinks?: readonly NavLink[]
  ctaButtonText?: string
  ctaButtonHref?: string
  badgeText?: string
  badgeLabel?: string
  title?: string
  titleLine2?: string
  description?: string
  primaryButtonText?: string
  primaryButtonHref?: string
  secondaryButtonText?: string
  secondaryButtonHref?: string
  partnersTitle?: string
  partners?: readonly Partner[]
}

const defaultNavLinks: readonly NavLink[] = [
  { label: "Início", href: "#inicio" },
  { label: "Aves", href: "#aves" },
  { label: "Assados", href: "#assados" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Pagamentos", href: "#pagamentos" },
  { label: "Avaliações", href: "#avaliacoes" },
  { label: "Lojas", href: "#lojas" },
]

export default function ResponsiveHeroBanner({
  logoUrl = "./assets/logo-dias.png",
  backgroundImageUrl = "./assets/hero.jpg",
  navLinks = defaultNavLinks,
  ctaButtonText = "Falar com uma loja",
  ctaButtonHref = "#lojas",
  badgeLabel = "Avícola Dias",
  badgeText = "Jandira e Itapevi",
  title = "Aves vivas e abatidas",
  titleLine2 = "do seu jeito",
  description = "Escolha sua ave, consulte a disponibilidade e fale diretamente com a loja mais próxima.",
  primaryButtonText = "Falar com uma loja",
  primaryButtonHref = "#lojas",
  secondaryButtonText = "Conhecer nossas aves",
  secondaryButtonHref = "#aves",
  partnersTitle = "",
  partners = [],
}: ResponsiveHeroBannerProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const closeMobileMenu = () => setMobileMenuOpen(false)

  return (
    <section
      id="inicio"
      aria-label="Aves vivas e abatidas em Jandira e Itapevi"
      className="relative isolate flex min-h-[680px] w-full items-center overflow-hidden bg-background pt-24 text-foreground sm:min-h-[720px] lg:min-h-screen"
    >
      <img
        src={backgroundImageUrl}
        alt="Aves em área de criação"
        className="absolute inset-0 size-full object-cover object-center"
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(9,9,11,.95)_0%,rgba(9,9,11,.82)_38%,rgba(9,9,11,.28)_72%,rgba(9,9,11,.46)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(0deg,rgba(9,9,11,.88)_0%,transparent_45%,rgba(9,9,11,.45)_100%)]" />

      <header className="fixed inset-x-0 top-0 z-50 border-t-4 border-primary bg-background/92 shadow-[0_10px_35px_rgba(0,0,0,.24)] backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#inicio" aria-label="Avícola Dias, início" className="inline-flex shrink-0 items-center">
            <img src={logoUrl} alt="Avícola Dias" className="h-14 w-auto object-contain sm:h-16" />
          </a>

          <nav aria-label="Navegação principal" className="hidden items-center gap-1 min-[1100px]:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-3 py-2 text-xs font-extrabold uppercase tracking-[0.06em] text-foreground/80 transition-colors hover:bg-primary/10 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                {link.label}
              </a>
            ))}
            <a
              href={ctaButtonHref}
              className="ml-2 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-extrabold text-background transition-transform hover:-translate-y-0.5 hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              {ctaButtonText}
              <ArrowUpRight aria-hidden="true" />
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="inline-flex size-11 items-center justify-center rounded-xl border border-foreground/15 bg-foreground/5 text-foreground transition-colors hover:border-primary/60 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary min-[1100px]:hidden"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {mobileMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav
            id="mobile-navigation"
            aria-label="Navegação móvel"
            className="border-t border-foreground/10 bg-background px-4 py-4 min-[1100px]:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className="rounded-xl px-4 py-3 text-sm font-extrabold uppercase tracking-wide text-foreground/85 hover:bg-primary hover:text-background focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={ctaButtonHref}
                onClick={closeMobileMenu}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-extrabold text-background focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                {ctaButtonText}
                <ArrowUpRight aria-hidden="true" />
              </a>
            </div>
          </nav>
        )}
      </header>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="animate-fade-slide-in-1 mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-primary/35 bg-background/65 p-1.5 pr-4 backdrop-blur">
            <span className="rounded-full bg-primary px-3 py-1 text-xs font-black uppercase tracking-wider text-background">
              {badgeLabel}
            </span>
            <span className="truncate text-sm font-bold text-foreground/90">{badgeText}</span>
          </div>

          <h1 className="animate-fade-slide-in-2 max-w-3xl font-serif text-5xl leading-[0.96] font-normal tracking-[-0.035em] text-foreground sm:text-6xl lg:text-8xl">
            {title}
            <span className="mt-2 block text-primary">{titleLine2}</span>
          </h1>

          <p className="animate-fade-slide-in-3 mt-6 max-w-2xl text-base leading-7 text-foreground/75 sm:text-lg sm:leading-8">
            {description}
          </p>

          <div className="animate-fade-slide-in-4 mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={primaryButtonHref}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-black text-background transition-transform hover:-translate-y-0.5 hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              {primaryButtonText}
              <ArrowRight aria-hidden="true" />
            </a>
            <a
              href={secondaryButtonHref}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-foreground/20 bg-background/45 px-6 py-3 text-sm font-bold text-foreground backdrop-blur transition-colors hover:border-primary/65 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              {secondaryButtonText}
              <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </div>

        {partners.length > 0 && (
          <div className="mt-16 max-w-5xl">
            {partnersTitle && <p className="text-sm text-foreground/65">{partnersTitle}</p>}
            <div className="mt-5 grid grid-cols-2 items-center gap-4 sm:grid-cols-3 md:grid-cols-5">
              {partners.map((partner) => (
                <a key={partner.href + partner.logoUrl} href={partner.href} className="rounded-full border border-foreground/10 bg-foreground/5 p-3">
                  <img src={partner.logoUrl} alt={partner.alt} className="h-8 w-full object-contain" />
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
