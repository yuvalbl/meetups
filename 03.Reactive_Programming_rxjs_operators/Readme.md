# RXjs Operators

(This document is optimized for presentation using [reveal-md](https://github.com/webpro/reveal-md))

---

# Overview
RXjs Operators may be confusing. let's review some of them to understand the logic behind it.

## Goals
* Understanding stream manipulations
<!-- .element: class="fragment" -->
* merge
<!-- .element: class="fragment" -->
* flatMap
<!-- .element: class="fragment" -->
* Cold to Hot operators
<!-- .element: class="fragment" -->

---

## Stream manipulations
get a stream => manipulate => return a stream
Example: filter
<div>
    <img src="./filter.png" style="max-height:30vh">
</div>

---

## Example: click stream buffer
Example: buffer

<div>
    <img src="./buffer.png" style="max-height:40vh">
</div>


---

## Example: click stream buffer

<div>
    <img src="./multi-click-marble-diagram.png" style="max-height:50vh">
</div>

---

## [merge](https://www.learnrxjs.io/operators/combination/merge.html)
<div>
    <img src="./merge.png" style="max-height:50vh">
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

Just an ordinary request? ...
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
    <img src="./metastream.png" style="max-height:30vh">
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

---

### [Hot vs Cold Observables](https://medium.com/@benlesh/hot-vs-cold-observables-f8094ed53339)

COLD is when your observable creates the producer
(example: per instance timers)
```
    // COLD
    const hot = new Observable((observer) => {
        const producer = new Producer();
      // have observer listen to producer here
    });
```
```
    // COLD
    const source = new Observable((observer) => {
      const socket = new WebSocket('ws://someurl');
      socket.addEventListener('message', (e) => observer.next(e));
      return () => socket.close();
    });
```

---

### [Hot vs Cold Observables](https://medium.com/@benlesh/hot-vs-cold-observables-f8094ed53339)

HOT is when your observable closes over the producer
(example: Mouse clicks)
```
    // HOT
    const producer = new Producer();
    const hot = new Observable((observer) => {
      // have observer listen to producer here
    });
```
```
    // HOT
    const socket = new WebSocket('ws://someurl');
    
    const source = new Observable((observer) => {
        socket.addEventListener('message', (e) => observer.next(e));
    });
```
Problem: now the observable doesn't hold the control for the websocket (completion, errors etc.)

---

### [Subjects](http://reactivex.io/documentation/subject.html)
Subjects acts both as an observer and as an Observable
It can help us Make A Cold Observable Hot

```
    function makeHot(cold) {
      const subject = new Subject();
      cold.subscribe(subject);
      return new Observable((observer) => subject.subscribe(observer));
    }
```
Note: Subjects cannot be reused

---

### Cold to Hot operators
[Publish vs Share](https://stackoverflow.com/questions/30696262/difference-between-share-and-publish-refcount)

Share
```
    const source = Rx.Observable.range(0, 5).publish();
    const sub1 = source.subscribe(x => console.log("Observer 1: " + x));
    const sub2 = source.subscribe(x => console.log("Observer 2: " + x));
    // Output: 0, 1, 2, 3, 4, 0, 1, 2, 3, 4
```

Publish
```
    const source = Rx.Observable.range(0, 5).publish();
    const sub1 = source.subscribe(x => console.log("Observer 1: " + x));
    const sub2 = source.subscribe(x => console.log("Observer 2: " + x));
    
    source.connect();
    // Output: 0, 0, 1, 1, 2, 2, 3, 3, 4, 4
```


---

## Further reading:
* [refCount](https://blog.angularindepth.com/rxjs-how-to-use-refcount-73a0c6619a4e)
* [RxJS: Understanding the publish and share Operators](https://blog.angularindepth.com/rxjs-understanding-the-publish-and-share-operators-16ea2f446635)