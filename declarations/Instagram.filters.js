export { cleanUrls } from './Facebook.filters.js';

export const replaceInfoImageWithEmoji = (document) => {
  const infoImages = document.querySelectorAll('img[src*="/851547_537948159656190_540847388_n.png?"]');

  infoImages.forEach(infoImage => {
    infoImage.replaceWith('ℹ️')
  });
}
