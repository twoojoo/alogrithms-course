import { bstInstance } from "./BSTInstance";
import { BinaryNode } from "./BinaryTreeNode";

export function bst_find<T>(head: BinaryNode<T> | null | undefined, value: T): boolean {
	return find(head, value)
}

function find<T>(node: BinaryNode<T> | null | undefined, value: T): boolean {
	if (!node) return false

	if (node.value === value) return true

	if (node.value > value) {
		return find(node.left, value)
	}

	else {
		return find(node.right, value)
	}
}

console.log(bst_find(bstInstance, 12)) //true
console.log(bst_find(bstInstance, 7)) //true
console.log(bst_find(bstInstance, 0)) //false
console.log(bst_find(bstInstance, 333)) //false