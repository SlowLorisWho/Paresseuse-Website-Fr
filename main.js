const root = document.documentElement;


const mouseX = 0
const mouseY = 0

document.addEventListener("mousemove", (e) => {
  root.style.setProperty("--mouse-x", `${e.clientX}px`);
  root.style.setProperty("--mouse-y", `${e.clientY}px`);
});

document.documentElement.style.cursor = 'none';