// small interactions: year injection, mobile menu, form handling
document.addEventListener('DOMContentLoaded', function(){
  const year = document.getElementById('year');
  if(year) year.textContent = new Date().getFullYear();

  // mobile menu toggle (simple)
  const btn = document.getElementById('mobileMenuBtn');
  if(btn){
    btn.addEventListener('click', () => {
      document.querySelector('.nav').classList.toggle('open');
      btn.classList.toggle('open');
    });
  }

  // booking form handling
  const form = document.getElementById('inviteForm');
  if(form){
    const msg = document.getElementById('formMessage');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      // basic validity check
      if(!form.checkValidity()){
        form.reportValidity();
        return;
      }
      // Simulate send: show success message and reset
      msg.hidden = false;
      msg.textContent = 'Aitäh! Teie päring on saadetud. Vastan niipea kui võimalik.';
      form.reset();

      // Optional: open mailto (uncomment if you want direct mail)
      /*
      const to = 'rasmus@example.com';
      const subject = encodeURIComponent('Esinemissoov');
      const body = encodeURIComponent(`Nimi: ${form.name.value}\nE-post: ${form.email.value}\nKuupäev: ${form.date.value}\nKohakoht: ${form.place.value}\nSõnum: ${form.message.value}`);
      window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
      */
    });
  }
});

// ---------- Lightbox gallery (replace previous lightbox block with this) ----------
(function(){
  const galleryItems = Array.from(document.querySelectorAll('.gallery .gallery-item'));
  const lb = document.getElementById('lightbox');
  if (!galleryItems.length || !lb) return;

  const lbImage = lb.querySelector('.lb-image');
  const lbCaption = lb.querySelector('.lb-caption');
  const btnClose = lb.querySelector('.lb-close');
  const btnPrev = lb.querySelector('.lb-prev');
  const btnNext = lb.querySelector('.lb-next');

  let currentIndex = 0;
  let lastFocused = null;
  let lockedScrollY = 0;
  let savedBodyPaddingRight = '';

  function getScrollbarWidth(){
    return window.innerWidth - document.documentElement.clientWidth;
  }

  function lockScroll() {
    lockedScrollY = window.scrollY || window.pageYOffset;
    // preserve existing body padding-right and set a compensating padding equal to scrollbar width
    const sbw = getScrollbarWidth();
    savedBodyPaddingRight = document.body.style.paddingRight || '';
    if (sbw > 0) {
      document.body.style.paddingRight = `${sbw}px`;
    }
    // fix the body to prevent scrolling & preserve current position
    document.body.style.position = 'fixed';
    document.body.style.top = `-${lockedScrollY}px`;
    document.body.style.left = '0';
    document.body.style.width = '100%'; // prevents shifting on some browsers
    document.documentElement.style.overflow = 'hidden';
  }

  function unlockScroll() {
    // remove fixed positioning and restore scroll position & padding
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.left = '';
    document.body.style.width = '';
    document.body.style.paddingRight = savedBodyPaddingRight;
    document.documentElement.style.overflow = '';
    window.scrollTo(0, lockedScrollY);
  }

  function openLightbox(index){
    currentIndex = index;
    const img = galleryItems[currentIndex];
    const full = img.dataset.full || img.src;
    lbImage.src = full;
    lbImage.alt = img.alt || '';
    lbCaption.textContent = img.alt || '';
    lb.classList.add('open');
    lb.setAttribute('aria-hidden','false');
    lastFocused = document.activeElement;

    lockScroll();

    // focus the close button but don't scroll the viewport (preventScroll)
    try { btnClose.focus({preventScroll: true}); } catch(e) { btnClose.focus(); }
  }

  function closeLightbox(){
    lb.classList.remove('open');
    lb.setAttribute('aria-hidden','true');
    lbImage.src = '';
    unlockScroll();
    if (lastFocused && lastFocused.focus) {
      try { lastFocused.focus({preventScroll: true}); } catch(e) { lastFocused.focus(); }
    }
  }

  function showNext(dir = 1){
    currentIndex = (currentIndex + dir + galleryItems.length) % galleryItems.length;
    const img = galleryItems[currentIndex];
    const full = img.dataset.full || img.src;
    lbImage.style.opacity = 0;
    setTimeout(()=> {
      lbImage.src = full;
      lbImage.alt = img.alt || '';
      lbCaption.textContent = img.alt || '';
      lbImage.style.opacity = 1;
    }, 120);
  }

  // attach click handlers to thumbnails
  galleryItems.forEach((img, idx) => {
    img.addEventListener('click', (e) => openLightbox(idx));
    img.setAttribute('tabindex','0');
    img.addEventListener('keydown', (ev) => {
      if (ev.key === 'Enter' || ev.key === ' ') {
        ev.preventDefault();
        openLightbox(idx);
      }
    });
  });

  // controls
  btnClose.addEventListener('click', closeLightbox);
  btnPrev.addEventListener('click', () => showNext(-1));
  btnNext.addEventListener('click', () => showNext(1));

  // click outside to close
  lb.addEventListener('click', (e) => {
    if (e.target === lb) closeLightbox();
  });

  // keyboard support
  document.addEventListener('keydown', (e) => {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') showNext(1);
    if (e.key === 'ArrowLeft') showNext(-1);
  });
})();

