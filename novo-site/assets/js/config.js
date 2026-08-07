/* ==========================================================================
   CONFIGURAÇÃO DO SITE  —  edite SOMENTE este arquivo para mexer nas ofertas.

   São DUAS ofertas. Os livros não são vendidos separadamente: eles vêm
   inclusos dentro de um dos dois acessos.

   Os valores abaixo já são os que estão no ar em glauciolelis.com.br.
   O HTML também tem esses mesmos valores escritos direto na página, então
   se o JavaScript não carregar o visitante continua vendo preço e botão
   corretos. O que está aqui apenas sobrescreve.
   ========================================================================== */

window.GL_CONFIG = {

  ofertas: {

    /* ---- Oferta 1: Combo VIP Premium ----
       Curso completo (9 módulos) + os três livros.                       */
    vip: {
      de:    'R$ 984,00',                            // valor riscado
      preco: 'R$ 297',                               // valor cobrado
      link:  'https://pay.hotmart.com/I101283775S'   // checkout Hotmart
    },

    /* ---- Oferta 2: Identidade da Mulher ----
       Livro físico + e-book. Sem as aulas em vídeo.                      */
    livro: {
      de:    null,                                   // sem valor riscado
      preco: 'R$ 97',
      link:  'https://pay.hotmart.com/P105542619V'
    }

  },

  /* ---- Contato (usado nos botões de WhatsApp) ----
     Formato do número: DDI + DDD + número, só dígitos.                   */
  contato: {
    whatsapp: '5519974185802',
    mensagem: 'Olá, Glaucio! Vim pelo site e gostaria de saber mais sobre os acessos.',
    instagram: 'https://instagram.com/glauciolelis'
  }

};
