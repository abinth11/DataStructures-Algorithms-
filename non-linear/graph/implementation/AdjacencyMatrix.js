
class GraphAdjacencyMatrix {
    constructor(numVertices) {
        this.numVertices = numVertices;
        this.matrix = Array.from({ length: numVertices }, () => Array(numVertices).fill(0));
    }

    addEdge(vertex1, vertex2) {
        if (vertex1 >= 0 && vertex1 < this.numVertices && vertex2 >= 0 && vertex2 < this.numVertices) {
            this.matrix[vertex1][vertex2] = 1;
            this.matrix[vertex2][vertex1] = 1; // For undirected graph
        }
    }

    removeEdge(vertex1, vertex2) {
        if (vertex1 >= 0 && vertex1 < this.numVertices && vertex2 >= 0 && vertex2 < this.numVertices) {
            this.matrix[vertex1][vertex2] = 0;
            this.matrix[vertex2][vertex1] = 0; // For undirected graph
        }
    }

    print() {
        for (let i = 0; i < this.numVertices; i++) {
            console.log(this.matrix[i].join(' '));
        }
    }

    bfs(startVertex) {
        const visited = {};
        const queue = new Queue();
        visited[startVertex] = true;
        queue.enqueue(startVertex);

        while (!queue.isEmpty()) {
            const currentVertex = queue.dequeue();
            console.log(currentVertex);

            for (let neighbor = 0; neighbor < this.numVertices; neighbor++) {
                if (this.matrix[currentVertex][neighbor] === 1 && !visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.enqueue(neighbor);
                }
            }
        }
    }

    dfs(vertex) {
        const visited = new Array(this.numVertices).fill(false);
        this._dfsHelper(vertex, visited);
    }

    _dfsHelper(vertex, visited) {
        visited[vertex] = true;
        console.log(vertex);

        for (let neighbor = 0; neighbor < this.numVertices; neighbor++) {
            if (this.matrix[vertex][neighbor] === 1 && !visited[neighbor]) {
                this._dfsHelper(neighbor, visited);
            }
        }
    }
}

const myGraphMatrix = new GraphAdjacencyMatrix(6);

myGraphMatrix.addEdge(0, 1);
myGraphMatrix.addEdge(1, 2);
myGraphMatrix.addEdge(2, 3);
myGraphMatrix.addEdge(3, 4);
myGraphMatrix.addEdge(4, 5);
myGraphMatrix.addEdge(5, 0);

console.log("Adjacency Matrix:");
myGraphMatrix.print();

console.log("BFS:");
myGraphMatrix.bfs(0);

console.log("DFS:");
myGraphMatrix.dfs(0);
