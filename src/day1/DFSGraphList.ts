export default function dfs(
    graph: WeightedAdjacencyList,
    source: number,
    needle: number
): number[] | null {
    let path = new Array(graph.length);
    let seen = new Array(graph.length);
    let queue = [];

    path.fill(-1);
    seen.fill(false);

    queue.push(source);
    let curr;

    do {
        curr = queue.shift();

        if (curr !== undefined) {
            seen[curr] = true;

            if (curr === needle)
                break;

            let children = graph[curr];
            
            if(children === null) return null;

            for (let i = 0; i < children.length; i++) {
                    let child:number = children[i].to;
                if (seen[child]) continue;

                queue.push(child);
                path[child] = curr;
            }
        }
    } while (queue.length > 0)

    if (curr === needle) {
        let result = [curr];
        while (curr !== -1) {
            let node:number = path[curr];

            if(node!==-1)result.push(node);
            curr = node;
        }

        return result.reverse();
    }

    return null;
}
