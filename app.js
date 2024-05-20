const keyDisplay = document.querySelector(".key-display");
const keyName = document.querySelector(".key-name");
const keyCode = document.querySelector(".key-code");
const keyWhich = document.querySelector(".key-which");
const generateBtn = document.querySelector(".generate-btn");
const gradientPreview = document.querySelector(".gradient-preview");
const colorCode = document.querySelector(".color-code");

const generateGradient = () => {
  const randomDeg = Math.floor(Math.random() * 360);
  const color1 = getRandomHexColor();
  const color2 = getRandomHexColor();
  const gradient = `linear-gradient(${randomDeg}deg, ${color1}, ${color2})`;
  gradientPreview.style.background = gradient;
  colorCode.textContent = gradient;
};

const handleKeyPress = (e) => {
  keyCode.textContent = e.code;
  keyName.textContent = e.key === " " ? "Space" : e.key;
  keyWhich.textContent = e.which;
};

const getRandomHexColor = () => {
  let randomColor = "#";
  for (let i = 0; i < 6; i++) {
    const randomNum = Math.floor(Math.random() * 16);
    randomColor += randomNum.toString(16);
  }
  return randomColor;
};

window.addEventListener("keydown", handleKeyPress);
generateBtn.addEventListener("click", generateGradient);
