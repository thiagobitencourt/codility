// Evaluation at: https://app.codility.com/demo/results/trainingZ8A9D8-WNB/
function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    if(!S) return 1;
    const stack = [];
    
    for(let i = 0; i < S.length; i++) {
        let char = S[i];
        if(char == '(') {
            stack.push(char);
        } else {
            let lastC = stack.pop();
            if(lastC != '(') {
                return 0;
            }
        }
    }
    
    return stack.length ? 0 : 1;
}