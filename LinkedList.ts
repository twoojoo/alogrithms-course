export interface LinkedList<T> {
	get length(): number,
	insertAt(item: T, index: number): void, //have to traverse
	remove(item: T): T | undefined, // O(1)
	removeAt(index: number): T | undefined, //have to traverse
	append(item: T): void // O(1)
	prepend(item: T): void // O(1)
	get(index: number): T | undefined //have to traverse
}