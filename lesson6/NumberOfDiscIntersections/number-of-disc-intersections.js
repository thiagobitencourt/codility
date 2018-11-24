// Evaluation at: https://app.codility.com/demo/results/trainingAHPDME-32N/
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const MAX_I = 10000000;
    let points = [];
    let intersections = 0;

    for(let i = 0; i < A.length; i++) {
        const p = A[i];
        points.push({ init: i - p, end: i + p });
    }
    
    points.sort((a, b) => a.init - b.init);

    for(let i = 0; i < points.length - 1; i++) {
        const point = points[i];
        let j = i + 1;
        let next = points[j];
        
        while(next && (next.init >= point.init && next.init <= point.end)) {
           intersections++;
           next = points[++j];
        }

        if(intersections > MAX_I) return -1;
    }

    return intersections;
}

// Teste cases
// console.log("Expect 11 got: " + solution([1, 5, 2, 1, 4, 0]) );
// console.log("Expect 6 got: " + solution([1, 0, 1, 0, 1]) );
// console.log("Expect 3 got: " + solution([1, 0, 2]) );
// console.log("Expect 0 got: " + solution([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]) );