var utils = utils || (function(utils){	/*Storage use jquery.cookie.js*/	var localStorageAvailable = false;	if(typeof(Storage)!=="undefined")	{		localStorageAvailable = true; 	}else{		//$.cookie.raw = true;	}	utils.set = function(valName, valValue){		if(!!localStorageAvailable){			localStorage[valName] = valValue;		}else{			$.cookie(valName, valValue, { expires: 99999999999, path: '/' });		}	};	utils.get = function(valName){		if(!!localStorageAvailable){			return localStorage[valName] || 'NOT_FOUND [ ' + varName + ' ]';		}else{			$.cookie(varName);		}	 };    utils.addFunction = function(items, callback){    }	return utils;}(utils || {}))