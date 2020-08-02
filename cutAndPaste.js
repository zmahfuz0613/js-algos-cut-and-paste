//  CUT AND PASTE - 

const cutAndPaste = (arr, num) => {

  let numbers = arr.slice(0, num);
  arr.splice(0, num);        
  arr.push(...numbers);
  return arr;
}

console.log(cutAndPaste([1, 2, 5, "help", "wow", 3], 1))

module.exports = {
cutAndPaste
};
