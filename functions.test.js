const functions = require('./functions');

test('Adds 2 + 2 to eaual 4', () => {
  expect(functions.add(2, 2)).toBe(4);
});