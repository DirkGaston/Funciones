let color = "";
let div1 = document.getElementById("div1");
let div2 = document.getElementById("div2");
let div3 = document.getElementById("div3");
let div4 = document.getElementById("div4");

let paint = function (event) {
  this.style.backgroundColor = color;
};

document.addEventListener("keydown", function (event) {
  if (event.key === "a") {
    color = "orange";
  } else if (event.key === "s") {
    color = "purple";
  } else if (event.key === "d") {
    color = "magenta";
  }
});

div1.addEventListener("click", paint);
div2.addEventListener("click", paint);
div3.addEventListener("click", paint);
div4.addEventListener("click", paint);
