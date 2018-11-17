// Evaluation at: https://app.codility.com/demo/results/trainingTJ2292-V7Y/
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    let smallNumber = A[0];
    let orderArr = [];
    for(let i = 0; i < A.length; i++) {
        let number = A[i];
        orderArr[number] = number;
        if(number < smallNumber) {
            smallNumber = number;
        }
    }
    
    return (orderArr.length - smallNumber) == A.length ? 1 : 0;
}