let algos = require("../cutAndPaste.js");

// CUT AND PASTE 
// remove the first n elements and place them onto the end of the array
test("slash the array starting at index 0", () => {
  expect(algos.cutAndPaste([1, 2, 5, "help", "wow", 3], 1)).toMatchObject([2, 5, "help", "wow", 3, 1])
  expect(algos.cutAndPaste([1, 2, 5, "help", "wow", 3], 4)).toMatchObject(["wow", 3, 1, 2, 5, "help"])
})
  