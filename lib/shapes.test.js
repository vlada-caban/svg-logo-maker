const { Triangle, Circle, Square } = require("./shapes");

describe("Triangle", () => {
  it("should return triangle in red color", () => {
    const shape = new Triangle();
    expect(shape.render("red")).toEqual(
      '<polygon points="150, 18 244, 182 56, 182" fill="red" />'
    );
  });
});

describe("Circle", () => {
  it("should return circle in green color", () => {
    const shape = new Circle();
    expect(shape.render("green")).toEqual(
      '<circle cx="150" cy="100" r="80" fill="green" />'
    );
  });
});

// describe("Square", () => {
//   it("should return square in orange color", () => {
//     const shape = new Square();
//     // shape.setColor("orange");
//     expect(shape.render()).toEqual(
//       '<rect width="80" height="80" fill="orange"/>'
//     );
//   });
// });