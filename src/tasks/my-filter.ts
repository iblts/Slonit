export const myFilter = <T>(arr: T[], func: (el: T) => boolean) => {
	const result = []

	for (let i = 0; i < arr.length; i++) {
		if (func(arr[i])) result.push(arr[i])
	}

	return result
}
