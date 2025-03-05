const spanColor = document.getElementById("span-color");
const btnHero = document.getElementById("btn-hero");

const hex = () => {
  btnHero.addEventListener("click", () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    spanColor.textContent = "#" + randomColor;
    spanColor.style.color = "#" + randomColor;
  });
};

hex();
