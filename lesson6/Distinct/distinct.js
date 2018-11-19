// Evaluation at: https://app.codility.com/demo/results/trainingHR627W-MAU/
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    let distinct = {};
    let total = 0;
    for(let i = 0; i < A.length; i++) {
        let value = distinct[A[i]];
        if(!value) {
            total++;
        }
        distinct[A[i]] = (value || 0) + 1;
    }
    return total;
}