export default function compare(a: BinaryNode<number> | null , b: BinaryNode<number> | null ): boolean {
	return compareDepth(a,b);
}

function compareDepth(a: BinaryNode<number> | null ,b: BinaryNode<number> | null): boolean {
	if(a === null && b === null)return true;

	if(a === null || b===null) return false;
	
	if(a.value !== b.value) return false;

	return compareDepth(a.left, b.left) && compareDepth(a.right, b.right);
}


// I don't need it at all 
// Just the Depth comparison is enough
function compareBreadth(a: BinaryNode<number> | null , b: BinaryNode<number> | null ): boolean {


	const q1:(BinaryNode<number> | null)[]= [a];

	const q2:(BinaryNode<number> | null)[]= [b];

	while(q1.length && q2.length){
		const curr1 = q1.shift() as BinaryNode<number>| null;
		const curr2 = q2.shift() as BinaryNode<number>| null;

		//if the current is null or undefined just end it
		if(!curr1 && !curr2){
			//in a wile loop continue skips the current iteration and control flow of the program
			//jumps back to the while condition
			return true;		
		}


		if(curr1?.value !== curr2?.value){
			return false;
		}
		
		//enqueue the 2 children
		
		if(curr1){
			q1.push(curr1.left);	
			q1.push(curr1.right);
		}

		if(curr2){
			q2.push(curr2.left);	
			q2.push(curr2.right);
		}
	}
	return false;
}
