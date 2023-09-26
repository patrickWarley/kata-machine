export default function pre_order_search(head: BinaryNode<number> | null): number[] {
	return walk(head, []);
}

function walk(head:BinaryNode<number> | null, path:number[]):number[]{
	if(head === null)return path;
	
	path.push(head.value);

	walk(head.left, path);	
	walk(head.right, path);
return path;
}
