export interface NavLink {
  label: string
  href: string
}

export interface Bird {
  name: string
  image: string
  alt: string
}

export interface RoastItem {
  name: string
}

export interface ProcessStep {
  number: string
  title: string
  description: string
}

export interface PaymentMethod {
  name: string
  icon: "cash" | "pix" | "credit" | "debit"
}

export interface Testimonial {
  name: string
  quote: string
  initials: string
}

export interface Store {
  city: "Itapevi" | "Jandira"
  name: string
  image: string
  imageAlt: string
  addressLines: readonly string[]
  phoneDisplay: string
  phoneHref: string
  whatsappHref: string
  mapHref: string
}

const availabilityMessage = encodeURIComponent(
  "Olá, Avícola Dias. Gostaria de consultar a disponibilidade das aves.",
)

export const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Aves", href: "#aves" },
  { label: "Assados", href: "#assados" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Pagamentos", href: "#pagamentos" },
  { label: "Avaliações", href: "#avaliacoes" },
  { label: "Lojas", href: "#lojas" },
] satisfies readonly NavLink[]

export const birds = [
  { name: "Galinha caipira", image: "/assets/galinha-caipira.jpg", alt: "Galinha caipira de plumagem marrom" },
  { name: "Frango branco", image: "/assets/frango-branco.jpg", alt: "Frango branco" },
  { name: "Frango carijó", image: "/assets/frango-carijo.jpg", alt: "Frango carijó de plumagem preta e branca" },
  { name: "Galinha matriz", image: "/assets/galinha-matriz.jpg", alt: "Galinha matriz branca" },
  { name: "Galo", image: "/assets/galo.jpg", alt: "Galo de plumagem branca e preta" },
] satisfies readonly Bird[]

export const roastItems = [
  { name: "Frango assado" },
  { name: "Costela bovina" },
  { name: "Costelinha suína" },
  { name: "Cupim" },
  { name: "Fraldinha" },
  { name: "Coxa assada" },
  { name: "Linguiça" },
] satisfies readonly RoastItem[]

export const processSteps = [
  { number: "01", title: "Você faz o pedido", description: "Fale com a unidade de sua preferência por telefone ou WhatsApp." },
  { number: "02", title: "Pesamos a ave", description: "A pesagem é feita para confirmar o seu pedido." },
  { number: "03", title: "Abatemos na hora", description: "Se você escolher a ave abatida, o preparo é realizado no momento." },
  { number: "04", title: "Ou leve a ave viva", description: "Se preferir, você também pode levar a ave viva." },
] satisfies readonly ProcessStep[]

export const paymentMethods = [
  { name: "Dinheiro", icon: "cash" },
  { name: "Pix", icon: "pix" },
  { name: "Cartão de crédito", icon: "credit" },
  { name: "Cartão de débito", icon: "debit" },
] satisfies readonly PaymentMethod[]

export const testimonials = [
  { name: "Guga San", quote: "Ambiente limpo, bom atendimento e cumpre o que promete. Recomendo!", initials: "G" },
  { name: "Jaqueline Costa", quote: "Excelente atendimento, qualidade e preço justo!", initials: "J" },
  { name: "Sandra Regina", quote: "Avaliação de 5 estrelas para a Avícola Dias.", initials: "S" },
] satisfies readonly Testimonial[]

export const stores = [
  {
    city: "Itapevi",
    name: "Avícola Dias Itapevi",
    image: "/assets/loja-itapevi.jpg",
    imageAlt: "Fachada da Avícola Dias em Itapevi",
    addressLines: [
      "Rod. Engenheiro Renê Benedito da Silva, 2180",
      "Chácara Santa Cecília, Itapevi - SP",
      "CEP 06655-240",
    ],
    phoneDisplay: "(11) 92169-3671",
    phoneHref: "tel:+5511921693671",
    whatsappHref: `https://wa.me/5511921693671?text=${availabilityMessage}`,
    mapHref: "https://www.google.com/maps/search/?api=1&query=Rod.%20Engenheiro%20Ren%C3%AA%20Benedito%20da%20Silva%2C%202180%2C%20Itapevi%20-%20SP",
  },
  {
    city: "Jandira",
    name: "Avícola Dias Jandira",
    image: "/assets/loja-jandira.webp",
    imageAlt: "Fachada da Avícola Dias em Jandira",
    addressLines: [
      "R. São Bernardo do Campo, 135",
      "Parque Santa Tereza, Jandira - SP",
      "CEP 06622-200",
    ],
    phoneDisplay: "(11) 4618-9720",
    phoneHref: "tel:+551146189720",
    whatsappHref: `https://wa.me/551146189720?text=${availabilityMessage}`,
    mapHref: "https://www.google.com/maps/search/?api=1&query=R.%20S%C3%A3o%20Bernardo%20do%20Campo%2C%20135%2C%20Jandira%20-%20SP",
  },
] satisfies readonly Store[]
