export const replaceDaysAgo = (document) => {
  const modifiedDate = document.querySelector('meta[property="article:modified_time"]');
  
  const updatedTimeContainer = document.querySelector("h1+div > img+div");
  if (modifiedDate && updatedTimeContainer) {
    updatedTimeContainer.innerHTML = updatedTimeContainer.innerHTML.replace(/Updated(.*)( by.*)/,`Updated ${modifiedDate.content}$2`)
  }
}
