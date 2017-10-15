//do: node --trace_deopt ex02.js | findstr DEOPT
// see how result change when you comment/uncomment function calls

function add(a) {
    return a+a;
}

// this function will optimized into native code
function doWorkNumberType() {
    console.time('doWorkStaticType');
    const a = 12341234;
    const b = 56785678
    for(let i = 0; i < 10000000; i++) {
        add((i==50000) ? a : b);
    }
    console.timeEnd('doWorkStaticType');
}

// this function will optimized and later on will de-optimized
function doWorkDynamicType() {
    console.time('doWorkDynamicType');
    const a = 1234;
    const b = 'abcd'
    for(let i = 0; i < 10000000; i++) {
        add((i==50000) ? a : b);
    }
    console.timeEnd('doWorkDynamicType');
}

// this function cannot be optimized (current chrome v61.0.3163.100)
function doWorkNotOptimizable() {
    console.time('doWorkNotOptimizable');
    with(console) {
        log('some log')
        const a = 1234;
        const b = 5678;
        for(let i = 0; i < 10000000; i++) {
            add((i==50000) ? a : b);
        }
    }
    console.timeEnd('doWorkNotOptimizable');
}
function doWorkNotOptimizable2() {
    console.time('doWorkNotOptimizable2');
    let arr = [1234, 5678];
    for(let i = 0; i < 10000000; i++) {
        add(arr[i])
        // add(undefined)
    }
    console.timeEnd('doWorkNotOptimizable2');
}


doWorkNumberType();
// doWorkDynamicType();
// doWorkNotOptimizable();
// doWorkNotOptimizable2();