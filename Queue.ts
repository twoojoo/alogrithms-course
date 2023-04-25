type QNode<T> = {
	value: T,
	next?: QNode<T>
}

export class Queue<T> {
	private length: number  
	private head?: QNode<T>
	private tail?: QNode<T>

	constructor() {
		this.head = this.tail = undefined
		this.length = 0
	}

	enqueue(item: T): void {
		const node: QNode<T> = { value: item }

		this.length++

		if (!this.tail) {
			this.tail = this.head = node
			return
		}

		this.tail.next = node
		this.tail = node
	}

	dequeue(): T | undefined {
		if (!this.head) return undefined
			
		const head = this.head

		this.length--
		this.head.next = this.head.next
		this.head.next = undefined

		if (this.length === 0) {
			this.tail = undefined
		}

		return head.value
	}

	peek(): T | undefined {
		return this.head?.value
	}
}