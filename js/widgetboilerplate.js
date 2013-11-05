;(function(global){
	// UglifyJS define hack.  Used for unit testing..
	if (typeof WIDGETBOILERPLATE_NOW === 'undefined') {
	  WIDGETBOILERPLATE_NOW = function () {
	    return +new Date();
	  };
	}

	if (typeof WIDGETBOILERPLATE === 'undefined') {
	  var global = (function(){return this;})();
	}


	var makeWidgetboilerplateObject = function($){
		console.log('makeWidgetboilerplateObject')
		var widgetboilerplate = function(options){
            
        };

		return widgetboilerplate;
	}
	//return objInstance;

	if (typeof exports === 'object') {
		// nodejs
		module.exports = makeWidgetboilerplateObject($,tools);
	} else if (typeof define === 'function' && define.amd) {
		// AMD
		define(['jQuery'],function(){
			return makeWidgetboilerplateObject.apply(null,arguments);
		});
	} else if (typeof global.widgetboilerplate === 'undefined') {
		// Browser: Make `Tweenable` globally accessible.
		global.widgetboilerplate = makeWidgetboilerplateObject($,tools);
	}



})(this);