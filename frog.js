// The frog in the well knows nothing of the great ocean.
(function(){
	var global = Function("return this")();

	for(var attr in global) {
		if(attr !== "eval")
			eval("var " + attr +" = null;");
	}
	eval("var eval = null;");
	global = null;

	var frog;
})();