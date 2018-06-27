const expect = require('expect.js');
const Car = require('../src/Car.js');

describe('Car', function() {
  describe('#allocate()', function() {
    it('should set allocated to true', function() {
      const priceObj = { perMinute: 1, perKilometer: 2, extraCost: 0 };
      const car = new Car({ x: 2, y: 3 }, priceObj, 'pink');
      car.allocate();
      expect(car.allocated).to.be.ok();
    });
  });

  describe('#deAllocate()', function() {
    it('should set allocated to false', function() {
      const priceObj = { perMinute: 1, perKilometer: 2, extraCost: 0 };
      const car = new Car({ x: 2, y: 3 }, priceObj, 'pink');
      car.deAllocate();
      expect(car.allocated).to.not.be.ok();
    });
  });

  describe('#getPerMinutePrice()', function() {
    it('should return 1', function() {
      const priceObj = { perMinute: 1, perKilometer: 2, extraCost: 5 };
      const car = new Car({ x: 2, y: 3 }, priceObj, 'pink');
      expect(car.getPerMinutePrice()).to.be(1);
    });
  });

  describe('#getPerKilometerPrice()', function() {
    it('should return 2', function() {
      const priceObj = { perMinute: 1, perKilometer: 2, extraCost: 5 };
      const car = new Car({ x: 2, y: 3 }, priceObj, 'pink');
      expect(car.getPerKilometerPrice()).to.be(2);
    })
  });

  describe('#getExtraCost()', function() {
    it('should return 5', function() {
      const priceObj = { perMinute: 1, perKilometer: 2, extraCost: 5 };
      const car = new Car({ x: 2, y: 3 }, priceObj, 'pink');
      expect(car.getExtraCost()).to.be(5);
    })
  });

  describe('#endTrip()', function() {
    const priceObj = { perMinute: 1, perKilometer: 2, extraCost: 5 };
    const car = new Car({ x: 2, y: 3 }, priceObj, 'pink');

    it('updates the currentX and currentY with given value', function() {
      car.endTrip(5, 5);
      expect(car.currentX).to.be(5);
      expect(car.currentY).to.be(5);
    });

    it('set the allocated flag to false', function() {
      expect(car.allocated).to.not.be.ok();
    });
  });


  describe('#properties', function() {
    describe('when car has a color', function() {
      const priceObj = { perMinute: 1, perKilometer: 2, extraCost: 5 };
      const car = new Car({ x: 2, y: 3 }, priceObj, 'pink');

      it('should return pink as color', function() {
        expect(car.color).to.be('pink');
      });

      it('should return 2 as currentX', function() {
        expect(car.currentX).to.be(2);
      });

      it('should return 3 as currentY', function() {
        expect(car.currentY).to.be(3);
      });
    });

    describe('when car does not have any color', function() {
      const priceObj = { perMinute: 1, perKilometer: 2, extraCost: 0 };
      const car = new Car({ x: 2, y: 3 }, priceObj);

      it('should return black as color', function() {
        expect(car.color).to.be('black');
      });

      it('should return 2 as currentX', function() {
        expect(car.currentX).to.be(2);
      });

      it('should return 3 as currentY', function() {
        expect(car.currentY).to.be(3);
      });
    });
  });
});
