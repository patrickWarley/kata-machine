export default function bfs(head: BinaryNode<number>, needle: number): boolean {
	//we are using an array as a Queue here.
	const q:(BinaryNode<number> | undefined | null)[]= [head];

	while(q.length){
		const curr = q.shift() as BinaryNode<number> | undefined | null;
		
		//if the current is null or undefined just end it
		if(!curr){
			//in a wile loop continue skips the current iteration and control flow of the program
			//jumps back to the while condition
			continue;
		}

		
		if(curr.value === needle){
			return true;
		}
		
		//enqueue the 2 children
		q.push(curr.left);	
		q.push(curr.right);
	}
	return false;
}
