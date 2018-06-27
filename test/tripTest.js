const expect = require('expect.js');
const Car = require('../src/Car');
const Trip = require('../src/Trip.js');

describe('Trip', function() {
  describe('#start()', function() {
    const priceDetails = { perMinute: 1, perKilometer: 2, extraCost: 0 }
    const trip = new Trip(1, new Car({ x: 1, y: 1 }, priceDetails));

    it('should update the start coordinates', function() {
      trip.start(2, 2);
      expect(trip.startCoordinates).to.eql({ x: 2, y: 2 });
    });

    it('should call allocate on car', function() {
      trip.start(2, 2);
      expect(trip.car.allocated).to.be.ok();
    });
  });

  describe('#end()', function() {
    const priceDetails = { perMinute: 1, perKilometer: 2, extraCost: 0 }
    const trip = new Trip(1, new Car({ x: 1, y: 1 }, priceDetails));
    trip.start(2, 3);

    it('should update fare and distance', function() {
      trip.end(6, 3);
      expect(trip.distance).to.be(4);
      expect(trip.fare).to.be(8);
    });
  });
});
