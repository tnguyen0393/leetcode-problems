/*
Given an m x n matrix, return all elements of the matrix in spiral order.
*/

const spiralTraversal = (matrixArray) => {
    let sr = 0; // Starting Row
    let sc = 0; // Starting Column
    let er = matrixArray.length - 1; // Ending Row
    let ec = matrixArray[0].length - 1; // Ending Column
    let result = [];

    while(sc <= ec && sr <= er) {
        for(let i = sc; i <= ec; i++) {
            result.push(matrixArray[sr][i]);
        }
        for (let i = sr+1; i <= er; i++) {
            result.push(matrixArray[i][ec]);
        }
        for(let i = ec-1; i >= sc; i--) {
            if (sr === er) break; // If there is a single row, it will prevent double count
            result.push(matrixArray[er][i]);
        }
        for(let i = er-1; i >= sr+1; i--) {
            if (sc === ec) break; // If there is a single column, it will prevent a double count
            result.push(matrixArray[i][sc])
        }
        sr++;
        sc++;
        er--;
        ec--;
    }
    return result;
}

let testCase1 = {
    matrix: [
        [1,2,3],
        [4,5,6],
        [7,8,9]],
    expectedOutput: [1,2,3,6,9,8,7,4,5]
};

let testCase2 = {
    matrix: [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12]
],
    expectedOutput: [1,2,3,4,8,12,11,10,9,5,6,7]
};

let testCase3 = {
    matrix: [
        [1]
    ],
    expectedOutput: [1]
};

let testCase4 = {
    matrix: [
        [1,2],
        [3,4]
    ],
    expectedOutput: [1,2,4,3]
};

let testCase5 = {
    matrix: [
        [1,2,3,4,5]
    ],
    expectedOutput: [1,2,3,4,5]
};

const testCases = [testCase1, testCase2, testCase3, testCase4, testCase5];

testCases.forEach((testCase, index) => {
    let result = spiralTraversal(testCase.matrix)
    console.log(`Expected Output: [${testCase.expectedOutput}] - Output: [${result}]`);
    if (JSON.stringify(result) === JSON.stringify(testCase.expectedOutput)) console.log(`Test case ${index+1}: Passed`);
    else console.log("Test case: Failed");
})