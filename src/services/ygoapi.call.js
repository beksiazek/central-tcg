import _ from "lodash";
const queryString = require('query-string');

export default function getItems(id, categoryId, number, offset) {
	const parameters = {
		type: categoryId || null,
		num: number || 4,
		offset: offset || 0,
	};
	
	const query = queryString.stringify(_.pickBy(parameters, (param) => !_.isNil(param)));

	return new Promise(function(resolve, reject) {
	var request = new XMLHttpRequest();
		request.open('GET', "https://db.ygoprodeck.com/api/v7/cardinfo.php?"+(id ? "id="+id : query));

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