import fetch from 'isomorphic-fetch';

export async function downloadImages(document, { fetch: baseUrl, select: selector }) {
  const images = Array.from(document.querySelectorAll(`${selector} img`));

  return Promise.all(images.map(async ({ src }, index) => {
    if (src.startsWith('data:')) {
      return; // Already a data-URI, skip
    }

    const imageUrl = new URL(src, baseUrl).href; // Ensure url is absolute
    const response = await fetch(imageUrl);
    const mimeType = response.headers.get('content-type');
    const content = await response.arrayBuffer();

    const base64Content = btoa(String.fromCharCode(...new Uint8Array(content)));

    images[index].src = `data:${mimeType};base64,${base64Content}`;
  }));
}
