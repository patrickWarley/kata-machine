
const a: number[] = []; // Is this an array?

/**
 * No it's not an array. How do we know that?
 * - We know that because an array is a contiguous memory space
 * that's allocated at the moment of definition it has to have a fixed size.
 * And we know that is not the case in javascript.
 * So javascript is using another data structure under the hood. Which one?
 * 
 * The whole code below is to try and define this data structure.
 */

function time(fn: () => void): number {
	const now = Date.now();
	fn();
	return Date.now() - now;
}

function unshift(number: number) {
	for (let i = 0; i < number; ++i) {
		a.unshift(Math.random());
	}
}

function shift(number: number) {
	for (let i = 0; i < number; ++i) {
		a.shift();
	}
}

function push(number: number) {
	for (let i = 0; i < number; ++i) {
		a.push(Math.random());
	}
}

function pop(number: number) {
	for (let i = 0; i < number; ++i) {
		a.pop();
	}
}

function get(idx: number) {
	return function () {
		return a[idx];
	};
}

function push_arr(count: number) {
	return function () {
		push(count);
	};
}

function pop_arr(count: number) {
	return function () {
		pop(count);
	};
}

function unshift_arr(count: number) {
	return function () {
		unshift(count);
	};
}

function shift_arr(count: number) {
	return function () {
		shift(count);
	};
}

const tests = [10, 100, 1000, 10000, 100000, 1_000_000, 10_000_000];
console.log("Testing get");
tests.forEach(t => {
	a.length = 0;
	push(t);
	console.log(t, time(get(t - 1)));
});

console.log("push");
tests.forEach(t => {
	a.length = 0;
	push(t);

	console.log(t, time(push_arr(1000)));
});

console.log("pop");
tests.forEach(t => {
	a.length = 0;
	push(t);

	console.log(t, time(pop_arr(1000)));
});

console.log("unshift");
tests.forEach(t => {
	a.length = 0;
	push(t);

	console.log(t, time(unshift_arr(1000)));
});

console.log("shift");
tests.forEach(t => {
	a.length = 0;
	push(t);

	console.log(t, time(shift_arr(1000)));
});


/**
 * And the answer is: ArrayList
 * Push/Pop/get(idx) = O(1)
 * shift/unshift = O(n)
 * 
 * 
 * shift = remove from the start
 * unshift = add to the start
 */