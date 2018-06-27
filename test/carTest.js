const expect = require('expect.js');
const Car = require('../src/Car.js');

describe('Car', function() {
  describe('#allocate()', function() {
    it('should set allocated to true', function() {
      const car = new Car({ x: 2, y: 3 }, 'pink');
      car.allocate();
      expect(car.allocated).to.be.ok();
    });
  });

  describe('#deAllocate()', function() {
    it('should set allocated to false', function() {
      const car = new Car({ x: 2, y: 3 }, 'pink');
      car.deAllocate();
      expect(car.allocated).to.not.be.ok();
    });
  });

  describe('#properties', function() {
    describe('when car has a color', function() {
      const car = new Car({ x: 2, y: 3 }, 'pink');
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
      const car = new Car({ x: 2, y: 3 });
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
