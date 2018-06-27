class Car {
  constructor(coordinates, color = 'black') {
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

  setCoordinates(coordX, coordY) {
    this.currentX = coordX;
    this.currentY = coordY;
  }

  getCoordinates() {
    return { coordX: this.currentX, coordY: this.currentY };
  }

  isAvailable(color) {
    return (this.color === color && !this.allocated);
  }
}

module.exports = Car;
