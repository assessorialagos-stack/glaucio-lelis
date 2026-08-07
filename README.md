# Site — Glaucio Lelis

Redesign completo. Substitui a versão escura/neon anterior por uma direção
clara, limpa e editorial.

**O produto principal é o curso** *Alma Estruturada* (9 módulos, R$ 297). Os
três livros entram como conteúdo incluso, e *A Identidade da Mulher* também é
vendida sozinha por R$ 97 como porta de entrada. A página inteira é construída
nessa hierarquia — ver `docs/O-QUE-MUDOU.md`, item 3c.

---

## Estrutura das pastas

```
site-glaucio-lelis/
├── novo-site/            ← O SITE. É só isso que vai para o ar.
│   ├── index.html
│   └── assets/
│       ├── css/style.css       sistema visual completo
│       ├── js/config.js        ← preços e links de checkout (edite aqui)
│       ├── js/app.js           comportamento
│       ├── fonts/              Bodoni Moda + Source Sans 3 (self-hosted)
│       └── img/
│           ├── logo/           monograma GL
│           ├── capas/          capas dos e-books (web)
│           ├── aquarelas/      ilustrações extraídas do livro
│           └── retratos/       foto oficial do autor
│
├── capas-ebooks-png/     Capas em PNG alta resolução (1600×2263)
├── assets-extras/        Imagens aproveitáveis que não entraram no layout
├── material-original/    Cópia intocada de tudo que foi enviado
│   ├── ebooks/  imagens/  video/  site-antigo/
└── docs/                 Textos extraídos dos PDFs + anotações
```

As três últimas pastas estão no `.gitignore`: são arquivo de origem, não
fazem parte do deploy.

---

## Ver o site agora

Abra `novo-site/index.html` no navegador. Não precisa de servidor nem build.

---

## Publicar no Vercel + GitHub

1. Suba **esta pasta** (`site-glaucio-lelis/`) como repositório no GitHub.
2. No Vercel: *Add New → Project* e selecione o repositório.
3. Framework Preset: **Other**. Não altere mais nada — o `vercel.json` já
   aponta a pasta de saída (`novo-site`) e configura o cache.
4. Deploy.

Sem build step, sem dependências, sem `node_modules`.

---

## As duas ofertas

Não há venda de livro avulso. São dois acessos, com os livros agrupados de
formas diferentes:

| | Combo VIP Premium | Identidade da Mulher |
|---|---|---|
| Preço | R$ 297 *(de R$ 984,00)* | R$ 97 |
| Curso *Alma Estruturada* (9 módulos) | Vitalício | Não inclui |
| Identidade da Mulher | E-book | Livro físico + e-book |
| Ansiedade nunca mais | Bônus | — |
| Emagrecendo com Saúde | Bônus | — |
| Checkout | `pay.hotmart.com/I101283775S` | `pay.hotmart.com/P105542619V` |

Para alterar preço ou link: **`novo-site/assets/js/config.js`**.

```js
ofertas: {
  vip:   { de: 'R$ 984,00', preco: 'R$ 297', link: 'https://pay.hotmart.com/I101283775S' },
  livro: { de: null,        preco: 'R$ 97',  link: 'https://pay.hotmart.com/P105542619V' }
}
```

Os mesmos valores também estão no `index.html` (marcados com `data-preco` e
`data-link`), para que a oferta continue correta se o JavaScript falhar. Numa
mudança definitiva de preço, troque nos dois lugares.

Detalhes em [`docs/LINKS-E-PRECOS.md`](docs/LINKS-E-PRECOS.md).

---

## Decisões técnicas

- **HTML/CSS/JS puro.** Sem framework, sem CDN, sem build. Carrega rápido e
  qualquer pessoa consegue editar. Migrar para Astro ou Next depois é direto,
  porque a marcação já é semântica e o CSS é isolado por componente.
- **Fontes self-hosted** (89 KB no total). O site antigo dependia do CDN do
  Tailwind e do Google Fonts — dois pontos de falha e de bloqueio de render.
- **Sem tema escuro.** Proposital: veja `docs/O-QUE-MUDOU.md`.
- **Conteúdo visível sem JavaScript.** As animações só entram se o script
  carregar; se falhar, a página continua legível.
- **Peso total: ~1,2 MB**, incluindo todas as imagens.
