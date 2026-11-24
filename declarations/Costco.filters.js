export function removeConsentStateFromUrls(document) {
  document.querySelectorAll('a[href*="#tcm-consent="]').forEach(link => {
    link.setAttribute('href', link.getAttribute('href').replace(/#tcm-consent=.*$/, ''));
  });
}
