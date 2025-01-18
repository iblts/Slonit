export const getObjectValuesSum = <T>(object: T) => {
	let sum = 0

	for (let key in object) {
		if (typeof object[key] === 'number') sum += object[key]
	}

	return sum
}

export const getSortedObjectKeys = <T>(object: T) => {
	const keys = []

	for (let key in object) {
		keys.push(key)
	}

	return keys.sort()
}
