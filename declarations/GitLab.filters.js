function removeCloudflareEmailProtection(document, possibleEmail) {
  const placeholder = 'EMAIL_PLACEHOLDER';
  const replaceWith = `(email protected, possibly ${placeholder})`;

  const emails = document.querySelectorAll('.__cf_email__');

  emails.forEach(email => {
    email.outerHTML = replaceWith;
  });

  // These make the fetching stable, sometimes it displays the email and sometimes
  // it doesn't. In both cases we want to show the "email protected" text.
  document.body.innerHTML = document.body.innerHTML.replaceAll('[\\[email protected\\]](https://about.gitlab.com/cdn-cgi/l/email-protection)', replaceWith);
  document.body.innerHTML = document.body.innerHTML.replaceAll(possibleEmail, replaceWith);
  document.body.innerHTML = document.body.innerHTML.replaceAll(placeholder, possibleEmail.toLowerCase());
}

export function removeDpoEmailProtection(document) {
  removeCloudflareEmailProtection(document, 'DPO@gitlab.com');
}

export function removeSecurityEmailProtection(document) {
  removeCloudflareEmailProtection(document, 'security@gitlab.com');
  removeCloudflareEmailProtection(document, 'Security@gitlab.com');
}
