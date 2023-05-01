import { WeightedAdjacencyList } from "./DFSonAdjacencyList";

export function djkstra_list(graph: WeightedAdjacencyList, source: number, sink: number) {
	const seen: boolean[] = new Array(graph.length).fill(false)

	//prev means: the last (vertex) that updated the distance to a shorter one
	const prev: number[] = new Array(graph.length).fill(-1)

	//shortest distances to any vertex
	const dists: number[] = new Array(graph.length).fill(Infinity)

	dists[source] = 0 //smallest distant possible is where we start from

	while (hasUnvisited(seen, dists)) {
		const curr = getLowestUnvisited(seen, dists)
		seen[curr] = true

		for (const edge of graph[curr]) {
			if (seen[edge.to]) continue

			//current distance + edge distance (weight)
			const dist = dists[curr] + edge.weight

			//update edge destination distance if it's smaller 
			//than the smallest know distance to that vertex
			if (dist < dists[edge.to]) {
				dists[edge.to] = dist
				prev[edge.to] = curr 
			}
		}
	}

	const path: number[] = []
	let curr = sink

	while (prev[curr] !== -1) {
		path.push(curr)
		curr = prev[curr]
	}

	path.push(source)
	return path.reverse()
} 

function hasUnvisited(seen: boolean[], dists: number[]): boolean {
	return seen.some((s, i) => !s && dists[i] < Infinity)
}

function getLowestUnvisited(seen: boolean[], dists: number[]): number {
	let idx = -1
	let lowestDistance = Infinity 

	for (let i = 0; i < seen.length; ++i) {
		if (seen[i]) {
			continue
		}

		if (lowestDistance > dists[i]) {
			lowestDistance = dists[i]
			idx = i
		}
	}

	return idx
}

const adjListInstance: WeightedAdjacencyList = [
	[{ to: 1, weight: 1 }, { to: 2, weight: 4 }, { to: 3, weight: 5 }],
	[{ to: 0, weight: 1 }],
	[{ to: 3, weight: 2 }],
	[{ to: 4, weight: 5 }],
	[]
]

console.log(djkstra_list(adjListInstance, 0, 3))