/**requires the graph, the starting point, the value to search, returns the path*/
export function bfs_on_adj_list(graph: number[][], source: number, value: number): number[] {
	const seen = new Array(graph.length).fill(false) //already visited
	const previous = new Array(graph.length).fill(-1) //who I came from?

	seen[source] = true
	const q: number[] = [source]

	do {
		const curr = q.shift() as number

		if (curr === value) { 
			break
		}

		seen[curr] = true
		const adjs = graph[curr]
		for (let i = 0; i < adjs.length; ++i) {
			if (adjs[i] === 0) {
				continue
			}

			if (seen[i]) {
				continue
			}

			seen[i] = true
			previous[i] = curr
			q.push(i)
		}
	} while (q.length)
	
	//build backward path

	let curr = value
	const out: number[] = []

	while (previous[curr] !== -1) {
		out.push(curr)
		curr = previous[curr]
	}

	if (out.length) {
		return [source].concat(out.reverse())
	}

	return []
}

const adjMatrixInstance: number[][] = [
	[0, 1, 4, 5, 0],
	[1, 0, 0, 0, 0],
	[0, 0, 0, 2, 0],
	[0, 0, 0, 0, 5],
	[0, 0, 0, 0, 0]
]

console.log(bfs_on_adj_list(adjMatrixInstance, 0, 4))