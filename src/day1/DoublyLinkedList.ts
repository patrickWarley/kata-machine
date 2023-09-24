type Node<T> = {
	value: T,
	next?: Node<T>,
	prev?: Node<T>,
}


export default class DoublyLinkedList<T> {
	public length: number;
	private head?: Node<T>;
	private tail?: Node<T>;

	constructor() {
		this.length = 0;
		this.head = this.head = undefined;
	}

	prepend(item: T): void {
		let node = { value: item } as Node<T>;

		this.length++;

		if (this.head === undefined) {
			this.head = this.tail = node;
			return;
		}

		this.head.prev = node;
		node.next = this.head;
		this.head = node;
	}

	insertAt(item: T, idx: number): void {
		const node = { value: item } as Node<T>;

		if (idx > this.length) return;
		else if (idx === this.length) this.append(item);
		else if (idx === 0) this.prepend(item);

		let curr = this.head;
		this.length++;
		for (let i = 1; curr && i < idx; i++)
			curr = curr?.next;

		if (curr) {
			let next = curr.next;
			curr.next = node;

			if (next) next.prev = node;

			node.prev = curr;
			node.next = next;
		}

	}

	append(item: T): void {
		let node = { value: item } as Node<T>;

		if (this.head === undefined) {
			return this.prepend(item);
		}

		let iterator = this.head;

		while (iterator.next != null) iterator = iterator.next;

		iterator.next = node;
		node.prev = iterator;

		this.length++;
	}

	remove(item: T): T | undefined {
		let iterator = this.head;
		let i = 0;
		for (; i < this.length; i++) {
			if (iterator?.value === item) break;
			iterator = iterator?.next
		}

		return this.removeAt(i);
	}

	get(idx: number): T | undefined {

		if (idx >= this.length) return undefined;

		let iterator = this.head;

		for (let i = 1; i <= idx; i++)
			iterator = iterator?.next;

		return iterator?.value;
	}

	removeAt(idx: number): T | undefined {
		if (idx >= this.length) return undefined;

		let iterator = this.head;

		for (let i = 1; i <= idx; i++)
			iterator = iterator?.next;

		if (iterator === undefined) return iterator;

		let next = iterator.next;
		let prev = iterator.prev;


		if (prev !== undefined) {
			prev.next = next;
		}
		else {
			this.head = next;
		}

		if (next !== undefined) next.prev = prev;

		this.length--;
		return iterator.value;
	}
}