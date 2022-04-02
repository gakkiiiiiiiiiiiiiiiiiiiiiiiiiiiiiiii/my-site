import { getRandomInt } from '@/utils/common';
function GridData() {
	this.isBomb = false;
	this.roundHasBomb = 0;
	this.isEmpty = false;
}
function injectBomb(qty, data) {
	const w = data[0].length - 1;
	const h = data.length - 1;
	let count = 0;
	while (qty > count) {
		let randomX = getRandomInt(0, w);
		let randomY = getRandomInt(0, h);
		if (!data[randomX][randomY].isBomb) {
			data[randomX][randomY].isBomb = true;
			console.log({ randomX, randomY });
			roundBombComputed(data, {
				x: randomX,
				y: randomY,
				w,
				h,
			});
			count++;
		}
	}
}

function roundBombComputed(data, { x, y, w, h }) {
	let coordinateArr = getRoundCoordinate({ x, y, w, h });
	coordinateArr.forEach((item) => {
		data[item[0]][item[1]].roundHasBomb++;
	});
}
function getRoundCoordinate({ x, y, w, h }) {
	let coordinate = {};
	coordinate.top = [x, y - 1];
	coordinate.bottom = [x, y + 1];
	coordinate.left = [x - 1, y];
	coordinate.right = [x + 1, y];

	coordinate.lTop = [x - 1, y - 1];
	coordinate.rTop = [x + 1, y - 1];

	coordinate.lBottom = [x - 1, y + 1];
	coordinate.rBottom = [x + 1, y + 1];
	// console.log({ x, y }, coordinate);
	const isLegalCoordinate = (num, max) => {
		return num >= 0 && num <= max;
	};

	let legalCoordinateArr = Object.values(coordinate).filter((item) => {
		return isLegalCoordinate(item[0], w) && isLegalCoordinate(item[1], h);
	});

	return legalCoordinateArr;
}

export function buildGridDatas({ w, h, bomb }) {
	let arr = [];
	for (let x = 0; x < w; x++) {
		let arr2 = [];
		for (let y = 0; y < h; y++) {
			arr2.push(new GridData());
		}
		arr.push(arr2);
	}
	injectBomb(bomb, arr);
	return arr;
}
