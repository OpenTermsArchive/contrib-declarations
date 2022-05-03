import { removeSIDfromUrls as removeSIDfromUrlsCommon } from './_common.filters.js';

function removeLabelfromUrlsOld(document) {
  const links = document.querySelectorAll('a');

  links.forEach(link => {
    link.href = link.href.replace(/(\?.*label=)(.{146})/gim, '$1removed');
  });
}

export const removeSIDfromUrls = [
  {
    validUntil: '2022-05-09T13:35:03+01:00',
    filter: removeSIDfromUrlsCommon,
  },
];

export const removeLabelfromUrls = [
  {
    validUntil: '2022-05-09T13:35:03+01:00',
    filter: removeLabelfromUrlsOld,
  },
];
