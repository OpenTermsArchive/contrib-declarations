export function removeCloudflareEmailProtection(document) {
  const possibleEmail = 'DPO@gitlab.com';
  const placeholder = 'EMAIL_PLACEHOLDER';
  const replaceWith = `(email protected, possibly ${placeholder})`;

  const emails = document.querySelectorAll('.__cf_email__');

  emails.forEach(email => {
    email.outerHTML = replaceWith;
  });

  // These make the fetching stable, sometimes it displays the email and sometimes
  // it doesn't. In both cases we want to show the "email protected" text.
  document.body.innerHTML = document.body.innerHTML.replaceAll('[\[email protected\]](https://about.gitlab.com/cdn-cgi/l/email-protection)', replaceWith);
  document.body.innerHTML = document.body.innerHTML.replaceAll(possibleEmail, replaceWith);
  document.body.innerHTML = document.body.innerHTML.replaceAll(placeholder, possibleEmail);
}
