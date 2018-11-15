// Evaluation at: https://app.codility.com/demo/results/trainingWW76XU-GZ7/
function solution(A, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    var l = A.length;
    
    for(var j = 0; j < K; j++) {
        var holdingItem = undefined;
        for(var i = 0; i < l; i++) {
            var nextI = i + 1 == l ? 0 : i + 1;
            var item = A[nextI];
            A[nextI] = holdingItem !== undefined ? holdingItem : A[i];
            holdingItem = item;
        }
    }
    
    return A;
}