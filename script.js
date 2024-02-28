document.addEventListener("DOMContentLoaded", function () {
  let range = document.getElementById("myRange");
  let track = document.querySelector(".section_2 input");
  let price = document.getElementById("price");
  let views = document.getElementById("views");
  let month = document.getElementById("month");
  range.addEventListener("input", function () {
    let x = this.value;
    let colorStop = (x / (this.max - this.min)) * 100 + "%";
    let gradient = `linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) ${colorStop}, hsl(224, 65%, 95%) ${colorStop}, hsl(224, 65%, 95%) 100%)`;
    track.style.background = gradient;
    if (colorStop === "0%") {
      views.innerHTML = "10K PAGEVIEWS";
      price.innerHTML = "$8.00";
    } else if (colorStop === "25%") {
      views.innerHTML = "50K PAGEVIEWS";
      price.innerHTML = "$12.00";
    } else if (colorStop === "50%") {
      views.innerHTML = "100K PAGEVIEWS";
      price.innerHTML = "$16.00";
    } else if (colorStop === "75%") {
      views.innerHTML = "500K PAGEVIEWS";
      price.innerHTML = "$24.00";
    } else {
      views.innerHTML = "1M PAGEVIEWS";
      price.innerHTML = "$36.00";
    }
  });
});

let svg = document.getElementById("my_svg");
let svgDiv = document.getElementById("svgDiv");
let color = document.getElementById("color_change");

let myCircle = document.getElementById("circle");
let isChanged = true;
svgDiv.addEventListener("click", function () {
  if (isChanged) {
    svgDiv.style.background = "#7AEADF";
    myCircle.style.marginLeft = "25px";
  } else {
    svgDiv.style.background = "rgba(207, 216, 239, 1)";
    myCircle.style.marginLeft = "4px";
  }

  isChanged = !isChanged;
});
