const getRandomFromRange = (start: number, end: number) => {
	return Math.floor(Math.random() * (end - start + 1)) + start
}

const getAverage = (min: number, max: number) => {
	return Math.floor((max - min) / 2) + min
}

export const startGame = () => {
	const secretNumber = getRandomFromRange(1, 100)
	console.log(`Компьютер 1: *загадал число ${secretNumber}*`)

	let min = 1
	let max = 100

	while (min <= max) {
		const currentNumber = getAverage(min, max)
		console.log(`Компьютер 2: Пробую число ${currentNumber}.`)

		if (currentNumber === secretNumber) {
			console.log('Компьютер 1: Угадал!')
			break
		}
		if (currentNumber > secretNumber) {
			console.log('Компьютер 1: Меньше.')
			max = currentNumber
		} else {
			console.log('Компьютер 1: Больше.')
			min = currentNumber
		}
	}
}
