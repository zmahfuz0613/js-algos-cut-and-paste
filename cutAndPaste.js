//  CUT AND PASTE - 
// place the first n elements onto the end of the array
const cutAndPaste = (arr, n) => {
  let spliced = arr.splice(0, n)
  spliced.forEach(x=>arr.push(x))
  return arr
}
console.log(cutAndPaste([1, 2, 5, "help", "wow", 3], 1))

module.exports = {
  cutAndPaste
};
