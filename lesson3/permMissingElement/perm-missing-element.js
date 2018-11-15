// Evaluation at: https://app.codility.com/demo/results/trainingS4S23Z-E9V/
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let orderList = [];
    for(let i = 0; i < A.length; i++) {
        orderList[A[i]] = A[i];
    }
    
    let missingNumber = 1;
    for(let i = 1; i <= orderList.length; i++) {
        if(orderList[i] == undefined) {
            missingNumber = i;
            break;
        }
    }
    
    return missingNumber;
}