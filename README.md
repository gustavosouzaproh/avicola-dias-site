# Avícola Dias

Landing page da Avícola Dias construída com React, TypeScript, Vite, Tailwind CSS 4 e estrutura shadcn. O site mantém a identidade preta, amarela e branca, apresenta aves vivas ou abatidas, assados aos domingos, formas de pagamento, avaliações e as lojas de Jandira e Itapevi.

## Estrutura

- `src/components/ui/responsive-hero-banner.tsx`: hero responsivo e navegação.
- `src/components`: seções comerciais da página.
- `src/data/site-content.ts`: conteúdo, contatos e links.
- `public/assets`: dez imagens originais preservadas sem alteração.
- `dist`: build estático usado pela hospedagem.

O shadcn usa `src/components/ui` como diretório padrão, disponível pelo alias `@/components/ui`.

## Instalação e desenvolvimento

```powershell
npm install
npm run dev
```

Abra o endereço exibido pelo Vite.

## Validação

```powershell
npm run verify:assets
npm test
npm run build
npm run test:e2e
```

`verify:assets` compara os arquivos com os hashes SHA-256 aprovados. Os testes de navegador verificam as larguras de 320, 390, 768 e 1440 pixels, o menu móvel e o título dos assados.

## Build de produção

```powershell
npm run build
```

A hospedagem continua servindo a pasta `dist`, conforme `.openai/hosting.json`.

## Contato

O site não usa formulário. Pedidos e consultas são direcionados por telefone ou WhatsApp para as unidades de Itapevi e Jandira.
