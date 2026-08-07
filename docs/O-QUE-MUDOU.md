# O que mudou, e por quê

Registro das decisões do redesign. Serve para defender o projeto na
apresentação e para consulta depois.

---

## 1. O diagnóstico: não era só o neon

A hipótese inicial era que o excesso de neon e o fundo escuro derrubaram a
performance. Isso está correto — mas é só metade do problema.

Ao abrir o material, apareceu uma contradição mais séria: **o site anterior não
tinha relação nenhuma com a marca real do Glaucio.**

| O que a marca é | O que o site mostrava |
|---|---|
| Monograma **GL dourado sobre fundo branco** | Fundo `#010308` (quase preto) com ciano `#00e5ff` |
| Livro com capa em serifa clara e alta classe | Tipografia pesada, caixa-alta, "hi-tech" |
| Ilustrações em **aquarela**, quentes e suaves | Fotos de banco de imagem com efeito neon e `mix-blend-screen` |
| Teólogo escrevendo sobre família e identidade | Estética de rede neural / ficção científica |
| Paleta pedida no onboarding: **azul royal, azul marinho, cinza chumbo** | Ciano elétrico e azul-neon |

O visitante chegava esperando um autor cristão que fala de restauração
familiar e encontrava algo com cara de startup de tecnologia. O desalinhamento
entre marca e página é, sozinho, um motivo suficiente para não converter.

**A paleta nova não foi inventada: é literalmente a que o Glaucio pediu no
formulário de onboarding.**

---

## 2. Conteúdo inventado que foi removido

O site anterior continha afirmações que não existem em lugar nenhum do
material enviado. Elas foram retiradas — além de não serem verdadeiras,
prometem uma escala que o negócio ainda não tem e destroem a confiança se o
visitante checar.

| Removido | Situação real |
|---|---|
| "8.000+ vidas transformadas" | Sem origem no material |
| "Em mais de 30 países" | Sem origem no material |
| "97% de satisfação" | Sem origem no material |
| "15 anos de estudo profundo" | Sem origem no material |
| E-book *Alma Reconstruída*, 210 páginas | **Não existe.** Nome inventado |
| Livro físico *O Retorno a Si Mesmo*, capa dura, autografado | **Não existe.** Nome inventado |
| Curso com 40 videoaulas, mentorias ao vivo, certificado | O curso real é *Alma Estruturada*, com **9 módulos** |
| Preços R$ 97 / R$ 597 / R$ 79 / R$ 697 | Os preços reais são **R$ 297** e **R$ 97**, em duas ofertas |
| Cronômetro "23:59:38" contando para nada | Falsa urgência; reinicia a cada visita |

No lugar entraram **apenas dados verificáveis**, todos tirados dos arquivos:

- 3 obras publicadas (2 e-books + 1 livro)
- 7 capítulos em *A Identidade da Mulher*
- 59 páginas
- Publicado pela UICLAP, São Paulo, 2026

O cronômetro falso foi eliminado por completo. Para um público que busca
restauração emocional e espiritual, pressão artificial é contraproducente: ela
comunica exatamente o oposto do que os livros defendem.

---

## 3. As obras reais do catálogo

Levantadas dos PDFs, do formulário de onboarding e do site no ar
(`glauciolelis.com.br`):

| Obra | Formato | Situação |
|---|---|---|
| **Alma Estruturada** — *A Prosperidade Começa na Alma* | Curso, 9 módulos em vídeo | No ar, é o carro-chefe |
| **A Identidade da Mulher** | Livro + e-book, 59 p., 7 capítulos | Publicado (UICLAP, 2026) |
| **Ansiedade nunca mais** | E-book, 28 p., 10 capítulos | Publicado |
| **Emagrecendo com Saúde** | E-book, 31 p., 10 capítulos | Publicado |

Os nove módulos, na ordem: A Base do Governo · A Alma nos Relacionamentos ·
A Alma nas Realizações · A Alma que Realiza · Sabedoria de Salomão · A Alma
Financeira · O Subconsciente · Reescrevendo a Alma · O Código da Alma Ferida.

**Homens Restaurados** aparecia no onboarding como próximo trabalho, mas não
está em nenhuma das duas ofertas no ar. Ficou de fora para não dividir a
atenção de quem está decidindo a compra. Volta fácil quando existir.

---

## 3b. A estrutura de oferta

Não há venda de livro avulso. São **duas ofertas**, com os livros agrupados de
formas diferentes em cada uma:

| | Combo VIP Premium | Identidade da Mulher |
|---|---|---|
| Selo | A Oferta Mais Completa | Público Feminino |
| Preço | R$ 297 *(de R$ 984,00)* | R$ 97 |
| Curso (9 módulos) | Vitalício | Não inclui |
| Identidade da Mulher | E-book | Livro físico + e-book |
| Ansiedade nunca mais | Bônus | — |
| Emagrecendo com Saúde | Bônus | — |
| Suporte | Premium prioritário | — |
| Checkout | `pay.hotmart.com/I101283775S` | `pay.hotmart.com/P105542619V` |

Isso mudou o desenho da página. A seção "As obras" deixou de ser vitrine de
venda e passou a construir desejo: mostra os três livros com uma etiqueta
dizendo em qual acesso cada um vem, e empurra tudo para a seção **"Escolha o
seu acesso"**, onde a decisão acontece uma única vez.

Também entrou uma seção nova para o curso, listando os nove módulos. Sem ela,
a oferta de R$ 297 não se explicava — o visitante via o preço sem saber que o
principal do pacote é o treinamento em vídeo, não os livros.

---

## 3c. O protagonista é o curso, não o livro

Uma primeira versão desta página abria com a capa de *A Identidade da Mulher* e
um título sobre identidade. Estava errado: quem chega via a oferta de R$ 97
antes da de R$ 297, e o produto principal aparecia só na sexta rolagem.

O que mudou:

| | Antes | Agora |
|---|---|---|
| Título | "Quando a identidade é restaurada…" | **"A prosperidade começa na alma."** |
| Imagem do hero | Capa do livro feminino | Cartão do curso: nome, 9 módulos, vitalício e o preço |
| Botão principal | "Conhecer os livros" | **"Quero o acesso vitalício"** |
| Faixa de números | 3 obras · 7 capítulos · 59 páginas · 2026 | **9 módulos · 3 livros inclusos · vitalício · 2 décadas** |
| Posição do curso | 6ª seção | **5ª seção**, logo após os pilares |
| Seção dos livros | "Os três livros que acompanham" | **"Três livros, sem custo adicional"** |
| `<title>` da página | Glaucio Lelis — Identidade… | **Alma Estruturada — Curso de Glaucio Lelis** |
| Peso das duas ofertas | Cartões quase iguais (1,06 / 0,94) | **Combo VIP domina** (1,32 / 0,68) |

O cartão da oferta secundária ficou sem preenchimento e sem sombra — um
"fantasma" ao lado do Combo VIP, que é o único a se apresentar como produto
principal. O livro continua vendável para quem só quer ele, mas parou de
competir com o curso pela atenção.

A imagem do hero é a aquarela do capítulo 4 do livro (a mão estendida). É a
única peça do material que comunica "convite" sem depender de mostrar um
produto físico — e o curso não tem foto de produto.

Sobre o dado "2 décadas de estudo": veio do texto que já está no ar em
`glauciolelis.com.br` ("passou mais de duas décadas mapeando o território
interno da alma humana"). É afirmação do próprio cliente, não invenção nossa —
diferente dos números que foram removidos no item 2.

---

## 4. A direção visual

**Cores.** Papel frio e claro (`#F5F7FA`) — de propósito não é o bege/creme
que todo site de autor usa. Azul-marinho `#16325C` na tinta e nas faixas
profundas, azul royal `#2B5FB0` como único acento de ação, cinza chumbo
`#48535F` no texto. O ouro `#A98849` do monograma aparece **só em filete e
detalhe**, nunca preenchendo área — é metal, não cor de fundo.

**Tipografia.** *Bodoni Moda* nos títulos, escolhida porque ecoa a serifa
clara e de alto contraste da capa real do livro e o desenho do próprio
monograma GL. *Source Sans 3* no texto corrido — humanista e legível em
parágrafo longo, que é o que este conteúdo exige.

**Ilustrações.** As sete aquarelas do site foram extraídas de dentro do PDF de
*A Identidade da Mulher* — são as aberturas de capítulo do próprio livro.
Nenhuma foto de banco de imagens. A linguagem visual da página passa a ser a
linguagem visual da obra.

**O fio dourado.** Na seção "As quatro fases", uma linha vertical fina
atravessa as fases: começa **tracejada** e termina **contínua**, com o ponto
final preenchido. Não é enfeite — é o argumento do capítulo 1 do livro ("O Elo
Perdido") traduzido em layout: o elo que se rompe e se refaz.

---

## 5. Sem tema escuro — decisão, não esquecimento

O CSS **não tem** bloco `prefers-color-scheme: dark`, e isso é intencional.

Se tivesse, todo visitante com o celular em modo escuro voltaria a ver uma
versão escura do site — anulando exatamente a mudança que estamos fazendo. O
site é claro para todo mundo, sempre.

---

## 6. Copy

Mantida a estrutura e as frases que já existiam (os três pilares, as quatro
fases OLHAR / SOLTAR / CRIAR / SER), conforme combinado. O que mudou: cada uma
passou a ser sustentada por uma **citação real do livro**, em vez de ficar
solta. Exemplo:

> **Você não está quebrado. Está incompleto.** *(copy que já existia)*
> "A força nasce da identidade. O endurecimento nasce da dor não tratada."
> *(trecho real do capítulo 1)*

Os três blocos de "Trechos" e a biografia do autor são transcrições diretas do
livro.

---

## 7. Sobre o vídeo enviado

O arquivo `2026-03-19 17-37-25.mp4` (226 MB, 4min53) é uma **gravação de tela
do Google Drive** — alguém organizando pastas de clientes. Não é material de
marketing e não foi usado.

Para o site ganhar vídeo, é preciso captar: o Glaucio falando à câmera,
2 a 3 minutos, luz natural, fundo claro. Isso funcionaria muito bem logo
abaixo da primeira dobra.

---

## 8. Pontos que dependem do cliente

1. **Preços e links de checkout** — hoje em `null`. Ver `LINKS-E-PRECOS.md`.
2. **Foto do autor em alta** — a única disponível saiu do PDF, com 405×448 px.
   Funciona no tamanho atual, mas uma foto profissional em alta resolução
   melhoraria bastante a seção "O autor".
3. **Depoimentos de leitores** — não havia nenhum no material. É o item que
   mais faria diferença na conversão. Três ou quatro depoimentos reais, com
   nome e foto.
4. **Páginas de Termos, Privacidade e Reembolso** — o site antigo linkava para
   `#`. Ficaram de fora até existirem de verdade.
