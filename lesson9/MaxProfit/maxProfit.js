// Evaluation at: https://app.codility.com/demo/results/trainingXZCMDP-E6Y/
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    if(!A.length || A.length == 1) return 0;
    let maxProfit = 0;
    for(let i = 0; i < A.length - 1; i++) {
        let bought = A[i];
        for(let j = i + 1; j < A.length; j++) {
            let sold = A[j];
            if(sold > bought) {
                let profit = sold - bought;
                maxProfit = profit > maxProfit ? profit : maxProfit;
            }
        }
    }
    
    return maxProfit;
}