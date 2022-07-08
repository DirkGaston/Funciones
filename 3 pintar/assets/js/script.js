let ele = document.getElementById("ele1");

let paint = function (event, color = "yellow") {
  ele.style.backgroundColor = color;
};

ele.addEventListener("click", paint);

paint("click", "green");


