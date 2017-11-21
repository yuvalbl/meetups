
# Memory leaks

(This document is optimized for presentation using [reveal-md](https://github.com/webpro/reveal-md))

---

## Overview
<div style="float:left">
    <img src="./catch_them_all.jpg" height="200px">
</div>
<!-- .element: class="fragment" -->
Memory leaks are like Pokemons<br/>
Lets catch them all!
<!-- .element: class="fragment" -->

<br/>
<br/>

## Goals
<!-- .element: class="fragment" -->
* Understand/Define what is a memory leak
<!-- .element: class="fragment" -->
* Go trough optional causes
<!-- .element: class="fragment" -->
* Practice - seek and destroy
<!-- .element: class="fragment" -->

---

## What & Why
<!-- .element: class="fragment" -->
* A (very) loose definition:
 memory leak occurs when a memory which is no longer needed is not released.

<!-- .element: class="fragment" -->
* Why does it happen?
Code is holding object references which are not required anymore.
Like: Unnecessary data/objects, detached DOM nodes or - "leftovers" from past components (Like observables)
* Note: avoid using _delete_. setting to _null_ is enough
* Note 2: Another issue may be a memory "bloat":
  Memory bloat is when a page uses more memory than is necessary for optimal page speed
  (which is per-device...)
---

## Demo 1: Cats (ex01.html)
* code overview
* load and use profiling tool
* click around

---

## Example 1
```
    // some bad ideas
    Window['largeObject'] = new largeObject();
    Window['largeLibrary'] = require(./someVanillaJSLibrary);
```

---

## Example 2
```
    function work() {
        const worker = new worker();
        worker.doSomeWork();
        return worker; //do we really need this?
    };

    const dumbWorker = work();
```

---

## Example 3
```
    // Closures
    function someObject() {
        const extraLarge = new largeObject();
        return function() {
            console.log('I can use extraLarge object')
        };
    };
```
---
## Example 4
```
    // Observables

```
---

## Exercise 01: seek and destroy
<!-- .element: class="fragment" -->
* go to pokermon directory
* `npm i`
* `ng serve`
* navigate between pages and see console + profiling tool
* solve it somehow

---

# Conclusion and Tips
<!-- .element: class="fragment" -->
* Avoid global scope, _delete_
<!-- .element: class="fragment" -->
* Release object reference when done
<!-- .element: class="fragment" -->
* Observables: unsubscribe safely when done (for angular OnDestroy hook should be useful)