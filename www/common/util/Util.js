/**
 * Class that keeps methods that can be
 * used in any layer of the system
 */
var Util = {};

var monthList = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
var dayList = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

Util.locale = {
	pt: {
		months: monthList,
		days: dayList
	}
};

Util.defaultLang = "pt"; 

Util.monthToString = function(month, lang){
	var language = lang ? lang : Util.defaultLang;
	return Util.locale[language].months[month];
};

Util.weekdayToString = function(day, lang){
	var language = lang ? lang : Util.defaultLang;
	return Util.locale[language].days[day];
};

Util.circularShift = function(array, times){
	for(var i = 0; i < times; i++){
		var item = array.shift();
		array.push(item);
	};
};

Util.isEmail = function(email){
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

Util.dateDiff = {
    inDays: function(d1, d2) {
        var t2 = d2.getTime();
        var t1 = d1.getTime();

        return parseInt((t2-t1)/(24*3600*1000));
    },

    inWeeks: function(d1, d2) {
        var t2 = d2.getTime();
        var t1 = d1.getTime();

        return parseInt((t2-t1)/(24*3600*1000*7));
    },

    inMonths: function(d1, d2) {
        var d1Y = d1.getFullYear();
        var d2Y = d2.getFullYear();
        var d1M = d1.getMonth();
        var d2M = d2.getMonth();

        return (d2M+12*d2Y)-(d1M+12*d1Y);
    },

    inYears: function(d1, d2) {
        return d2.getFullYear()-d1.getFullYear();
    }
};

Util.zeroComplement = function(number, zeros){
	var response = "" + number;
	var length = response.length;
	
	while(length < zeros){
		response = "0" + response;
		length = length + 1;
	}
	
	return response;
};

Util.isNetworkOnline = function(){
	networkPlugin = document.getElementById('pluginObjectNetwork');

	var wiredConnection = networkPlugin.CheckPhysicalConnection(1);
	var wirelessConnection = networkPlugin.CheckPhysicalConnection(0);

	return (wiredConnection == 1 || wirelessConnection == 1);
};

Util.urlEncode = function(attributes){
	if(Platform.name == Platform.SAMSUNG){
		return attributes;
	}else{
		return encodeURIComponent(attributes.replace(" ", "%20"));
	}
};

Util.stripString = function(string){
	var strippedString = string.replace(/(<([^>]+)>)/ig, '');
	
	return strippedString;
};

Util.strip = function(string){
   var tmp = document.createElement("DIV");
   tmp.innerHTML = string;
   return tmp.textContent||tmp.innerText;
};

Util.ellipsisText = function(string, maxCharacters) {
    var text = string;
    
    if(text.length > maxCharacters){
    	text = text.slice(0, maxCharacters - 3) + '...';
    }
    	
    return text;
};

Util.sort = function(options){
	var sort_by = function(field, reverse, primer){
		var key = function (x) {return primer ? primer(x[field]) : x[field];};

		return function (a,b) {
			var A = key(a), B = key(b);
			return ((A < B) ? -1 :
				(A > B) ? +1 : 0) * [-1,1][+!!reverse];                  
		};
	};
	
	var list = options.list;
	var field = options.field.toLowerCase();
	var primer = options.primer;
	var order = options.order;
	var reverse = (order == "asc");
	
	list.sort(sort_by(field, reverse, primer));
};

Util.formatTime = function(time){
	var seconds = Math.floor(time / 1000) % 60;
	var minutes = Math.floor(time / 60000) % 60;
	var hours = Math.floor(time / 3600000);
	
	var finalTime = "";
	
	if(seconds < 10){
		seconds = "0" + seconds;
	}
	
	if(minutes < 10){
		minutes = "0" + minutes;
	}
	
	/*if(hours > 0){
		if(hours < 10){
			hours = "0" + hours;
		}
	}else{
		hours = null;
	}*/
	
	if(hours < 10){
		hours = "0" + hours;
	}
	
	finalTime = (hours ? (hours + ":") : "") + minutes + ":" + seconds;
	
	return finalTime;
};

Util.lockText = function(content){
	var user = UserController.user ? UserController.user : {}; 
	var lock = "";
	var showLock = false;
	
	if(content.age > 0 && content.age > user.age){
		showLock = true;
	}
	
	if(content.contentType){
		if((content.contentType == Constants.contentTypes.exclusivo) 
					|| ((content.contentType == Constants.contentTypes.assinatura) && !user.subscriber)){
			showLock = true;
		}
	}
	
	if(showLock){
		lock = "<div id='cadeado' class='cadeado'></div>";
	}
	
	return lock;
};

Util.startsWith = function(str, prefix){
	return str.slice(0, prefix.length) == prefix;
};

Util.endsWith = function(str, suffix) {
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
};

Util.setCaretPosition = function(elemId, caretPos) {
    var ctrl = document.getElementById(elemId);

    if(ctrl.setSelectionRange)
	{
		if(Constants.manufacturerName != "Philips"){
			ctrl.focus();
		}
		ctrl.setSelectionRange(caretPos,caretPos);
	}
	else if (ctrl.createTextRange) {
		var range = ctrl.createTextRange();
		range.collapse(true);
		range.moveEnd('character', caretPos);
		range.moveStart('character', caretPos);
		range.select();
	}
};

Util.getCaretPosition = function(elemId) {
	var CaretPos = 0;
	var ctrl = document.getElementById(elemId);
	
	Platform.log(ctrl);
	
	if (document.selection) {
		if(Constants.manufacturerName != "Philips"){
			ctrl.focus();
		}
		var Sel = document.selection.createRange ();
		Sel.moveStart ('character', -ctrl.value.length);
		CaretPos = Sel.text.length;
	}else if (ctrl.selectionStart || ctrl.selectionStart == '0'){
		CaretPos = ctrl.selectionStart;
	}
	
	return (CaretPos);
};

Util.caretPrev = function(elemId){
	Util.setCaretPosition(elemId, parseInt(Util.getCaretPosition(elemId)) - 1);
};

Util.caretNext = function(elemId){
	Util.setCaretPosition(elemId, parseInt(Util.getCaretPosition(elemId)) + 1);
};

$.fn.isOnScreen = function(){
    var win = $(window);
    
    var viewport = {
        top : win.scrollTop(),
        left : win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();
    
    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();
    
    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
    
};