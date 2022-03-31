chrome.extension.sendMessage({}, function (response) {
	// const readyStateCheckInterval = setInterval(function() {
	// if (document.readyState === "complete") {
	// 	clearInterval(readyStateCheckInterval);

	const images = document.getElementsByTagName('img');
	// document.addEventListener('DOMContentLoaded', () => {
	// 	for (let i = 0; i < images.length; i++) {
	// 		images[i].srcset = "https://photos.google.com/share/AF1QipOxyphFJXKDTFlcg1vwNKfrUIKVw1F00NCx1u9LAfcNfvhHhqJzTy5eeXMeryGm6g/photo/AF1QipPRPV54THVaRSe5ya2rskrb-SDhjBLNSz73W6YW?key=ZnVFWi10emU2MllSbV9nNzdDRWtldkVDcUVtTzFn";
	// 	}
	// })
	console.log(images)
	// ----------------------------------------------------------
	// This part of the script triggers when page is done loading
	console.log("Hello world!!!!!!!");
	document.addEventListener('DOMContentLoaded', () => alert("DOM ready!"))
	// ----------------------------------------------------------
	

// OK... DEF GOING TO SLEEP NOW LOL - WE WILL HAVE TO FIGURE OUT HOW TO SHARE ALL THIS CODE..
//	I REMEMBERED THAT THE PARTNER PULLS WEREN'T WORKING. GOODNIGHT THOUGH, FOR REAL.

});
// }, 10);
// });

document.addEventListener('DOMContentLoaded', () => alert("DOM ready!"))

// function insertPhotos () {
// 	if (document.readyState === "complete") {

// 	}
// }

