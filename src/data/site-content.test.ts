import { describe, expect, it } from "vitest"
import { birds, navLinks, stores } from "./site-content"

describe("site content", () => {
  it("keeps the approved bird order and local assets", () => {
    expect(birds.map((bird) => bird.name)).toEqual([
      "Galinha caipira",
      "Frango branco",
      "Frango carijó",
      "Galinha matriz",
      "Galo",
    ])
    expect(birds.every((bird) => bird.image.startsWith("./assets/"))).toBe(true)
  })

  it("keeps contact display values aligned with link destinations", () => {
    expect(stores).toEqual(expect.arrayContaining([
      expect.objectContaining({ city: "Jandira", phoneDisplay: "(11) 4618-9720", phoneHref: "tel:+551146189720" }),
      expect.objectContaining({ city: "Itapevi", phoneDisplay: "(11) 92169-3671", phoneHref: "tel:+5511921693671" }),
    ]))
    expect(stores.every((store) => store.whatsappHref.includes(store.phoneHref.replace("tel:+", "")))).toBe(true)
  })

  it("links every navigation item to a unique section id", () => {
    expect(new Set(navLinks.map((item) => item.href)).size).toBe(navLinks.length)
  })
})
