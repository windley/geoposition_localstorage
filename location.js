
var geoposition_interval_value = 5000;
var geoposition_interval_key = "current_geoposition";

var geoposition_interval_id = setInterval(function() {
    console.log("Getting geolocation");
    navigator.geolocation.getCurrentPosition(function(pos) {
	console.log("Storing location ", pos.coords.latitude + "," + pos.coords.longitude);
	localStorage.setItem(geoposition_interval_key, JSON.stringify(pos));
    });
    
}, geoposition_interval_value);

var get_current_position = function() {
    return JSON.parse(localStorage.getItem(geoposition_interval_key));
};

var show_geoposition_id = setInterval(function() {
    var pos = get_current_position();
    if(typeof pos !== 'undefined') {
	console.log("Got location ", pos.coords.latitude + "," + pos.coords.longitude);
	$("#locations").append("<li> Location: " + pos.coords.latitude + "," + pos.coords.longitude);
    }
}, geoposition_interval_value);
