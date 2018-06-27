const expect = require('expect.js');
const Car = require('../src/Car.js');

describe('Car', () => {
  describe('#allocate()', () => {
    it('should set allocated to true', () => {
      const car = new Car('pink', { x: 2, y: 3 });
      car.allocate();
      expect(car.allocated).to.be.ok();
    });
  });

  describe('#deAllocate()', () => {
    it('should set allocated to false', () => {
      const car = new Car('pink', { x: 2, y: 3 });
      car.deAllocate();
      expect(car.allocated).to.not.be.ok();
    });
  });
});
