// Evaluation at: https://app.codility.com/demo/results/training4YKY32-FGK/
function solution(H) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    let wall = [];
    let blocks = 0;
    
    for (let i = 0; i < H.length; i++) {
        const height = H[i];
        const lastH = wall[wall.length -1] || 0;
        if (height > lastH) {
            blocks++;
        } else if (height < lastH) {
            let smallH = isPreviousSmallBlockEquals(wall, wall.length - 2, height);
            if (!smallH) {
                blocks++;
            }
        }
        wall.push(height);
    }
    return blocks;
}

function isPreviousSmallBlockEquals(wall, index, height) {
    let i = index;
    let small = height + 1;
    while(small > height && i >= 0) {
        small = wall[i];
        i--;
    }
    return small == height ? true : false;
}