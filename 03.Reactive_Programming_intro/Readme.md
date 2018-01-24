# Reactive Programming
## what & why?

(This document is optimized for presentation using [reveal-md](https://github.com/webpro/reveal-md))

---

# Overview
Reactive Programming - what is it, and why it is a big deal?

## Goals
<!-- .element: class="fragment" -->
* Explain the concept of Reactive Programming
<!-- .element: class="fragment" -->
* Show what is it good for?
<!-- .element: class="fragment" -->

---

## What is Reactive Programming?
* Reactive programming is programming with __asynchronous data streams__.
* Anything can be a 'data stream' - clicks, variables, HTTP requests etc...
<!-- .element: class="fragment" -->
* Change of approach - sync programming vs async
<!-- .element: class="fragment" -->
* Think about taking the concept of Promise to the next level
<!-- .element: class="fragment" -->

---

## The Marvel of Marbles
data / events stream usually explained by __marbles__:

```
    --a---b-c---d---X---|->
    
    a, b, c, d are emitted values
    X is an error
    | is the 'completed' signal
    ---> is the timeline
```
<!-- .element: class="fragment" -->
<div>
    <a href="https://gist.github.com/staltz/868e7e9bc2a7b8c1f754" target="_blank">
        <img src="./marbles_events.png">
    </a>
</div>
<!-- .element: class="fragment" -->


---

## Anything can be a stream! 
### take 1 - arrays
### live demo [jsbin](https://jsbin.com/fudatiz/7/edit?js,console)
[gist](https://gist.github.com/yuvalbl/c2019597dbc55788e4762dfdbfa7e068)


---


## Anything can be a stream! 

### take 2 - click events (invoke ONLY on double clicks)
### live demo [jsbin](https://plnkr.co/edit/?p=preview)
[egghead tutorial](https://egghead.io/lessons/rxjs-use-an-event-stream-of-double-clicks-in-rxjs)


---

## Things to remember...
* Anything can be a stream
<!-- .element: class="fragment" -->
* Learn the principles, not the operators
<!-- .element: class="fragment" -->
* Operators - many are similar to what you know, only now they return observables
<!-- .element: class="fragment" -->
* Declare behavior completely at declare time
<!-- .element: class="fragment" -->


---


## Resources:

* <a href="https://gist.github.com/staltz/868e7e9bc2a7b8c1f754" target="_blank">
    The introduction to Reactive Programming you've been missing
</a>
* <a href="https://egghead.io/lessons/rxjs-understand-reactive-programming-using-rxjs" target="_blank">
    Understand Reactive Programming using RxJS
</a>
* <a href="https://github.com/eggheadio-projects/introduction-to-reactive-programming" target="_blank">
    Understand Reactive Programming using RxJS - Github
</a>
* <a href="http://reactivex.io/documentation/subject.html" target="_blank">
    Subjects
</a>
* <a href="https://www.youtube.com/watch?v=uQ1zhJHclvs" target="_blank">
    You will learn RxJS
</a>

---

# Conclusion and Tips
* Do the [egghead tutorial](https://egghead.io/lessons/rxjs-use-an-event-stream-of-double-clicks-in-rxjs)
* Watch the video: [You will learn RxJS](https://www.youtube.com/watch?v=uQ1zhJHclvs)
