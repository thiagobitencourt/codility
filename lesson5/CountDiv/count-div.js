// Evaluation at: https://app.codility.com/demo/results/training6Y42EP-YZU/
function solution(A, B, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    let result = 0;
    let i = A;
    
    while(i <= B) {
        if(are_div(i, K)) {
            result++
            i += K
        } else {
            i++
        }
    }
    
    return result
}

function are_div(num, div) {
    return num % div === 0;
}