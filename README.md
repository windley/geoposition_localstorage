geoposition_localstorage
========================

Demonstration Javascript to store current position in local storage

This small JavaScript program grabs the current location using ```navigator.geolocation.getCurrentPosition()``` and stores the result in local storage at a regular interval.

Independently, another function reads it and appends the result to a ```<div/>```.

To see it run, simply open ```index.html``` in a browser. If you open it in a stationary browser, it's a little boring since the geoposition doesn't change. So open it in your phone and then go walk around. 
