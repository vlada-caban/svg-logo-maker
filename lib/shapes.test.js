const Triangle = require("./shapes.js");
const Circle = require("./shapes.js");
const Square = require("./shapes.js");

describe("Triangle", () => {
  it("should return triangle in red color", () => {
    const shape = new Triangle();
    shape.setColor("red");
    expect(shape.render()).toEqual(
      '<polygon points="150, 18 244, 182 56, 182" fill="red" />'
    );
  });
});

describe("Circle", () => {
  it("should return circle in green color", () => {
    const shape = new Circle();
    shape.setColor("green");
    expect(shape.render()).toEqual('<circle r="50" fill="green"/>');
  });
});

describe("Square", () => {
  it("should return square in orange color", () => {
    const shape = new Square();
    shape.setColor("orange");
    expect(shape.render()).toEqual(
      '<rect width="50" height="50" fill="orange"/>'
    );
  });
});