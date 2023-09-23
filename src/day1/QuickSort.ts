export default function quick_sort(arr: number[]): void {

	//I need to take care with the indices
	//for real
	quick(arr, 0, arr.length - 1);
}

function quick(arr: number[], start: number, end: number): void {
	if (start >= end) return;

	const idxPivot = partition(arr, 0, end);

	quick(arr, start, idxPivot - 1);
	quick(arr, idxPivot + 1, end);
}
function partition(arr: number[], start: number, end: number): number {
	//I need one variable to make the swaps
	//I use it to control where I should put the numbers that are smaller than the pivot
	let idx = -1;
	let pivot = arr[end];

	for (let i = start; i < end; i++) {
		if (arr[i] <= pivot) {
			idx++;

			let tmp = arr[i];
			arr[i] = arr[idx];
			arr[idx] = tmp;
		}
	}

	idx++;
	let tmp = arr[idx];
	arr[idx] = pivot;
	arr[end] = tmp;

	return idx;
}


function my_quick(arr: number[], start: number, end: number): void {
	//don't think I needed to check arr.length here :D
	if (start >= end || arr.length === 1) return;

	let idxPivot = end;
	let pivot = arr[idxPivot];

	// doing things like this I going through the array a number of times to make the partition
	// but on the other implementations you don't need to do so, 
	//one time should be enough to make an weaksort = everybody bigger than me to one side and the smaller ones to the other side
	for (let i = start; i <= end; i++) {
		//too complicate
		if ((pivot < arr[i] && idxPivot > i) || (pivot > arr[i] && idxPivot < i)) {
			let aux = arr[i];

			arr[i] = pivot;
			arr[idxPivot] = aux;

			idxPivot = i;
			i = 0;
		}
	}

	// I did this because I thought that the problem was the valyes I was passing to the function
	// but there's no reason to create a variable just to pass the value to the function
	//because Any expression I pass as an parameter will be evaluated before you call the function
	//meaning if a pass a function, it needs to be calculated so we pass the VALUE to the other function
	//kinda dumb
	let a = idxPivot - 1;
	let b = idxPivot + 1;


	// i wasted a lot of time because I used 0 and Arr.length as my start and end
	//and because of that my algorithm got in an infinite loop :D
	//I was basically passing the same values over and over again
	my_quick(arr, start, idxPivot - 1);
	my_quick(arr, idxPivot + 1, end);

}
