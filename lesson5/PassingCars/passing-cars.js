// Evaluation at: https://app.codility.com/demo/results/trainingYDF3WQ-W4Z/
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const size = A.length;
    const MAX_PAIRS = 1000000000;
    let pairs = [0];
    let countZ = 0;
    let lastC = 0;
    
    for(let i = 1; i < size; i++) {
        let p = A[i - 1];
        let q = A[i];
        if (p == 0) {
            countZ++;
        }
        
        pairs[i] = (q ? countZ : 0) +  pairs[i - 1];
        lastC = pairs[i];
        if(lastC > MAX_PAIRS) {
            return -1;
        }
    }
    
    return lastC;
}