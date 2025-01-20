export const capitalize = (str: string) => {
	if (!str) return str

	const trimedString = str.trim()

	return trimedString[0].toUpperCase() + trimedString.slice(1)
}

export const trimLine = (str: string, maxLength: number) => {
	const trimedString = str.trim()
	if (trimedString.length <= maxLength) return trimedString

	const separatingChars = [' ', ',', '.', '!', '?', ':', ';']

	for (let i = maxLength - 1; i >= 0; i--) {
		// ищем символ разделения из separatingChars
		if (separatingChars.includes(trimedString[i])) {
			for (let j = i; j >= 0; j--) {
				// ищем ближайший символ не входящий в separatingChars
				if (!separatingChars.includes(trimedString[j])) {
					return trimedString.slice(0, j + 1) + '…'
				}
			}
		}
	}
}

export const isSubstring = (str1: string, str2: string) => {
	if (str1.includes(str2) || str2.includes(str1)) return true
	return false
}
