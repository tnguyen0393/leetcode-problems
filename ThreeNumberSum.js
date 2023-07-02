/*
  Write a function that takes in a non-empty array of distinct integers and an
  integer representing a target sum. The function should find all triplets in
  the array that sum up to the target sum and return a two-dimensional array of
  all these triplets. The numbers in each triplet should be ordered in ascending
  order, and the triplets themselves should be ordered in ascending order with
  respect to the numbers they hold.
*/

const threeNumberSum = (array, targetSum) => {
  array.sort((a,b) => a-b);
  let result = [];
  for (let i = 0; i < array.length; i++) {
    let left = i + 1;
    let right = array.length - 1;
    while (left < right) {
      let currentSum = array[i] + array[left] + array[right];
      if (currentSum === targetSum) {
        result.push([array[i], array[left], array[right]]);
        left++;
        right--;
      } else if (currentSum < targetSum) {
        left++;
      } else {
        right--;
      }
    }
  }
  return result;
}

let testCase1 = {
  array: [12, 3, 1, 2, -6, 5, -8, 6],
  targetSum: 0,
  expectedOutput: [
    [-8, 2, 6],
    [-8, 3, 5],
    [-6, 1, 5]
  ]
};

let testCase2 = {
  array: [1, 2, 3],
  targetSum: 6,
  expectedOutput: [[1, 2, 3]]
};

let testCase3 = {
  array: [1, 2, 3],
  targetSum: 7,
  expectedOutput: []
};

let testCase4 = {
  array: [8, 10, -2, 49, 14],
  targetSum: 57,
  expectedOutput: [[-2, 10, 49]]
};

let testCase5 = {
  array: [12, 3, 1, 2, -6, 5, 0, -8, -1],
  targetSum: 0,
  expectedOutput: [
  [-8, 3, 5],
  [-6, 1, 5],
  [-1, 0, 1]]
};

const testCases = [testCase1, testCase2, testCase3, testCase4, testCase5];

const testThreeNumberSum = () => {
  testCases.forEach((testCase, index) => {
      let output = threeNumberSum(testCase.array, testCase.targetSum);
      if (JSON.stringify(output) === JSON.stringify(testCase.expectedOutput)) {
          console.log(`Test case ${index+1}: Passed`);
      } else {
          console.log(`Test case ${index+1}: Failed. Expected ${JSON.stringify(testCase.expectedOutput)}, but got ${JSON.stringify(output)}`);
      }
  });
}

testThreeNumberSum();