  (() => {
    const btn = document.querySelector('.menu-btn'), nav = document.getElementById('site-nav');
    const set = open => {
      nav.classList.toggle('open', open);
      btn.setAttribute('aria-expanded', open);
      btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      btn.querySelector('.i-open').style.display = open ? 'none' : '';
      btn.querySelector('.i-close').style.display = open ? '' : 'none';
    };
    btn.addEventListener('click', () => set(!nav.classList.contains('open')));
    nav.addEventListener('click', e => { if (e.target.closest('a')) set(false); });
  })();
