type Node<T> = {
	value: T
	next?: Node<T>,
	prev?: Node<T>
}

function createNode<V>(value: V): Node<V> {
	return { value }
}

export class LRU<K, V> {
	private length: number 
	private head?: Node<V>
	private tail?: Node<V>

	//from key to node (for search)
	private lookup: Map<K, Node<V>>

	//from node to key (to delete the mapped key)
	private reverseLookup: Map<Node<V>, K>

	constructor(private capacity: number = 10) {
		this.length = 0
		this.head = this.tail = undefined
		this.lookup = new Map<K, Node<V>>()
		this.reverseLookup = new Map<Node<V>, K>()
	}

	update(key: K, value: V): void {
		//1. does it exist? get
		//2. if doesn't exist, we need to insert
		//2.1 check for capacity and evict least used item if new length > capacity
		//3. if exists, move to the front of the list
		//3.1 update its value

		let node = this.lookup.get(key)
		if (!node) {
			node = createNode(value)
			this.length++
			this.prepend(node)
			this.trimCache()
		} else {
			this.detach(node)
			this.prepend(node)
		}
	}

	get(key: K): V | undefined {
		//1. check cache for existence
		//2. update the value we found and move it to the front
		//3. return out the value found (or undefined)

		const node = this.lookup.get(key)
		if (!node) return

		this.detach(node)
		this.prepend(node)

		return node.value
	}

	/**unlink the node*/
	private detach(node: Node<V>): void {
		if (node.prev) {
			node.prev.next = node.next
		}

		if (node.next) {
			node.next.prev = node.prev
		}

		if (this.head === node) {
			this.head = this.head.next
		}

		if (this.tail === node) {
			this.tail = this.tail.prev
		}

		node.next = node.prev = undefined
	}

	/**put the node to the front*/
	private prepend(node: Node<V>): void {
		if (!this.head) {
			this.head = this.tail = node
			return
		}

		node.next = this.head
		this.head.prev = node
		this.head = node
	}

	private trimCache(): void {
		if (this.length <= this.capacity) return

		const tail = this.tail!
		this.detach(this.tail!)
		this.tail = tail.prev
	}
}