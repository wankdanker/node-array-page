array-page
----------

Get a page worth of records

example
-------

```js
require('array-page').applyPrototype();
var a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

var page = a.page(/*page number*/ 2, /*page size*/ 3);

console.log(page);
// [1,2,3,4,5, _page: { page: 1, size: 5, count: 4, start: 0, stop: 5, first: 1, last: 4, next: 2, previous: null } ]

```

install
-------

```bash
npm install array-page
```

api
---

### arrayPage = require('array-page')

### arrayPage(array, pageNumber, pageSize)

* array: the array to get a page from
* pageNumber: the specific page of elements to return
* pageSize: the number of records to include in the page

### arrayPage.applyPrototype()

Add a `page` method to the Array prototype

### arrayPage.defaults(opts);

* opts:
  * pageSize : numeric; default page size. Default is 20;


license
-------

MIT
