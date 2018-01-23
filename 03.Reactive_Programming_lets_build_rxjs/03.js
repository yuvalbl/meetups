const observer = {
    // same functions
    next: function nextCallBack(data) {
        console.log(data);
    },
    error: function errorCallBack(err) {
        console.error(err);
    },
    complete: function completeCallBack() {
        console.log('done');
    }
};

// what if put it in an object?
function subscribe(ob) {
    // this can contain http requests, clicks etc...
    [10, 20, 30].forEach(ob.next);
    ob.complete();
}

// give me data and deliver the results to the observer
subscribe(observer);