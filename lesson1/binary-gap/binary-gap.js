function solution(N) {
    let binaryNumber = N.toString(2);
    
    let isOpen = false;
    let greaterGap = 0;
    let currentGap = 0;
    for(let n of binaryNumber) {
        if (n == '1') {
            isOpen = !isOpen
            if(!isOpen) {
                greaterGap = currentGap > greaterGap ? currentGap : greaterGap;
                currentGap = 0;
            }
        } else {
            currentGap++;
        }
    }
    return greaterGap;
    
    //let gaps = binaryNumber.split('1').slice(1, -1).sort((a, b) => b - a);
    //let greaterGap = (gaps[0] || '').length;
    //return greaterGap;
}