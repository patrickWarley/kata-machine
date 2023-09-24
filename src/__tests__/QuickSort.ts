import quick_sort from "@code/QuickSort";

export default function generateRadomArr(size: number): number[] {
	const arr = new Array<number>();

	for (let i = 0; i < size; i++)
		arr.push(Math.floor(Math.random() * 1000));

	return arr;
}

test("quick-sort", function () {
	const arr = generateRadomArr(10);
	const sortedArr = (arr.slice()).sort((a, b) => a - b);

	debugger;
	quick_sort(arr);

	expect(arr).toEqual(sortedArr);
});
