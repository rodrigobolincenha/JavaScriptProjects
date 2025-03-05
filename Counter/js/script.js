const spanContent = document.querySelector("span");
const buttons = document.querySelectorAll(".button");

let count = 0;
const colors = (count) => {
  const color = count > 0 ? "green" : "red";
  return color;
};
const acoes = (count) => {
  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const acao = event.target.getAttribute("id");
      if (acao === "increment") {
        count++;
        console.log(count);
      } else if (acao === "decrement") {
        count--;
        console.log(count);
      } else if (acao === "reset") {
        count = 0;
        console.log(count);
      }
      spanContent.textContent = count;
      console.log(acao);
      spanContent.style.color = colors(count);
    });
  });
};

acoes(count);
