export function replaceEmailProtection(document) {
  const links = document.querySelectorAll('a');
  
  links.forEach(link => {
    if (link.href.includes("/email-protection#")) {
      link.href = link.href.replace(/(email-protection#)(.*)/gim, '$1removed');
      link.innerHTML = "email protected";
    }
  });
}
