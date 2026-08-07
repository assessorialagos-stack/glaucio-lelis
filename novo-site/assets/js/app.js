/* ==========================================================================
   GLAUCIO LELIS — comportamento da página
   Sem dependências. O conteúdo já existe no HTML; este arquivo apenas
   aplica configuração, revela seções e controla o menu.
   ========================================================================== */
(function () {
  'use strict';

  var cfg = window.GL_CONFIG || {};

  /* ------------------------------------------------------------- ofertas */
  /* O HTML já traz preço e link corretos. Isto só sobrescreve quando o
     config define outro valor — assim a página nunca fica sem oferta. */
  var ofertas = cfg.ofertas || {};

  Object.keys(ofertas).forEach(function (chave) {
    var o = ofertas[chave] || {};

    if (o.preco) {
      document.querySelectorAll('[data-preco="' + chave + '"]').forEach(function (el) {
        el.textContent = o.preco;
      });
    }

    document.querySelectorAll('[data-de="' + chave + '"]').forEach(function (el) {
      if (o.de) { el.textContent = o.de; }
      else { el.hidden = true; }
    });

    if (o.link) {
      document.querySelectorAll('[data-link="' + chave + '"]').forEach(function (el) {
        el.setAttribute('href', o.link);
        el.setAttribute('target', '_blank');
        el.setAttribute('rel', 'noopener');
      });
    }
  });

  /* -------------------------------------------------------------- whatsapp */
  var contato = cfg.contato || {};
  if (contato.whatsapp) {
    var wa = 'https://wa.me/' + contato.whatsapp +
             (contato.mensagem ? '?text=' + encodeURIComponent(contato.mensagem) : '');
    document.querySelectorAll('a[href*="wa.me/"]').forEach(function (el) {
      el.setAttribute('href', wa);
    });
  }

  /* ------------------------------------------------- cabeçalho ao rolar */
  var hdr = document.querySelector('.hdr');
  if (hdr) {
    var marcarTopo = function () {
      hdr.classList.toggle('is-stuck', window.scrollY > 12);
    };
    marcarTopo();
    window.addEventListener('scroll', marcarTopo, { passive: true });
  }

  /* ------------------------------------------------------------ menu móvel */
  var burger = document.getElementById('burger');
  var nav = document.getElementById('nav');

  if (burger && nav) {
    burger.addEventListener('click', function () {
      var aberto = nav.classList.toggle('is-open');
      burger.setAttribute('aria-expanded', String(aberto));
      burger.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');
    });

    nav.addEventListener('click', function (e) {
      if (e.target.tagName !== 'A') return;
      nav.classList.remove('is-open');
      burger.setAttribute('aria-expanded', 'false');
      burger.setAttribute('aria-label', 'Abrir menu');
    });

    document.addEventListener('keydown', function (e) {
      if (e.key !== 'Escape' || !nav.classList.contains('is-open')) return;
      nav.classList.remove('is-open');
      burger.setAttribute('aria-expanded', 'false');
      burger.focus();
    });
  }

  /* ------------------------------------------------- revelação ao rolar */
  var alvos = document.querySelectorAll('.rise');
  var semMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (semMovimento || !('IntersectionObserver' in window)) {
    alvos.forEach(function (el) { el.classList.add('is-in'); });
    return;
  }

  var observador = new IntersectionObserver(function (entradas) {
    entradas.forEach(function (entrada) {
      if (!entrada.isIntersecting) return;
      entrada.target.classList.add('is-in');
      observador.unobserve(entrada.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  alvos.forEach(function (el) { observador.observe(el); });

  /* A dobra inicial não espera o scroll. */
  requestAnimationFrame(function () {
    document.querySelectorAll('.hero .rise').forEach(function (el) {
      el.classList.add('is-in');
    });
  });

})();
