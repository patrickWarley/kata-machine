export default function quick_sort(arr: number[]): void {
	sort(arr, 0, arr.length);
}


function sort(arr: number[], start: number, end: number): void {
	console.log(start, end);

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

	sort(arr, 0, idxPivot - 1);
	sort(arr, idxPivot + 1, arr.length);

}
