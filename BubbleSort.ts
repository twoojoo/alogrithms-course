/** O(n^2)*/
export function bubble_sort(array: number[]) {
	for (let i = 0; i < array.length; ++i) { 
		for (let j = 0; j < array.length - i; j++) {
			if (array[j] > array[j + 1]) {
				const v = array[j]
				array[j] = array[j + 1]
				array[j + 1] = v
			}
		}
	}
}

const arr = [1, 3, 7, 4, 2]
bubble_sort(arr)
console.log(arr)
