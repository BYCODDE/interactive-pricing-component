let price = document.getElementById("price");
let isChanged = true;
let range = document.getElementById("myRange");
let track = document.querySelector(".section_2 input");
let views = document.getElementById("views");
let year = 12;
let discount = 0.25;
let svgDiv = document.getElementById("svgDiv");
let month = document.getElementById("month");
let myCircle = document.getElementById("circle");

range.addEventListener("input", function () {
  let x = this.value;
  let colorStop = (x / (this.max - this.min)) * 100 + "%";
  let gradient = `linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) ${colorStop}, hsl(224, 65%, 95%) ${colorStop}, hsl(224, 65%, 95%) 100%)`;
  track.style.background = gradient;
  if (colorStop === "0%" && month.innerHTML === "/ month") {
    views.innerHTML = "10K PAGEVIEWS";
    price.innerHTML = "$8.00";
  } else if (colorStop === "25%" && month.innerHTML === "/ month") {
    views.innerHTML = "50K PAGEVIEWS";
    price.innerHTML = "$12.00";
  } else if (colorStop === "50%" && month.innerHTML === "/ month") {
    views.innerHTML = "100K PAGEVIEWS";
    price.innerHTML = "$16.00";
  } else if (colorStop === "75%" && month.innerHTML === "/ month") {
    views.innerHTML = "500K PAGEVIEWS";
    price.innerHTML = "$24.00";
  } else if (colorStop === "100%" && month.innerHTML === "/ month") {
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
  } else if (month.innerHTML === "year" && colorStop === "100%") {
    price.innerHTML = "$" + (36 * year - 36 * year * discount) + ".00";
  }
});

svgDiv.addEventListener("click", function () {
  if (isChanged) {
    svgDiv.style.background = "#7AEADF";
    myCircle.style.marginLeft = "25px";
    month.innerHTML = "year";
  } else {
    svgDiv.style.background = "rgba(207, 216, 239, 1)";
    myCircle.style.marginLeft = "4px";
    month.innerHTML = "/ month";
  }

  isChanged = !isChanged;

  let x = range.value;
  let colorStop = (x / (range.max - range.min)) * 100 + "%";

  if (colorStop === "0%" && month.innerHTML === "/ month") {
    price.innerHTML = "$8.00";
    month.innerHTML === "/ month";
  } else if (colorStop === "0%" && month.innerHTML === "year") {
    price.innerHTML = "$" + (8 * year - 8 * 12 * discount) + ".00";
    month.innerHTML === "year";
  } else if (colorStop === "25%" && month.innerHTML === "/ month") {
    price.innerHTML = "$12.00";
    month.innerHTML === "/ month";
  } else if (colorStop === "25%" && month.innerHTML === "year") {
    price.innerHTML = "$" + (12 * year - 12 * year * discount) + ".00";
    month.innerHTML === "year";
  } else if (colorStop === "50%" && month.innerHTML === "/ month") {
    price.innerHTML = "$16.00";
    month.innerHTML === "/ month";
  } else if (colorStop === "50%" && month.innerHTML === "year") {
    month.innerHTML === "year";
    price.innerHTML = "$" + (16 * year - 16 * year * discount) + ".00";
  } else if (colorStop === "75%" && month.innerHTML === "/ month") {
    price.innerHTML = "$24.00";
    month.innerHTML === "/ month";
  } else if (colorStop === "75%" && month.innerHTML === "year") {
    month.innerHTML === "year";
    price.innerHTML = "$" + (24 * year - 24 * year * discount) + ".00";
  } else if (colorStop === "100%" && month.innerHTML === "/ month") {
    price.innerHTML = "$36.00";
    month.innerHTML === "/ month";
  } else if (colorStop === "100%" && month.innerHTML === "year") {
    month.innerHTML === "year";
    price.innerHTML = "$" + (36 * year - 36 * year * discount) + ".00";
  }
});
