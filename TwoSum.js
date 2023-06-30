
const twoSum = (array, target) => {
    let map = {};
    for (let i = 0; i < array.length; i++) {
        const compliment = target - array[i];
        if (compliment in map) return [i, map[compliment]];
        else map[array[i]] = i;
    }

    return [];
}

let testCase1 = {
    nums: [1, 2],
    target: 3,
    expectedOutput: [0, 1]
};

let testCase2 = {
    nums: [100, -100, 200, -200],
    target: 0,
    expectedOutput: [0, 1]
};

let testCase3 = {
    nums: [-1, -2, -3, -4, -5],
    target: -7,
    expectedOutput: [2, 3]
};

let testCase4 = {
    nums: [Math.pow(10, 9), -Math.pow(10, 9)],
    target: 0,
    expectedOutput: [0, 1]
};

let testCase5 = {
    nums: [5, 5, 10],
    target: 10,
    expectedOutput: [0, 1]
};

const testCases = [testCase1, testCase2, testCase3, testCase4, testCase5];

testCases.forEach((testCase, index) => {
    let result = twoSum(testCase.nums, testCase.target)
    console.log(`Expected Output: [${testCase.expectedOutput}] - Output: [${result}]`);
    if (toString(result) === toString(testCase.expectedOutput)) console.log(`Test case ${index+1}: Passed`);
    else console.log("Test case: Failed");
})