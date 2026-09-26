import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { AssadosSection } from "./assados-section"
import { AvaliacoesSection } from "./avaliacoes-section"
import { AvesSection } from "./aves-section"
import { LojasSection } from "./lojas-section"
import { PagamentosSection } from "./pagamentos-section"
import { ProcessoSection } from "./processo-section"
import { VivasSection } from "./vivas-section"

describe("commercial sections", () => {
  it("renders all five birds with their approved image paths", () => {
    render(<AvesSection />)
    expect(screen.getAllByRole("article")).toHaveLength(5)
    expect(screen.getByRole("img", { name: /galinha caipira/i })).toHaveAttribute("src", "./assets/galinha-caipira.jpg")
  })

  it("highlights only the word assados in the Sunday heading", () => {
    render(<AssadosSection />)
    const heading = screen.getByRole("heading", { name: "Trabalhamos com assados aos domingos" })
    expect(heading.querySelectorAll(".text-primary")).toHaveLength(1)
    expect(heading.querySelector(".text-primary")).toHaveTextContent("assados")
  })

  it("renders the choice between live and processed birds", () => {
    render(<VivasSection />)
    expect(screen.getByRole("region", { name: "Vivas e abatidas" })).toHaveTextContent(/abatida na hora/i)
  })

  it("renders all four order steps and payment methods", () => {
    const { unmount } = render(<ProcessoSection />)
    expect(screen.getByText("01")).toBeInTheDocument()
    expect(screen.getByText("04")).toBeInTheDocument()
    unmount()
    render(<PagamentosSection />)
    expect(screen.getByText("Dinheiro")).toBeInTheDocument()
    expect(screen.getByText("Cartão de débito")).toBeInTheDocument()
  })

  it("renders the three approved customer reviews", () => {
    render(<AvaliacoesSection />)
    expect(screen.getAllByText("★★★★★")).toHaveLength(3)
    expect(screen.getByText("Jaqueline Costa")).toBeInTheDocument()
  })

  it("renders exact store links", () => {
    render(<LojasSection />)
    expect(screen.getByRole("link", { name: /ligar.*jandira/i })).toHaveAttribute("href", "tel:+551146189720")
    expect(screen.getByRole("link", { name: /whatsapp.*jandira/i })).toHaveAttribute("href", expect.stringContaining("wa.me/551146189720"))
  })

  it("renders WhatsApp links as green external actions", () => {
    render(<LojasSection />)
    const whatsappLinks = screen.getAllByRole("link", { name: /whatsapp da unidade/i })

    expect(whatsappLinks).toHaveLength(2)
    whatsappLinks.forEach((link) => {
      expect(link).toHaveClass("bg-[#128C7E]", "text-white")
      expect(link).toHaveAttribute("target", "_blank")
      expect(link).toHaveAttribute("rel", "noreferrer")
    })
  })
})

