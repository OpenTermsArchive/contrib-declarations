export function removeEmptySVGLinks(document) {
  document.querySelectorAll('a').forEach(link => {
    if (link.firstElementChild
        && link.childElementCount === 1
        && link.firstElementChild.tagName.toLowerCase() === 'svg') {
      link.remove();
    }
  });
}
