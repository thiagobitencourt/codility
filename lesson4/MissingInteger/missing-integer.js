// Evaluation at: https://app.codility.com/demo/results/training26DVK4-7SK/
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    // > 0
    let positives = {};
    for(let i = 0; i < A.length; i++) {
        const value = A[i];
        if(value > 0) {
            positives[value] = value;
        }
    }
    
    let counter = 1;
    for(let v in positives) {
        if(v != counter) {
            break;
        } else {
            counter++;
        }
    }
    
    return counter;
}