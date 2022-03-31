chrome.extension.sendMessage({}, function () {


	const imageArray = ["https://i.imgur.com/yJQySyu.jpg", "https://i.imgur.com/LkFrJeK.jpg", "https://i.imgur.com/KepRw7I.jpg", "https://i.imgur.com/IIEpZK3.jpg", "https://i.imgur.com/Yve9w1K.jpg", "https://i.imgur.com/N3aW4bL.jpg", "https://i.imgur.com/jI5DadO.jpg", "https://i.imgur.com/Qu5fmRh.jpg", "https://i.imgur.com/0YBfUwS.jpg", "https://i.imgur.com/I5q9mWp.jpg", "https://i.imgur.com/lz4WULX.jpg", "https://i.imgur.com/k9974BC.jpg", "https://i.imgur.com/mrmjWtk.jpg"];



	let images = document.getElementsByTagName('img');

	for (let i = 0; i < images.length; i++) {
		images[i].srcset = imageArray[Math.floor(Math.random() * (imageArray.length))];
	};

	console.log(images)
	// ----------------------------------------------------------
	// This part of the script triggers when page is done loading
	console.log("Hello world!!!!!!!");
	// ----------------------------------------------------------


});
// }, 10);
// });

