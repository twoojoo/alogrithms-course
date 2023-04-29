import { BinaryNode, nodeInstance } from "./BinaryTreeNode";
import { Queue } from "./Queue"

export function breadth_first_search<T>(head: BinaryNode<T>): T[] {
	const q: BinaryNode<T>[] = []

	const path: T[] = []
	q.push(head)

	while (q.length) {
		const next = q.shift()
		if (next?.value) path.push(next.value)
		if (next?.left) q.push(next.left)
		if (next?.right) q.push(next.right)
	}

	return path
}

console.log(breadth_first_search(nodeInstance))