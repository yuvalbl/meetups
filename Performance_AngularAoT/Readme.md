# Angular build and AoT

(This document is optimized for presentation using [reveal-md](https://github.com/webpro/reveal-md))

---

## Overview
Angular build with AoT reduce the delivered code and startup run time
by compling angular in advanced. 

## Goals
* Review different builds
* Review Advantages of AoT
* Review problems and solutions with AoT
---

## ng build
* let's create an empty project - `ng dummy`
* build with ([options](https://github.com/angular/angular-cli/wiki/build#options)):
    * `ng build -op dist-dev`
    * `ng build -prod -op dist-prod`
    * `ng build -prod -sm -op dist-prod-sm`
* -op (output-path) define output directory (can use relative path - useful when server is in different project)
* -sm (source-map) useful for debug in production
* lets overview each build (with [`source-map-explorer`](https://www.npmjs.com/package/source-map-explorer), [`http-server`](https://www.npmjs.com/package/http-server))

---
## ng build explained
* webpack split js build files into 4 chunks: [inline, styles, main and vendor](https://stackoverflow.com/questions/42010893/what-these-angualr-cli-do-inline-bundle-js-vendor-bundle-js-main-bundle-js).
* dev build: 
    * no hash in filename (no need for long term caching)
    * relatively big (not minified)
    * have map files
* prod build:
    * each filename have hash, which will change only on content change
    * smaller (minified, less code - will be explain in a moment)
* prod with source map build: 
    * same as prod build, but also produced map files 
    * useful for dev-tools on production, no performance drawback
    
---

## Production build and AoT - where did all this code go
* `prod` build is using Ahead-of-Time compilation (in opposite to Just-in-Time compilation)
* `dev` build include the angular compiler module, which will compile on the browser
* AoT - compile code in advance (Hence AoT...) so:
    * non need for the [compiler module](https://blog.angularindepth.com/a-deep-deep-deep-deep-deep-dive-into-the-angular-compiler-5379171ffb7a) - less code, less traffic
    * browser work made easier
* Tree shaking - unused modules not included in production build (even if imported). 
Limited tree-shaking exist in dev build as well
* See [options](https://github.com/angular/angular-cli/wiki/build#options) and [prod vs dev](https://github.com/angular/angular-cli/wiki/build#--dev-vs---prod-builds) builds on angular-cli wiki

---

# Problems with AoT
* In order to use AoT - NgModules should be statically analyzable.
To achieve that, Some functionality should be avoided

* Partial [AoT checklist](https://blog.angularindepth.com/making-your-angular-2-library-statically-analyzable-for-aot-e1c6f3ebedd5):
    * const lambda => export function
    * default export => named export
    * private, protected accessors should be changed to public for any members accessed from template
    * dynamic component template => static template

* See more at [ng Docs](https://angular.io/guide/metadata)

---

# Exercises 1
* mySimpleProject
* Do `npm i`
* Fix to `ng build`
* Fix more to `ng build --prod`

---