var Overlay = require('../index');

var btn = document.getElementById('btn');

btn.onclick = function(){
	var ol = new Overlay();
	ol.show();
}


