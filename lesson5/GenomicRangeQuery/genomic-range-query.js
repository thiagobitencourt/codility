// Evaluation at: https://app.codility.com/demo/results/training9CBJHS-C64/
function solution(S, P, Q) {
    // write your code in JavaScript (Node.js 8.9.4)
    var impacts = { 'A': 1, 'C': 2, 'G': 3, 'T': 4 }
    var result = [];
    
    for(var i = 0; i < P.length; i++) {
        var pk = P[i];
        var qk = Q[i];
        
        var smallest = 5;
        for(var j = pk; j <= qk; j++) {
            var nucleotide = S[j];
            var impact = impacts[nucleotide];
            if(impact < smallest) {
                smallest = impact
            }
        }
    
        result[i] = smallest;
    }
    
    return result
    // [2, 1, 1, 2, 4]
    // [1, 2, 1]
    // [2, 3, 3]
}