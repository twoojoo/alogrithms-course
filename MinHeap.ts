export default class MinHeap<T> {
	public length: number
	private data: T[] //we use a js array since it's already an arrayList

	constructor() {
		this.data = []
		this.length = 0
	}

	insert(item: T): void {
		this.data[this.length] = item
		this.heapifyUp(this.length)
		this.length++
	}

	delete(): T | undefined {
		if (this.length == 0) {
			return
		}

		this.length--

		const currentValue = this.data[0]
		if (this.length == 0) {
			this.data = []
			this.length = 0
			return currentValue
		}

		this.data[0] = this.data[this.length]
		this.heapifyDown(0)

		return currentValue
	}

	/**used for deletion*/
	private heapifyDown(idx: number) {
		//no node
		if (idx >= this.length) {
			return
		}

		const leftChildIdx = this.getLeftChildIdx(idx)
		const rightChildIdx = this.getRightChildIdx(idx)

		//no children
		if (leftChildIdx > this.length) {
			return
		}

		const currentValue = this.data[idx]
		const leftChildValue = this.data[leftChildIdx]
		const rightChildValue = this.data[rightChildIdx]

		//settled
		if (currentValue <= leftChildValue && currentValue <= rightChildValue) {
			return
		}

		//recurse
		if (rightChildValue < leftChildValue) {
			this.data[idx] = rightChildValue
			this.data[rightChildIdx] = currentValue
			this.heapifyDown(rightChildIdx)
		} else {
			this.data[idx] = leftChildValue
			this.data[leftChildIdx] = currentValue
			this.heapifyDown(leftChildIdx)
		}
	}

	/**used for insert */
	private heapifyUp(idx: number) {
		//base cases:

		//top reached
		if (idx === 0) {
			return
		}

		const parentIdx = this.getParentIdx(idx)
		const parentValue = this.data[parentIdx]
		const currentValue = this.data[parentIdx]

		//settled
		if (parentValue <= currentValue) {
			return
		}

		//swap
		const tmp: T = this.data[idx]
		this.data[idx] = parentValue
		this.data[parentIdx] = currentValue

		//recurse
		this.heapifyUp(parentIdx)
	}

	private getParentIdx(idx: number): number {
		return Math.floor((idx - 1) / 2)
	}

	private getLeftChildIdx(idx: number): number {
		return 2 * idx + 1
	}

	private getRightChildIdx(idx: number): number {
		return 2 * idx + 2
	}
}