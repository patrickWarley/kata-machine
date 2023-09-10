function comparePoints(a: Point, b: Point) {
	return (a.x === b.x && b.y === a.y);
}

function checkOutOfBounds(maze: String[], point: Point) {
	const y = maze.length - 1;
	const x = maze[0].length - 1;

	return (point.x > x || point.y > y) || (point.x < 0 || point.y < 0);
}

//The problem with my implementations was the fact that I wasn't checking if 
// I was passing on the same spot, this was causing my code to get in an infinite loop.

//When working with recursion remember : Base cases => pre, recursion, pos
//think about creating another function to do the recursion
export function solve_My_Implementation(maze: string[], wall: string, end: Point, start: Point): Point[] {
	//Think about the base case
	//When do you stop?
	// 	- Going where you Already have gone before

	//finding the end
	if (comparePoints(start, end)) return [start];


	//going out of bounds
	else if (checkOutOfBounds(maze, start)) return [];

	//hitting a wall
	else if (maze[start.y][start.x] === wall) return [];

	let point = solve_My_Implementation(maze, wall, { x: start.x + 1, y: start.y }, end);
	if (point.length === 0) {
		point = solve_My_Implementation(maze, wall, { x: start.x - 1, y: start.y }, end);
		if (point.length === 0) {
			point = solve_My_Implementation(maze, wall, { x: start.x, y: start.y + 1 }, end);
			if (point.length === 0) {
				point = solve_My_Implementation(maze, wall, { x: start.x, y: start.y - 1 }, end)
			}
		}
	}

	point.push(start);

	return point;
}

const dir = [
	[0, -1], [0, 1], [-1, 0], [1, 0]
];

function walk(maze: string[], wall: string, curr: Point, end: Point, seen: boolean[][], path: Point[]): boolean {

	//Base cases
	//out of bounds
	if (checkOutOfBounds(maze, curr)) return false;

	//broken nose
	if (maze[curr.y][curr.x] === wall) return false;

	//going over the same spot
	if (seen[curr.y][curr.x]) return false;

	//Got to the end
	if (comparePoints(curr, end)) {
		path.push(end);
		return true;
	}

	//pre conditions
	// I have seen this point and for now he is part of the solution
	seen[curr.y][curr.x] = true;
	path.push(curr);

	//recurssion
	for (let i = 0; i < dir.length; i++) {
		let [x, y] = dir[i];
		if (walk(maze, wall, { x: curr.x + x, y: curr.y + y }, end, seen, path)) {
			return true;
		}
	}

	//pos conditions
	//the latest point is not part of the solution
	path.pop();

	//there's no solution
	return false;
};

export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {
	let path: Point[] = [];
	let seen: boolean[][] = [];

	for (let i = 0; i < maze.length; i++) {
		seen.push(new Array(maze[0].length).fill(false));
	}

	walk(maze, wall, start, end, seen, path);

	return path;
}