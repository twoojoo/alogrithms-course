import { bstInstance } from "./BSTInstance";
import { pre_order_search } from "./BTPreOrderSearch";
import { BinaryNode } from "./BinaryTreeNode";

export function bst_insert<T>(node: BinaryNode<T> | null | undefined, value: T, parent: BinaryNode<T> | null | undefined) {
	if (!node && !parent) {
		node = { value }
		return
	}

	if (!node) {
		add_bst_node(parent, value)
		return
	} 

	if (node.value < value) {
		bst_insert(node.right, value, node)
		return
	}

	
	bst_insert(node.left, value, node)
}

function add_bst_node<T>(parent: BinaryNode<T> | null | undefined, value: T) {
	if (!parent) return 

	if (parent.value <= value) {
		parent.left = { value }
	}

	if (parent.value > value) {
		parent.right = { value }
	}
}

console.log(pre_order_search(bstInstance))

bst_insert(bstInstance, 12, null)

console.log(pre_order_search(bstInstance))