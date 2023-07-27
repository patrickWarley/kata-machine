
export function two_crystal_balls(breaks: boolean[]): number {

	const jmpAmount = Math.floor(Math.sqrt(breaks.length));

	let i = jmpAmount;

	for (; i < breaks.length; i += jmpAmount)
		if (breaks[i]) break;

	i -= jmpAmount;

	for (let j = 0; j < jmpAmount && i < breaks.length; j++, i++)
		if (breaks[i]) return i;

	return -1;
}

export default function two_crystal_balls_binary_search(breaks: boolean[]): number {

	let low = 0;
	let high = breaks.length;

	do {
		const middle = Math.floor((low + (high - low) / 2));
		const n1 = breaks[middle];
		const n2 = breaks[middle + 1];

		if (n1 === false && n2 === true) return middle + 1;

		if (n1 === false && n2 === false) low = middle + 1;
		else high = middle;

	} while (low < high)

	return -1;
}