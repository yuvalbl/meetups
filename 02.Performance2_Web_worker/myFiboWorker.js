onmessage = (msg) => {
    console.log('worker script: onmessage' );
    const workerResult = fibonacci(msg.data);
    postMessage(workerResult );
};


// get the N number in fibonacci series
function fibonacci(num) {
    let a = 1;
    let b = 0;
    let temp;

    while (num >= 0){
        temp = a;
        a = a + b;
        b = temp;
        num--;
    }
    return b;
}