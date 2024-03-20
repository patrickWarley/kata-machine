export default function bfs(graph: WeightedAdjacencyMatrix, source: number, needle: number): number[] | null {
    let path = new Array(graph.length).fill(-1);
    let seen = new Array(graph.length).fill(false);

    let queue = [];

    queue.push(source);

    let curr;

    do {
        curr = queue.shift() as number;

        seen[curr] = true;

        if (curr === needle)
            break;

        let adjs = graph[curr];
        
        for (let i = 0; i < adjs.length; i++) {
            
            let adj: number = adjs[i];
            if(adj === 0) continue;

            if (seen[i]) continue;

            queue.push(i);
            path[i] = curr;
        }
    } while (queue.length > 0)
    
        if (curr === needle) {
        let result = [curr];
        
        while (curr !== -1) {
            let node: number = path[curr];

            if (node !== -1) result.push(node);
            curr = node;
        }

        return result.reverse();
    }

    return null;
}
