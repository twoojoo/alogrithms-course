/** O(log n) - requires an ordered array */
export function binary_search(array: number[], value: number): number {

	let lo = 0
	let hi = array.length
	do {
		const m = Math.floor(lo + (hi - lo) / 2)
		const v = array[m]

		if (v == value) return m
		else if (v < value) lo = m + 1
		else hi = m
	} while (lo < hi)

	return -1
}

console.log(binary_search([1, 2, 3, 4, 5], 5))
console.log(binary_search([1, 2, 3, 4, 5], 6))