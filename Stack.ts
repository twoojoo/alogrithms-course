type SNode<T> = {
	value: T,
	prev?: SNode<T>
}

export class Stack<T> {
	private length: number  
	private head?: SNode<T>

	constructor() {
		this.head = undefined
		this.length = 0
	}

	push(item: T): void {
		const node: SNode<T> = { value: item }
		this.length++

		if (!this.head) {
			this.head = node
			return
		}

		node.prev = this.head
		this.head = node
	}

	pop(): T | undefined {
		this.length = Math.max(0, this.length - 1)

		if (this.length == 0) { 
			const head = this.head
			this.head = undefined 
			return head?.value
		}

		const head = this.head as SNode<T>
		this.head = head.prev

		return head.value
	}

	peek(): T | undefined {
		return this.head?.value
	}
}