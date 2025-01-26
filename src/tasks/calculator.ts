const add = (a: number, b: number) => a + b
const substract = (a: number, b: number) => a - b
const multiply = (a: number, b: number) => a * b
const divide = (a: number, b: number) => a / b

export const operations = {
	add,
	substract,
	multiply,
	divide,
}

export const calculate = (
	a: number,
	b: number,
	func: (a: number, b: number) => number
) => {
	return func(a, b)
}
