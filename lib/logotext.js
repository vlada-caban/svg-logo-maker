//need to create separete classes since each shape has different text placement/size to accomodate for shape

class TriangleText {
  render(textColor, text) {
    return `<text x="150" y="140" font-size="40" text-anchor="middle" fill="${textColor}">
    ${text}
  </text>`;
  }
}

class CircleText {
  render(textColor, text) {
    return `<text x="150" y="115" font-size="60" text-anchor="middle" fill="${textColor}">
    ${text}
  </text>`;
  }
}

class SquareText {
  render(textColor, text) {
    return `<text x="95" y="110" font-size="60" text-anchor="middle" fill="${textColor}">
    ${text}
  </text>`;
  }
}

module.exports = { TriangleText, CircleText, SquareText };