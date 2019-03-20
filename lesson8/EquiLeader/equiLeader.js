// Evaluation at: https://app.codility.com/demo/results/trainingEGFM3A-84X/

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let leader = findLeader(A);
    
    if(leader == -1) return 0;
    if(A.length == 1) return 1;
    
    let equiLeader = 0;
    let lCount = 0;
    let leaderCounts = [];
    
    for(let i = 0; i < A.length; i++) {
        lCount += A[i] == leader ? 1 : 0;
        leaderCounts[i] = lCount;
    }
    
    for(let i = 0; i < A.length - 1; i++) {
        let curCount = leaderCounts[i];
        
        if(curCount >= (i / 2) + 1 && hasleaderAtRight(A, leader,leaderCounts, i + 1)) {
            equiLeader++;
        }
    }
    return equiLeader;
}

function hasleaderAtRight(A, leader, leaderCounts, index) {
    let lastCount = leaderCounts[leaderCounts.length - 1];
    let curCount = leaderCounts[index];
    let rCount = lastCount - curCount;
    
    if(A[index] == leader) {
        rCount++;
    }
    
    let hasLeader = rCount > ((A.length - index) / 2);
    return hasLeader;
}

function findLeader(A) {
    let candidate;
    let count = 0;
    let stackSize = 0;
    
    for(let i = 0; i < A.length; i++) {
        if(!stackSize || (!candidate || candidate === A[i])) {
            candidate = A[i];
            stackSize += 1;
        } else {
            stackSize -= 1;
        }
    }

    for(let i = 0; i < A.length; i++) {
        if(candidate == A[i]) {
            count++;
        }
    }
    
    return count > A.length / 2 ? candidate : -1;
}