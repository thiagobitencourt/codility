// Evaluation at: https://app.codility.com/demo/results/training5ZMEYY-P6Q/
function solution(N, A) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    let maxValue = 0;
    let counters = [];
    for(let i = 0; i < N; i++) {
        counters[i] = 0;
    }
    
    for(let j = 0; j < A.length; j++) {
        let value = A[j];
        
        if(value >= 1 && value <= N) {
            counters[value - 1]++;
            let curValue = counters[value - 1];
            if(curValue > maxValue) {
                maxValue = curValue;
            }
        } else if(value == N + 1) {
            setAllMax(counters, maxValue);
        }
    }
    
    return counters;
}

function setAllMax(arr, max) {
    for(let i = 0; i < arr.length; i++) {
        arr[i] = max;
    }
}