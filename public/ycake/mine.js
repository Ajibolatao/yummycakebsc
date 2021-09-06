const addressEl = document.querySelector(".address");
const copyEl = document.querySelector(".bi-clipboard");

copyEl.addEventListener("click", () => {
  /* Copy the text inside the text field */
  navigator.clipboard.writeText(addressEl.textContent);

  /* Alert the copied text */
  alert("Copied text to clipboard");
});
