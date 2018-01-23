# Let's build RXjs!

(This document is optimized for presentation using [reveal-md](https://github.com/webpro/reveal-md))

---

## Overview
Based on [You will learn RxJS]( https://www.youtube.com/watch?v=uQ1zhJHclvs)

### Goals
<!-- .element: class="fragment" -->
* Build basic version of RXjs
<!-- .element: class="fragment" -->
* Understand the concept of observables and subscribe
<!-- .element: class="fragment" -->

---

### What RXjs is about?
Get a callback and represent it as a collection.


```
    // synchronous callback
    const arr = [1, 2, 3, 4];
    
    arr.forEach( item => {
        console.log(item)
    });
```
<!-- .element: class="fragment" -->

---

### asynchronous callback
When performing HTTP request - we can have errors. That require 2 callbacks...
```
    // synchroious callback (Promise)
    const res = fetch('api.mydomain.com/users/1')
        .then(r => r.json());
    
    function successCallback() {
        //...
    }
    function failureCallback() {
        //...
    }
    
    res.then(successCallback, failureCallback);
```
<!-- .element: class="fragment" -->

---

### Data streams 
When treating event streams - we'll need 3 callbacks...
```
    const pokemonStream = getLotsOfPokemons();
    function nextPokemonCallback() {
        // get a fresh new pokemon
    }
    function errorCallback() {
        // error!
    }
    function doneCallback() {
        // done getting pokemons
    }
    
    pokemonStream.on('data', pokemonStream);
    pokemonStream.on('error', errorCallback);
    pokemonStream.on('done', doneCallback);
```
<!-- .element: class="fragment" -->

---

## Let's make it generic!
Live code + Hands On exercise (clone the repo now!)
