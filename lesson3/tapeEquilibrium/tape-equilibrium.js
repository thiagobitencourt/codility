// Evaluation at: https://app.codility.com/demo/results/training9ENXSF-G9D/
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let sums = [];
    for(let i = 0; i < A.length; i++) {
        sums[i] = A[i] + (sums[i - 1] != undefined ? sums[i - 1] : 0);
    }
    
    let smallSum = Number.MAX_SAFE_INTEGER;
    for(let p = 1; p < sums.length; p++) {
        let partA = sums[p - 1];
        let partB = sums[sums.length - 1] - partA;
        let currentSum = Math.abs(partA - partB);
        if(currentSum < smallSum) {
            smallSum = currentSum;
        }
    }
    
    return smallSum;
}