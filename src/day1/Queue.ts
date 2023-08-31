type Node<T> = {
	value: T,
	next?: Node<T>
}

export default class Queue<T> {
	public length: number;
	private head?: Node<T>;
	private tail?: Node<T>;

	constructor() {
		this.head = this.tail = undefined;
		this.length = 0;
	}

	enqueue(item: T): void {
		let node = { value: item } as Node<T>;
		if (!this.tail) {
			this.tail = this.head = node;
			this.length++;
			return;
		}
		this.tail.next = node;
		this.tail = node;

		this.length++;
	}

	deque(): T | undefined {
		//My solution :
		//let aux = this.head;
		//this.head = this.head?.next;
		//return aux?.value;

		// I didn't check if there was a head
		//Guard clause: No head no nothing to deque
		if (!this.head) return undefined;

		//I forgot about updating the length
		this.length--;

		//I don't think that using const or let is relevant
		const head = this.head;
		this.head = this.head.next;

		return head.value;

	}

	peek(): T | undefined {
		// my solution : return this.head ? this.head.value : undefined
		//I thought about doing that way, LOL
		return this.head?.value;
	}
}