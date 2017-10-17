# V8 Optimization

(This document is optimized for presentation using [reveal-md](https://github.com/webpro/reveal-md))

---

## Overview
With proper Optimization a javascript function can run
x100 times faster and more.

## Goals
<!-- .element: class="fragment" data-fragment-index="1" -->
* Describe how v8 works (In principle...)
<!-- .element: class="fragment" data-fragment-index="1" -->
* Review options to improve v8 optimization
<!-- .element: class="fragment" data-fragment-index="2" -->

---

## What is v8 and how it works?
* V8 is an open source JavaScript engine
<!-- .element: class="fragment"-->
* V8 compiles JavaScript to directly native machine code before executing it
<!-- .element: class="fragment" -->
* V8 has  <!-- .element: class="fragment"  -->
[2 levels of compilation](https://v8project.blogspot.co.il/2017/05/launching-ignition-and-turbofan.html): 
    - Fast - Jump start, no optimization ([Ignition](https://github.com/v8/v8/wiki/Interpreter))
    - Optimizing compilers (like [TurboFan](https://github.com/v8/v8/wiki/TurboFan))
* Optimization done dynamically at runtime, based on heuristics of the code's execution profile
<!-- .element: class="fragment" -->
* Try to be up to date - v8 is changing fast (v5.9 was a drastic improvement)
<!-- .element: class="fragment"  -->


---

## Dynamic Optimization based on heuristics?!
Yes. And it has drawbacks. <br>
consider the following code:
```
    function add(a) {
    	return a+a;
    }

    for(let i = 0; i < 10000000; i++) {
        add((i==50000) ? 1 : 'b');
    }
```
<p>
At first, v8 assume _add_ will be called with numbers. 
when a string is sent - it cannot use the optimized code.
</p>
<!-- .element: class="fragment"  -->

---

## Some code cannot be optimized
* Certain code will cause the optimizer to stop trying("bailout").
<!-- .element: class="fragment"  -->

* When a function contain such code - the entire function will not be optimized 
(So if you must have such code - refactor and externalize it)
<!-- .element: class="fragment"  -->

* "Bailout list" (Or "optimization killers") is changing from time to time, as optimizer support getting better.
<!-- .element: class="fragment"  -->

---

## Exercises 1
* ex01.html
* see how dynamic type damage performance
* Try to recognize optimization killer (commented in `add` function)

---

## Optimization killers
* Among main bailouts reasons at this time (October 2017):
<!-- .element: class="fragment"  -->
    * object literal containing a getter / setter
<!-- .element: class="fragment"  -->
    * debugger
<!-- .element: class="fragment"  -->
    * with
<!-- .element: class="fragment"  -->
    * index out of array
<!-- .element: class="fragment"  -->

* Since v5.9 killers list reduced significantly, and include support for important functionality (like try / catch / finally blocks)
<!-- .element: class="fragment"  -->

---

# Exercises 2 and 3
* ex02.js
* comment/un-comment and see when v8 de-optimize code

* ex03.html

---
## Tips:
* Upgrade v8 (node, chrome) whenever possible
<!-- .element: class="fragment"  -->
* Lint it (Lint help avoid most optimization issues)
<!-- .element: class="fragment"  -->
* Typescript is good for you (typing allow better optimization heuristics).
<!-- .element: class="fragment"  -->
* Use<!-- .element: class="fragment"  --> [strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)
 (HW: Is Angular-cli / Typescript already doing it for you?)

* Refactor when possible (e.g. check index out of array), externalize when not ( e.g. try/catch on [older v8 versions](https://blog.sqreen.io/optimize-your-node-app-by-simply-upgrading-node-js/))
<!-- .element: class="fragment"  -->
