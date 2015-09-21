var test = require('tape');
var page = require('./');
var a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

test('select page 1 with page size 5 from array with 20 elements', function (t) {
	var p;

	p = page(a, 1, 5);

	t.equal(p[0], 1, 'first element is 1');
	t.equal(p[p.length - 1], 5, 'last element is 5');
	t.equal(p._page.page, 1, '_page.page is 1');
	t.equal(p._page.size, 5, '_page.size is 5');
	t.equal(p._page.count, 4, '_page.count is 4');
	t.equal(p._page.next, 2, '_page.next is 2');
	t.equal(p._page.previous, null, '_page.previous is null');

	t.end();
});

test('select page 2 with page size 10 from array with 20 elements', function (t) {
	var p;

	p = page(a, 2, 10);

	t.equal(p[0], 11, 'first element is 11');
	t.equal(p[p.length - 1], 20, 'last element is 20');
	t.equal(p._page.page, 2, '_page.page is 2');
	t.equal(p._page.size, 10, '_page.size is 10');
	t.equal(p._page.count, 2, '_page.count is 2');
	t.equal(p._page.next, null, '_page.next is null');
	t.equal(p._page.previous, 1, '_page.previous is 1');

	t.end();
});

test('using prototype: select page 2 with page size 10 from array with 20 elements', function (t) {
	var p;

	page.applyPrototype();

	p = a.page(2, 10);

	t.equal(p[0], 11, 'first element is 11');
	t.equal(p[p.length - 1], 20, 'last element is 20');
	t.equal(p._page.page, 2, '_page.page is 2');
	t.equal(p._page.size, 10, '_page.size is 10');
	t.equal(p._page.count, 2, '_page.count is 2');

	t.end();
});
