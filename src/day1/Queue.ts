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
		let node = {} as Node<T>;
		node.value = item;

		if (this.tail) {
			this.tail.next = node;
			this.tail = node;
		} else {
			this.tail = this.head = node;
		}
	}

	deque(): T | undefined {
		let aux = this.head;

		this.head = this.head?.next;

		return aux?.value;
	}

	peek(): T | undefined {
		return this.head ? this.head.value : undefined
	}
}