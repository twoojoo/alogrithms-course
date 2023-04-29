export function quick_sort(arr: number[]) {
	qs(arr, 0, arr.length - 1)
}

/**returns the index*/
function partition(arr: number[], lo: number, hi: number): number {
	const pivot = arr[hi] //best choiche should be in the middle of the array (??)

	let idx = lo - 1

	//** weak sort on the sub array
	for (let i = lo; i < hi; ++i) {
		if (arr[i] <= pivot) {
			idx++

			//swap
			const tmp = arr[i]
			arr[i] = arr[idx]
			arr[idx] = tmp
		}
	}

	idx++

	arr[hi] = arr[idx]
	arr[idx] = pivot

	return idx
}

/**[lo, hi]*/
function qs(arr: number[], lo: number, hi: number): void {
	//base case (lo and hi meet)
	if (lo >= hi) return

	const idx = partition(arr, lo, hi)
	qs(arr, lo, idx - 1) //first chunk (excluding pivot)
	qs(arr, idx + 1, hi) //second chunk (excluding pivot)
}

const arr = [223, 3478, 5, 16, 3, 432, 1, 99, 9, 10, 120, 53, 56, 1234]
console.log(arr.join(", "))
quick_sort(arr)
console.log(arr.join(", "))