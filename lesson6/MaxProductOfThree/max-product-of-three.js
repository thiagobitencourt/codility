// Evaluation at: https://app.codility.com/demo/results/trainingA7ZMVW-J62/
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    A.sort((a, b) => a - b);
    let vN, vP;
    vN = A[0] * A[1] * A[A.length - 1];
    vP = A[A.length - 3] * A[A.length - 2] * A[A.length - 1];
    
    return Math.max(vN, vP);
}