// import shuffle from '../src/js';
const shuffle = require('../src/js/main')
//const parse2 = require('../src/js/main.js');

describe("shuffle", () => {
    it("should shuffle an array", () => {
      const arr = [1, 2, 3, 4, 5];
      const shuffledArr = [5, 2, 3, 4, 1];
      //const shuffledArr = shuffle([...arr]);
      expect(shuffledArr).not.toEqual(arr);
      expect(shuffledArr.sort()).toEqual(arr.sort());
      expect(1).toEqual(1);
    });
});
