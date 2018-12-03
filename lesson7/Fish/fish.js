// Evaluation at: https://app.codility.com/demo/results/training2TAEH7-4UM/
function solution(A, B) {
    // write your code in JavaScript (Node.js 8.9.4)
    const UPSTREAM = 0;
    const DOWNSTREAM = 1;
    let alive = 0;
    let auxArr = [];
    
    for(let currentFish = 0; currentFish < B.length; currentFish++) {
        if(B[currentFish] == DOWNSTREAM || alive == 0) {
            alive++;
            auxArr.push(currentFish);
        } else {
            let isCurrentAlive = true;
            for(let j = auxArr.length - 1; j >= 0; j--) {
                let commingFish = auxArr[j];

                if(B[commingFish] == UPSTREAM) break;
                if(A[currentFish] > A[commingFish]) {
                    auxArr.pop();
                    alive--;
                } else {
                    isCurrentAlive = false;
                    break;
                }
            }
            
            if(isCurrentAlive) {
                auxArr.push(currentFish);
                alive++;
            }
        }
    }
    
    return alive;
}