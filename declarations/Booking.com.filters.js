export { removeSIDfromUrls } from './_common.filters.js';

export function removeLabelfromUrls(document) {
  const links = document.querySelectorAll('a');

  links.forEach(link => {
    link.href = link.href.replace(/(\?.*label=)(.*)(;|&)/gim, '$1removed$3');
  });
}
export function removeSigfromUrls(document) {
  const links = document.querySelectorAll('a');

  links.forEach(link => {
    link.href = link.href.replace(/(\?.*sig=)(.{10})/gim, '$1removed');
  });
}
