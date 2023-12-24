const $root = document.querySelector(".root");

$root.addEventListener("click", (e) => {
  if (e.target.childNodes.length === 1) return;
  if (e.target.className === "root") return;
  e.target.hidden = !e.target.hidden;
});
