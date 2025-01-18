function calculateTotalAmount(amounts: number[]) {
	let totalAmount = 0
	amounts.forEach(amount => {
		totalAmount += amount
	})
	return totalAmount
}

let mostValuableCustomersAmounts = [10000, 20000, 30000]
console.log(calculateTotalAmount(mostValuableCustomersAmounts))
