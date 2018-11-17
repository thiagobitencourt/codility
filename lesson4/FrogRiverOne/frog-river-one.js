// Evaluation at: https://app.codility.com/demo/results/trainingV4JRC6-A4W/
function solution(X, A) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    let size = A.length;
    let toObj = {};
    for(let i = 0; i < size; i++) {
        if(!toObj[A[i]]) {
            toObj[A[i]] = i;
        }
    }
    
    let gt = 0;
    let time = -1;
    for(let step in toObj) {
        if(toObj[step] > gt) {
            gt = toObj[step]
        }
        if(step == X) {
            time = toObj[step];
            break;
        }
    }
    
    gt = time != -1 ? gt : -1;
    return gt;
}