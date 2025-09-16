export const cleanUrls = [
  {
    validUntil: '2022-02-23T13:35:03+01:00',
    filter: function cleanUrls(document) {
      Array.from(document.querySelectorAll('[href="#"]')).map(link => link.removeAttribute('href'));
      const links = document.querySelectorAll('[href*="https://l.facebook.com/l.php?"],[href*="http://l.facebook.com/l.php?"]');

      links.forEach(link => {
        link.href = decodeURIComponent(link.href.replace(/&h=\S*/, '').replace(/(\S*)\?u=(\S*)/, '$2'));
      });
    },
  }, 
];

export const removeTrackingIDs = [
  {
    validUntil: '2025-09-16T12:00:00+01:00',
    filter: function removeTrackingIDs(document) {
      document.querySelectorAll('a').forEach(el => {
        const href = el.getAttribute('href');
        const params = new URLSearchParams(href);

        if (params.has('h')) {
          params.set('h', 'removed');
          el.setAttribute('href', params.toString());
        }
        if (params.has('e')) {
          params.set('e', 'removed');
          el.setAttribute('href', params.toString());
        }
      });
    },
  }, 
];
