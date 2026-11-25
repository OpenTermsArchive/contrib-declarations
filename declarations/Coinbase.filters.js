export function removeReactTextSeparators(document) {
  const SHOW_COMMENT = 128; // NodeFilter.SHOW_COMMENT
  const walker = document.createTreeWalker(document.body, SHOW_COMMENT);
  const comments = [];

  while (walker.nextNode()) {
    comments.push(walker.currentNode);
  }

  comments.forEach(comment => comment.remove());
  document.body.normalize(); // Merge text nodes split by React's `<!-- -->` separators, which are not always present in the rendered page
}
