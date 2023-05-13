const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  document.documentElement.style.overflow = "initial";
  document.body.style.transform = "translateX(-100%)";
  document.body.style.background =
    "var(--black) url('./assets/moon.png') no-repeat center center fixed";
});
