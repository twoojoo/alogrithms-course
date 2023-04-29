import { BinaryNode, nodeInstance } from "./BinaryTreeNode";

//we use the depth first search because it preserves the shape of the tree
export function compare_b_trees<T>(head1: BinaryNode<T> | null | undefined, head2: BinaryNode<T> | null | undefined): boolean {
	//base cases

	//structural check
	if (!head1 && !head2) return true

	//structural check
	if (!head1 || !head2) return false
	
	//value check
	if (head1?.value !== head2?.value) return false

	//each iteration compares both left subtrees and both right subtrees
	return compare_b_trees(head1.left, head2.left) && compare_b_trees(head1.right, head2.right)
}

console.log(compare_b_trees(nodeInstance, nodeInstance)) //true
console.log(compare_b_trees(nodeInstance, nodeInstance.right)) //false