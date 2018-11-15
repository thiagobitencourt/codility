// Evaluation at: https://app.codility.com/demo/results/trainingH8XCUM-XV5/
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    var pairs = {};
    var unmatched;
    for(var i = 0; i < A.length; i++) {
        var currentValue = A[i];
        if(pairs[currentValue] != undefined) {
            delete pairs[currentValue];
        } else {
            pairs[currentValue] = currentValue;
        }
    }
    
    for(var a in pairs) {
        unmatched = Number.parseInt(a);
        break;
    }
    return unmatched;
}