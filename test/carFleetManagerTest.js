const expect = require('expect.js');
const Car = require('../src/Car');
const CarFleetManager = require('../src/CarFleetManager');

describe('CarFleetManager', function() {
  describe('initialization', function() {
    it('should have 20 cars in the pool', function() {
      const manager = new CarFleetManager();
      expect(manager.pool.length).to.be(20);
    });
  });

  describe('#bookCar()', function() {
    const manager = new CarFleetManager();

    const priceObj = { perMinute: 1, perKilometer: 2, extraCost: 0 };
    const priceObjForPink = { perMinute: 1, perKilometer: 2, extraCost: 5 };

    const car1 = new Car({ x: 0, y: 0 }, priceObj);
    const car2 = new Car({ x: 3, y: 3 }, priceObjForPink, 'pink');

    manager.pool = [car1, car2];

    it('should return the nearest car', function() {
      const trip = manager.bookCar(1, 1, 'black');
      expect(trip.car).to.be(car1);
    });

    it('should return the pink car if it has been asked for', function() {
      const trip = manager.bookCar(1, 1, 'pink');
      expect(trip.car).to.be(car2);
    });
  });
});
