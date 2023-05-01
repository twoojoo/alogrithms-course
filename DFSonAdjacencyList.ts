
export type GraphEdges = { to: number, weight: number }[]
export type WeightedAdjacencyList = GraphEdges[]

export function dfs_on_adj_list(graph: WeightedAdjacencyList, source: number, value: number) {
	const seen: boolean[] = new Array(graph.length).fill(false)
	const path: number[] = []

	walk(graph, source, value, seen, path)

	return path
}

function walk(graph: WeightedAdjacencyList, curr: number, value: number, seen: boolean[], path: number[]): boolean {
	//base cases:

	//1 found
	if (curr === value) { 
		path.push(curr)
		return true
	}
	
	//2 seen
	if (seen[curr]) return false
	seen[curr] = true

	//pre 
	path.push(curr)

	//recurse
	const adjs = graph[curr]
	for (let i = 0; i < adjs.length; ++i) {
		const edge = adjs[i]
		if (walk(graph, edge.to, value, seen, path)) {
			return true
		}
	}

	//post
	path.pop()

	return false
}

const adjListInstance: WeightedAdjacencyList = [
	[{ to: 1, weight: 1 }, { to: 2, weight: 4 }, { to: 3, weight: 5 }],
	[{ to: 0, weight: 1 }],
	[{ to: 3, weight: 2 }],
	[{ to: 4, weight: 5 }],
	[]
]

console.log(dfs_on_adj_list(adjListInstance, 0, 4))