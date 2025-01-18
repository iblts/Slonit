export const mySlice = <T>(arr: T[], start?: number, end = arr.length) => {
	if (!start) return [...arr]
	if (start >= arr.length) return []
	const lastIndex = Math.min(arr.length, end)
	const newArray: T[] = []

	for (let i = start; i < lastIndex; i++) {
		newArray.push(arr[i])
	}

	return newArray
}

export const myIndexOf = <T>(arr: T[], item: T, from = 0) => {
	return 0
}

export const myIncludes = <T>(arr: T[], item: T, from = 0) => {
	return false
}
