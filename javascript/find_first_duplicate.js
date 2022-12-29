/*

UP:
Find the first duplicate value that occurs
if there is'nt any then return -1.

*/

function findFirstDuplicate(arr) {
  const uniques = [];
  for (let i = 0; i < arr.length; i++) {
    if (uniques.includes(arr[i])) return arr[i];
    uniques.push(arr[i]);
  }
  return - 1
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));


  // console.log("");

  // console.log("Expecting: 5");
  // console.log("=>", findFirstDuplicate([1, 2, 3, 4, 5, 6, 5]));


  // console.log("");

  // console.log("Expecting: 4");
  // console.log("=>", findFirstDuplicate([1, 2, 3, 4, 5, 6, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// And a written explanation of your solution
