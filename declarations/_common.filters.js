export function removeSIDfromUrls(document) {
  const links = document.querySelectorAll('a');

  links.forEach(link => {
    link.href = link.href.replace(/(\?.*sid=)(\w{32})/gim, '$1removed');
  });
}

export function removeGclidFromUrls(document) {
  const links = document.querySelectorAll('a');

  links.forEach(link => {
    const url = new URL(link.href);
    url.searchParams.delete("gclid")
    link.href = url.toString()
  });
}