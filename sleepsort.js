(function() {
	"use strict";

	var window = window || global;

	window.sleepSort = function(array, callback) {
		array = array || [];
		callback = callback || function(){};

		var length = array.length, counter = 0, ret = [];

		for(var i=0; i<length; ++i) {
			var val = array[i];
			setTimeout(setValue, val*1000, val);
		}

		function setValue(val) {
			ret.push(val);
			++counter;
			if(counter === length) {
				callback(ret);
			}
		}
	};

	Array.prototype.sleepSort = function(callback) {
		window.sleepSort(this, callback);
	};

})();

[1, 2, 5, 1, 2, 3].sleepSort(function(val) {
	console.log(val);
});