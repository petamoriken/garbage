(function() {
	"use strict";

	var window = window || global;

	window.timeSort = function(array, callback) {
		array = array || [];
		callback = callback || function(){};

		var length = array.length, counter = 0, ret = [];

		for(var i=0; i<length; ++i) {
			var val = array[i];
			setTimeout(setValue, val, val);
		}
	};

	function setValue(val) {
		ret.push(val);
		++counter;
		if(counter === length) {
			callback(ret);
		}
	}

	Array.prototype.timeSort = function(callback) {
		window.timeSort(this, callback);
	};

})();