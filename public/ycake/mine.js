const addressEl = document.querySelector(".address");
const copyEl = document.querySelector(".bi-clipboard");

copyEl.addEventListener("click", () => {
  /* Select the text field */
  addressEl.select();

  document.execCommand('copy');

  /* Alert the copied text */
  alert("Address copied.");
});
