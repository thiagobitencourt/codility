// Evaluation at: https://app.codility.com/demo/results/training93XHYM-AUZ/
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let leader = findLeader(A);
    if(leader == -1) return leader;
    return A.indexOf(leader);
}

function findLeader(A) {
    let leader = -1;
    let count = 0;
    for(let i = 0; i < A.length; i++) {
        if(!count) {
            leader = A[i];
            count++;
        } else if(leader == A[i]) {
            count++;
        } else {
            count--;
        }
    }
    
    if(count) {
        return A.filter(l => l == leader).length >= A.length / 2 ? leader : -1;   
    } else {
        return -1;
    }
}