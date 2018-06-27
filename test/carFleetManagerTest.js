const expect = require('expect.js');
const CarFleetManager = require('../src/CarFleetManager');

describe('CarFleetManager', () => {
  describe('initialization', () => {
    it('should have 20 cars in the pool', () => {
      const manager = new CarFleetManager();
      expect(manager.pool.length).to.be(20);
    });
  });
});
