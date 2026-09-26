import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import App from "./App"
import { navLinks } from "./data/site-content"

describe("App", () => {
  it("keeps the approved section order and footer", () => {
    render(<App />)
    const reviews = screen.getByRole("region", { name: /clientes dizem/i })
    const stores = screen.getByRole("region", { name: /visite uma de nossas lojas/i })
    expect(reviews.compareDocumentPosition(stores) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
    expect(screen.getByText("© 2026 Avícola Dias")).toBeInTheDocument()
    expect(screen.getByText("Todos os direitos reservados.")).toBeInTheDocument()
  })

  it("renders every approved section target", () => {
    const { container } = render(<App />)
    for (const link of navLinks) {
      expect(container.querySelector(link.href)).toBeInTheDocument()
    }
    expect(container.querySelector("#vivas-e-abatidas")).toBeInTheDocument()
  })

  it("passes only local images to the complete page", () => {
    const { container } = render(<App />)
    const images = [...container.querySelectorAll("img")]
    expect(images.length).toBeGreaterThanOrEqual(10)
    expect(images.every((image) => image.getAttribute("src")?.startsWith("./assets/"))).toBe(true)
  })
})
