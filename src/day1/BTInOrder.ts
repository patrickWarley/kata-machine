export default function in_order_search(head: BinaryNode<number> | null): number[] {
	return walk(head, []);
}

function walk(head:BinaryNode<number> | null, path:number[]):number[]{
	if(head === null)return path;
	

	walk(head.left, path);	
 	path.push(head.value);
	walk(head.right, path);
	return path;
}
