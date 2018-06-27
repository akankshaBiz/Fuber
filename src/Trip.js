class Trip {
  constructor(id, car) {
    this.id = id;
    this.car = car;
    this.startTime = new Date();
    this.endTime = new Date();
    this.startCoordinates = { x: 0, y: 0 };
    this.endCoordinates = { x: 0, y: 0 };
    this.distance = 0;
    this.fare = 0;
  }

  _updateStartCoordinates(coordX, coordY) {
    this.startCoordinates.x = coordX;
    this.startCoordinates.y = coordY;
  }

  start(userCoordX, userCoordY) {
    this.startTime = new Date();
    this._updateStartCoordinates(userCoordX, userCoordY);
    this.car.allocate();
  }
}

module.exports = Trip;
