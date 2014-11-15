// The frog in the well knows nothing of the great ocean.
(function(){
	var window = window || global;
	for(var attr in window) {
		if(attr !== "eval")
			eval("var " + attr +" = null;");
	}
	eval("var eval = null;");
	window = null;

	var frog;
})();