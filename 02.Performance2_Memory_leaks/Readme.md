
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
Like: Unnecessary data, detached DOM nodes or - "leftovers" from past components (Like observables)
* Another issue may be a memory "bloat":
  Memory bloat is when a page uses more memory than is necessary for optimal page speed
  (which is per-device...)
---

## Block 2
<!-- .element: class="fragment" -->
* Item 1
<!-- .element: class="fragment" -->
* Item 2
<!-- .element: class="fragment" -->
* Item 3

---

## Exercise 01: seek and destroy
Lorem ipsum.

---

# Conclusion and Tips
<!-- .element: class="fragment" -->
* Item 1
<!-- .element: class="fragment" -->
* Item 2
<!-- .element: class="fragment" -->
* Item 3