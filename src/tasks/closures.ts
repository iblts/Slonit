export const createLogger = () => {
	let logs: string[] = []
	return {
		log(message: string) {
			logs.push(message)
		},
		getLogs() {
			logs.forEach(message => console.log(message))
		},
	}
}

export const createRandomGenerator = (minimal: number, maximal: number) => {
	const min = minimal
	const max = maximal

	return () => Math.floor(Math.random() * (max - min + 1) + min)
}
