// The frog in the well knows nothing of the great ocean.
(function(){
	var window = window || grobal;
	for(var attr in window) {
		eval("var " + attr +" = null;");
	}
	window = null;

	var frog;
})();