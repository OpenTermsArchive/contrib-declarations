export function removeLabelAndSidFromUrls(document) {
  const links = document.querySelectorAll('a');

  links.forEach(link => {
    let href = link.getAttribute('href');

    try {
      // here we replace all occurences of
      // - not well encoded "&amp;""
      // - ";"" that sometimes replaces "&" for an unknown reason
      // If we do not do that it will lead to changing urls as sometimes, subsequent query parameters
      // will be included in the previous one i.e. "label=XXX;otherParam=value" leads to ""
      // and sometimes not i.e. "label=XXX&otherParam=value" leads to "&otherParam=value"
      href = href.replace(/&amp;/gmi, '&').replace(/;/gmi, '&').replace(/\n/gmi, '');

      if (href.startsWith('/')) {
        href = `https://www.booking.com${href}`;
      }

      const url = new URL(href);

      if (!url.search) {
        return;
      }

      const params = new URLSearchParams(url.search);

      if (params.has('label')) {
        // do not use params.delete as using toString would cause encodeURIComponent to be done on the whole string
        // thus potentially changing the real data
        href = href.replace(`?label=${params.get('label')}`, '?');
        href = href.replace(`&label=${params.get('label')}`, '');
      }
      if (params.has('sid')) {
        href = href.replace(`?sid=${params.get('sid')}`, '?');
        href = href.replace(`&sid=${params.get('sid')}`, '');
      }

      link.setAttribute('href', href);
    } catch (e) {
      // url may not be well formatted, skip
    }
  });
}
