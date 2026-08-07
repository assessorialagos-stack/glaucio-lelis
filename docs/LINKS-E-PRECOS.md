# Ofertas, preços e links

O site vende **duas ofertas**. Os livros não têm venda avulsa — cada um vem
incluso dentro de um dos dois acessos.

Estrutura copiada de `glauciolelis.com.br/#planos`.

---

## As duas ofertas

### 1. Combo VIP Premium
*Selo: "A Oferta Mais Completa"* · Acesso Total Vitalício

| | |
|---|---|
| De | R$ 984,00 |
| Por | **R$ 297** |
| Checkout | `https://pay.hotmart.com/I101283775S` |
| Botão | "Assinar Combo Vip" |

Inclui:
- Acesso VITALÍCIO ao curso completo (9 Módulos)
- Incluso: E-book Identidade da Mulher
- Bônus: E-book Emagrecendo com Saúde
- Bônus: E-book Ansiedade Nunca Mais
- Suporte Premium prioritário

### 2. Identidade da Mulher
*Selo: "Público Feminino"* · Livro Físico + E-book

| | |
|---|---|
| Por | **R$ 97** |
| Checkout | `https://pay.hotmart.com/P105542619V` |
| Botão | "Comprar Livro" |

Inclui:
- Receba o Livro Físico em Casa
- Acesso imediato ao E-book
- Focado na restauração feminina
- Não inclui aulas em vídeo do curso

---

## Onde alterar

**`novo-site/assets/js/config.js`** — um arquivo só.

```js
ofertas: {
  vip: {
    de:    'R$ 984,00',
    preco: 'R$ 297',
    link:  'https://pay.hotmart.com/I101283775S'
  },
  livro: {
    de:    null,
    preco: 'R$ 97',
    link:  'https://pay.hotmart.com/P105542619V'
  }
}
```

Para tirar o valor riscado de uma oferta, ponha `de: null` — o elemento some
sozinho.

### Detalhe importante

Os mesmos preços e links também estão escritos direto no `index.html`. Isso é
proposital: se o JavaScript não carregar, o visitante continua vendo o preço
certo e o botão continua indo para o checkout certo. O `config.js` apenas
sobrescreve.

**Consequência:** ao mudar um preço em definitivo, troque **nos dois lugares**
(`config.js` e `index.html`). Buscar por `data-preco` e `data-link` no HTML
mostra exatamente onde.

---

## Já configurado

| Item | Valor | Origem |
|---|---|---|
| WhatsApp | `5519974185802` | Contato do autor, p. 3 do livro |
| Mensagem inicial | "Olá, Glaucio! Vim pelo site…" | Editável em `contato.mensagem` |
| Instagram | `@glauciolelis` | Contato do autor, p. 3 do livro |

---

## Ainda não existem

Páginas que a Hotmart costuma exigir e que pesam na confiança de quem está
decidindo a compra:

- Termos de Uso
- Política de Privacidade
- Política de Reembolso

O selo "Risco Zero" aparece no site, mas em nenhum lugar diz **quantos dias**
de garantia. Vale definir e escrever (a Hotmart trabalha com 7 ou 30 dias) —
prazo explícito converte melhor que um selo genérico.
