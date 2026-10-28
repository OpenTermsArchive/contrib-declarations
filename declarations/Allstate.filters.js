export function removeHeaderAnchors(document) {
  document.querySelectorAll('[data-toggle="collapse"]').forEach(el => el.replaceWith(el.text));
}

export function removeAdobeMarketingCloudParam(document) {
  document.querySelectorAll('a[href*="adobe_mc="]').forEach(link => {
    const href = link.getAttribute('href')
      .replace(/[?&]adobe_mc=[^&]*$/, '')
      .replace(/([?&])adobe_mc=[^&]*&/, '$1');

    link.setAttribute('href', href);
  });
}
