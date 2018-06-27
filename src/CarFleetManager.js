const Car = require('./Car');

const NUMBER_OF_CARS = 20;
const COLORS = ['pink', 'black'];

const getColor = () => (COLORS[Math.floor(Math.random() * COLORS.length)]);

const generateInitialCoordinates = () => {
  const sign = [-1, 1];
  const coordX = sign[Math.floor(Math.random() * sign.length)] * (Math.random() * 100);
  const coordY = sign[Math.floor(Math.random() * sign.length)] * (Math.random() * 100);
  return { x: coordX, y: coordY };
};

class CarFleetManager {
  constructor() {
    this.pool = [];
    this.trips = [];
    this._initialisePool();
    this.tripNumber = 0;
  }

  _initialisePool() {
    for (let i = 0; i < NUMBER_OF_CARS; i += 1) {
      const color = getColor();
      const coordinates = generateInitialCoordinates();

      this.pool.push(new Car(color, coordinates));
    }
  }
}

module.exports = CarFleetManager;
