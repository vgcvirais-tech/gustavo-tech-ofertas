const mainButton = document.querySelector('[data-track="whatsapp-main"]');
const stickyButton = document.querySelector('.sticky-join');

function toggleStickyButton() {
  if (!mainButton || !stickyButton) return;

  const mainButtonRect = mainButton.getBoundingClientRect();
  const shouldShow = mainButtonRect.bottom < 0;

  stickyButton.classList.toggle('visible', shouldShow);
}

window.addEventListener('scroll', toggleStickyButton, { passive: true });
window.addEventListener('resize', toggleStickyButton);
toggleStickyButton();

document.querySelectorAll('[data-track]').forEach((link) => {
  link.addEventListener('click', () => {
    const eventName = link.dataset.track;

    // Preparado para futura integração com Meta Pixel ou Google Analytics.
    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName);
    }

    if (typeof window.fbq === 'function') {
      window.fbq('trackCustom', eventName);
    }
  });
});
