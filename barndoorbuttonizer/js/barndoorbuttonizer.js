;(function(global){
	// UglifyJS define hack.  Used for unit testing..
	if (typeof BARNDOORBUTTONIZER_NOW === 'undefined') {
	  BARNDOORBUTTONIZER_NOW = function () {
	    return +new Date();
	  };
	}

	if (typeof BARNDOORBUTTONIZER === 'undefined') {
	  var global = (function(){return this;})();
	}


	var makeBarndoorbuttonizerObject = function($){
		console.log('makeBarndoorbuttonizerObject')
		var barndoorbuttonizer = function(options){
            
        };

		return barndoorbuttonizer;
	}
	//return objInstance;

	if (typeof exports === 'object') {
		// nodejs
		module.exports = makeBarndoorbuttonizerObject($,tools);
	} else if (typeof define === 'function' && define.amd) {
		// AMD
		define(['jQuery'],function(){
			return makeBarndoorbuttonizerObject.apply(null,arguments);
		});
	} else if (typeof global.barndoorbuttonizer === 'undefined') {
		// Browser: Make `Tweenable` globally accessible.
		global.barndoorbuttonizer = makeBarndoorbuttonizerObject($,tools);
	}



})(this);