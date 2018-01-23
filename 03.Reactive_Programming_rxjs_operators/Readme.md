# RXjs Operators

(This document is optimized for presentation using [reveal-md](https://github.com/webpro/reveal-md))

---

# Overview
RXjs Operators
[reveal-md](https://github.com/webpro/reveal-md)
## Goals
* Understanding stream manipulations
<!-- .element: class="fragment" -->
* merge
<!-- .element: class="fragment" -->
* flatMap
<!-- .element: class="fragment" -->


---

## Stream manipulations
Take a stream => manipulate => return a stream

<div>
    Example: filter
    <img src="./filter.png">
</div>

---

## Example: click stream buffer

<div>
    Example: buffer
    <img src="./buffer.png">
</div>


---

## Example: click stream buffer

<div>
    <img src="./multi-click-marble-diagram.png">
</div>

---

## [merge](https://www.learnrxjs.io/operators/combination/merge.html)
<div>
    <img src="./merge.png">
</div>

---

## [merge](https://www.learnrxjs.io/operators/combination/merge.html)
```
//emit every 2.5 seconds
const first = Rx.Observable.interval(2500);
//emit every 1 second
const second = Rx.Observable.interval(1000);
//used as instance method
const example = first.merge(second);
//output: 0,1,0,2....
const subscribe = example.subscribe(val => console.log(val));

```
[Live example 1](http://jsbin.com/wuwujokaqu/1/edit?js,console)
[Live example 2 - click stream](http://jsfiddle.net/staltz/4gGgs/27/)

---

### [flatMap](https://www.learnrxjs.io/operators/combination/merge.html)
[Demo Area](https://jsbin.com/xixirof/edit?html,js,console)
Consider the following 
```
const responseStream = Rx.Observable.fromPromise(
  $.getJSON('https://api.github.com/users/1')
)

responseStream.subscribe(data => console.log(data))
```

---

```

const someElementValue = [1,2];

const responseMetastream = Rx.Observable.from(someElementValue)
    .map( itemValue => 
        Rx.Observable.fromPromise(
            $.get('https://api.github.com/users/' + itemValue)
        )
    );
    
// metastream - stream of streams...
responseMetastream.subscribe(data => console.log(data))

```
<div>
    <img src="./metastream.png">
</div>
<!-- .element: class="fragment" -->
---

```
const someElementValue = [1,2];

// flatMap to the rescue!
const responseStream = Rx.Observable.from(someElementValue)
    .flatMap( itemValue => 
        Rx.Observable.fromPromise(
            $.get('https://api.github.com/users/' + itemValue)
        )
    );
    
responseStream.subscribe(data => console.log(data))
```

<div>
    <img src="./flatmap.png">
</div>
<!-- .element: class="fragment" -->

