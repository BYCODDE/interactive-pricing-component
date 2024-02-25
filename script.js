// let svg = document.getElementById("my_svg");
// let svgWidth = document.getElementById("my_svg").getAttribute("width");

// let color = document.getElementById("color_change");

// let myCircle = document.getElementById("my_circle");
// let isChanged = true;
// svg.addEventListener("click", function () {
//   if (isChanged) {
//     color.setAttribute("fill", "rgba(122, 234, 223, 1)");
//     myCircle.setAttribute("cx", svgWidth - 11);
//   } else {
//     color.setAttribute("fill", "#CFD8EF");
//     myCircle.setAttribute("cx", "11");
//   }

//   isChanged = !isChanged;
// });

let mySvg = document.getElementById("my_svg");
let myWidth = document.getElementById("my_svg").getAttribute("width");
let colorChange = document.getElementById("color_change");

let myCircle = document.getElementById("my_circle");

let isChanged = true;
mySvg.addEventListener("click", function () {
  if (isChanged) {
    colorChange.setAttribute("fill", "rgba(122, 234, 223, 1)");
    myCircle.setAttribute("cx", myWidth - 11);
  } else {
    colorChange.setAttribute("fill", "#CFD8EF");
    myCircle.setAttribute("cx", "11");
  }

  isChanged = !isChanged;
});
