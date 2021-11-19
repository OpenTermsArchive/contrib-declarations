import DataURIParser from 'datauri/parser.js';
import mime from 'mime';
import fetch from 'node-fetch';

const dataURI = new DataURIParser();

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
    const extension = mime.getExtension(mimeType);

    images[index].src = dataURI.format(extension, content).content;
  }));
}
