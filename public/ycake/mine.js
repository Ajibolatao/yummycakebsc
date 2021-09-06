const addressEl = document.querySelector(".address");
const copyEl = document.querySelector(".bi-clipboard");

copyEl.addEventListener("click", () => {
  /* Select the text field */
  addressEl.select();
  addressEl.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  navigator.clipboard.writeText(addressEl.value);

  /* Alert the copied text */
  alert("Copied text to clipboard");
});
