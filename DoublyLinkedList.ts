import { LinkedList } from "./LinkedList";

type DLNode<T> = {
	value: T,
	prev?: DLNode<T>,
	next?: DLNode<T>,
}

export class DoublyLinkedList<T> implements LinkedList<T> {
	public length: number
	private head?: DLNode<T>
	private tail?: DLNode<T>

	constructor() {
		this.length = 0
		this.head = undefined
		this.tail = undefined
	}

	prepend(item: T): void {
		const node: DLNode<T> = {
			value: item
		}

		this.length++

		if (!this.head) {
			this.head = this.tail = node
			return
		}

		node.next = this.head
		this.head.prev = node
		this.head = node
	}

	insertAt(item: T, index: number): void {
		if (index > this.length) {
			throw Error("invalid index")
		} else if (index == this.length) {
			this.append(item)
			return
		} else if (index == 0) {
			this.prepend(item)
			return
		}

		const node: DLNode<T> = {
			value: item
		}

		this.length++

		let current: DLNode<T> = this.head!
		for (let i = 1; i <= index; i++) {
			current = current.next as DLNode<T>
		}
			 
		//link new node
		node.next = current
		node.prev = current.prev

		//delete old links
		current.prev!.next = node
		current.prev = node
	}

	append(item: T): void {
		const node: DLNode<T> = {
			value: item
		}

		if (!this.tail) {
			this.head = this.tail = node
			return undefined
		}

		this.length++

		node.prev = this.tail
		this.tail.next = node
		this.tail = node
	}

	get(index: number): T | undefined {
		return this.getNodeAt(index)?.value
	}

	remove(item: T): T | undefined {
		let curr = this.head
		let i = 0

		for (; curr && i < this.length; ++i) {
			if (curr.value === item) {
				break
			}
			curr = curr.next
		}

		return this.removeNode(curr, i)
	}

	removeAt(index: number): T | undefined {
		const node = this.getNodeAt(index)

		if (!node) return undefined

		this.removeNode(node, index)
	}

	private getNodeAt(index: number) {
		let current = this.head
		
		for (let i = 0; current && i < index; i++) {
			if (current.next) { 
				current = current.next
				continue
			}
			return
			
		}

		return current
	}

	private removeNode(node: DLNode<T> | undefined, nodeIndex: number) {
		if (!node) {
			return undefined
		}

		this.length--

		if (this.length === 0) {
			const out = this.head?.value
			this.head = this.tail = undefined
			return out
		}

		if (node.prev) {
			node.prev.next = node.next
		}

		if (node.next) {
			node.next.prev = node.prev
		}

		if (nodeIndex == 0) {
			this.head = node.next
		}

		if (nodeIndex == this.length) {
			this.tail = node.prev
		}

		node.prev = node.next = undefined

		return node.value
	}

	from(array: T[]) {
		if (this.tail || this.head) throw Error("already filled")
		array.forEach(el => this.append(el))
		this.length = array.length
		return this
	}

	toArray() {
		const array: T[] = []

		// if (this.head) {
		let current = this.head
		
		for (let i = 0; current && i < this.length; i++) {
			array.push(current.value)
			current = current.next
		}
		// } 

		return array
	}

	toArrayReverse() {
		const array: T[] = []

		let current = this.tail
		
		for (let i = this.length - 1; current && i >= 0; i--) {
			array.push(current.value)
			current = current.prev
		}

		return array
	}

	getTail() {
		return this.tail?.value
	}
}


const dll = new DoublyLinkedList<number>().from([1, 2, 3, 4])
dll.append(5)
dll.remove(2)
dll.removeAt(2)
dll.prepend(0)

console.log(dll.get(3))
console.log(dll.get(2))
console.log(dll.get(1))
console.log(dll.get(0))
console.log(dll.toArray())
console.log(dll.toArrayReverse())
	