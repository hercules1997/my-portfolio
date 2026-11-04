document.querySelectorAll('[data-filter]').forEach(button => { button.addEventListener('click', () => { document.querySelectorAll('[data-filter]').forEach(item => item.setAttribute('aria-pressed', String(item === button))); document.querySelectorAll('[data-category]').forEach(card => { card.hidden = button.dataset.filter !== 'all' && card.dataset.category !== button.dataset.filter; if (card.hidden) card.querySelectorAll('video').forEach(video => video.pause()); }); }); });

(() => {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const targets = document.querySelectorAll('.featured, .project-card, .about > div, .stack article, section > h2, #contact > .button');
  if ('IntersectionObserver' in window && !reducedMotion.matches) {
    const reveal = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          reveal.unobserve(entry.target);
        }
      });
    }, {threshold: 0.08});
    targets.forEach(target => { target.classList.add('reveal'); reveal.observe(target); });
    // Keep keyboard-focused content visible, including links inside collapsed galleries.
    document.addEventListener('focusin', event => event.target.closest('.reveal')?.classList.add('is-visible'));
    reducedMotion.addEventListener('change', () => {
      if (reducedMotion.matches) { reveal.disconnect(); targets.forEach(target => target.classList.add('is-visible')); }
    });
  }
  const links = [...document.querySelectorAll('nav a[href^="#"]')];
  const sections = links.map(link => document.querySelector(link.getAttribute('href'))).filter(Boolean);
  let scheduled = false;
  function updateScroll() {
    scheduled = false;
    const total = document.documentElement.scrollHeight - window.innerHeight;
    const fraction = total > 0 ? Math.min(1, Math.max(0, window.scrollY / total)) : 0;
    document.querySelector('.reading-progress').style.transform = `scaleX(${fraction})`;
    document.body.classList.toggle('has-scrolled', window.scrollY > 40);
    document.body.classList.toggle('show-top', window.scrollY > 650);
    const active = sections.filter(section => section.getBoundingClientRect().top <= 160).at(-1);
    links.forEach(link => {
      if (active && link.hash === '#' + active.id) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }
  function scheduleScroll() { if (!scheduled) { scheduled = true; requestAnimationFrame(updateScroll); } }
  window.addEventListener('scroll', scheduleScroll, {passive: true});
  window.addEventListener('resize', scheduleScroll);
  document.querySelectorAll('details').forEach(details => details.addEventListener('toggle', scheduleScroll));
  if ('ResizeObserver' in window) new ResizeObserver(scheduleScroll).observe(document.body);
  updateScroll();
  const copy = document.querySelector('#copy-email');
  copy.addEventListener('click', async () => {
    const status = document.querySelector('#copy-status');
    try {
      await navigator.clipboard.writeText('hercules.chaves.andrade@gmail.com');
      status.textContent = 'E-mail copiado!';
    } catch {
      status.textContent = 'hercules.chaves.andrade@gmail.com';
    }
  });
})();

// Open full-size public demo screens without leaving the portfolio.
(() => {
  const dialog = document.querySelector('#project-preview');
  if (!dialog || typeof dialog.showModal !== 'function') return;
  let opener;
  document.querySelectorAll('.featured .app-preview img').forEach(img => {
    const button = document.createElement('button');
    button.type = 'button'; button.className = 'preview-button';
    button.setAttribute('aria-label', 'Ampliar: ' + img.alt);
    img.before(button); button.append(img);
    const hint = document.createElement('span'); hint.className = 'preview-hint'; hint.textContent = 'Clique para explorar a tela ↗'; button.after(hint);
    button.addEventListener('click', () => {
      opener = button;
      const preview = dialog.querySelector('img'); preview.src = img.src; preview.alt = img.alt;
      dialog.querySelector('p').textContent = img.alt;
      dialog.showModal();
    });
  });
  dialog.querySelector('.close-preview').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => { if(event.target === dialog) { const r = dialog.getBoundingClientRect(); if(event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) dialog.close(); } });
  dialog.addEventListener('close', () => opener?.focus());
})();
