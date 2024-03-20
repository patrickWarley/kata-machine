function walk(
    graph: WeightedAdjacencyList,
    curr: number,
    needle: number,
    seen: boolean[],
    path: number[]
): boolean {
    if (seen[curr]) return false;

    path.push(curr);
    if (curr === needle) return true

    seen[curr] = true;
    let adjs = graph[curr];
    let result;
    for (let i = 0; i < adjs.length; i++) {
        result = walk(graph, adjs[i].to, needle, seen, path);
        if (result) break;
    }
    
    if(!result){
        path.pop()
        return false;
    }

    return true;
}

export default function dfs(
    graph: WeightedAdjacencyList,
    source: number,
    needle: number
): number[] | null {
    
    let seen:boolean[] = new Array(graph.length).fill(false);
    let path:number[] = [];

    let result = walk(graph, source, needle, seen, path);
    return result?path:null;
}


//I did it using interation, but the master did using recurssion
//:D wtf!
function dfs_my_implementation(
    graph: WeightedAdjacencyList,
    source: number,
    needle: number
): number[] | null {

    let seen = new Array(graph.length).fill(false);
    let path = new Array(graph.length).fill(-1);
    let queue = [];

    queue.push(source);
    let curr;

    do {
        curr = queue.shift() as number;
        seen[curr] = true;
        if (curr === needle) break;

        let adjs = graph[curr];

        for (let i = 0; i < adjs.length; i++) {
            let adj: number = adjs[i].to;

            if (seen[adj]) continue;

            path[adj] = curr;

            queue.push(adj);
        }
    } while (queue.length)


    if (curr === needle) {
        let result = [];
        while (curr !== -1) {
            result.push(curr);
            curr = path[curr];
        }

        return result.reverse();
    }


    return null;
}
