# V8 Optimization

---

## Overview
With proper Optimization a javascript function can run
x100 times faster and more.

## Goals
* Describe how v8 works (In principle...)
* Review options to improve v8 optimization
---

## What is v8 and how it works?
* V8 is an open source JavaScript engine
* V8 compiles JavaScript to directly native machine before executing it
* [2 levels of compilation](https://v8project.blogspot.co.il/2017/05/launching-ignition-and-turbofan.html):
    * Fast - Jump start, no optimization ([Ignition](https://github.com/v8/v8/wiki/Interpreter))
    * Optimizing compilers (like [TurboFan](https://github.com/v8/v8/wiki/TurboFan))
* Optimization done dynamically at runtime, based on heuristics of the code's execution profile
* Try to be up to date - v8 is changing <b>fast</b> (on v5.9 Crankshaft is not longer used)

---

## Dynamic Optimization based on heuristics?!
Yes. consider the following code:

---

# Some code cannot be optimized
* Certain code will cause the optimizer to stop trying("bailout").
* When a function contain such code - the entire function will not be optimized 
(So if you must have such code - refactor and externalize it)
* "Bailout list" is changing from time to time, as optimizer support getting better.
* Among main bailouts reasons at this time (October 2017):
    * debugger
    * debugger
    * debugger

---

# Excercise
Lorem ipsum.
