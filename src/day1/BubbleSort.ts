export default function bubble_sort(arr: number[]): void {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length - 1 - i; j++) {
			if (arr[j] > arr[j + 1]) {
				const tmp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = tmp;
			}
		}
	}
}

export function bubble_sortMyFirstImplementation(arr: number[]): void {

	//it works but it's not perfect
	for (let arrlen = arr.length; arrlen > 1; arrlen--) {
		for (let j = 0; j < arrlen; j++) {
			if (arr[j] > arr[j + 1]) {
				let aux = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = aux;
			}
		}
	}

}