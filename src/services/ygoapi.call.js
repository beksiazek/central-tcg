export default function getItems() {
	return new Promise(function(resolve, reject) {
	var request = new XMLHttpRequest();
		request.open('GET', "https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=Dragunity&type=Tuner%20Monster");

		request.onload = function() {
			if (request.status === 200) {
			resolve(JSON.parse(request.response));
			}
			else {
			reject();
			}
		};

		request.send();
	})
}