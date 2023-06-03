const { Triangle, Circle, Square } = require("./shapes");
const { TriangleText, CircleText, SquareText } = require("./logotext");

function generateSVG(data) {
  let shapeToRender;
  let textToRender;
  if (data.shape_input === "Triangle") {
    shapeToRender = new Triangle().render(data.shape_color_input);
    textToRender = new TriangleText().render(
      data.logo_color_input,
      data.logo_text_input
    );
  }
  if (data.shape_input === "Circle") {
    shapeToRender = new Circle().render(data.shape_color_input);
    textToRender = new CircleText().render(
      data.logo_color_input,
      data.logo_text_input
    );
  }
  if (data.shape_input === "Square") {
    shapeToRender = new Square().render(data.shape_color_input);
    textToRender = new SquareText().render(
      data.logo_color_input,
      data.logo_text_input
    );
  }

  return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shapeToRender}
    ${textToRender}
</svg>`;
}

module.exports = generateSVG;

