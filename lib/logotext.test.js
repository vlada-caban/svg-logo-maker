const { TriangleText, CircleText, SquareText } = require("./logotext");

//testing each shape text since each shape requires different text placement size depending on the shape


describe("Triangle Text", () => {
  it("should return text in white color with BLT text formatted for triangle", () => {
    const text = new TriangleText();
    expect(text.render("white", "BLT")).toEqual(
      `<text x="150" y="140" font-size="40" text-anchor="middle" fill="white">
    BLT
  </text>`
    );
  });
});

describe("Circle Text", () => {
  it("should return text in black color with BLT text formatted for circle", () => {
    const text = new CircleText();
    expect(text.render("black", "BLT")).toEqual(
      `<text x="150" y="115" font-size="60" text-anchor="middle" fill="black">
    BLT
  </text>`
    );
  });
});

describe("Square Text", () => {
  it("should return text in green color with TBL text formatted for square", () => {
    const text = new SquareText();
    expect(text.render("green", "TBL")).toEqual(
      `<text x="95" y="110" font-size="60" text-anchor="middle" fill="green">
    TBL
  </text>`
    );
  });
});
