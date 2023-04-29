import { BinaryNode, nodeInstance } from "./BinaryTreeNode";

export function pre_order_search<T>(head: BinaryNode<T>): T[] {
	return walk(head, [])
}

function walk<T>(node: BinaryNode<T> | undefined, path: T[]): T[] {
	//base case
	if (!node) return path

	//pre
	path.push(node.value)

	//recurse
	walk(node.left, path)
	walk(node.right, path)

	//post
	//nothing

	return path
}


console.log(pre_order_search(nodeInstance))