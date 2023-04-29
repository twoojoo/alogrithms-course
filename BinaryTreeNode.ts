export type BinaryNode<T> = {
	value: T,
	left?: BinaryNode<T>
	right?: BinaryNode<T>
}

export const nodeInstance: BinaryNode<number> = {
	value: 7,
	left: {
		value: 23,
		left: {
			value: 5
		},
		right: {
			value: 4
		}
	},
	right: {
		value: 3,
		left: {
			value: 18,
		},
		right: {
			value: 21
		}
	}
}
