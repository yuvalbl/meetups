# Web workers

(This document is optimized for presentation using [reveal-md](https://github.com/webpro/reveal-md))

---

## Overview
[Web workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)
Can improve UX greatly, by removing heavy calculations form the main thread.

## Goals

* Explain why should we use web workers
<!-- .element: class="fragment" -->
* Understand web workers limitations 
<!-- .element: class="fragment" -->
* Practice using web worker to improve UX
<!-- .element: class="fragment" -->

---

## But Why?
* Free the main thread to do more important stuff.
<!-- .element: class="fragment" -->
* Like... rendering?
<!-- .element: class="fragment" -->

---

## Sky is the limit! Well, not really...
* Web workers communicate with pose messages
<!-- .element: class="fragment" -->
* This means everything should be string
<!-- .element: class="fragment" -->
* No reference to local objects
<!-- .element: class="fragment" -->



---

### A simple worker (main.js):
```
    // main.js
    if (window.Worker) {
        const myWorker = new Worker('worker.js');
    
        // define response
        myWorker.onmessage = function(msg) {
            const result = msg.data;
            console.log('result from worker: ' + result)
        };
    
        myWorker.postMessage([1948, 2000]);
    }
```

---

### A simple worker (worker.js):
```
    // worker.js
    
    onmessage = (msg) => {
        const workerResult = someWork(msg.data);
        postMessage(workerResult );
    };
    
    const someWork = (data) => {
        // do whatever
        return data[0] * data[1] * 42;
    };
```

---

# Exercises 1
* open ex01_fibo.html
* identify the UX problem
* use web worker to save the day

---

## Conclusion and Tips
* Web workers are good, specially for heavy calculations.
<!-- .element: class="fragment" -->
* Everything should be string - stringifying / parsing have it's toll as well
<!-- .element: class="fragment" -->