// Evaluation at: https://app.codility.com/demo/results/trainingX343VS-YJ5/
function solution(X, Y, D) {
    // write your code in JavaScript (Node.js 8.9.4)
    return Math.ceil((Y - X) / D);
    
    // let location = X;
    // let jumps = 0;
    // while(location <= Y) {
    //     location += D;
    //     jumps++;
    // }
    // return jumps;
}