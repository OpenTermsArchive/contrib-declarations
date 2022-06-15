export function removeBanner(document) {
  document.querySelector('.ap01-breadcrumb').remove();
}
export function removeScripts(document) {
  document.querySelectorAll('script').forEach(element => element.remove());
}
export function removeEmptyLinks(document) {
  document.querySelectorAll('a').forEach(el => {
    if (el.innerHTML === ' ' || el.innerHTML === '<b> </b>') {
      el.remove();
    }
  });
}
