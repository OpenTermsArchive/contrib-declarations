export function removeAmpDeviceId(document) {
  const links = document.querySelectorAll('a');

  links.forEach(link => {
    link.href = link.href.replace(/\?amp_device_id=[^&]*[&]?/, '');
  });
}
