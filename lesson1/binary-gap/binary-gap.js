// Evaluation at: https://app.codility.com/demo/results/trainingG8P4EM-6KT/
function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    let binary = '';
    let divResult = N;
    
    let currentGap = 0;
    let maxGap = 0;
    let isGapOpen = false;
    
    do {
        const bit = parseInt(divResult % 2);
        binary = bit + binary;
        divResult = parseInt(divResult / 2);
        
        if(bit == 1) {
            if(isGapOpen && currentGap > maxGap) {
                maxGap = currentGap;
            }
            isGapOpen = true;
            currentGap = 0;
        } else if(isGapOpen) {
            currentGap++;
        }
        
    } while(parseInt(divResult) > 0);
    return maxGap;
}