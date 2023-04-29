import { bstInstance } from "./BSTInstance";
import { BinaryNode, nodeInstance } from "./BinaryTreeNode";

export function in_order_search<T>(head: BinaryNode<T>): T[] {
	return walk(head, [])
}

function walk<T>(node: BinaryNode<T> | undefined, path: T[]): T[] {
	//base case
	if (!node) return path

	//pre
	//noting

	//recurse
	walk(node.left, path)

	path.push(node.value) //in

	walk(node.right, path)

	//post
	//nothing

	return path
}


console.log(in_order_search(nodeInstance))

//bst in order traversal should produce an in order array
const arr1 = in_order_search(bstInstance)
const arr2 = arr1.sort()
console.log(checkArrEquality(arr1, arr2))


function checkArrEquality<T>(arr1: T[], arr2: T[]): boolean {
	if (arr1.length !== arr2.length) return false

	for (let i = 0; i < arr1.length; ++i) {
		if (arr1[i] !== arr2[i]) return false
	}

	return true
}