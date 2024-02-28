let price = document.getElementById("price");
document.addEventListener("DOMContentLoaded", function () {
  let range = document.getElementById("myRange");
  let track = document.querySelector(".section_2 input");
  let views = document.getElementById("views");
  let year = 12;
  let discount = 0.25;
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
    if (month.innerHTML === "year" && colorStop === "0%") {
      price.innerHTML = "$" + (8 * year - 8 * 12 * discount) + ".00";
    } else if (month.innerHTML === "year" && colorStop === "25%") {
      price.innerHTML = "$" + (year * year - year * year * discount) + ".00";
    } else if (month.innerHTML === "year" && colorStop === "50%") {
      price.innerHTML = "$" + (16 * year - 16 * year * discount) + ".00";
    } else if (month.innerHTML === "year" && colorStop === "75%") {
      price.innerHTML = "$" + (24 * year - 24 * year * discount) + ".00";
    } else {
      price.innerHTML = "$" + (36 * year - 36 * year * discount) + ".00";
    }
  });
  let svg = document.getElementById("my_svg");
  let svgDiv = document.getElementById("svgDiv");
  let color = document.getElementById("color_change");
  let month = document.getElementById("month");
  
  let myCircle = document.getElementById("circle");
  let isChanged = true;
  svgDiv.addEventListener("click", function () {
    if (isChanged) {
      svgDiv.style.background = "#7AEADF";
      myCircle.style.marginLeft = "25px";
      month.innerHTML = "year";
    } else {
      svgDiv.style.background = "rgba(207, 216, 239, 1)";
      myCircle.style.marginLeft = "4px";
      month.innerHTML = "month";
    }
  
    isChanged = !isChanged;
  });
});

