import { randomInt } from "crypto"
import { print_path, solve_maze } from "./MazeSolver"

function generate_maze(width: number, height: number, wall: string, walls: number) {
	const maze: string[] = []
	let wallNum = 0
	const area = width * height
	const wallChance = (walls / area) * 100

	for (let i = 0; i < height; i++) { 
		maze.push("")
		for (let j = 0; j < width; j++) {
			const isWall = randomInt(100) < wallChance;
			if (isWall) wallNum++
			maze[i] += (isWall ? wall : " ")
		}
	}

	const leftWalls = walls - wallNum
	if (leftWalls > 0) {
		for (let i = 0; i < height; i++) { 
			for (let j = 0; j < width; j++) {
				const isWall = randomInt(100) < wallChance;
				if (isWall) {
					wallNum++
					setCharAt(maze[i], j, "#")
				}
			}
		}
	} 

	maze[0] = setCharAt(maze[0], randomInt(maze[0].length), "E")
	maze[maze.length - 1] = setCharAt(maze[maze.length - 1], randomInt(maze[0].length), "S")

	// console.log(maze)

	return maze
}

function setCharAt(str: string, index: number, chr: string) {
	if (index > str.length - 1) return str;
	return str.substring(0, index) + chr + str.substring(index + 1);
}


let maze: string[]
let path

do {
	maze = generate_maze(30, 15, "#", 100)
	// console.log(maze)	
	path = solve_maze(maze, "#", "S", "E")
} while (path.length == 0)

print_path(maze, path)
