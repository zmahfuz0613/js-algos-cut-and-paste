let algos = require("../cutAndPaste.js");

// CUT AND PASTE

test("Cut and paste elements from index 0 to the end of the array.", () => {
  expect(algos.cutAndPaste(["artichokie", "okie dokie"], 1)).toMatchObject(["okie dokie", "artichokie"])
  expect(algos.cutAndPaste([1, 2, 5, "hellerr", "wow", 3], 2)).toMatchObject([5, "hellerr", "wow", 3, 1, 2])
  expect(algos.cutAndPaste(["chicken butt", 1, 2, 5, 3, "guess what"], 5)).toMatchObject(["guess what", "chicken butt", 1, 2, 5, 3])
})