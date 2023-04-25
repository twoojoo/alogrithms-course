/** O(n) */
export function linear_search(array: number[], value: number): number {

	for (let i = 0; i < array.length; i++) {
		if (array[i] == value) {
			return i
		}
	}

	return -1
}

console.log(linear_search([1,2,3,4,5], 5))
console.log(linear_search([1,2,3,4,5], 6))