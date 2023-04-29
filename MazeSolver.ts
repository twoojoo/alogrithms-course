const dir = [
	[-1, 0],
	[1, 0],
	[0, -1],
	[0, 1]
]
 
type Point = {
	x: number
	y: number
}

export function solve_maze(maze: string[], wall: string, start: string, end: string): Point[] {
	const seen: boolean[][] = []
	const path: Point[] = []

	const start_y = maze.findIndex(line => line.includes(start))
	const start_x = maze[start_y].indexOf(start)

	const end_y = maze.findIndex(line => line.includes(end))
	const end_x = maze[end_y].indexOf(end)

	const startPoint = { x: start_x, y: start_y }
	const endPoint = { x: end_x, y: end_y }

	for (let i = 0; i < maze.length; i++) {
		seen.push(new Array(maze.length).fill(false))
	}

	walk(maze, wall, startPoint, endPoint, seen, path)

	return path
}

function walk(maze: string[], wall: string, curr: Point, end: Point, seen: boolean[][], path: Point[]): boolean {
	//1 base case (off the map)
	if (curr.x < 0 || curr.x >= maze[0].length ||
		curr.y < 0 || curr.y >= maze.length
	) { 
		return false
	}

	//2 base case (on a wall)
	if (maze[curr.y][curr.x] == wall) { 
		return false
	}

	//3 base case (end reached)
	if (curr.x == end.x && curr.y == end.y) {
		path.push(end)
		return true
	}

	//4 base case (already seen)	
	if (seen[curr.y][curr.x]) {
		return false
	}

	// 3 RECURSION STEPS

	//pre
	seen[curr.y][curr.x] = true
	path.push(curr)

	//recurse
	for (let i = 0; i < dir.length; ++i) {
		const [x, y] = dir[i]

		// print_path(maze, path)

		if (walk(maze, wall, {
			x: curr.x + x,
			y: curr.y + y
		}, end, seen, path)) { 
			return true
		}
	}

	//post
	path.pop()

	return false
}
 
const maze = [
	"#  ##########E#",
	"#    ######   #",
	"  # ## # ###  #",
	"##     #      #",
	"   ##   # ##  #",
	"#S#####   #####"
]



const path = solve_maze(maze, "#", "S", "E")
print_path(maze, path)

export function print_path(maze: string[], path: Point[]) {
	// console.log("\n", maze, "\n")

	console.log(path)

	path.forEach((point, i) => {
		if (!["S", "E"].includes(maze[point.y][point.x])) {
			maze[point.y] = setCharAt(maze[point.y], point.x, `+`)
		}
	})

	console.log("\n", maze, "\n")
}


function setCharAt(str: string, index: number, chr: string) {
	if (index > str.length - 1) return str;
	return str.substring(0, index) + chr + str.substring(index + 1);
}