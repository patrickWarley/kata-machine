export default function quick_sort(arr: number[]): void {
	sort_my_implementation(arr, 0, arr.length);
}


function sort_my_implementation(arr: number[], start: number, end: number): void {
	if (start >= end || arr.length === 1) return;

	let idxPivot = Math.floor((end + start) / 2);
	let pivot = arr[idxPivot];

	for (let i = start; i < end; i++) {
		if ((pivot < arr[i] && idxPivot > i) || (pivot > arr[i] && idxPivot < i)) {
			let aux = arr[i];

			arr[i] = pivot;
			arr[idxPivot] = aux;

			idxPivot = i;
			i = 0;
		}
	}

	let a = idxPivot - 1;
	let b = idxPivot + 1;

	// i wasted a lot of time because I used 0 and Arr.length as my start and end
	//and because of that my algorithm got in an infinite loop :D
	//I was basically passing the same values over and over again
	sort_my_implementation(arr, start, idxPivot - 1);
	sort_my_implementation(arr, idxPivot + 1, end);

}
