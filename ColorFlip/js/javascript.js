const spanColor = document.getElementById("span-color");
const btnHero = document.getElementById("btn-hero");
const colors = [
  "red",
  "green",
  "blue",
  "yellow",
  "purple",
  "orange",
  "pink",
  "brown",
  "gray",
  "black",
  "white",
  "cyan",
  "magenta",
  "lime",
  "teal",
  "indigo",
  "violet",
  "maroon",
  "navy",
  "olive",
];
let currentRandomColor = colors[3]; // Inicializa com a primeira cor
const flipper = () => {
  btnHero.addEventListener("click", () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    currentRandomColor = randomColor;
    document.body.style.backgroundColor = randomColor;
    spanColor.textContent = randomColor;
    spanColor.style.color = randomColor;
    console.log(randomColor);
  });
};
const mouseOver = () => {
  btnHero.addEventListener("mouseenter", () => {
    btnHero.style.backgroundColor = currentRandomColor;
    btnHero.style.color = btnHero.style.color === "black" ? "white" : "black";
    btnHero.style.borderStyle = "solid";
    spanColor.style.color = currentRandomColor;
  });
  btnHero.addEventListener("mouseleave", () => {
    btnHero.style.backgroundColor = "white";
    btnHero.style.color = "black";
    btnHero.style.borderStyle = "dashed";
  });
};

flipper();
mouseOver();
