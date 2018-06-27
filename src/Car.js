class Car {
  constructor(color, coordinates) {
    this.color = color;
    this.currentX = coordinates.x;
    this.currentY = coordinates.y;
    this.allocated = false;
  }

  allocate() {
    this.allocated = true;
  }

  deAllocate() {
    this.allocated = false;
  }
}

module.exports = Car;
