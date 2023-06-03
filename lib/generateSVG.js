const Triangle = require("./shapes.js");
const Circle = require("./shapes.js");
const Square = require("./shapes.js");

function generateSVG(data) {
let shapeToRender;
if (data.shape_input === "Triangle") {
    shapeToRender = new Triangle().setColor(data.shape_color_input).render();
}


return;
  `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <circle cx="150" cy="100" r="80" fill="green" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">
    SVG
  </text>
</svg>`;
}
