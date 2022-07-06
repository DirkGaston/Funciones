let ele = document.getElementById("ele1");

let paint = function (event) {
  ele.style.backgroundColor = "yellow";
};

ele.addEventListener("click", paint);


