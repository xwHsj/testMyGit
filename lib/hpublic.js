$(document).ready(function(){
	var jcontextPath = typeof contextPath == "undefined" ? "" : contextPath;

	/*初始化*/
	$.get("../config/init.json", function(jsonData){
		console.log(JSON.stringify(jsonData));
		console.log(jsonData[0].contextPath);
	});

	$("*[ifd-include]").each(function(){
		var _this = $(this);
		$.get(_this.attr('ifd-include'), function(data){
			var _data = typeof data == "object" ? XMLtoString(data) : data;
			_this.before(_data);
			_this.remove();
		});
	});
	
	function XMLtoString(elem){  
	    var serialized;  
	    try {
	        // XMLSerializer exists in current Mozilla browsers                                                                              
	        serializer = new XMLSerializer();                                                                                                
	        serialized = serializer.serializeToString(elem);                                                                                 
	    }                                                                                                                          
	    catch (e) {  
	        // Internet Explorer has a different approach to serializing XML                                                                 
	        serialized = elem.xml;                                                                                                           
	    }
	    return serialized;                                                                                                                   
	}  
});
