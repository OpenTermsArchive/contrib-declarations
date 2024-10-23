export function cleanHref(document) {
  Array.from(document.querySelectorAll('a')).forEach(link => {
    link.href = cleanURLParams(link.href);
  });
}

export function cleanSrc(document) {
  Array.from(document.querySelectorAll('img')).forEach(img => {
    img.src = cleanURLParams(img.src);
  });
}

function cleanURLParams(url) {
  const searchString = 'https://downloads.intercomcdn.com';

  if (url.includes(searchString)) {
    try {
      const parsedUrl = new URL(url);

      parsedUrl.searchParams.delete('expires');
      parsedUrl.searchParams.delete('req');
      parsedUrl.searchParams.delete('signature');
      const cleanedUrl = parsedUrl.toString();

      return cleanedUrl;
    } catch (error) {
      return url;
    }
  }

  return url;
}
