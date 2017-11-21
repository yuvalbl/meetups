# ES Modules VS CommonJS
### Inspired by a talk given by [Gil Tayar](https://docs.google.com/presentation/d/1pC4nfuJ7Z90YKb_rsMeCsFH6XuYdEJK8ovlwoZZmWh8/edit#slide=id.g2928e71216_0_25)
(This document is optimized for presentation using [reveal-md](https://github.com/webpro/reveal-md))

---

## Overview
Since node v8.5, we can use ESModules (AKA import/export) on the server,
Which let us enjoy async loading and use same code for both sides.

## Goals
<!-- .element: class="fragment" -->
* Explain why should we care about ESM
<!-- .element: class="fragment" -->
* Understand CJS/ESM different syntax
<!-- .element: class="fragment" -->
* Practice converting CJS to ESM

---

## ESM? But Why?
<!-- .element: class="fragment" -->
* Allow Async loading
<!-- .element: class="fragment" -->
* Native support and better compatibility: same code can be used for both client
and server, no extra libraries [required](http://requirejs.org/)
<!-- .element: class="fragment" -->
* It seems like it is going to be the next standard

---

## CJS vs ESM, Preps:
CJS:
```
    $ node main.js
```

ESM:
```
    $ node --experimental-modules main.mjs
```

---

---

## CJS vs ESM, round 1 (importing)
CJS: (_main.js_):
```
    const {Leo, Mikey, Don, Raph} = require('./TMNT')
```

ESM (_main.mjs_):
```
    import {Leo, Mikey, Don, Raph} from './TMNT'
```

---


## CJS vs ESM, round 2 (exporting)
CJS (_TMNT.js_):
```
    module.exports.Leo = 'Leonardo';
    module.exports.Mikey = 'Michelangelo';
    module.exports.Don = 'Donatello ';
    module.exports.Raph = 'Raphael ';
```

ESM (_TMNT.mjs_):
```
    export const Leo = 'Leonardo';
    export const Leo = 'Michelangelo';
    export const Leo = 'Donatello';
    export const Leo = 'Raphael';
```

---
## Recap:
<!-- .element: class="fragment" -->
* ESM extension is “.mjs” and (only!) use export/import
* CJS extension is “.js” and (only!) use require
* ESM  is async, while CJS  is sync

---
## CJS vs ESM, round 3 (Binding)
CJS:
```
    // TMNT.js
    module.exports.LeoUseKatanas = () => (Leo = 'Leonardo wield Katanas');
    
    // main.js
    const {Leo, LeoUseKatanas} = require('./TMNT');
    LeoUseKatanas(); 
    console.log(Leo);   // Leonardo
```

ESM:
```
    // TMNT.mjs
    export const LeoUseKatanas = () => (Leo = 'Leonardo wield Katanas');
    
    // main.mjs
    import {Leo, LeoUseKatanas} from './TMNT'
    LeoUseKatanas(); 
    console.log(Leo);   // Leonardo wield Katanas
```

---
## CJS vs ESM, round 4 (default and named imports)

CJS:
```
    // TMNT_2.js
    module.exports = () => {
        return {
            name: 'Splinter',
            level: 'master'
        };
    };
    module.exports.mutatedBy = 'Rat'
    
    // main.js
    const Splinter = require('./TMNT_2');
    const {mutatedBy} = Splinter;
```

ESM:
```
    // TMNT_2.mjs
    export default () => {
       return {
           name: 'Splinter',
           level: 'master'
       };
    };
    
    // main.mjs
    import {Splinter, {mutatedBy}} from './TMNT_2'
```
---
## CJS vs ESM, round 5 (dynamic imports)
<b>Note the file extensions</b>
CJS:
```
    // main.js
    function main() {
        const {Leo} = require('./TMNT.js')
        console.log(Leo)
    }
    main();
```

ESM:
```
    // main.mjs
    async function main() {
        const {Leo} = await import('./TMNT.mjs')
        console.log(Leo)
    }
    main();
```


---
## Can be mixed? 
Yes, ESM can import CJS modules,
But <b>only for default exports</b>

This will fail with error:
```
    // TMNT.js
    module.exports.Leo = 'Leonardo'

    // main.mjs
    import {Leo} = from './TMNT'
    console.log(Leo)
```

But his will work:
```
    // TMNT.js
    module.exports.Leo = 'Leonardo'

    // main.mjs
    import TMNT = from './TMNT'
    console.log(TMNT.Leo)
```


# Exercises 1
* clone dir myTMNT
* convert main.js to main.mjs (no need to convert other files)
* run with node --experimental-modules

---

# Conclusion and Tips
<!-- .element: class="fragment" -->
* ESM and CMJ, so much alike But - 
<!-- .element: class="fragment" -->
* ESM have a great advantage when it comes to async requests
<!-- .element: class="fragment" -->
* Get ready for the (near) future by writing ES modules (mjs extensions...)