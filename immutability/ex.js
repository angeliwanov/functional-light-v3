"use strict";

function lotteryNum() {
	return (Math.round(Math.random() * 100) % 58) + 1;
}

function pickNumber(num, numbers) {
	numbers = numbers.slice();
	if (!numbers.includes(num)) {
		numbers = [...numbers, num]
		numbers.sort((a,b) => a - b)
	}
	return numbers;
}

var luckyLotteryNumbers = [];
const NUM_CONST = 6;

while (luckyLotteryNumbers.length < NUM_CONST) {
	luckyLotteryNumbers = pickNumber(
		lotteryNum(),
		Object.freeze(luckyLotteryNumbers)
	);
}

console.log(luckyLotteryNumbers);
