// Evaluation at: https://app.codility.com/demo/results/trainingYTGQAH-23Q/

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    if(A.length < 3) {
        return 0;
    }
    
    A.sort((a, b) => a - b);
    for(let i = 0; i < A.length - 2; i++) {
        if(A[i] + A[i + 1] > A[i + 2])
            return 1;
    }
    return 0;
}