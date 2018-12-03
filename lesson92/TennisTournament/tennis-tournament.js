// Evaluation at: https://app.codility.com/demo/results/training6DYCTB-Y8Z/
function solution(P, C) {
    // write your code in JavaScript (Node.js 8.9.4)
    let allowedPlayers = P % 2 == 0 ? P : P - 1;
    let maxPlayers = C * 2;
    
    if(maxPlayers <= allowedPlayers) {
        return C;
    } else {
        return allowedPlayers / 2;
    }
}