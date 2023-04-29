import { BinaryNode, nodeInstance } from "./BinaryTreeNode";

export function pre_order_search<T>(head: BinaryNode<T>): T[] {
	return walk(head, [])
}

function walk<T>(node: BinaryNode<T> | undefined, path: T[]): T[] {
	//base case
	if (!node) return path

	//pre
	//nothing

	//recurse
	walk(node.left, path)
	walk(node.right, path)

	//post
	path.push(node.value)

	return path
}


console.log(pre_order_search(nodeInstance))