var defaults = {
	pageSize : 20
};

module.exports = arrayPage;

module.exports.defaults = function (o) {
	defaults = o;
}

module.exports.applyPrototype = function () {
	Array.prototype.page = function (pageNumber, pageSize) {
		return arrayPage(this, pageNumber,pageSize);
	};
}

function arrayPage (array, pageNumber, pageSize) {
	var page = pageNumber || 1;
	var size = pageSize || defaults.pageSize;

	var start = (page - 1) * size;
	var stop = start + size;
	var tmp = array.slice(start, stop);
	var count = Math.ceil(array.length / size);

	tmp._page = {
		page : page
		, size : size
		, count : count
		, start : start
		, stop : stop
		, first : 1
		, last : count
		, next : (page + 1 > count) ? null : page + 1
		, previous : (page - 1 < 1) ? null : page - 1
		, total : array.length
	};

	return tmp;
};


