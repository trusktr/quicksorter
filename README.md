quicksorter
===========

A quicksort implementation.

Usage
-----

Import quicksort with your choice of module system:

```js
import qsort from 'quicksorter' // ES2015
// or
let qsort = require('quicksorter') // CommonJS
// or
define(['quicksorter'], function(qsort) {}) // AMD
```

then use it:

```js
let arr = [3,8,1,6,5,3,0]
qsort(arr)
console.log(arr)
// output:
// [0,1,3,3,5,6,8]
```

Provide a "predicate" function to specify how to compare any two items a and b
of the array being sorted. The predicate function must return -1 if a < b, 0 if
a == b, and 1 if a > b:

```js
let arr2 = [
    {first: 'Alicia', last: 'Kemper'},
    {first: 'Lesya',  last: 'Urakova'},
    {first: 'Ron',    last: 'Allen'},
    {first: 'Idris',  last: 'Montego'},
]

qsort(arr2, function(a, b) {
    return a.last < b.last ? -1 : a.last > b.last ? 1 : 0
})

console.log(arr2)
// output:
[
    {first: 'Ron',    last: 'Allen'},
    {first: 'Alicia', last: 'Kemper'},
    {first: 'Idris',  last: 'Montego'},
    {first: 'Lesya',  last: 'Urakova'},
]
```
