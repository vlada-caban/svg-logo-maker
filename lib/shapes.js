class Triangle {
  render(color) {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${color}" />`;
  }
}

class Circle {
  render(color) {return `<circle cx="150" cy="100" r="80" fill="${color}" />`;}
}

class Square {
  render(color) {return `<rect x="20" y="20" width="150" height="150" fill="${color}" />`;}
}

module.exports = { Triangle, Circle, Square };