import { bstInstance } from "./BSTInstance";
import { BinaryNode } from "./BinaryTreeNode";

export function bst_breadth_first_search<T>(head: BinaryNode<T> | null | undefined, value: T) {
	return search(head, value)
}

function search<T>(curr: BinaryNode<T> | null | undefined, value: T): boolean {
	//base case 1
	if (!curr) {
		return false
	}

	//base case 2
	if (curr.value === value) {
		return true
	}

	//recursion 1
	if (curr.value < value) {
		return search(curr.right, value)
	}

	//recursion 2
	else {
		return search(curr.left, value)
	}
}

console.log(bst_breadth_first_search(bstInstance, 5))