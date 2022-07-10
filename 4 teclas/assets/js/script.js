let color = "";

const paint = (e) => {
  document.getElementById(e.target.id).style.backgroundColor = color;
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

document.addEventListener("click", paint);
