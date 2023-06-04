const { Triangle, Circle, Square } = require("./shapes");

describe("Triangle", () => {
  it("should return triangle in red color", () => {
    const shape = new Triangle();
    shape.setColor("red")
    expect(shape.render()).toEqual(
      '<polygon points="150, 18 244, 182 56, 182" fill="red" />'
    );
  });
});

describe("Circle", () => {
  it("should return circle in green color", () => {
    const shape = new Circle();
    shape.setColor("green");
    expect(shape.render()).toEqual(
      '<circle cx="150" cy="100" r="80" fill="green" />'
    );
  });
});

describe("Square", () => {
  it("should return square in orange color", () => {
    const shape = new Square();
    shape.setColor("orange");
    expect(shape.render()).toEqual(
      '<rect x="20" y="20" width="150" height="150" fill="orange" />'
    );
  });
});