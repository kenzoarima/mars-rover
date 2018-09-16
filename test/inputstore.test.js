const InputStore = require('../src/inputstore');

const inputstore = new InputStore();

describe('The InputStore', () => {

  describe('returns the Width And Height as ', () => {
    test('[Width,Height] when they both are integers', () => {
      const widthheightArray = inputstore.getWidthHeight(2,2);
      const testArr = [2,2];

      expect(widthheightArray).toEqual(testArr);
    });

    test('[0,0] when the Width is not an integer', () => {
      const widthheightArray = inputstore.getWidthHeight("a",2);
      const testArr = [0,2];

      expect(widthheightArray).toEqual(testArr);
    });

    test('[0,0] when the Width is not an integer', () => {
      const widthheightArray = inputstore.getWidthHeight("a",2);
      const testArr = [0,2];

      expect(widthheightArray).toEqual(testArr);
    });
  });

  describe('returns the InitialDirection as ', () => {
    test('it is if it is one of N S E W', () => {
      const initialDirection = inputstore.getInitialDirection("W");
      expect(initialDirection).toBe("W");
    });

    test('as "N" if it is not one of N S E W', () => {
      const initialDirection = inputstore.getInitialDirection("B");
      expect(initialDirection).toBe("N");
    });
  });

});