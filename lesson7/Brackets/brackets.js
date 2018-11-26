// Evaluation at: https://app.codility.com/demo/results/trainingSJX2ZE-5YU/
function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    if(!S) return 1;
    
    let openC = "[{(";
    let closeC = ")}]";
    
    let stack = [];

    for(let i = 0; i < S.length; i++) {
        let char = S[i];
        if(openC.indexOf(char) != -1) {
            stack.push(char);
        } else {
            const item = stack.pop();
            if(!isClosing(item, char)) {
                return 0;                
            }
        }
    }
    return stack.length ? 0 : 1;
}

function isClosing(item, char) {
    switch(item) {
        case '(': return char == ')';
        case '{': return char == '}';
        case '[': return char == ']';
    }
}