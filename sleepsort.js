"use strict";

Array.prototype.sleepSort = async function() {
	if(!Array.isArray(this)) {
		throw new TypeError("this is not an array");
	}

	const ret = [];

	const promises = [];
	for(const val of this) {
		promises.push(new Promise(resolve => {
			setTimeout(() => {
				ret.push(val);
				resolve();
			}, val * 1000);
		}));
	}
	await Promise.all(promises);

	return ret;
};