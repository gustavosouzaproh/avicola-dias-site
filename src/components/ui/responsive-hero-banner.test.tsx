import { render, screen, within } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it } from "vitest"
import ResponsiveHeroBanner from "./responsive-hero-banner"

describe("ResponsiveHeroBanner", () => {
  it("opens and closes the mobile navigation accessibly", async () => {
    const user = userEvent.setup()
    render(<ResponsiveHeroBanner navLinks={[{ label: "Aves", href: "#aves" }]} />)
    const toggle = screen.getByRole("button", { name: /abrir menu/i })
    expect(toggle).toHaveAttribute("aria-expanded", "false")
    await user.click(toggle)
    expect(toggle).toHaveAttribute("aria-expanded", "true")
    const mobileNavigation = screen.getByRole("navigation", { name: "Navegação móvel" })
    await user.click(within(mobileNavigation).getByRole("link", { name: "Aves" }))
    expect(toggle).toHaveAttribute("aria-expanded", "false")
  })

  it("does not render partners or remote images when partners are absent", () => {
    const { container } = render(<ResponsiveHeroBanner partners={[]} />)
    expect(screen.queryByText(/partner/i)).not.toBeInTheDocument()
    expect([...container.querySelectorAll("img")].every((img) => !img.src.includes("cdn.21st.dev"))).toBe(true)
  })

  it("uses the approved local hero assets by default", () => {
    render(<ResponsiveHeroBanner />)
    expect(screen.getByRole("img", { name: "Avícola Dias" })).toHaveAttribute("src", "./assets/logo-dias.png")
    expect(screen.getByRole("img", { name: "Aves em área de criação" })).toHaveAttribute("src", "./assets/hero.jpg")
  })
})
